/**
 * Sensor tools lock (compass, bubble level, speedometer, Qibla).
 *
 * Chaaron tools compassinstant silo se instanten mein aaye hain, lekin unka
 * poora behaviour — island, sensor script, localized copy, FAQ schema — yahan
 * pin hota hai, taaki port ke baad koi tukda chup-chaap toot na jaye.
 *
 * Har check built HTML par chalta hai (jo browser ko milta hai wahi bytes).
 */
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { LOCALES, createSuite, jsonLdOf, localeOf, localize, stripTags } from './lib.mjs';

/** slug -> us tool ka root attribute + island ke zaroori elements. */
export const INSTRUMENTS = {
  onlinecompass: {
    root: 'onlinecompass',
    ids: ['compass-island', 'compass-card', 'compass-dial', 'compass-angle', 'compass-status', 'compass-fullscreen-btn'],
    /** Compass page par FAQ section nahi hai — compassinstant ke source mein bhi
     *  nahi thi, to yahan bhi nahi banayi (copy invent nahi ki). */
    faqLangs: [],
    guides: false,
  },
  onlinebubblelevel: {
    root: 'onlinebubblelevel',
    ids: ['bubble-card', 'bubble-area', 'bubble-dot', 'bubble-x', 'bubble-y', 'bubble-status', 'bubble-message', 'bubble-calibrate-btn', 'bubble-reset-btn', 'bubble-fullscreen-btn'],
    faqLangs: ['en', 'es', 'ja', 'fr', 'de', 'pt', 'ko', 'it'],
    guides: true,
  },
  onlinespeedometer: {
    root: 'onlinespeedometer',
    ids: ['speed-card', 'speed-display', 'speed-unit', 'speed-stats', 'max-speed', 'avg-speed', 'altitude', 'duration', 'start-btn', 'record-btn', 'unit-btn', 'unit-menu', 'records-list', 'speed-fullscreen-btn'],
    faqLangs: ['en', 'es', 'ja', 'fr', 'de', 'pt', 'ko', 'it'],
    guides: true,
  },
  onlineqibla: {
    root: 'onlineqibla',
    ids: ['qibla-card', 'qibla-dial', 'qibla-bearing', 'qibla-status', 'qibla-location', 'qibla-marker', 'qibla-plus', 'qibla-fullscreen-btn'],
    faqLangs: ['en', 'es', 'ja', 'fr', 'de', 'pt', 'ko', 'it'],
    guides: true,
  },
};

const SLUGS = Object.keys(INSTRUMENTS);
const PAGES_PER_TOOL = LOCALES.length;

/** HTML se script bodies (inline + module chunks) — dono tarah ka output aata hai. */
function scriptsOf(html) {
  const inline = [...html.matchAll(/<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  const srcs = [...html.matchAll(/<script[^>]*type="module"[^>]*src="([^"]+)"/g)].map((m) => m[1]);
  const chunks = srcs
    .filter((src) => existsSync(`dist${src}`))
    .map((src) => readFileSync(`dist${src}`, 'utf8'));
  return [...inline, ...chunks].join('\n');
}

export function run(pages, outDir) {
  const suite = createSuite('instruments');
  const { check } = suite;

  for (const [slug, spec] of Object.entries(INSTRUMENTS)) {
    for (const lang of LOCALES) {
      const url = localize(`/${slug}/`, lang);
      const html = pages.get(url);
      check(Boolean(html), `page missing: ${url}`);
      if (!html) continue;

      // --- 1. island page par hai aur uske elements bhi --------------------
      check(html.includes(`data-tool-root="${spec.root}"`), `${slug}/${lang}: tool root nahi mila`);
      check(html.includes('id="tool"'), `${slug}/${lang}: #tool section nahi hai`);
      const missingIds = spec.ids.filter((id) => !html.includes(`id="${id}"`));
      check(missingIds.length === 0, `${slug}/${lang}: island elements missing → ${missingIds.join(', ')}`);

      // --- 2. sensor script page se load hota hai --------------------------
      const js = scriptsOf(html);
      check(js.length > 0, `${slug}/${lang}: koi script nahi mili`);
      check(/addEventListener/.test(js), `${slug}/${lang}: script mein event binding nahi`);
      // script wahi element dhoondta hai jo markup mein hai (typo = dead tool)
      const wanted = new Set([...js.matchAll(/getElementById\('([a-z0-9-]+)'\)/g)].map((m) => m[1]));
      const dead = [...wanted].filter((id) => !html.includes(`id="${id}"`) && !js.includes(`'${id}-`));
      check(dead.length === 0, `${slug}/${lang}: script dead selector dhoondta hai → ${dead.slice(0, 4).join(', ')}`);

      // --- 3. prose copy page par hai -------------------------------------
      const text = stripTags(html);
      // CJK mein ek character ka wazan zyada hota hai — same copy kam chars leti
      // hai, isliye wahan threshold kam.
      const minCopy = ['ja', 'ko'].includes(lang) ? 2400 : 3000;
      check(text.length > minCopy, `${slug}/${lang}: page par long-form copy nahi (${text.length}/${minCopy} chars)`);

      // --- 4. FAQ: visible + theek ek FAQPage JSON-LD ----------------------
      const faqExpected = spec.faqLangs.includes(lang);
      const faqSchema = jsonLdOf(html).filter(
        (block) => block.ok && JSON.stringify(block.data).includes('FAQPage')
      );
      check(
        faqSchema.length === (faqExpected ? 1 : 0),
        `${slug}/${lang}: FAQPage JSON-LD ${faqSchema.length} mila (${faqExpected ? 1 : 0} chahiye)`
      );
      if (faqExpected) {
        const questions = JSON.stringify(faqSchema[0]?.data ?? '').match(/"@type":"Question"/g) ?? [];
        check(questions.length >= 3, `${slug}/${lang}: FAQ questions kam hain (${questions.length})`);
        check(html.includes('data-tool-faq'), `${slug}/${lang}: visible FAQ block nahi hai`);
      }

      // --- 5. guides list (jahan thi wahan bani rahe) ----------------------
      if (spec.guides) {
        check(html.includes('id="tool-guides"'), `${slug}/${lang}: guides section gayab`);
      }

      // --- 6. SoftwareApplication schema + canonical ----------------------
      const appSchema = jsonLdOf(html).filter((block) => block.ok && JSON.stringify(block.data).includes('SoftwareApplication'));
      check(appSchema.length >= 1, `${slug}/${lang}: SoftwareApplication schema nahi`);
      check(
        html.includes(`https://instanten.com${url}`),
        `${slug}/${lang}: canonical/schema mein apna URL nahi (${url})`
      );
    }

    // --- 7. English page ki copy localized pages se alag hai -------------
    const en = pages.get(`/${slug}/`) ?? '';
    const de = pages.get(`/de/${slug}/`) ?? '';
    const deText = stripTags(de);
    const enHeading = (stripTags(en).match(/[A-Z][^.]{20,90}\./) ?? [''])[0];
    check(!deText.includes(enHeading), `${slug}: German page par English paragraph aa gaya`);

    // --- 8. sensor tools ka apna <style> block nahi (Tailwind only) ------
    const componentDir = 'src/components/instruments';
    if (existsSync(componentDir)) {
      for (const file of readdirSync(componentDir)) {
        if (!file.endsWith('.astro')) continue;
        const source = readFileSync(`${componentDir}/${file}`, 'utf8');
        check(!/<style[\s>]/.test(source), `${file}: <style> block hai (Tailwind utilities chahiye)`);
        check(!/\bclass="[^"]*\btool-[a-z]/.test(source), `${file}: purani .tool-* class wapas aa gayi`);
        // InstrumentNav ke nav pills jaan-boojh kar pill hain (compassinstant
        // header jaisa). Baaki islands par pill-shaped control nahi hona chahiye.
        const pills = source.split('\n').filter((line) => line.includes('rounded-full'));
        check(
          file === 'InstrumentNav.astro' || pills.length === 0,
          `${file}: pill-shaped control hai (${pills.length})`
        );
      }
    }
  }

  // --- 9. hub par chaaron cards, aur koi tool list se gayab nahi ---------
  // /tools/ hub hata diya — cards home (filter) par hain
  const hub = pages.get('/') ?? '';
  check(Boolean(hub), 'home page nahi mila');
  for (const slug of SLUGS) {
    check(hub.includes(`href="/${slug}/"`), `/tools/ par ${slug} ka card nahi`);
  }
  const toolJsonCount = existsSync('src/content/tools')
    ? readdirSync('src/content/tools').filter((f) => f.endsWith('.json')).length
    : 0;
  const hubCards = new Set([
    ...[...hub.matchAll(/href="\/tools\/([a-z0-9-]+)\//g)].map((m) => m[1]),
    ...[...hub.matchAll(/href="\/(online[a-z]+)\//g)].map((m) => m[1]),
  ]);
  check(
    hubCards.size >= toolJsonCount,
    `/tools/ par ${hubCards.size} cards hain, ${toolJsonCount} tools kolekshan mein hain (list adhoori)`
  );

  // --- 10. localized card naam English se alag hai (7 locales) ----------
  for (const lang of LOCALES.filter((l) => !['en', 'nl', 'sv'].includes(l))) {
    const langHub = pages.get(`/${lang}/`) ?? '';
    const listed = SLUGS.filter((slug) => langHub.includes(`href="/${lang}/${slug}/"`));
    check(listed.length === SLUGS.length, `/${lang}/tools/ par ${SLUGS.length - listed.length} sensor card gayab`);
  }

  // --- 10b. Sensor pages ka side spacing original (compassinstant) jaisa --
  // compassinstant par content ke gutters mobile 24px (px-6), desktop 32px
  // (lg:px-8) thay. instanten-v2 merge ke baad 12-16px ho gaye the.
  const SENSOR_PAGES = SLUGS.flatMap((slug) => [slug, ...LOCALES.filter((l) => l !== 'en').map((l) => `${l}/${slug}`)]);
  for (const page of SENSOR_PAGES) {
    const html = pages.get(`/${page}/`);
    if (!html) continue;
    const main = html.slice(html.indexOf('<main'), html.indexOf('</main>'));
    check(main.includes('mx-auto max-w-[48rem] px-6 lg:px-8'), `/${page}/: content ka original gutter (px-6 lg:px-8) nahi hai`);
    check(!main.includes('px-4 sm:px-6 lg:px-0'), `/${page}/: content par purana patla gutter (px-4) wapas aa gaya`);
    check(!main.includes('px-3 pb-2 pt-3'), `/${page}/: mobile gutter 24px se chhota (px-3) hai`);
  }

  // --- 10c. InstrumentNav: pills original size par, tap area alag ---------
  // Pehle `mobile.css` pill par hi min-height 40/44px laga deta tha, jisse
  // do-row nav rubber jaisa mota ho jaata tha. Ab hit-area pseudo-element se
  // aata hai, pill ka box original (compassinstant) jaisa hi rehta hai.
  {
    const nav = (pages.get('/onlinecompass/') ?? '').match(/<nav[\s\S]*?<\/nav>/)?.[0] ?? '';
    check(Boolean(nav), 'onlinecompass: InstrumentNav nahi mila');
    // top bar + do mobile rows (original structure)
    check(/class="flex h-16 items-center justify-between[^"]*"/.test(nav), 'InstrumentNav: top bar h-16 nahi');
    check((nav.match(/md:hidden/g) ?? []).length >= 1, 'InstrumentNav: mobile rows wrapper nahi');
    // pills apne natural size par (koi min-height class nahi)
    const pills = [...nav.matchAll(/<a[^>]*data-nav-pill[^>]*>/g)].map((m) => m[0]);
    check(pills.length >= 9, `InstrumentNav: sirf ${pills.length} pills (4 tool + 5 company chahiye)`);
    check(
      pills.every((pill) => !/min-h-\[/.test(pill) && !/h-(9|10|11)\b/.test(pill)),
      'InstrumentNav: pill par fixed/min height class aa gayi (nav khinch jaayega)'
    );
    // bundle: pill par min-height nahi, hit-area rule hai
    const cssBundle = readFileSync(join(outDir, '_astro', readdirSync(join(outDir, '_astro')).find((f) => f.endsWith('.css'))), 'utf8');
    check(
      !/nav \[data-nav-pill\][^{]*\{[^}]*min-height/.test(cssBundle),
      'mobile.css phir se nav pills par min-height laga raha hai (nav stretch)'
    );
    check(
      /nav \[data-nav-pill\]:after/.test(cssBundle) && /height:\s*44px/.test(cssBundle),
      'nav pills ka 44px hit-area rule gayab hai'
    );
  }

  // --- 10d. Fullscreen: tool screen ke beech mein rahe --------------------
  {
    const cards = { onlinecompass: 'compass-card', onlinebubblelevel: 'bubble-card', onlineqibla: 'qibla-card', onlinespeedometer: 'speed-card' };
    for (const [slug, id] of Object.entries(cards)) {
      const html = pages.get(`/${slug}/`) ?? '';
      const tag = html.match(new RegExp(`<div[^>]*id="${id}"[^>]*>`))?.[0] ?? '';
      check(Boolean(tag), `${slug}: ${id} nahi mila`);
      // fullscreen mein flex column + dono axes par center + full size
      for (const util of ['flex', 'flex-col', 'items-center', 'justify-center', 'w-full', 'h-full']) {
        check(tag.includes(`[&:fullscreen]:${util}`), `${slug}: fullscreen par ${util} nahi (tool center nahi rahega)`);
      }
    }
    // CSS mein variants compile hue?
    const cssBundle = readFileSync(join(outDir, '_astro', readdirSync(join(outDir, '_astro')).find((f) => f.endsWith('.css'))), 'utf8');
    check(/:fullscreen\{align-items:center\}/.test(cssBundle), 'fullscreen align-items:center rule compile nahi hua');
    check(/:fullscreen\{justify-content:center\}/.test(cssBundle), 'fullscreen justify-content:center rule compile nahi hua');
  }

  // --- 10e. Fullscreen button: koi rounded box nahi, sirf icon -----------
  {
    const ids = { onlinecompass: 'compass-fullscreen-btn', onlinebubblelevel: 'bubble-fullscreen-btn', onlineqibla: 'qibla-fullscreen-btn', onlinespeedometer: 'speed-fullscreen-btn' };
    for (const [slug, id] of Object.entries(ids)) {
      const html = pages.get(`/${slug}/`) ?? '';
      const tag = html.match(new RegExp(`<button[^>]*id="${id}"[^>]*>`))?.[0] ?? '';
      check(Boolean(tag), `${slug}: ${id} nahi mila`);
      check(/rounded-none/.test(tag), `${slug}: fullscreen button par rounded box hai`);
      check(/border-0/.test(tag), `${slug}: fullscreen button par border hai`);
      check(/bg-transparent/.test(tag), `${slug}: fullscreen button par background hai`);
      check(/w-10 h-10/.test(tag), `${slug}: fullscreen button ka tap area 40px nahi`);
      check(/aria-label="[^"]+"/.test(tag), `${slug}: fullscreen button par aria-label nahi`);
    }
  }

  // --- 10f. Theme: ek hi key, har page par, dono toggles ek API se --------
  {
    // (a) har page ke <head> mein paint se pehle saved theme lagti hai
    const sample = ['/', '/onlinecompass/', '/onlineqibla/', '/tools/json-formatter/', '/de/', '/blog/', '/search/', '/404.html'];
    for (const url of sample) {
      const html = pages.get(url) ?? '';
      const head = html.slice(0, html.indexOf('</head>'));
      check(head.includes("localStorage.getItem('theme')"), `${url}: head mein saved-theme script nahi`);
      check(head.includes('prefers-color-scheme'), `${url}: system preference fallback nahi`);
      check(/applyTheme\(theme\)/.test(head), `${url}: paint se pehle theme apply nahi hoti`);
      check(/classList\.toggle\('dark'/.test(head), `${url}: dark class set nahi hoti`);
      check(/setAttribute\('data-theme'/.test(head), `${url}: data-theme set nahi hota`);
    }

    // (b) shared API har page ke head mein install hoti hai (sensor pages par
    // ThemeToggle component nahi hota, isliye API head script se aati hai)
    for (const url of sample) {
      const head = (pages.get(url) ?? '').slice(0, (pages.get(url) ?? '').indexOf('</head>'));
      check(head.includes('window.InstantenTheme'), `${url}: head mein InstantenTheme API nahi`);
      check(/set\(mode\)/.test(head) && /toggle\(\)/.test(head), `${url}: API mein set/toggle nahi`);
    }

    // (c) sensor nav ka toggle bhi wahi API use karta hai (source lock)
    const navSource = readFileSync('src/components/instruments/InstrumentNav.astro', 'utf8');
    check(navSource.includes('window.InstantenTheme'), 'InstrumentNav toggle shared theme API use nahi karta');
    check(!/html\.classList\.toggle\('dark', !dark\);\n\s*\/\/ instanten/.test(navSource), 'InstrumentNav sirf html.dark toggle karta hai');

    // (d) theme.js ke exports maujood hain
    const themeSrc = readFileSync('src/scripts/theme.js', 'utf8');
    for (const fn of ['export function setTheme', 'export function initTheme', 'export function toggleTheme', 'export function installThemeApi']) {
      check(themeSrc.includes(fn), `src/scripts/theme.js mein ${fn} nahi`);
    }
    check(themeSrc.includes("const THEME_KEY = 'theme'") || themeSrc.includes("THEME_KEY = 'theme'"), 'theme key "theme" nahi');
    // dono jagah same key likhi jaaye
    for (const rel of ['src/layouts/Layout.astro', 'src/components/ThemeToggle.astro']) {
      const src = readFileSync(rel, 'utf8');
      check(src.includes("'theme'") || src.includes('theme.js'), `${rel}: theme key/API wire nahi hai`);
    }
  }

  // --- 11. koi external tool link nahi ---------------------------------
  for (const slug of SLUGS) {
    const html = pages.get(`/${slug}/`) ?? '';
    // fonts preconnect CDN links hain, tool link nahi — unko chhod do
    const external = [...html.matchAll(/href="(https?:\/\/(?!instanten\.com)[^"]+)"/g)]
      .map((m) => m[1])
      // footer ke social links aur font CDN site-wide hain, tool link nahi
      .filter((href) => !/fonts\.googleapis|fonts\.gstatic|x\.com|instagram\.com|github\.com|youtube\.com|t\.me/.test(href));
    check(external.length === 0, `${slug}: external link page par hai (${external.slice(0, 2).join(', ')})`);
  }

  // --- 12. analytics content_group har tool par alag -------------------
  for (const slug of SLUGS) {
    const html = pages.get(`/${slug}/`) ?? '';
    const group = html.match(/content_group:\s*"([^"]*)"/)?.[1];
    check(group === slug, `${slug}: content_group "${group ?? 'khaali'}" hai, "${slug}" chahiye`);
  }

  // --- 12b. tool page ka chrome: compassinstant wala header, tool card sabse upar ---
  for (const slug of SLUGS) {
    for (const lang of ['en', 'de', 'ja']) {
      const url = localize(`/${slug}/`, lang);
      const html = pages.get(url) ?? '';
      const body = html.slice(html.indexOf('<body'));
      // header = instrument nav, instanten ka site header nahi
      check(body.includes('data-nav-pill'), `${slug}/${lang}: instrument nav (pills) nahi mila`);
      const navTop = body.slice(0, body.indexOf('</nav>'));
      check(
        new RegExp(`>\\s*${slug}\\s*<`).test(navTop),
        `${slug}/${lang}: logo par full online<tool> wordmark nahi`
      );
      // chaar tool pills usi locale ke route par jaate hain
      const navHtml = body.slice(0, body.indexOf('</nav>'));
      for (const target of SLUGS) {
        const href = lang === 'en' ? `/${target}/` : `/${lang}/${target}/`;
        check(navHtml.includes(`href="${href}"`), `${slug}/${lang}: nav mein ${target} ka link nahi`);
      }
      // language dropdown + theme toggle
      check(navHtml.includes('id="tool-lang-menu"'), `${slug}/${lang}: language dropdown nahi`);
      check(navHtml.includes('id="tool-theme-btn"'), `${slug}/${lang}: theme toggle nahi`);
      // company links usi locale par
      const prefix = lang === 'en' ? '' : `/${lang}`;
      for (const path of ['/blog/', '/about/', '/privacy-policy/', '/terms/', '/contact/']) {
        check(navHtml.includes(`href="${prefix}${path}"`), `${slug}/${lang}: nav mein ${path} link nahi`);
      }

      // tool card sabse upar: article ke andar pehla section hi #tool ho
      const article = html.slice(html.indexOf('<article'));
      const firstSection = article.indexOf('<section');
      const toolSection = article.indexOf('<section id="tool"');
      check(
        toolSection >= 0 && toolSection === firstSection,
        `${slug}/${lang}: tool card page ke top par nahi hai`
      );
      // bada H1 hero hata diya — card se pehle 300 chars se zyada text nahi
      const beforeTool = stripTags(article.slice(0, toolSection >= 0 ? toolSection : 0)).trim();
      check(beforeTool.length < 60, `${slug}/${lang}: tool se pehle hero/heading block hai ("${beforeTool.slice(0, 40)}")`);
      // visible breadcrumb nahi (screenshot jaisa), schema mein hai
      check(!/<nav class="breadcrumbs/.test(article), `${slug}/${lang}: breadcrumb abhi bhi page par hai`);
    }
  }

  // --- 12d. prose mein HTML tags literal text ban ke nahi dikhte ----------
  // compassinstant ki copy <strong>/<em> use karti hai; escape galat ho gaya to
  // page par "&lt;strong&gt;" dikhta hai (screenshot bug).
  for (const slug of SLUGS) {
    for (const lang of LOCALES) {
      const html = pages.get(localize(`/${slug}/`, lang)) ?? '';
      const text = stripTags(html);
      check(!/<\/?strong>|<\/?em>|&lt;strong|<strong>/.test(text), `${slug}/${lang}: prose mein literal <strong>/<em> dikh raha hai`);
      check(!/&lt;\/?[a-z]+&gt;/.test(html), `${slug}/${lang}: escaped HTML entity page par hai`);
    }
  }
  // aur jahan source mein <strong> hai wahan sach mein bold render ho
  {
    const html = pages.get('/onlinecompass/') ?? '';
    check(/<strong class="font-semibold text-ink">/.test(html), 'compass prose mein <strong> render nahi hua');
    check(/<em class="italic">/.test(html), 'compass prose mein <em> render nahi hua');
  }

  // --- 12e. nav pills ke chhote naam (Compass, Bubble Level, …) ----------
  {
    const html = pages.get('/onlinecompass/') ?? '';
    const nav = html.slice(html.indexOf('<body'), html.indexOf('</nav>'));
    check(/>\s*Compass\s*</.test(nav), 'pill par "Compass" nahi mila');
    check(!/>\s*Online Compass\s*</.test(nav), 'pill par abhi bhi "Online Compass" hai');
    check(/>\s*Bubble Level\s*</.test(nav), 'pill par "Bubble Level" nahi mila');
    check(/>\s*Speedometer\s*</.test(nav), 'pill par "Speedometer" nahi mila');
    check(/>\s*Qibla\s*</.test(nav), 'pill par "Qibla" nahi mila');
    // logo par full wordmark hi rehta hai
    check(/>\s*onlinecompass\s*</.test(nav), 'logo par full online<tool> wordmark nahi');
    // localized pills
    const de = pages.get('/de/onlinecompass/') ?? '';
    const deNav = de.slice(de.indexOf('<body'), de.indexOf('</nav>'));
    check(/>\s*Kompass\s*</.test(deNav), 'de pill "Kompass" nahi mila');
    check(/>\s*Wasserwaage\s*</.test(deNav), 'de pill "Wasserwaage" nahi mila');
  }

  // --- 12f. mobile: gutter + single-line pills --------------------------
  for (const slug of SLUGS) {
    const html = pages.get(`/${slug}/`) ?? '';
    const article = html.slice(html.indexOf('<article'));
    // prose sections aur tool card dono par original (compassinstant) gutter:
    // mobile 24px (px-6), desktop 32px (lg:px-8)
    check(/class="px-6 pb-2 pt-3 lg:px-8"/.test(article), `${slug}: tool card par original mobile gutter (24px) nahi`);
    // how-to-use + about + (guides) + (faq) — compass par sirf do hain
    check((article.match(/mx-auto max-w-\[48rem\] px-6 lg:px-8/g) ?? []).length >= 2, `${slug}: prose sections par original gutter nahi`);
    // pills mobile par ek row mein: chaaron pills ke liye nowrap + chhota text
    const nav = html.slice(html.indexOf('<body'), html.indexOf('</nav>'));
    const pills = nav.match(/whitespace-nowrap rounded-full px-2\.5 py-1 text-\[11px\]/g) ?? [];
    check(pills.length === 4, `${slug}: mobile pills (${pills.length}/4) compact nahi hain`);
  }

  // --- 12c. baaki site ka header waise hi (instrument chrome sirf 4 pages par) ---
  for (const url of ['/', '/blog/', '/about/', '/search/']) {
    const html = pages.get(url) ?? '';
    check(!html.includes('data-nav-pill'), `${url}: instrument nav site-wide leak ho gaya`);
  }

  // --- 13. mobile: island mobile breakpoint lock -----------------------
  for (const slug of SLUGS) {
    const html = pages.get(`/de/${slug}/`) ?? '';
    check(/max-sm:|sm:|lg:/.test(html), `${slug}: responsive breakpoint classes nahi`);
    const viewport = html.match(/<meta name="viewport" content="([^"]+)"/);
    check(Boolean(viewport) && viewport[1].includes('width=device-width'), `${slug}: viewport meta galat`);
  }

  return suite;
}

export { PAGES_PER_TOOL };
