/**
 * Untranslated silo blog articles (audit item 3).
 *
 * Problem: `/de/onlinecompass/blog/how-to-read-a-compass-dial/` `<html lang="de">`
 * ke saath poora English content deta tha, aur 11-language hreflang cluster bhi
 * bhejta tha — yani Google ko signal "ye German version hai" jabki content
 * English hai. Aise pages duplicate maane jaate hain.
 *
 * Fix: aise har page par `noindex, nofollow` hai, hreflang cluster nahi, kisi
 * sitemap me nahi, aur analytics bhi nahi.
 *
 * Ye suite expectation **content se** nikaalti hai (h1 text English h1 se
 * compare), isliye jab koi article translate ho jaye to test apne aap naya
 * sach maan lega — test update karne ki zarurat nahi.
 */
import { readFileSync, existsSync } from 'node:fs';
import { createSuite } from './lib.mjs';

const LOCALES = ['de', 'ja', 'fr', 'es', 'ko', 'nl', 'sv', 'it', 'pt'];
const SILOS = ['onlinecompass', 'onlinebubblelevel', 'onlineqibla', 'onlinespeedometer'];

/** Silo → uske article slugs (wrapper ke getStaticPaths se). */
const ARTICLES = {
  onlinecompass: [
    'how-to-find-north-without-a-compass',
    'how-to-read-a-compass-dial',
    'how-to-use-an-online-compass',
    'online-compass-without-an-app',
  ],
  onlinebubblelevel: [
    'bubble-level-vs-spirit-level',
    'how-accurate-is-a-phone-bubble-level',
    'how-to-use-an-online-bubble-level',
    'level-furniture-shelves-appliances',
    'how-to-check-if-a-surface-is-level',
  ],
  onlineqibla: [
    'how-to-find-qibla-direction-anywhere',
    'qibla-direction-compass-degrees',
    'why-is-my-qibla-direction-wrong',
  ],
  onlinespeedometer: [
    'how-accurate-is-a-phone-speedometer',
    'how-to-use-an-online-speedometer',
    'speedometer-units-kmh-mph-knots',
  ],
};

const pageFile = (prefix, silo, slug) =>
  `dist/${prefix ? `${prefix}/` : ''}${silo}/blog/${slug}/index.html`;

const read = (file) => (existsSync(file) ? readFileSync(file, 'utf8') : null);

/** h1 ka plain text — content-language compare karne ke liye. */
function h1Text(html) {
  const match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  return match ? match[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim() : '';
}

/** robots meta ka noindex flag — attribute order par bharosa nahi. */
function isNoindex(html) {
  for (const tag of html.match(/<meta\b[^>]*\bname=["']robots["'][^>]*>/gi) ?? []) {
    if (/noindex/i.test(tag)) return true;
  }
  return false;
}

const hreflangCount = (html) => (html.match(/<link\b[^>]*\brel=["']alternate["'][^>]*>/gi) ?? []).length;

export function run() {
  const suite = createSuite('untranslated');
  const { check } = suite;

  let translatedCount = 0;
  let untranslatedCount = 0;

  for (const silo of SILOS) {
    for (const slug of ARTICLES[silo]) {
      const enHtml = read(pageFile('', silo, slug));
      check(Boolean(enHtml), `English article missing :: /${silo}/blog/${slug}/`);
      if (!enHtml) continue;
      const enH1 = h1Text(enHtml);

      // English source hamesha indexable + poora hreflang cluster
      check(!isNoindex(enHtml), `English article noindex hai :: /${silo}/blog/${slug}/`);
      check(
        hreflangCount(enHtml) === 11,
        `English article par ${hreflangCount(enHtml)} hreflang links (11 chahiye) :: /${silo}/blog/${slug}/`
      );

      for (const locale of LOCALES) {
        const url = `/${locale}/${silo}/blog/${slug}/`;
        const html = read(pageFile(locale, silo, slug));
        check(Boolean(html), `locale page missing :: ${url}`);
        if (!html) continue;

        const sameAsEnglish = h1Text(html) === enH1;
        const noindex = isNoindex(html);
        const alternates = hreflangCount(html);

        if (sameAsEnglish) {
          untranslatedCount += 1;
          check(noindex, `untranslated page indexable hai (noindex chahiye) :: ${url}`);
          check(alternates === 0, `untranslated page par ${alternates} hreflang links hain :: ${url}`);
        } else {
          translatedCount += 1;
          check(!noindex, `translated page noindex hai :: ${url}`);
          check(alternates === 11, `translated page par ${alternates} hreflang links (11 chahiye) :: ${url}`);
        }
      }
    }
  }

  // Sanity: fix ka asar wakai hua (sab pages noindex ho gaye to bhi pass ho jaata).
  check(untranslatedCount >= 100, `sirf ${untranslatedCount} untranslated pages mile (100+ expected)`);
  check(translatedCount >= 24, `sirf ${translatedCount} translated locale pages mile (24+ expected)`);

  /* ---------- Sitemap: koi noindex URL nahi ---------- */
  const sitemaps = [
    'dist/sitemap-0.xml',
    'dist/sitemap.xml',
    'dist/sitemap-instanten.xml',
    ...SILOS.map((silo) => `dist/${silo}/sitemap.xml`),
  ];

  for (const sitemap of sitemaps) {
    if (!existsSync(sitemap)) {
      check(false, `${sitemap} gayab hai`);
      continue;
    }
    const locs = [...readFileSync(sitemap, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    check(locs.length > 0, `${sitemap} khaali hai`);
    for (const loc of locs) {
      const rel = loc.replace(/^https?:\/\/[^/]+\//, '').replace(/\/$/, '');
      const html = read(`dist/${rel}/index.html`);
      if (!html) continue;
      check(!isNoindex(html), `${sitemap} me noindex URL hai :: ${loc}`);
    }
  }

  /* ---------- Indexable articles sitemap me hone chahiye ---------- */
  const siloMap = {
    onlinecompass: 'dist/onlinecompass/sitemap.xml',
    onlinebubblelevel: 'dist/onlinebubblelevel/sitemap.xml',
    onlineqibla: 'dist/onlineqibla/sitemap.xml',
    onlinespeedometer: 'dist/onlinespeedometer/sitemap.xml',
  };

  for (const silo of SILOS) {
    const xml = readFileSync(siloMap[silo], 'utf8');
    for (const slug of ARTICLES[silo]) {
      const html = read(pageFile('', silo, slug));
      if (!html || isNoindex(html)) continue;
      check(
        xml.includes(`/${silo}/blog/${slug}/`),
        `indexable article ${silo}/blog/${slug}/ silo sitemap me nahi hai`
      );
    }
    for (const locale of LOCALES) {
      for (const slug of ARTICLES[silo]) {
        const html = read(pageFile(locale, silo, slug));
        if (!html || isNoindex(html)) {
          // noindex → sitemap me kahin bhi nahi hona chahiye: na <loc> me, na
          // kisi <xhtml:link rel="alternate"> me (sitemap hreflang bhi advertise
          // karta hai, isliye bas loc check karna kaafi nahi).
          const path = `/${locale}/${silo}/blog/${slug}/`;
          check(!xml.includes(path), `noindex article sitemap me hai :: ${path}`);
          check(
            !readFileSync('dist/sitemap-0.xml', 'utf8').includes(path),
            `noindex article sitemap-0 ke hreflang alternates me hai :: ${path}`
          );
          continue;
        }
        check(
          xml.includes(`/${locale}/${silo}/blog/${slug}/`),
          `indexable locale article sitemap me nahi :: /${locale}/${silo}/blog/${slug}/`
        );
      }
    }
  }

  /* ---------- Analytics: noindex page par tag nahi ---------- */
  for (const locale of LOCALES) {
    const html = read(pageFile(locale, 'onlinebubblelevel', 'bubble-level-vs-spirit-level'));
    if (!html) continue;
    check(!/googletagmanager\.com/.test(html), `noindex page par analytics tag hai :: /${locale}/onlinebubblelevel/...`);
  }

  return suite;
}
