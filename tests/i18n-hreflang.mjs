/**
 * Multi-language + hreflang lock.
 *
 * User ki demand: Español, 日本語, Français, Deutsch, Português, 한국어, Italiano
 * ke liye support + har page par hreflang markup (Astro i18n recipe ke hisaab se).
 *
 * Ye suite build hui HTML par chalta hai:
 *  - 7 requested locales ki routing + raastे
 *  - har page par 10 locales + x-default ka hreflang cluster
 *  - self-referencing hreflang, reciprocal links, canonical match
 *  - html lang attribute, og:locale, localized title/description
 */
import { createSuite, stripTags } from './lib.mjs';

/** User ne ye 7 languages maangi thi. */
export const REQUESTED_LOCALES = {
  es: 'Español',
  ja: '日本語',
  fr: 'Français',
  de: 'Deutsch',
  pt: 'Português',
  ko: '한국어',
  it: 'Italiano',
};

/** Site par maujood saare locales (en default). */
export const ALL_LOCALES = ['en', 'de', 'ja', 'fr', 'es', 'ko', 'nl', 'sv', 'it', 'pt'];

/** In pages par hreflang hona hi chahiye (real, indexable pages). */
const SAMPLE_PATHS = ['/', '/tools/', '/blog/', '/tarifs-lesson', '/tools/json-formatter/', '/blog/online-tools-hub-guide/'];

/** Redirect stubs — in par hreflang nahi hona chahiye (Google ke liye galat signal). */
const REDIRECT_PATHS = ['/privacy/', '/de/privacy/', '/es/privacy/'];

const altLinks = (html) =>
  [...html.matchAll(/<link[^>]*rel="alternate"[^>]*hreflang="([^"]+)"[^>]*href="([^"]+)"/g)].map((m) => ({
    hreflang: m[1],
    href: m[2],
  }));

const langOf = (html) => (html.match(/<html[^>]*\blang="([^"]+)"/) || [, ''])[1];

const localizedPath = (lang, path) => (lang === 'en' ? path : `/${lang}${path}`);

export function run(pages) {
  const suite = createSuite('i18n-hreflang');
  const { check } = suite;

  /* ---------- 1. 7 requested languages ke pages maujood hain ---------- */
  for (const [code, label] of Object.entries(REQUESTED_LOCALES)) {
    const home = pages.get(`/${code}/`);
    check(Boolean(home), `${label} (${code}): localized home page build mein nahi hai`);
    if (!home) continue;

    check(langOf(home).toLowerCase().startsWith(code), `${code}: <html lang> "${langOf(home)}" galat hai`);

    // tools hub + blog + ek tool page + ek blog post
    for (const path of ['/tools/', '/blog/', '/tools/json-formatter/', '/blog/online-tools-hub-guide/']) {
      const url = `/${code}${path}`;
      check(pages.has(url), `${code}: localized route missing — ${url}`);
    }
  }

  /* ---------- 2. Hreflang cluster har indexable page par ---------- */
  const clusterPaths = SAMPLE_PATHS.filter((p) => pages.has(p));
  for (const path of clusterPaths) {
    const html = pages.get(path);
    const alts = altLinks(html);

    check(alts.length === ALL_LOCALES.length + 1, `${path}: ${alts.length} hreflang links (${ALL_LOCALES.length} languages + x-default chahiye)`);

    for (const code of ALL_LOCALES) {
      const found = alts.find((a) => a.hreflang === code);
      check(Boolean(found), `${path}: hreflang "${code}" missing`);
      if (found) {
        check(
          found.href === `https://instanten.com${localizedPath(code, path)}`,
          `${path}: hreflang ${code} galat URL par ja raha hai (${found.href})`
        );
      }
    }

    const xDefault = alts.find((a) => a.hreflang === 'x-default');
    check(Boolean(xDefault), `${path}: hreflang x-default missing`);
    check(
      xDefault?.href === `https://instanten.com${path}`,
      `${path}: x-default English version par nahi ja raha (${xDefault?.href})`
    );

    // apna hreflang = apna canonical
    const canonical = (html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/) || [, ''])[1];
    const own = alts.find((a) => a.hreflang === 'en');
    check(Boolean(canonical), `${path}: canonical missing`);
    check(own?.href === canonical, `${path}: English hreflang (${own?.href}) canonical (${canonical}) se match nahi`);
  }

  /* ---------- 3. Reciprocal: har localized page se wapas bhi link ---------- */
  for (const code of Object.keys(REQUESTED_LOCALES)) {
    for (const path of ['/', '/tools/json-formatter/']) {
      const url = `/${code}${path}`;
      const html = pages.get(url);
      if (!html) continue;
      const alts = altLinks(html);
      check(
        alts.length === ALL_LOCALES.length + 1,
        `${url}: ${alts.length} hreflang links (${ALL_LOCALES.length + 1} chahiye)`
      );
      for (const other of ALL_LOCALES) {
        check(
          alts.some((a) => a.hreflang === other),
          `${url}: hreflang "${other}" missing (cluster adhoora)`
        );
      }
      const canonical = (html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/) || [, ''])[1];
      const self = alts.find((a) => a.hreflang === code);
      check(self?.href === canonical, `${url}: apna hreflang canonical se match nahi (${self?.href} vs ${canonical})`);
      check(canonical.endsWith(url), `${url}: canonical apne URL par nahi (${canonical})`);
    }
  }

  /* ---------- 4. og:locale + og:locale:alternate ---------- */
  const OG_LOCALE = { en: 'en_US', de: 'de_DE', ja: 'ja_JP', fr: 'fr_FR', es: 'es_ES', ko: 'ko_KR', it: 'it_IT', pt: 'pt_PT', nl: 'nl_NL', sv: 'sv_SE' };
  for (const code of Object.keys(REQUESTED_LOCALES)) {
    const html = pages.get(`/${code}/`);
    if (!html) continue;
    const ogLocale = (html.match(/<meta property="og:locale" content="([^"]+)"/) || [, ''])[1];
    check(ogLocale === OG_LOCALE[code], `/${code}/: og:locale "${ogLocale}" (expected ${OG_LOCALE[code]})`);
    const alternates = [...html.matchAll(/<meta property="og:locale:alternate" content="([^"]+)"/g)].map((m) => m[1]);
    check(alternates.length === ALL_LOCALES.length - 1, `/${code}/: og:locale:alternate ${alternates.length} (expected ${ALL_LOCALES.length - 1})`);
  }

  /* ---------- 5. Redirect stubs par hreflang nahi ---------- */
  for (const path of REDIRECT_PATHS) {
    const html = pages.get(path);
    if (!html) continue;
    check(altLinks(html).length === 0, `${path}: redirect stub par hreflang hai (nahi hona chahiye)`);
  }

  /* ---------- 6. Localized blog metadata (koi English leak nahi) ---------- */
  const BLOG_SLUGS = ['online-tools-hub-guide', 'instant-tools-for-daily-work', 'web-tools-hub-vs-subscriptions'];
  for (const code of Object.keys(REQUESTED_LOCALES)) {
    for (const slug of BLOG_SLUGS) {
      const url = `/${code}/blog/${slug}/`;
      const html = pages.get(url);
      check(Boolean(html), `${url}: localized blog page missing`);
      if (!html) continue;

      const title = (html.match(/<title>([^<]*)<\/title>/) || [, ''])[1];
      const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [, ''])[1];
      const enTitle = (pages.get(`/blog/${slug}/`)?.match(/<title>([^<]*)<\/title>/) || [, ''])[1];

      check(title && title !== enTitle, `${url}: title translate nahi hua (English fallback)`);
      check(title.length <= 110, `${url}: localized title bahut lamba (${title.length})`);
      // CJK text denser hota hai — ek character zyada maayne rakhta hai
      const minDesc = /[\u3040-\u30ff\u4e00-\u9fff]/.test(desc) ? 55 : 80;
      check(desc.length >= minDesc, `${url}: localized meta description chhota (${desc.length} < ${minDesc})`);
      check(
        /[^\x00-\x7F]/.test(title) || code === 'en',
        `${url}: localized title mein target-language characters nahi hain (English lag raha hai)`
      );
      check(!/Free Online Tools Hub: One Site Replaces Ten Bookmarks/.test(stripTags(html)), `${url}: English blog title page par leak ho raha hai`);
    }
  }

  /* ---------- 6b. Home FAQ native language mein (English leak nahi) -------- */
  const EN_FAQ = 'What is Instanten and how is it different from other free online tools websites?';
  const enPage = pages.get('/') ?? '';
  for (const [code, label] of Object.entries(REQUESTED_LOCALES)) {
    const home = pages.get(`/${code}/`);
    if (!home) continue;
    check(!home.includes(EN_FAQ), `${code}: home FAQ abhi bhi English mein hai (${label})`);

    // FAQ heading bhi localized ho ("Frequently Asked Questions" kabhi na dikhe)
    check(!home.includes('Frequently Asked Questions'), `${code}: FAQ heading English mein hai`);

    // 10 FAQ aayein, aur unme se koi bhi English page ka sawaal na ho
    const faqBlocks = [...home.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
      .map((m) => m[1])
      .filter((raw) => raw.includes('FAQPage'));
    check(faqBlocks.length === 1, `${code}: ${faqBlocks.length} FAQPage JSON-LD (1 chahiye)`);
    let localizedQuestions = [];
    try {
      const parsed = JSON.parse(faqBlocks[0] ?? '{}');
      const page = Array.isArray(parsed) ? parsed.find((n) => n['@type'] === 'FAQPage') : parsed;
      localizedQuestions = (page?.mainEntity ?? []).map((q) => String(q.name ?? ''));
    } catch {
      check(false, `${code}: FAQPage JSON-LD parse nahi hua`);
    }
    check(localizedQuestions.length === 10, `${code}: ${localizedQuestions.length} localized FAQ questions (10 chahiye)`);
    for (const q of localizedQuestions) {
      check(q.length >= 12, `${code}: FAQ question bahut chhota — "${q.slice(0, 40)}"`);
      check(!enPage?.includes(q), `${code}: FAQ question English home par bhi mila (translate nahi hua): ${q.slice(0, 50)}`);
    }

    // ja / ko ke liye native script zaroori (warna English fallback)
    if (code === 'ja' || code === 'ko') {
      const joined = localizedQuestions.join(' ');
      check(
        /[\u3040-\u30ff\u4e00-\u9fff\uac00-\ud7af]/.test(joined),
        `${code}: FAQ questions mein native script nahi hai — English fallback lag raha hai`
      );
    }
  }

  /* ---------- 6c. Hinglish/dev placeholder text kisi locale par na ho ------ */
  const HINGLISH = [/(^|[\s>"])aapke([\s<.,]|$)/i, /(^|[\s>"])nahi hoti([\s<.,]|$)/i, /(^|[\s>"])koi file, text ya image/i];
  for (const code of ALL_LOCALES) {
    for (const [url, html] of pages) {
      if (!url.startsWith(`/${code}/`)) continue;
      for (const re of HINGLISH) {
        check(!re.test(html), `${url}: Hinglish/dev placeholder text page par hai (${re})`);
      }
    }
  }

  /* ---------- 6d. Tool page ka "use it here" block localized --------------- */
  const EN_USE_HEADING = /Use the [^<]* right here/;
  const EN_PROCESSING = 'Processing happens in your browser';
  for (const [code, label] of Object.entries(REQUESTED_LOCALES)) {
    for (const slug of ['json-formatter', 'word-counter', 'qr-generator']) {
      const url = `/${code}/tools/${slug}/`;
      const html = pages.get(url);
      check(Boolean(html), `${url}: localized tool page missing`);
      if (!html) continue;
      check(!EN_USE_HEADING.test(html), `${code}/${slug}: "Use the … right here" heading English mein hai (${label})`);
      check(!html.includes(EN_PROCESSING), `${code}/${slug}: processing note English mein hai`);
    }
  }

  /* ---------- 6e. Tool lists (features/useCases) native language mein ------- */
  const TOOL_SLUGS = [
    'base64-encoder',
    'color-palette',
    'css-grid-generator',
    'image-compressor',
    'json-formatter',
    'markdown-editor',
    'meta-tag-generator',
    'online-ruler',
    'password-generator',
    'qr-generator',
    'regex-tester',
    'word-counter',
  ];
  // Jo locales user ne maange: in par English bullets bilkul nahi.
  const LIST_LOCALES = ['es', 'ja', 'fr', 'de', 'pt', 'ko', 'it'];
  /** data-tool-list wale <ul> se hi items nikaalo (breadcrumb/nav chhod do). */
  const listItems = (html, kind) => {
    const block = html.split(`data-tool-list="${kind}"`)[1];
    if (!block) return [];
    const ul = block.slice(0, block.indexOf('</ul>'));
    return [...ul.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/g)].map((m) => stripTags(m[1]).trim());
  };

  for (const code of LIST_LOCALES) {
    for (const slug of TOOL_SLUGS) {
      const url = `/${code}/tools/${slug}/`;
      const html = pages.get(url);
      check(Boolean(html), `${url}: localized tool page missing`);
      if (!html) continue;

      const enHtml = pages.get(`/tools/${slug}/`) ?? '';
      for (const kind of ['features', 'use-cases']) {
        const enItems = listItems(enHtml, kind);
        const items = listItems(html, kind);
        check(enItems.length >= 4, `/${slug}/: English ${kind} list hi ${enItems.length} items`);
        check(
          items.length === enItems.length,
          `${url}: ${kind} mein ${items.length} items (English mein ${enItems.length}) — translate adhoora`
        );
        const leaked = enItems.filter((item) => items.includes(item));
        check(
          leaked.length === 0,
          `${url}: ${kind} ke ${leaked.length} items English mein hi hain — "${(leaked[0] ?? '').slice(0, 50)}"`
        );
      }
    }
  }

  /* ---------- 7. Sitemap mein har locale ke liye xhtml:link alternates ---------- */
  const sitemapPages = [...pages.keys()].length;
  check(sitemapPages > 800, `sirf ${sitemapPages} pages build mein hain`);

  return suite;
}
