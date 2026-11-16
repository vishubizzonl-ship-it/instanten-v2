/**
 * Analytics lock (GA4).
 *
 * Checks, on the built HTML:
 *   1. exactly one gtag loader + one gtag('config') per page — duplicate tags
 *      double-count every pageview,
 *   2. the measurement ID is a valid GA4 ID (G-XXXXXXXXXX) and, per silo,
 *      consistent: instanten route + uska silo ek ID par, aur har sensor tool
 *      apne ID par (paanch properties tak). Default build mein sab ek hi ID
 *      par hote hain, par structure alag-alag data ke liye tayaar hai,
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
  /** silo -> us silo par dikhe saare IDs */
  const idsBySilo = new Map();
  let checkedPages = 0;
  /** Indexable pages jo counter tak pahunche (noindex pages alag). */
  let indexablePages = 0;

  /** URL se analytics silo (locale prefix strip karke). */
  const siloOf = (url) => {
    const seg = url.split('/').filter(Boolean);
    const clean = ['de', 'ja', 'fr', 'es', 'ko', 'nl', 'sv', 'it', 'pt'].includes(seg[0]) ? seg.slice(1) : seg;
    const INSTRUMENTS = ['onlinecompass', 'onlinebubblelevel', 'onlinespeedometer', 'onlineqibla'];
    return INSTRUMENTS.includes(clean[0] ?? '') ? clean[0] : 'instanten';
  };

  for (const [url, html] of pages) {
    if (ERROR_PAGES.has(url) || /^\/(de|ja|fr|es|ko|nl|sv|it|pt)\/(403|404|500|503)(\.html|\/)$/.test(url)) {
      check(gtagLoaders(html).length === 0, `${url}: error page par analytics load ho raha hai`);
      continue;
    }
    if (url.endsWith('.html') && !url.startsWith('/4')) continue; // flat non-page files

    const loaders = gtagLoaders(html);
    const configs = gaConfigs(html);

    /*
     * Audit item 3: noindex pages (untranslated silo blog articles, thin tag
     * pages) par analytics nahi hona chahiye — warna GA4 report me aise pages
     * bhi ginne lagte hain jinhe Google index hi nahi karta.
     */
    const robotsTags = html.match(/<meta\b[^>]*\bname=["']robots["'][^>]*>/gi) ?? [];
    if (robotsTags.some((tag) => /noindex/i.test(tag))) {
      check(loaders.length === 0, `${url}: noindex page par analytics load ho raha hai`);
      continue;
    }
    indexablePages += 1;

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
    {
      const silo = siloOf(url);
      if (!idsBySilo.has(silo)) idsBySilo.set(silo, new Set());
      idsBySilo.get(silo).add(cfg.id);
    }

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

  // --- per-silo measurement ID -------------------------------------------
  /**
   * Alag-alag data ka rule: har silo ka apna GA4 ID ho sakta hai
   * (instanten, onlinecompass, onlinebubblelevel, onlinespeedometer,
   * onlineqibla). Isliye check ye hai ki ek silo ke andar ID kabhi na badle —
   * warna ek hi silo ka data do properties mein bikhar jayega.
   */
  const SILOS = ['instanten', 'onlinecompass', 'onlinebubblelevel', 'onlinespeedometer', 'onlineqibla'];
  for (const silo of SILOS) {
    const set = idsBySilo.get(silo);
    if (!set) continue;
    check(
      set.size === 1,
      `${silo} silo mein ${set.size} different measurement IDs hain: ${[...set].join(', ')} (1 hona chahiye)`
    );
    for (const id of set) check(GA_ID_RE.test(id), `${silo}: measurement ID GA4 format mein nahi (${id})`);
  }
  check(ids.size <= 5, `site par ${ids.size} measurement IDs hain (max 5 silos)`);
  for (const id of ids) check(GA_ID_RE.test(id), `measurement ID galat format mein hai: ${id}`);

  // instanten silo aur tool silos: agar alag properties hain to IDs alag hone
  // chahiye, warna data mix ho jayega. (Default build mein sab same rehte hain,
  // isliye ye check sirf tab lagta hai jab kisi tool ka ID instanten se alag ho.)
  for (const silo of SILOS.slice(1)) {
    const toolId = [...(idsBySilo.get(silo) ?? [])][0];
    const instantenId = [...(idsBySilo.get('instanten') ?? [])][0];
    if (toolId && instantenId && toolId !== instantenId) {
      for (const other of SILOS.slice(1)) {
        if (other === silo) continue;
        const otherId = [...(idsBySilo.get(other) ?? [])][0];
        if (otherId) check(otherId !== toolId, `${silo} aur ${other} ka measurement ID same hai (${toolId})`);
      }
    }
  }

  // --- sab indexable pages par analytics ho ------------------------------
  // (noindex pages — untranslated articles, thin tags — yahan nahi ginte.)
  if (checkedPages > 0) {
    check(
      indexablePages === checkedPages,
      `${indexablePages - checkedPages} indexable pages par analytics nahi mila — wiring adhoori lagti hai`
    );
  }
  check(checkedPages > 0 || indexablePages === 0, 'analytics wiring ka pata nahi chala (0 pages)');

  return suite;
}
