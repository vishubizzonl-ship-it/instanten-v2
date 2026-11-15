/**
 * Per-tool sitemaps + per-tool robots.txt (compassinstant pattern).
 *
 * Har tool ka apna silo sitemap `<tool>/sitemap.xml` aur usi ke liye
 * `<tool>/robots.txt` hona chahiye. Ye suite wahi lock karti hai:
 *
 *   1. chaar sitemaps build mein hain aur valid XML hain;
 *   2. har URL sirf US tool ke silo ka hai (doosre tool ka URL leak na ho);
 *   3. silo ka har page hai — tool page, blog index, saare articles,
 *      about/contact/privacy/terms — EN aur har locale mirror mein;
 *   4. 403/404/500/503 kabhi listed nahi;
 *   5. duplicate <loc> nahi;
 *   6. root robots.txt aur sitemap-index.xml dono inhe reference karte hain;
 *   7. per-tool robots.txt uska sitemap batata hai aur error pages block nahi
 *      karta (warna noindex padha hi nahi jaata).
 */
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { createSuite, SITE, LOCALES } from './lib.mjs';

const TOOLS = ['onlinecompass', 'onlinebubblelevel', 'onlinespeedometer', 'onlineqibla'];

/** Site ke non-default locales (en root par hai). */
const LANGS = LOCALES.filter((l) => l !== 'en');

const SILO_PAGES = ['blog', 'about', 'contact', 'privacy', 'terms'];

/** dist ke HTML se slug nikaalne ke liye: `<tool>/blog/<slug>/index.html`. */
function blogSlugsFromDist(outDir, tool) {
  const dir = `${outDir}/${tool}/blog`;
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
}

const locsOf = (xml) => [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

export function run(pages, outDir) {
  const suite = createSuite('sitemaps');
  const { check } = suite;

  // Har tool ka expected URL set pehle banao (dist se, guess nahi).
  for (const tool of TOOLS) {
    const sitemapPath = `${outDir}/${tool}/sitemap.xml`;
    check(existsSync(sitemapPath), `${tool}/sitemap.xml build mein nahi hai`);
    if (!existsSync(sitemapPath)) continue;

    const xml = readFileSync(sitemapPath, 'utf8');
    check(/^<\?xml/.test(xml), `${tool}/sitemap.xml XML declaration se shuru nahi hota`);
    check(/<urlset[\s>]/.test(xml), `${tool}/sitemap.xml mein <urlset> nahi`);
    check(xml.trim().endsWith('</urlset>'), `${tool}/sitemap.xml band nahi hua`);

    const locs = locsOf(xml);

    // --- 1. sirf is tool ke URL -------------------------------------------
    for (const loc of locs) {
      const path = loc.replace(SITE, '');
      const others = TOOLS.filter((other) => other !== tool);
      check(
        !others.some((other) => path.includes(`/${other}/`)),
        `${tool}/sitemap.xml mein doosre tool ka URL :: ${path}`
      );
      check(
        /^\/(?:[a-z]{2}\/)?[a-z]+\//.test(path) || path === `/${tool}/`,
        `${tool}/sitemap.xml mein galat shape ka URL :: ${path}`
      );
      // site-wide pages is sitemap ka kaam nahi
      check(
        !/^\/(tools|blog|about|contact|privacy-policy|terms|tag|tags|search|submit)\//.test(path) &&
          path !== '/',
        `${tool}/sitemap.xml mein site-wide page :: ${path}`
      );
      // error pages kabhi nahi
      check(
        !/\/(403|404|500|503)(\/|\.html|$)/.test(path),
        `${tool}/sitemap.xml mein error page :: ${path}`
      );
    }

    // --- 2. duplicate nahi -------------------------------------------------
    const unique = new Set(locs);
    check(unique.size === locs.length, `${tool}/sitemap.xml mein ${locs.length - unique.size} duplicate <loc>`);

    // --- 3. poora silo listed hai (EN + har locale) -----------------------
    const expected = [`/${tool}/`];
    for (const page of SILO_PAGES) expected.push(`/${tool}/${page}/`);
    const slugs = blogSlugsFromDist(outDir, tool);
    for (const slug of slugs) expected.push(`/${tool}/blog/${slug}/`);
    for (const lang of LANGS) {
      expected.push(`/${lang}/${tool}/`);
      for (const page of SILO_PAGES) expected.push(`/${lang}/${tool}/${page}/`);
      for (const slug of slugs) expected.push(`/${lang}/${tool}/blog/${slug}/`);
    }

    const listed = new Set(locs.map((loc) => loc.replace(SITE, '')));
    const missing = expected.filter((path) => !listed.has(path));
    check(
      missing.length === 0,
      `${tool}/sitemap.xml mein ${missing.length} page chhoot gaya (jaise ${missing.slice(0, 3).join(', ')})`
    );

    // --- 4. har listed URL ka page dist mein sach mein hai ----------------
    for (const loc of locs) {
      const path = loc.replace(SITE, '');
      const file = path === '/' ? `${outDir}/index.html` : `${outDir}${path}index.html`;
      check(existsSync(file), `${tool}/sitemap.xml ka URL build mein nahi :: ${path}`);
    }

    // --- 5. per-tool robots.txt ------------------------------------------
    const robotsPath = `${outDir}/${tool}/robots.txt`;
    check(existsSync(robotsPath), `${tool}/robots.txt build mein nahi hai`);
    if (existsSync(robotsPath)) {
      const robots = readFileSync(robotsPath, 'utf8');
      check(
        robots.includes(`${SITE}/${tool}/sitemap.xml`),
        `${tool}/robots.txt apna sitemap nahi batata`
      );
      check(/User-agent:/.test(robots), `${tool}/robots.txt mein User-agent nahi`);
      check(
        !/^Disallow: \/(403|404|500|503)/m.test(robots),
        `${tool}/robots.txt error page block karta hai (noindex tab bekaar)`
      );
    }
  }

  // --- 6. root robots.txt + sitemap-index dono inhe reference karte hain --
  const rootRobotsPath = `${outDir}/robots.txt`;
  if (existsSync(rootRobotsPath)) {
    const robots = readFileSync(rootRobotsPath, 'utf8');
    for (const tool of TOOLS) {
      check(
        robots.includes(`${SITE}/${tool}/sitemap.xml`),
        `root robots.txt mein ${tool}/sitemap.xml nahi`
      );
    }
    // purane sitemap lines bani rahein
    check(robots.includes(`${SITE}/sitemap.xml`), 'root robots.txt se sitemap.xml line gayi');
    check(robots.includes(`${SITE}/sitemap-index.xml`), 'root robots.txt se sitemap-index.xml line gayi');
  }

  const indexPath = `${outDir}/sitemap-index.xml`;
  check(existsSync(indexPath), 'sitemap-index.xml build mein nahi hai');
  if (existsSync(indexPath)) {
    const index = readFileSync(indexPath, 'utf8');
    for (const tool of TOOLS) {
      check(
        index.includes(`${SITE}/${tool}/sitemap.xml`),
        `sitemap-index.xml mein ${tool}/sitemap.xml nahi`
      );
    }
    check(index.includes(`${SITE}/sitemap-0.xml`), 'sitemap-index.xml se sitemap-0.xml gayi');
    // index valid sitemapindex hi rahe
    check(/<sitemapindex[\s>]/.test(index), 'sitemap-index.xml <sitemapindex> nahi');
    const opens = (index.match(/<sitemap>/g) ?? []).length;
    const closes = (index.match(/<\/sitemap>/g) ?? []).length;
    check(opens === closes, `sitemap-index.xml mein ${opens} <sitemap> vs ${closes} </sitemap>`);
  }

  return suite;
}
