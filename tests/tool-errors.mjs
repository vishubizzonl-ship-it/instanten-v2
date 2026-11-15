/**
 * Per-tool error pages (403 / 404 / 500 / 503 × 4 tools) — compassinstant pattern.
 *
 * Har tool ke apne error pages hain, aur unpar wahi SEO rules lagte hain jo root
 * error pages par:
 *
 *   1. file build mein maujood — `/<tool>/<code>.html` (flat, host-friendly);
 *   2. exactly ek robots meta = `noindex, nofollow`;
 *   3. self-referencing canonical usi error URL par;
 *   4. koi `<link rel="alternate">` hreflang nahi;
 *   5. exactly ek `<h1>`, chhota page (koi indexable content nahi);
 *   6. tool ka apna chrome (instrument nav) aur wapas tool par link;
 *   7. kisi bhi sitemap mein nahi (root sitemap-0, sitemap.xml, ya us tool ka sitemap);
 *   8. us tool ke robots.txt mein Disallow;
 *   9. theme bootstrap head mein (error par bhi light/dark same).
 */
import { existsSync, readFileSync } from 'node:fs';
import { createSuite, SITE, stripTags } from './lib.mjs';

const TOOLS = ['onlinecompass', 'onlinebubblelevel', 'onlinespeedometer', 'onlineqibla'];
const CODES = ['403', '404', '500', '503'];

const locsOf = (file) => {
  if (!existsSync(file)) return [];
  return [...readFileSync(file, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
};

export function run(pages, outDir) {
  const suite = createSuite('tool-errors');
  const { check } = suite;

  // Sab sitemaps ek jagah — leak check ke liye.
  const allSitemapLocs = new Set([
    ...locsOf(`${outDir}/sitemap-0.xml`),
    ...locsOf(`${outDir}/sitemap.xml`),
    ...TOOLS.flatMap((tool) => locsOf(`${outDir}/${tool}/sitemap.xml`)),
  ]);

  for (const tool of TOOLS) {
    const robotsPath = `${outDir}/${tool}/robots.txt`;
    const robots = existsSync(robotsPath) ? readFileSync(robotsPath, 'utf8') : '';

    for (const code of CODES) {
      const url = `/${tool}/${code}.html`;
      const file = `${outDir}/${tool}/${code}.html`;

      // --- 1. file maujood ------------------------------------------------
      check(existsSync(file), `per-tool error page missing :: ${url}`);
      if (!existsSync(file)) continue;
      const html = readFileSync(file, 'utf8');
      const head = html.slice(0, html.indexOf('</head>'));

      // --- 2. ek hi robots meta, noindex + nofollow ----------------------
      const robotsMetas = [...html.matchAll(/<meta name="robots" content="([^"]*)"[^>]*>/g)].map((m) => m[1]);
      check(robotsMetas.length === 1, `${url}: ${robotsMetas.length} robots meta (1 hona chahiye)`);
      check(robotsMetas[0] === 'noindex, nofollow', `${url}: robots "${robotsMetas[0]}" hai`);

      // --- 3. self canonical ---------------------------------------------
      const canonical = (html.match(/rel="canonical" href="([^"]*)"/) ?? [, ''])[1];
      check(canonical === `${SITE}${url}`, `${url}: canonical "${canonical}" hai, "${SITE}${url}" chahiye`);

      // --- 4. koi hreflang alternate nahi --------------------------------
      check(
        !/<link rel="alternate"/.test(html),
        `${url}: error page par hreflang alternate hai`
      );

      // --- 5. ek h1, chhota content --------------------------------------
      const h1s = html.match(/<h1[\s>]/g) ?? [];
      check(h1s.length === 1, `${url}: ${h1s.length} <h1> (1 hona chahiye)`);
      const body = stripTags(html.slice(html.indexOf('<body'))).trim();
      check(body.length < 1200, `${url}: error page par ${body.length} chars content (chhota rakhna hai)`);

      // --- 6. tool ka chrome + wapas tool par link ------------------------
      check(html.includes('data-nav-pill'), `${url}: instrument nav (tool chrome) nahi`);
      check(html.includes(`href="/${tool}/"`), `${url}: wapas /${tool}/ par link nahi`);
      check(
        html.includes(`/${tool}/contact/`) && html.includes(`/${tool}/blog/`),
        `${url}: tool ke silo links (blog/contact) nahi`
      );

      // --- 7. kisi sitemap mein nahi -------------------------------------
      for (const [name, locs] of [['root', allSitemapLocs]]) {
        const leaked = [...locs].filter((loc) => loc.includes(`/${tool}/${code}`));
        check(leaked.length === 0, `${url}: ${name} sitemap mein listed hai (${leaked[0] ?? ''})`);
      }

      // --- 8. per-tool robots Disallow -----------------------------------
      check(
        robots.includes(`Disallow: /${tool}/${code}.html`),
        `/${tool}/robots.txt mein ${code}.html ka Disallow nahi`
      );

      // --- 9. theme bootstrap -------------------------------------------
      check(head.includes('InstantenTheme'), `${url}: theme bootstrap head mein nahi`);
    }

    // allow-rules bani rahein (error disallow ne silo block na kar diya ho)
    check(robots.includes(`Allow: /${tool}/`), `/${tool}/robots.txt mein Allow: /${tool}/ nahi`);
    check(
      robots.includes(`${SITE}/${tool}/sitemap.xml`),
      `/${tool}/robots.txt apna sitemap nahi batata`
    );
  }

  // Root error pages ka behaviour na badle (regression lock).
  for (const code of CODES) {
    const file = `${outDir}/${code}.html`;
    check(existsSync(file), `root ${code}.html gayab ho gaya`);
    if (existsSync(file)) {
      const html = readFileSync(file, 'utf8');
      const robots = (html.match(/<meta name="robots" content="([^"]*)"/) ?? [, ''])[1];
      check(robots === 'noindex, nofollow', `root ${code}.html ka robots badal gaya ("${robots}")`);
    }
  }

  return suite;
}
