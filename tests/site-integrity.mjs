/**
 * Site-wide invariants: titles, descriptions, canonicals, robots, JSON-LD,
 * sitemap and the error pages. Catches the things that silently rot.
 */
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import {
  SITE,
  createSuite,
  canonicalOf,
  jsonLdOf,
  meta,
  stripTags,
  titleOf,
} from './lib.mjs';

const ERROR_PAGES = ['/404/'];

export function run(pages, outDir) {
  const suite = createSuite('site-integrity');
  const { check } = suite;

  // --- titles -------------------------------------------------------------
  for (const [url, html] of pages) {
    const title = titleOf(html);
    check(!!title, `title missing :: ${url}`);
    if (title) {
      // Blog headlines are editorial and get the "— Instanten" suffix; money
      // pages (home, tools, about…) must stay inside the SERP limit.
      const maxTitle = url.includes('/blog/') ? 110 : 70;
      // CJK titles "same idea, fewer characters" hote hain — 10-char ja/ko title
      // bilkul valid hai (e.g. "利用規約 — 水準器"). Isliye CJK locales ke liye
      // min 8, baaki ke liye 15 (English SERP expectation).
      const cjk = ['ja', 'ko'].includes(url.split('/')[1]);
      const minTitle = cjk ? 8 : 15;
      check(
        title.length >= minTitle && title.length <= maxTitle,
        `title length ${title.length} (${minTitle}-${maxTitle} chahiye) :: ${url} -> "${title}"`
      );
      check(
        !/undefined|\[object Object\]/i.test(title),
        `title mein placeholder :: ${url} -> "${title}"`
      );
    }
    // noindex redirect stubs (/privacy/) par description ki zaroorat nahi
    const isNoindex = /name="robots"[^>]*noindex/.test(html);
    const desc = meta(html, 'description');
    if (!isNoindex) check(!!desc && desc.length >= 50, `meta description missing/chhota :: ${url}`);
    if (desc) check(desc.length <= 320, `meta description ${desc.length} ch (max 320) :: ${url}`);
  }

  // --- canonical + robots on normal pages ---------------------------------
  const normal = [...pages].filter(
    // noindex pages (/privacy/ stub, blog/page/1) jaan-boojh kar apne asli page
    // par canonical karte hain — unka self-canonical expected nahi hai.
    ([url, html]) => !ERROR_PAGES.includes(url) && !url.endsWith('.html') && !/name="robots"[^>]*noindex/.test(html)
  );
  for (const [url, html] of normal) {
    const canonical = canonicalOf(html);
    check(!!canonical, `canonical missing :: ${url}`);
    if (canonical) {
      check(
        canonical === `${SITE}${url}` || canonical === SITE + url.replace(/\/$/, ''),
        `canonical galat :: ${url} -> ${canonical}`
      );
    }
    const robots = meta(html, 'robots');
    check(!robots || robots.includes('index'), `normal page noindex hai :: ${url}`);
  }

  // --- no source comments / TODOs leaking into rendered text --------------
  for (const [url, html] of pages) {
    const text = stripTags(html);
    check(!/\/\/ (Error|TODO|FIXME|NOTE)\b/.test(text), `source comment page par chhap gaya :: ${url}`);
    check(!/\b(TODO|FIXME|XXX)\b/.test(text), `TODO/FIXME rendered text mein :: ${url}`);
  }

  // --- error pages: noindex, nofollow, no hreflang, out of the silo --------
  for (const url of ['/404.html']) {
    const html = pages.get(url);
    if (!check(!!html, `error page build mein nahi :: ${url}`)) continue;
    const robots = meta(html, 'robots') || '';
    check(robots.includes('noindex'), `error page indexable hai :: ${url}`);
    check(robots.includes('nofollow'), `error page par nofollow nahi :: ${url}`);
    check(!html.includes('rel="alternate" hreflang'), `error page par hreflang hai :: ${url}`);
  }

  // --- JSON-LD valid ------------------------------------------------------
  // A block is one node, an array of nodes, or a @graph — flatten before checking.
  const nodes = (raw) => {
    const list = Array.isArray(raw) ? raw : [raw];
    return list.flatMap((node) => (Array.isArray(node?.['@graph']) ? node['@graph'] : [node]));
  };
  for (const [url, html] of pages) {
    for (const block of jsonLdOf(html)) {
      check(block.ok, `JSON-LD parse fail :: ${url} :: ${block.ok ? '' : block.error}`);
      if (!block.ok) continue;
      const top = Array.isArray(block.data) ? block.data : [block.data];
      check(
        top.every((node) => node?.['@context'] || node?.['@graph']),
        `JSON-LD mein @context/@graph nahi :: ${url}`
      );
      for (const node of nodes(block.data)) {
        if (!node || typeof node !== 'object' || !Object.keys(node).length) continue;
        check(!!node['@type'], `JSON-LD node mein @type nahi :: ${url}`);
      }
    }
  }

  // --- sitemap ------------------------------------------------------------
  const sitemapPath = join(outDir, 'sitemap-0.xml');
  check(existsSync(sitemapPath), 'sitemap-0.xml build mein nahi hai');
  if (existsSync(sitemapPath)) {
    const urls = [...readFileSync(sitemapPath, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map(
      (m) => m[1]
    );
    // 12 generic tool pages hataye ja chuke hain (sirf 4 instrument silos bache
    // hain), isliye sitemap chhota hai — ~330 URL. Threshold sirf toota
    // hua/khaali sitemap pakadne ke liye hai.
    check(urls.length > 300, `sitemap mein sirf ${urls.length} URL (330+ expected)`);
    for (const errorUrl of ERROR_PAGES) {
      check(
        !urls.some((u) => u.endsWith(errorUrl) || u.endsWith(errorUrl.slice(0, -1))),
        `error page sitemap mein hai :: ${errorUrl}`
      );
    }
    const unique = new Set(urls);
    check(unique.size === urls.length, `sitemap mein duplicate URL (${urls.length - unique.size})`);
  }

  // --- har local asset build mein sach mein hai (og:image, src, srcset) ----
  // Ye wahi rule hai jo missing OG images (P0) aur toote huye asset paths pakadta hai.
  const ASSET_RE = /\.(png|jpe?g|svg|webp|gif|ico|css|js|woff2?|ttf|mp4|pdf)$/i;
  const assetRefs = (html) => {
    const out = [];
    for (const m of html.matchAll(/(?:src|href)="(\/[^"]+)"/g)) out.push(m[1]);
    for (const m of html.matchAll(/content="https:\/\/instanten\.com(\/[^"]+)"/g)) out.push(m[1]);
    for (const m of html.matchAll(/srcset="([^"]+)"/g)) {
      for (const part of m[1].split(',')) out.push(part.trim().split(/\s+/)[0]);
    }
    return out;
  };
  for (const [url, html] of pages) {
    for (const ref of assetRefs(html)) {
      const clean = ref.split('?')[0].split('#')[0];
      if (!clean.startsWith('/') || clean.startsWith('//')) continue;
      if (!ASSET_RE.test(clean)) continue;            // page URLs alag suite dekhti hai
      const file = join(outDir, clean);
      check(existsSync(file), `asset build mein nahi hai :: ${url} -> ${clean}`);
    }
  }

  // --- sitemap ke URLs build mein hone chahiye + space-free ----------------
  for (const file of readdirSync(outDir).filter((f) => /^sitemap.*\.xml$/.test(f))) {
    const xml = readFileSync(join(outDir, file), 'utf8');
    for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
      const path = m[1].replace(SITE, '');
      // sitemap-index.xml khud doosri sitemap files list karta hai
      if (/\.xml$/.test(path)) continue;
      check(!/%20|\s/.test(path), `${file} me space wala URL :: ${path}`);
      const target = path === '/' ? 'index.html' : `${path.replace(/^\//, '')}index.html`;
      check(existsSync(join(outDir, target)), `${file} ka URL build mein nahi :: ${path}`);
    }
  }

  // --- deploy files: _headers / _redirects build me hain ------------------
  for (const file of ['_headers', '_redirects']) {
    check(existsSync(join(outDir, file)), `deploy file dist/${file} missing hai`);
  }
  if (existsSync(join(outDir, '_headers'))) {
    const headers = readFileSync(join(outDir, '_headers'), 'utf8');
    check(/_astro\/\*/.test(headers), '_headers me /_astro/* ka cache rule nahi');
    check(/immutable/.test(headers), '_headers me immutable cache nahi');
    check(/X-Content-Type-Options/.test(headers), '_headers me nosniff nahi');
    check(/Permissions-Policy/.test(headers), '_headers me Permissions-Policy nahi (sensor pages ke liye)');
  }
  if (existsSync(join(outDir, '_redirects'))) {
    const redirects = readFileSync(join(outDir, '_redirects'), 'utf8');
    for (const [from, to] of [['/about', '/about/'], ['/privacy', '/privacy-policy/'], ['/blog/page/1', '/blog/']]) {
      check(new RegExp(`${from.replace(/[/.]/g, '\\$&')}\\s+${to.replace(/[/.]/g, '\\$&')}`).test(redirects),
        `_redirects me ${from} -> ${to} rule nahi`);
    }
  }

  // --- title SERP limit + h1 -------------------------------------------------
  for (const [url, html] of pages) {
    if (url.endsWith('.html')) continue;                 // error pages
    const t = titleOf(html);
    if (t) check(t.length <= 60, `title 60 se lamba (${t.length}) :: ${url} -> ${t}`);
    const robots = /name="robots"[^>]*noindex/.test(html);
    if (!robots) {
      const h1s = [...html.matchAll(/<h1[\s>]/gi)].length;
      check(h1s === 1, `noindex page par exactly 1 <h1> chahiye (mile ${h1s}) :: ${url}`);
      const first = /<h([1-6])[\s>]/i.exec(html);
      check(!first || first[1] === '1', `page ka pehla heading <h${first?.[1]}> hai, <h1> chahiye :: ${url}`);
    }
  }

  return suite;
}


