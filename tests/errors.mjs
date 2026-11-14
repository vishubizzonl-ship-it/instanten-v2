/**
 * Error page lock: 403 / 404 / 500 / 503.
 *
 * Rule (instanten.com): har error page
 *   1. dist root par flat `<code>.html` ho (host bina config ke serve kar sake),
 *   2. `<meta name="robots" content="noindex, nofollow">` — exactly ek,
 *   3. self-referencing canonical ho (`https://instanten.com/<code>.html`),
 *   4. koi hreflang alternate na ho (error ka "alternate" bekaar hai),
 *   5. sitemap (teeno) mein kabhi na aaye,
 *   6. robots.txt mein disallow na ho (warna noindex crawler ko dikhega hi nahi),
 *   7. ek hi h1, aur ghar wapas jaane ka raasta (home + tools) ho.
 */
import { existsSync, readFileSync } from 'node:fs';
import { SITE, stripTags, createSuite } from './lib.mjs';

const CODES = ['403', '404', '500', '503'];

const metaContent = (html, name) => {
  const re = new RegExp(`<meta name="${name}" content="([^"]*)"`, 'i');
  return html.match(re)?.[1] ?? null;
};

const SITEMAP_FILES = ['sitemap.xml', 'sitemap-0.xml', 'sitemap-index.xml'];

export function run(pages, outDir) {
  const suite = createSuite('errors');
  const { check } = suite;

  const robotsTxtPath = `${outDir}/robots.txt`;
  const robotsTxt = existsSync(robotsTxtPath) ? readFileSync(robotsTxtPath, 'utf8') : '';

  for (const code of CODES) {
    const file = `${outDir}/${code}.html`;
    check(existsSync(file), `${code}.html dist root par nahi hai`);
    if (!existsSync(file)) continue;

    const html = readFileSync(file, 'utf8');

    // --- 1. noindex, nofollow --------------------------------------------
    const robotsMetas = [...html.matchAll(/<meta name="robots" content="([^"]*)"[^>]*>/g)].map((m) => m[1]);
    check(robotsMetas.length === 1, `${code}.html par ${robotsMetas.length} robots meta (1 hona chahiye)`);
    check(robotsMetas[0] === 'noindex, nofollow', `${code}.html ka robots "${robotsMetas[0]}" hai, "noindex, nofollow" chahiye`);

    // --- 2. canonical -----------------------------------------------------
    const canonical = html.match(/rel="canonical" href="([^"]*)"/)?.[1] ?? '';
    check(
      canonical === `${SITE}/${code}.html`,
      `${code}.html canonical galat: ${canonical || '(none)'}`
    );

    // --- 3. no hreflang cluster ------------------------------------------
    const hreflang = [...html.matchAll(/rel="alternate" hreflang="([^"]+)"/g)].map((m) => m[1]);
    check(hreflang.length === 0, `${code}.html par hreflang alternates hain: ${hreflang.join(', ')}`);

    // --- 4. exactly one h1 ------------------------------------------------
    const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => stripTags(m[1]));
    check(h1s.length === 1, `${code}.html mein ${h1s.length} h1 (1 hona chahiye)`);
    check(Boolean(h1s[0] && h1s[0].trim().length > 2), `${code}.html ka h1 khali hai`);

    // --- 5. recovery links -------------------------------------------------
    const links = [...html.matchAll(/<a\b[^>]*href="([^"]*)"/g)].map((m) => m[1]);
    check(links.includes('/'), `${code}.html se home ka link nahi hai`);
    check(links.includes('/tools/'), `${code}.html se /tools/ ka link nahi hai`);
    check(links.includes('/tools/') && links.filter((l) => /^\/tools\/[a-z0-9-]+\/$/.test(l)).length >= 0, `${code}: tool links`);

    // 404 par popular tools ke cards hone chahiye (exit route)
    if (code === '404') {
      const toolLinks = links.filter((l) => /^\/tools\/[a-z0-9-]+\/$/.test(l));
      check(toolLinks.length >= 3, `404 par sirf ${toolLinks.length} tool links (3+ chahiye)`);
    }

    // --- 6. title + description sane --------------------------------------
    const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '';
    check(title.includes(code), `${code}.html ke title mein "${code}" nahi hai: ${title}`);
    check(title.length <= 70, `${code}.html ka title ${title.length} chars`);
    const desc = metaContent(html, 'description') ?? '';
    check(desc.length >= 60 && desc.length <= 165, `${code}.html description ${desc.length} chars`);

    // --- 7. error page par koi indexable schema nahi ----------------------
    check(!/"@type"\s*:\s*"FAQPage"/.test(html), `${code}.html par FAQPage schema hai`);
    check(!/"@type"\s*:\s*"Article"/.test(html), `${code}.html par Article schema hai`);

    // --- 8. sitemap se bahar ---------------------------------------------
    for (const sitemap of SITEMAP_FILES) {
      const path = `${outDir}/${sitemap}`;
      if (!existsSync(path)) continue;
      const xml = readFileSync(path, 'utf8');
      check(
        !new RegExp(`<loc>[^<]*/${code}(\\.html|/)</loc>`).test(xml),
        `${code} ${sitemap} mein listed hai`
      );
    }

    // --- 9. robots.txt block na kare -------------------------------------
    if (robotsTxt) {
      check(
        !new RegExp(`^Disallow: /${code}`, 'm').test(robotsTxt),
        `robots.txt /${code} ko disallow karta hai — noindex tab padha hi nahi jayega`
      );
    }

    // --- 10. page build map mein bhi ho ----------------------------------
    check(pages.has(`/${code}.html`), `/${code}.html pages map mein nahi hai`);
  }

  // --- 11. koi locale-wise error page generated na ho --------------------
  for (const url of pages.keys()) {
    check(
      !/^\/(de|ja|fr|es|ko|nl|sv|it|pt)\/(403|404|500|503)(\.html|\/)$/.test(url),
      `localized error page bana hai: ${url}`
    );
  }

  return suite;
}
