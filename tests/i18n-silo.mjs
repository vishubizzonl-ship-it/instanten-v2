/**
 * Every locale must be a complete silo of the site: same page set as English,
 * hreflang cluster complete on every page, no English leaking through.
 */
import { LOCALES, createSuite, canonicalOf, hreflangOf, localize, localeOf, meta, stripTags, titleOf } from './lib.mjs';

/** Words that stay identical across languages on purpose (brand + units). */
const ALLOWED = new Set(['instanten', 'json', 'qr', 'css', 'base64', 'url', 'urls', 'html', 'api', 'rfc', 'seo', 'pdf', 'svg', 'png', 'jpg', 'gif', 'café']);

/** English-only markers — if one of these appears on a localized page, copy leaked. */
const ENGLISH_MARKERS = [
  'Free Online', 'Sign in', 'Read more', 'Learn more', 'Get started', 'Privacy Policy',
  'Terms of Service', 'All rights reserved', 'Contact us', 'Search tools', 'Related tools',
  'Frequently asked', 'Table of contents', 'Back to top', 'Share this', 'Latest posts',
];

export function run(pages) {
  const suite = createSuite('i18n-silo');
  const { check } = suite;

  const englishPages = new Set([...pages.keys()].filter((u) => localeOf(u) === 'en'));

  // --- 1. same page set in every locale ----------------------------------
  for (const lang of LOCALES) {
    const own = [...pages.keys()].filter((u) => localeOf(u) === lang);
    check(own.length > 0, `locale ka koi page nahi :: ${lang}`);
    const expected = new Set([...englishPages].map((u) => localize(u, lang)));
    const missing = [...expected].filter((u) => !pages.has(u));
    const extra = own.filter((u) => !expected.has(u));
    check(missing.length === 0, `page missing :: ${lang} :: ${missing.slice(0, 3).join(', ')} (${missing.length})`);
    check(extra.length === 0, `extra page :: ${lang} :: ${extra.slice(0, 3).join(', ')} (${extra.length})`);
  }

  // --- 2. hreflang cluster complete --------------------------------------
  // Error pages are intentionally mono-lingual and noindex (see site-integrity).
  const errorPages = new Set(['/404/', '/404.html']);
  for (const [url, html] of pages) {
    if (errorPages.has(url)) continue;
    const langs = hreflangOf(html);
    check(langs.length >= 11, `hreflang adhoora (${langs.length}/11) :: ${url}`);
    const codes = new Set(langs.map((l) => l.lang));
    for (const lang of LOCALES) check(codes.has(lang), `hreflang ${lang} nahi :: ${url}`);
    check(codes.has('x-default'), `hreflang x-default nahi :: ${url}`);
    const self = langs.find((l) => l.lang === localeOf(url));
    check(!!self, `apna hreflang nahi :: ${url}`);
    for (const { lang, href } of langs) {
      const path = href.replace(/^https?:\/\/[^/]+/, '');
      check(!!path, `hreflang href khaali :: ${url} :: ${lang}`);
      if (lang === 'x-default') {
        check(localeOf(path) === 'en', `x-default English par nahi :: ${url} -> ${path}`);
      } else {
        check(localeOf(path) === lang, `hreflang ${lang} galat URL par :: ${url} -> ${path}`);
      }
    }
    const canonical = canonicalOf(html);
    const selfHref = langs.find((l) => l.lang === localeOf(url))?.href;
    check(!!canonical && canonical.replace(/\/$/, '') === (selfHref || '').replace(/\/$/, ''),
      `canonical apne hreflang se match nahi :: ${url}`);
  }

  // --- 3. no English leaking into localized pages ------------------------
  for (const [url, html] of pages) {
    const lang = localeOf(url);
    if (lang === 'en' || errorPages.has(url)) continue;
    const text = stripTags(html);
    for (const marker of ENGLISH_MARKERS) {
      check(!text.includes(marker), `English text leak "${marker}" :: ${url}`);
    }
    const title = titleOf(html) || '';
    const desc = meta(html, 'description') || '';
    check(!/^(About|Contact|Tools|Blog|Pricing)\b/.test(title.trim()),
      `title translate nahi hua :: ${url} -> "${title}"`);
    for (const marker of ENGLISH_MARKERS) {
      check(!desc.includes(marker), `description mein English "${marker}" :: ${url}`);
    }
  }

  return suite;
}
