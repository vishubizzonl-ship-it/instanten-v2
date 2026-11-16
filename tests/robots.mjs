/**
 * robots.txt lock — instanten website (route page + uska silo) + tool silos.
 *
 * User rule: instanten route page aur uske silo pages (blog, about, contact,
 * privacy, terms) ko alag website maan kar chalao. Us "website" ka robots.txt
 * site root par hi rehta hai (robots protocol: robots.txt sirf origin root par
 * padha jaata hai), isliye ye suite us file ko poora lock karti hai:
 *
 *   1. file build mein hai, plain text hai, group structure saaf hai;
 *   2. `User-agent: *` group site ko block nahi karta (Disallow: / nahi);
 *   3. instanten silo ke pages explicitly allow hain;
 *   4. chaar tool silos allow hain;
 *   5. error pages (403/404/500/503) disallow NAHI hain — warna unka
 *      "noindex, nofollow" crawler ko dikhta hi nahi;
 *   6. har `Sitemap:` line absolute https URL hai, duplicate nahi, aur us
 *      URL ka file build mein sach mein maujood hai;
 *   7. instanten ka apna sitemap (`/sitemap-instanten.xml`) listed hai.
 */
import { existsSync, readFileSync } from 'node:fs';
import { createSuite, SITE } from './lib.mjs';

const TOOLS = ['onlinecompass', 'onlinebubblelevel', 'onlinespeedometer', 'onlineqibla'];

/** Instanten silo ke paths jo explicitly allow hone chahiye. */
const INSTANTEN_ALLOW = ['/', '/blog/', '/about/', '/contact/', '/privacy-policy/', '/terms/'];

const sitemapsOf = (txt) =>
  [...txt.matchAll(/^Sitemap:\s*(\S+)\s*$/gim)].map((m) => m[1]);

export function run(pages, outDir) {
  const suite = createSuite('robots');
  const { check } = suite;

  const robotsPath = `${outDir}/robots.txt`;
  check(existsSync(robotsPath), 'robots.txt build mein nahi hai');
  if (!existsSync(robotsPath)) return suite;

  const robots = readFileSync(robotsPath, 'utf8');

  // --- 1. shape -------------------------------------------------------
  check(robots.trim().length > 200, `robots.txt bahut chhoti hai (${robots.trim().length} chars)`);
  check(robots.startsWith('#'), 'robots.txt comment header se shuru nahi hoti');
  check(/^User-agent:\s*\*/im.test(robots), 'robots.txt mein `User-agent: *` group nahi hai');
  check(robots.includes('Allow: /'), 'robots.txt mein `Allow: /` nahi hai');
  check(!/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(robots), 'robots.txt mein control characters hain');

  // har rule line valid shape ki ho (comment/khaali chhod kar)
  for (const line of robots.split('\n')) {
    const t = line.trim();
    if (!t || t.startsWith('#')) continue;
    check(
      /^(User-agent|Allow|Disallow|Sitemap|Content-Signal):\s*\S+/.test(t),
      `robots.txt mein anjaani line: "${t.slice(0, 60)}"`
    );
  }

  // --- 2. site block nahi hai ----------------------------------------
  // `User-agent: *` ke andar `Disallow: /` nahi hona chahiye.
  const starGroup = robots.split(/^User-agent:\s*\*\s*$/im)[1] ?? '';
  const starGroupBody = starGroup.split(/^User-agent:/im)[0];
  const starDisallows = [...starGroupBody.matchAll(/^Disallow:\s*(\S+)/gim)].map((m) => m[1]);
  check(!starDisallows.includes('/'), 'robots.txt `User-agent: *` group `Disallow: /` se site block kar raha hai');

  // --- 3. instanten silo allow ---------------------------------------
  for (const path of INSTANTEN_ALLOW) {
    check(
      new RegExp(`^Allow:\\s*${path.replace(/[/]/g, '\\/')}\\s*$`, 'im').test(robots),
      `robots.txt mein instanten silo ka Allow nahi: ${path}`
    );
  }

  // --- 4. tool silos allow -------------------------------------------
  for (const tool of TOOLS) {
    check(
      new RegExp(`^Allow:\\s*/${tool}/\\s*$`, 'im').test(robots),
      `robots.txt mein ${tool} silo ka Allow nahi`
    );
  }

  // --- 5. error pages block nahi -------------------------------------
  const errorDisallow = [...robots.matchAll(/^Disallow:\s*(\S+)/gim)]
    .map((m) => m[1])
    .filter((p) => /\/(403|404|500|503)(\.html|\/)/.test(p));
  check(errorDisallow.length === 0, `robots.txt error pages block kar rahi hai: ${errorDisallow.join(', ')}`);

  // --- 6. sitemap lines ----------------------------------------------
  const sitemaps = sitemapsOf(robots);
  check(sitemaps.length >= 5, `robots.txt mein sirf ${sitemaps.length} Sitemap lines hain`);

  const dupes = [...new Set(sitemaps.filter((u, i) => sitemaps.indexOf(u) !== i))];
  check(dupes.length === 0, `robots.txt mein duplicate Sitemap line: ${dupes.join(', ')}`);

  for (const url of sitemaps) {
    check(url.startsWith('https://'), `Sitemap line absolute https URL nahi hai: ${url}`);
    check(url.startsWith(SITE), `Sitemap line instanten domain par nahi hai: ${url}`);
    const path = url.replace(SITE, '');
    check(existsSync(`${outDir}${path}`), `robots.txt ka Sitemap file build mein nahi hai: ${path}`);
  }

  // --- 7. instanten ka apna sitemap listed ---------------------------
  check(
    sitemaps.includes(`${SITE}/sitemap-instanten.xml`),
    'robots.txt mein instanten ka apna sitemap (/sitemap-instanten.xml) listed nahi hai'
  );
  check(
    sitemaps.includes(`${SITE}/sitemap-index.xml`),
    'robots.txt mein sitemap-index.xml listed nahi hai'
  );
  for (const tool of TOOLS) {
    check(
      sitemaps.includes(`${SITE}/${tool}/sitemap.xml`),
      `robots.txt mein ${tool}/sitemap.xml listed nahi hai`
    );
  }

  // --- 8. per-tool robots files (alag silo, alag robots) --------------
  for (const tool of TOOLS) {
    const path = `${outDir}/${tool}/robots.txt`;
    check(existsSync(path), `${tool}/robots.txt build mein nahi hai`);
    if (!existsSync(path)) continue;
    const txt = readFileSync(path, 'utf8');
    check(
      sitemapsOf(txt).includes(`${SITE}/${tool}/sitemap.xml`),
      `${tool}/robots.txt apna sitemap nahi batata`
    );
    check(
      new RegExp(`^Allow:\\s*/${tool}/\\s*$`, 'im').test(txt),
      `${tool}/robots.txt apna silo allow nahi karta`
    );
  }

  return suite;
}
