/**
 * Site-wide invariants: titles, descriptions, canonicals, robots, JSON-LD,
 * sitemap and the error pages. Catches the things that silently rot.
 */
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import {
  SITE,
  createSuite,
  canonicalOf,
  jsonLdOf,
  meta,
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
      check(
        title.length >= 15 && title.length <= maxTitle,
        `title length ${title.length} (15-${maxTitle} chahiye) :: ${url} -> "${title}"`
      );
      check(
        !/undefined|\[object Object\]/i.test(title),
        `title mein placeholder :: ${url} -> "${title}"`
      );
    }
    const desc = meta(html, 'description');
    check(!!desc && desc.length >= 50, `meta description missing/chhota :: ${url}`);
    if (desc) check(desc.length <= 320, `meta description ${desc.length} ch (max 320) :: ${url}`);
  }

  // --- canonical + robots on normal pages ---------------------------------
  const normal = [...pages].filter(
    ([url]) => !ERROR_PAGES.includes(url) && !url.endsWith('.html') // 404.html & co.
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
    check(urls.length > 900, `sitemap mein sirf ${urls.length} URL (1040 expected)`);
    for (const errorUrl of ERROR_PAGES) {
      check(
        !urls.some((u) => u.endsWith(errorUrl) || u.endsWith(errorUrl.slice(0, -1))),
        `error page sitemap mein hai :: ${errorUrl}`
      );
    }
    const unique = new Set(urls);
    check(unique.size === urls.length, `sitemap mein duplicate URL (${urls.length - unique.size})`);
  }

  return suite;
}
