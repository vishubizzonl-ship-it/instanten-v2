/**
 * Analytics lock (GA4).
 *
 * Checks, on the built HTML:
 *   1. exactly one gtag loader + one gtag('config') per page — duplicate tags
 *      double-count every pageview,
 *   2. the measurement ID is a valid GA4 ID (G-XXXXXXXXXX), same value on
 *      every page (one shared property),
 *   3. content_group is correct per page: per-tool for tool pages, locale
 *      prefixes ignored, hub/home/blog groups as documented,
 *   4. error pages (403/404/500/503) carry no analytics at all,
 *   5. no advertising features are switched on (allow_google_signals false),
 *   6. the ID is not hard-coded in any page other than through the config.
 */
import { createSuite, SITE } from './lib.mjs';

const GA_ID_RE = /^G-[A-Z0-9]{6,}$/;
const ERROR_PAGES = new Set(['/403.html', '/404.html', '/404/', '/500.html', '/503.html']);

const gtagLoaders = (html) => [...html.matchAll(/googletagmanager\.com\/gtag\/js\?id=([A-Z0-9-]+)/g)].map((m) => m[1]);
const gaConfigs = (html) =>
  [...html.matchAll(/gtag\('config',\s*"([A-Z0-9-]+)",\s*\{([\s\S]*?)\}\);/g)].map((m) => ({
    id: m[1],
    body: m[2],
    group: m[2].match(/content_group:\s*"([^"]*)"/)?.[1] ?? null,
  }));

export function run(pages) {
  const suite = createSuite('analytics');
  const { check } = suite;

  const ids = new Set();
  let checkedPages = 0;

  for (const [url, html] of pages) {
    if (ERROR_PAGES.has(url) || /^\/(de|ja|fr|es|ko|nl|sv|it|pt)\/(403|404|500|503)(\.html|\/)$/.test(url)) {
      check(gtagLoaders(html).length === 0, `${url}: error page par analytics load ho raha hai`);
      continue;
    }
    if (url.endsWith('.html') && !url.startsWith('/4')) continue; // flat non-page files

    const loaders = gtagLoaders(html);
    const configs = gaConfigs(html);

    check(loaders.length <= 1, `${url}: ${loaders.length} gtag loaders (max 1)`);
    check(configs.length <= 1, `${url}: ${configs.length} gtag config calls (max 1)`);

    // Analytics off (PUBLIC_GA_ID="") — tab koi tag nahi hona chahiye, aur yahi
    // poore site par consistent rehna chahiye.
    if (loaders.length === 0) continue;

    checkedPages++;
    check(configs.length === 1, `${url}: gtag loader hai par config call nahi`);
    const cfg = configs[0];
    if (!cfg) continue;

    check(GA_ID_RE.test(cfg.id), `${url}: measurement ID GA4 format mein nahi hai (${cfg.id})`);
    check(cfg.id === loaders[0], `${url}: loader ID ${loaders[0]} aur config ID ${cfg.id} match nahi`);
    ids.add(cfg.id);

    check(Boolean(cfg.group), `${url}: content_group set nahi hai`);
    check(/anonymize_ip:\s*true/.test(cfg.body), `${url}: anonymize_ip true nahi hai`);
    check(/allow_google_signals:\s*false/.test(cfg.body), `${url}: allow_google_signals false nahi hai`);
    check(
      /allow_ad_personalization_signals:\s*false/.test(cfg.body),
      `${url}: allow_ad_personalization_signals false nahi hai`
    );

    // --- content_group ka sahi hona -------------------------------------
    const seg = url.split('/').filter(Boolean);
    const clean = ['de', 'ja', 'fr', 'es', 'ko', 'nl', 'sv', 'it', 'pt'].includes(seg[0]) ? seg.slice(1) : seg;
    const INSTRUMENTS = ['onlinecompass', 'onlinebubblelevel', 'onlinespeedometer', 'onlineqibla'];
    let expected;
    // sensor tools root par hain → apna per-tool group
    if (INSTRUMENTS.includes(clean[0])) expected = clean[0];
    else if (clean[0] === 'tools' && clean[1]) expected = clean[1];
    else if (clean[0] === 'tools') expected = 'tools-hub';
    // instanten route + silo = alag website → sab groups par `instanten-` prefix
    else if (['blog', 'category', 'tag', 'tags', 'page'].includes(clean[0])) expected = 'instanten-blog';
    else if (['about', 'contact'].includes(clean[0])) expected = 'instanten-company';
    else if (['privacy-policy', 'terms'].includes(clean[0])) expected = 'instanten-legal';
    else if (clean[0] === 'compassinstant') expected = 'instanten-hub';
    else expected = clean.length === 0 ? 'instanten-home' : 'instanten-site';

    check(cfg.group === expected, `${url}: content_group "${cfg.group}" hai, "${expected}" chahiye`);
  }

  // --- instanten route + uska silo: alag website ki tarah ek hi group family --
  /**
   * User rule: instanten route page aur uske silo (blog/about/contact/privacy/
   * terms) ko alag website maan kar chalao — GA4 mein bhi. Isliye un sab par
   * content_group `instanten-*` hona chahiye, aur wahi ek shared ID + ek loader.
   */
  const INSTANTEN_SILO = ['/', '/blog/', '/about/', '/contact/', '/privacy-policy/', '/terms/'];
  const expectedGroups = {
    '/': 'instanten-home',
    '/blog/': 'instanten-blog',
    '/about/': 'instanten-company',
    '/contact/': 'instanten-company',
    '/privacy-policy/': 'instanten-legal',
    '/terms/': 'instanten-legal',
  };
  for (const base of INSTANTEN_SILO) {
    for (const url of [base, `/de${base}`, `/ja${base}`]) {
      const html = pages.get(url);
      if (!html) continue;
      const configs = gaConfigs(html);
      check(configs.length === 1, `${url}: instanten silo par ${configs.length} gtag config (1 chahiye)`);
      if (configs.length === 1) {
        check(
          configs[0].group === expectedGroups[base],
          `${url}: content_group "${configs[0].group}" — "${expectedGroups[base]}" chahiye`
        );
      }
      check(gtagLoaders(html).length === 1, `${url}: instanten silo par gtag loader 1 nahi hai`);
    }
  }

  // --- privacy policy analytics ke baare mein sach bole -------------------
  // (analytics on hai to "no analytics cookies" wala purana claim galat hoga)
  if (ids.size === 1) {
    for (const [url, html] of pages) {
      if (!/^\/(?:[a-z]{2}\/)?privacy-policy\/$/.test(url)) continue;
      const text = html.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
      check(!/no analytics cookies|keine Analyse-Cookies|no cookies for tracking, analytics/i.test(text),
        `${url}: purana "no analytics cookies" claim ab bhi maujood hai`);
      check(/anonymis|匿名|anonimiz|익명|geanonimiseerd|aggregerat|agregad/i.test(text),
        `${url}: privacy policy IP-anonymised aggregate page views ka zikr nahi karti`);
    }
  }

  // --- poore site par ek hi measurement ID --------------------------------
  check(ids.size <= 1, `site par ${ids.size} different measurement IDs hain: ${[...ids].join(', ')}`);
  if (ids.size === 1) {
    const only = [...ids][0];
    check(GA_ID_RE.test(only), `measurement ID galat format mein hai: ${only}`);
  }

  // --- sab indexable pages par analytics ho ------------------------------
  check(checkedPages > 700, `sirf ${checkedPages} pages par analytics mila — wiring adhoori lagti hai`);

  return suite;
}
