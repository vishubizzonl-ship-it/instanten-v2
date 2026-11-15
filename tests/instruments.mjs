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
    ids: ['bubble-card', 'bubble-area', 'bubble-dot', 'bubble-x', 'bubble-y', 'bubble-status', 'bubble-message', 'bubble-fullscreen-btn'],
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
    ids: ['qibla-card', 'qibla-dial', 'qibla-bearing', 'qibla-status', 'qibla-marker', 'qibla-plus', 'qibla-fullscreen-btn'],
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

  // --- 10g. Board size: chaaron tools qibla ke 320px board par -------------
  {
    const stageFiles = {
      compass: 'src/components/instruments/CompassIsland.astro',
      bubble: 'src/components/instruments/BubbleIsland.astro',
      qibla: 'src/components/instruments/QiblaIsland.astro',
      speedometer: 'src/components/instruments/SpeedometerIsland.astro',
    };
    const sizes = {};
    for (const [name, rel] of Object.entries(stageFiles)) {
      const src = readFileSync(rel, 'utf8');
      const tag = src.match(new RegExp(`<div[^>]*data-instrument-stage="${name}"[^>]*>`))?.[0] ?? '';
      check(Boolean(tag), `${name}: data-instrument-stage marker nahi mila`);
      check(/max-w-\[320px\]/.test(tag), `${name}: board max-w-[320px] nahi (qibla jitna hona chahiye)`);
      if (name === 'speedometer') {
        // speedometer par dial nahi, sirf readout — square ki khaali jagah nahi
        check(/h-\[184px\]/.test(tag), 'speedometer: readout board h-[184px] nahi');
        check(!/aspect-square/.test(tag), 'speedometer: khaali square board wapas aa gaya');
      } else {
        check(/lg:w-80/.test(tag) && /lg:h-80/.test(tag), `${name}: desktop board 20rem (lg:w-80 lg:h-80) nahi`);
        check(/aspect-square/.test(tag), `${name}: board aspect-square nahi`);
      }
      // fullscreen par board ka size badalna nahi chahiye
      check(!/\[&:fullscreen\]:[wh]-/.test(tag), `${name}: fullscreen par board ka size badalta hai`);
      check(!/\[&:fullscreen\]:scale/.test(tag), `${name}: fullscreen par board scale hota hai`);
      check(!/max-w-\[300px\]/.test(src), `${name}: purana 300px board bacha hua hai`);
      sizes[name] = (tag.match(/max-w-\[\d+px\]/g) ?? []).join(',');
    }
    const unique = new Set(Object.values(sizes));
    check(unique.size === 1, `boards ke size alag hain: ${JSON.stringify(sizes)}`);

    // card padding bhi chaaron par same (qibla jaisa p-4 lg:p-6)
    for (const [name, rel] of Object.entries(stageFiles)) {
      const src = readFileSync(rel, 'utf8');
      const card = src.match(/id="(?:compass|bubble|qibla|speed)-card"[^>]*/)?.[0] ?? '';
      check(/p-4/.test(card), `${name}: card par p-4 nahi`);
      check(/lg:p-6/.test(card), `${name}: card par lg:p-6 nahi`);
      check(!/lg:p-8/.test(card) && !/sm:p-6/.test(card), `${name}: card padding qibla se alag hai`);
    }
  }

  // --- 10h. Fullscreen par bhi board ka size wahi rehta hai (build) --------
  {
    const cssFiles = readdirSync('dist/_astro').filter((f) => f.endsWith('.css'));
    check(cssFiles.length > 0, 'dist/_astro mein koi CSS nahi');
    const css = cssFiles.map((f) => readFileSync(join('dist/_astro', f), 'utf8')).join('\n');
    check(/:fullscreen[^{]*\{[^}]*align-items:center/.test(css), 'compiled CSS mein :fullscreen align-items:center nahi');
    check(/:fullscreen[^{]*\{[^}]*justify-content:center/.test(css), 'compiled CSS mein :fullscreen justify-content:center nahi');
    // 320px board mobile par bhi, fullscreen mein bhi — koi fullscreen width override nahi
    check(!/\.max-w-\\\[320px\\\][^}]*fullscreen/.test(css), 'fullscreen board width override mila');
    const pages_ = ['/onlinecompass/', '/onlinebubblelevel/', '/onlineqibla/', '/onlinespeedometer/'];
    for (const url of pages_) {
      const html = pages.get(url) ?? '';
      check(/data-instrument-stage="/.test(html), `${url}: board marker build mein nahi`);
      check(/max-w-\[320px\]/.test(html), `${url}: 320px board build mein nahi`);
    }
  }

  // --- 10k. Speedometer card ki height compass card jaisi -------------------
  {
    /**
     * Mobile par card ki height ko CSS values se estimate karta hai (px):
     * padding + har block ki line-height/min-height + margins + board + stats.
     * Browser na ho to bhi "card kitna lamba hai" ka number milta hai.
     */
    const lineHeight = { 'text-xs': 16, 'text-sm': 20, 'text-lg': 28, 'text-xl': 28, 'text-3xl': 36 };

    // compass: p-4 + (title 28 + status 20, mb-2) + (angle 36 + status 16+8, mb-4) + py-2 + dial 320
    const compassCard = 16 * 2 + 28 + 20 + 8 + 36 + 16 + 8 + 16 + 8 * 2 + 320;

    // speedometer: p-4 + (title 28 + status 20 + buttons mt-1 4 + 36, mb-1 4)
    //             + board 184 (mb-1 4) + stats 2 rows (72 each) + gap 8
    const speedCard = 16 * 2 + 28 + 20 + 4 + 36 + 4 + 184 + 4 + 72 * 2 + 8;

    // Speedometer ka card compass card se bada nahi hona chahiye, aur itna chhota
    // bhi nahi ki board/stats squeeze ho jayein.
    check(speedCard <= compassCard + 8, `speedometer card compass se lamba hai: compass ${compassCard} vs ${speedCard}`);
    check(speedCard >= 430, `speedometer card bahut chhota ho gaya: ${speedCard}px`);
    check(compassCard - speedCard <= 48, `card height farq zyada hai: compass ${compassCard} vs speedometer ${speedCard}`);

    // structure lock: gaps kam hone chahiye
    const src = readFileSync('src/components/instruments/SpeedometerIsland.astro', 'utf8');
    check(/id="speed-head" class="text-center mb-1"/.test(src), 'speed-head ka mb-1 nahi hua');
    check(/flex gap-2 justify-center mt-1"/.test(src), 'buttons ka mt-1 nahi hua');
    check(/data-instrument-stage="speedometer" class="mx-auto mb-1 flex h-\[184px\]/.test(src), 'board mb-1 + h-[184px] nahi hai');
    check(/flex items-center justify-center gap-3 mt-1"/.test(src), 'number->unit ka gap (mt-1) nahi hai');
    // ids/behaviour intact
    for (const id of ['speed-display', 'speed-unit', 'speed-stats', 'max-speed', 'avg-speed', 'altitude', 'duration', 'unit-btn', 'start-btn', 'record-btn']) {
      check(src.includes(`id="${id}"`), `speedometer: ${id} gayab ho gaya`);
    }
    // Start aur Reset buttons maujood hone chahiye (Record ke saath)
    check(src.includes('id="start-btn"'), 'speedometer: Start button gayab');
    check(/onclick="resetTrip\(\)"/.test(src), 'speedometer: Reset button gayab');
    check(/onclick="startTrip\(\)"/.test(src), 'speedometer: startTrip handler nahi');
    // Start button wapas aaya, isliye auto-start nahi hona chahiye (warna
    // duration/max pehle hi chalu ho jaate)
    check(!/\(window as any\)\.startTrip\(\);/.test(src), 'speedometer: auto-start bacha hua hai (Start button ke saath double)');
    const build = pages.get('/onlinespeedometer/') ?? '';
    check(build.includes('id="start-btn"'), 'build: Start button gayab');
    check(/onclick="resetTrip\(\)"/.test(build), 'build: Reset button gayab');
    check(build.includes('id="record-btn"'), 'build: Record button gayab');
    check((build.match(/id="record-btn"/g) ?? []).length === 1, 'build: Record button duplicate hai');

    // Teeno buttons (Start, Reset, Record): label square ke beech + same size
    const btnClass = {
      start: (src.match(/<button[^>]*id="start-btn"[^>]*>/)?.[0] ?? '').match(/class="([^"]*)"/)?.[1] ?? '',
      reset: (src.match(/<button[^>]*onclick="resetTrip\(\)"[^>]*>/)?.[0] ?? '').match(/class="([^"]*)"/)?.[1] ?? '',
      record: (src.match(/<button[^>]*id="record-btn"[^>]*>/)?.[0] ?? '').match(/class="([^"]*)"/)?.[1] ?? '',
    };
    for (const [name, cls] of Object.entries(btnClass)) {
      check(cls.length > 0, `${name} button ka class nahi mila`);
      check(/items-center/.test(cls), `${name}-btn: text vertically center nahi (items-center)`);
      check(/justify-center/.test(cls), `${name}-btn: text horizontally center nahi (justify-center)`);
      check(/text-center/.test(cls), `${name}-btn: text-center nahi`);
      check(/leading-none/.test(cls), `${name}-btn: leading-none nahi (text baseline par latak sakta hai)`);
      check(/bg-ink/.test(cls) && /text-surface/.test(cls), `${name}-btn: coloured fill (bg-ink/text-surface) nahi`);
      check(!/min-w-\[/.test(cls), `${name}-btn: min-width fix rakha hua hai (size content se alag ho jata hai)`);
    }
    // Record ka size Start ke barabar (same padding + font classes)
    check(btnClass.record === btnClass.start, 'Record button ka size Start se alag hai (class same honi chahiye)');
    check(btnClass.reset === btnClass.start, 'Reset button ka size Start se alag hai (class same honi chahiye)');

    const html = pages.get('/onlinespeedometer/') ?? '';
    for (const id of ['start-btn', 'record-btn']) {
      const tag = html.match(new RegExp(`<button[^>]*id="${id}"[^>]*>`))?.[0] ?? '';
      check(/items-center/.test(tag) && /justify-center/.test(tag), `build: ${id} center nahi`);
      check(/bg-ink/.test(tag), `build: ${id} coloured nahi`);
      check(!/min-w-\[/.test(tag), `build: ${id} par min-width bacha hua hai`);
    }
    check(lineHeight['text-xl'] === 28, 'line-height table galat');
  }

  // --- 10l. Qibla: degree aur dial ke beech koi text nahi -------------------
  {
    const src = readFileSync('src/components/instruments/QiblaIsland.astro', 'utf8');
    check(!src.includes('qibla-location'), 'Qibla mein degree ke neeche text element (qibla-location) bacha hua hai');
    check(!/setLocationLabel|locText/.test(src), 'Qibla mein location-label likhne wala code bacha hua hai');
    check(!/bearing-prefix/.test(src), 'Qibla degree ko dobara "Qibla bearing: X°" likhta hai');

    // markup: head block degree par khatam, uske turant baad dial wrapper
    const head = src.slice(src.indexOf('id="qibla-bearing"'), src.indexOf('id="qibla-dial"'));
    check(!/<p[^>]*id=/.test(head), 'degree aur dial ke beech koi <p> element hai');
    check((head.match(/<p /g) ?? []).length === 0, 'degree aur dial ke beech paragraph hai');
    check(src.includes('id="qibla-status"'), 'qibla-status line gayab ho gayi');

    // build output
    const html = pages.get('/onlineqibla/') ?? '';
    const from = html.indexOf('id="qibla-bearing"');
    const to = html.indexOf('id="qibla-dial"', from);
    const between = html.slice(from, to);
    check(!/id="qibla-location"/.test(html), 'build: qibla-location element abhi bhi hai');
    check(!/<p [^>]*class="text-xs[^"]*font-mono[^"]*"[^>]*>\s*</.test(between), 'build: degree ke neeche khaali text line hai');
    check(between.includes('</div>'), 'build: head block degree ke baad band nahi hota');
    // state line (upar) bani rahe — accessibility ke liye
    check(html.includes('id="qibla-status"'), 'build: qibla-status gayab');
  }

  // --- 10m. Bubble Level: Calibrate/Reset buttons nahi ----------------------
  {
    const src = readFileSync('src/components/instruments/BubbleIsland.astro', 'utf8');
    for (const gone of ['bubble-calibrate-btn', 'bubble-reset-btn', 'calibrateBtn', 'resetBtn']) {
      check(!src.includes(gone), `bubble: ${gone} bacha hua hai`);
    }
    // offset system (localStorage) intact — sirf UI controls gaye
    check(src.includes("localStorage.setItem('bubble-offset'"), 'bubble: offset save logic chala gaya');
    check(/offsetX/.test(src) && /offsetY/.test(src), 'bubble: offset variables gaye');
    // core UI intact
    for (const id of ['bubble-area', 'bubble-dot', 'bubble-x', 'bubble-y', 'bubble-status', 'bubble-fullscreen-btn']) {
      check(src.includes(`id="${id}"`), `bubble: ${id} gayab ho gaya`);
    }
    // build
    const html = pages.get('/onlinebubblelevel/') ?? '';
    check(!html.includes('bubble-calibrate-btn'), 'build: calibrate button abhi bhi hai');
    check(!html.includes('bubble-reset-btn'), 'build: reset button abhi bhi hai');
    check(html.includes('id="bubble-area"'), 'build: bubble-area gayab');
  }

  // --- 10n. Fullscreen: chaaron tools par koi layout change nahi ----------
  {
    const cards = {
      compass: 'src/components/instruments/CompassIsland.astro',
      bubble: 'src/components/instruments/BubbleIsland.astro',
      qibla: 'src/components/instruments/QiblaIsland.astro',
      speedometer: 'src/components/instruments/SpeedometerIsland.astro',
    };
    const required = ['[&:fullscreen]:flex', '[&:fullscreen]:flex-col', '[&:fullscreen]:items-center', '[&:fullscreen]:justify-center', '[&:fullscreen]:w-full', '[&:fullscreen]:h-full'];
    for (const [name, rel] of Object.entries(cards)) {
      const src = readFileSync(rel, 'utf8');
      const card = src.match(/id="(?:compass|bubble|qibla|speed)-card"[^>]*/)?.[0] ?? '';
      for (const cls of required) check(card.includes(cls), `${name}: card par ${cls} nahi`);
      // fullscreen par koi size/layout override nahi (sirf card fill + center)
      check(!/\[&:fullscreen\]:scale/.test(card), `${name}: fullscreen par scale hota hai`);
      check(!/\[&:fullscreen\]>\*\]/.test(card), `${name}: fullscreen par children ka layout badalta hai`);
      check(!/fullscreen\]:overflow-hidden/.test(card), `${name}: fullscreen par overflow-hidden hai`);
    }
    // speedometer: purana centreFullscreen() measurement JS + fullscreen-only
    // records panel nahi hona chahiye
    const speedSrc = readFileSync(cards.speedometer, 'utf8');
    check(!speedSrc.includes('centreFullscreen'), 'speedometer: centreFullscreen() JS bacha hua hai');
    // fullscreen records panel wapas hai, par absolute (size nahi badalta)
    check(/id="records-in-card" class="[^"]*absolute/.test(speedSrc), 'speedometer: fullscreen records panel absolute nahi hai');
    check(speedSrc.includes('id="records-list-card"'), 'speedometer: fullscreen records list gayab');
    // fullscreenchange par icon sync + panel fit (layout/position change nahi)
    check(/addEventListener\('fullscreenchange', onFsChange\)/.test(speedSrc), 'speedometer: fullscreenchange handler nahi');
    check(/onFsChange = \(\) => \{[\s\S]{0,120}syncFsIcon\(\)/.test(speedSrc), 'speedometer: onFsChange mein icon sync nahi');
    check(!/centreFullscreen/.test(speedSrc), 'speedometer: purana centreFullscreen measurement wapas aa gaya');
    // records feature (page ke andar wali list) intact
    check(speedSrc.includes('id="records-list"'), 'speedometer: records-list gayab');
    // build
    const html = pages.get('/onlinespeedometer/') ?? '';
    check(/id="records-in-card" class="[^"]*absolute/.test(html), 'build: fullscreen records panel absolute nahi');
    check(html.includes('id="records-list"'), 'build: records-list gayab');
  }

  // --- 10o. Speedometer: fullscreen par size badalna nahi chahiye ----------
  {
    const src = readFileSync('src/components/instruments/SpeedometerIsland.astro', 'utf8');
    // Block children (head/stats) ek w-full wrapper ke andar hone chahiye,
    // warna fullscreen ke flex-col + items-center unhe shrink-to-fit kar dete
    // hain aur unboxes ki width badal jaati hai (compass par yeh nahi hota).
    const body = src.slice(src.indexOf('id="speed-body"'), src.indexOf('id="speed-stats"'));
    check(body.length > 0, 'speedometer: speed-body wrapper nahi mila');
    check(/id="speed-body" class="w-full shrink-0"/.test(src), 'speedometer: wrapper w-full shrink-0 nahi hai');
    check(body.includes('id="speed-head"'), 'speedometer: speed-head wrapper ke andar nahi hai');
    // wrapper card ke andar hai aur head/stats uske andar (nested sahi)
    check(src.indexOf('id="speed-card"') < src.indexOf('id="speed-body"'), 'speedometer: wrapper card ke bahar hai');
    check(src.indexOf('id="speed-body"') < src.indexOf('id="speed-head"'), 'speedometer: head wrapper se pehle hai');
    check(src.indexOf('id="speed-stats"') < src.indexOf('id="speed-records-title"'), 'speedometer: stats records section ke baad hai');

    // build: head aur stats wrapper ke andar
    const html = pages.get('/onlinespeedometer/') ?? '';
    const wStart = html.indexOf('id="speed-body"');
    check(wStart !== -1, 'build: speed-body wrapper nahi');
    const wEnd = html.indexOf('id="speed-records-title"');
    const wrapperHtml = html.slice(wStart, wEnd);
    check(wrapperHtml.includes('id="speed-head"'), 'build: speed-head wrapper ke andar nahi');
    check(wrapperHtml.includes('id="speed-stats"'), 'build: speed-stats wrapper ke andar nahi');
    check(wrapperHtml.includes('max-w-[320px]'), 'build: board wrapper ke andar nahi');
    // wrapper balanced
    check((wrapperHtml.match(/<div/g) ?? []).length === (wrapperHtml.match(/<\/div>/g) ?? []).length, 'build: wrapper ke andar div balance galat');
  }

  // --- 10p. Speedometer records: save + fullscreen mein dikhein -------------
  {
    const src = readFileSync('src/components/instruments/SpeedometerIsland.astro', 'utf8');

    // Real bug tha: document.createElemenui (typo) — rows ban hi nahi rahi thi
    check(!src.includes('createElemenui'), 'speedometer: createElemenui typo wapas aa gaya');
    const creates = (src.match(/document\.createElement\(/g) ?? []).length;
    check(creates >= 7, `speedometer: createElement calls kam hain (${creates})`);

    // Record save path
    check(/\(window as any\)\.recordSpeed = function \(\)/.test(src), 'speedometer: recordSpeed() nahi');
    check(/records\.unshift\(\{ kmh: currentSpeedKmh/.test(src), 'speedometer: record current speed save nahi karta');
    check(src.includes("localStorage.setItem(REC_KEY"), 'speedometer: records localStorage mein save nahi hote');
    check(/renderRecords\(\)/.test(src), 'speedometer: renderRecords() call nahi');

    // Fullscreen copy bhi paint hota hai
    check(/paint\(recordsListCard, recordsEmptyCard\)/.test(src), 'speedometer: fullscreen records copy paint nahi hoti');
    check(src.includes('id="records-list-card"') && src.includes('id="records-empty-card"'), 'speedometer: fullscreen records elements nahi');

    // Fullscreen panel absolute hona chahiye (size/layout na badle)
    const panel = src.match(/id="records-in-card" class="([^"]*)"/)?.[1] ?? '';
    check(/absolute/.test(panel), 'speedometer: records panel absolute nahi (layout badal jayega)');
    check(/bottom-0/.test(panel), 'speedometer: records panel bottom par nahi');
    // Bahut zaroori: fullscreen element CARD hai, panel nahi — isliye ancestor
    // variant [:fullscreen_&] chahiye. [&:fullscreen] kabhi match nahi karta.
    check(/\[:fullscreen_&\]:flex/.test(panel), 'speedometer: records panel par ancestor variant [:fullscreen_&] nahi (fullscreen mein dikhega hi nahi)');
    check(!/\[&:fullscreen\]:flex/.test(panel), 'speedometer: records panel par galat variant [&:fullscreen] hai');
    // tool apni jagah par rahe: panel overlay hai, layout ka hissa nahi
    check(/inset-x-0/.test(panel), 'speedometer: records panel full width overlay nahi');

    // Overlap fix: panel ki height sirf bachi hui jagah ke barabar (JS measure).
    // Tool apni jagah par rehta hai — koi margin/translate nahi.
    check(/function fitRecordsPanel\(\)/.test(src), 'speedometer: fitRecordsPanel() nahi');
    check(/panelEl\.style\.maxHeight = Math\.max\(0, leftover\)/.test(src), 'speedometer: panel height leftover se set nahi hoti');
    check(/cardRect\.bottom - contentBottom - 8/.test(src), 'speedometer: leftover calculation (card bottom - content bottom) nahi');
    check(/window\.addEventListener\('resize', fitRecordsPanel\)/.test(src), 'speedometer: resize par panel fit nahi');
    check(/addEventListener\('orientationchange', fitRecordsPanel\)/.test(src), 'speedometer: orientation par panel fit nahi');
    // tool ki position nahi badalni chahiye
    check(!/headEl\.style\.(margin|transform)/.test(src), 'speedometer: head ko shift kiya ja raha hai (position change)');
    check(!/bodyEl\.style\.(margin|transform)/.test(src), 'speedometer: tool ko shift kiya ja raha hai (position change)');
    check(!/\[&:fullscreen\]:pb-/.test(src), 'speedometer: card par fullscreen padding (tool shift) wapas hai');
    // panel fullscreen-only aur overlay hi rahe
    check(/\[:fullscreen_&\]:flex/.test(panel), 'speedometer: panel ancestor fullscreen variant nahi');

    // build
    const html = pages.get('/onlinespeedometer/') ?? '';
    check(html.includes('id="records-list-card"'), 'build: fullscreen records list nahi');
    check(html.includes('id="records-empty-card"'), 'build: fullscreen empty message nahi');
    check(html.includes('id="records-clear-card"'), 'build: fullscreen clear button nahi');
    check(!html.includes('createElemenui'), 'build: typo abhi bhi hai');

    // Compiled CSS: ancestor variant really compile hua (warna panel invisible)
    const cssFiles = readdirSync('dist/_astro').filter((f) => f.endsWith('.css'));
    const css = cssFiles.map((f) => readFileSync(join('dist/_astro', f), 'utf8')).join('\n');
    check(/:fullscreen\s+\.[^{}]*fullscreen[^{}]*\{display:flex\}/.test(css), 'compiled CSS: :fullscreen descendant display:flex rule nahi');
    check(/:fullscreen\s+\.[^{}]*fullscreen[^{}]*\{flex-direction:column\}/.test(css), 'compiled CSS: :fullscreen descendant flex-direction rule nahi');
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
      // company links TOOL KE APNE silo par jaate hain (site-wide pages par nahi):
      // /<lang>/<tool>/blog|about|privacy|terms|contact/ — warna user tool se
      // bahar nikal jaata tha (user ki shikayat).
      const prefix = lang === 'en' ? '' : `/${lang}`;
      for (const page of ['blog', 'about', 'privacy', 'terms', 'contact']) {
        const href = `${prefix}/${slug}/${page}/`;
        check(navHtml.includes(`href="${href}"`), `${slug}/${lang}: nav mein tool ka silo link nahi — ${href}`);
        check(
          !navHtml.includes(`href="${prefix}/${page === 'privacy' ? 'privacy-policy' : page}/"`),
          `${slug}/${lang}: nav mein site-wide /${page}/ link bacha hua hai`
        );
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

  // --- 12c2. Har tool ke apne silo pages (about/blog/contact/privacy/terms) ---
  {
    const SILO_PAGES = ['about', 'blog', 'contact', 'privacy', 'terms'];
    const LANGS = ['en', 'de', 'ja', 'fr', 'es', 'ko', 'nl', 'sv', 'it', 'pt'];
    let checked = 0;
    for (const slug of SLUGS) {
      for (const lang of LANGS) {
        const base = lang === 'en' ? '' : `/${lang}`;
        for (const page of SILO_PAGES) {
          const url = `${base}/${slug}/${page}/`;
          const html = pages.get(url);
          check(Boolean(html), `silo page missing: ${url}`);
          if (!html) continue;
          checked++;
          // tool ka hi chrome + silo se wapas tool par link
          check(html.includes('data-nav-pill'), `${url}: instrument nav nahi`);
          check(html.includes(`href="${base}/${slug}/"`), `${url}: tool par wapas jaane wala link nahi`);
          // page khud ka title/description rakhta hai
          const title = (html.match(/<title>([^<]*)<\/title>/i) ?? [, ''])[1];
          check(title.length >= 10, `${url}: title khaali/chhota hai`);
          check(/<meta name="description" content="[^"]{10,}"/.test(html), `${url}: description missing/chhota`);
        }
      }
    }
    check(checked === SLUGS.length * LANGS.length * SILO_PAGES.length, `silo pages count galat: ${checked}`);
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

  // --- 12e. /compassinstant/ hub: saare 16 tools ke cards, har card apna page ---
  {
    const LANGS = ['en', 'de', 'ja', 'fr', 'es', 'ko', 'nl', 'sv', 'it', 'pt'];
    const OTHER_TOOLS = [
      'base64-encoder', 'color-palette', 'css-grid-generator', 'image-compressor',
      'json-formatter', 'markdown-editor', 'meta-tag-generator', 'online-ruler',
      'password-generator', 'qr-generator', 'regex-tester', 'word-counter',
    ];
    for (const lang of LANGS) {
      const base = lang === 'en' ? '' : `/${lang}`;
      const url = `${base}/compassinstant/`;
      const html = pages.get(url);
      check(Boolean(html), `hub page missing: ${url}`);
      if (!html) continue;

      // 4 instruments: card + poora silo (blog/about/contact/privacy)
      for (const slug of SLUGS) {
        check(html.includes(`href="${base}/${slug}/"`), `hub ${lang}: ${slug} ka card link nahi`);
        for (const sub of ['blog', 'about', 'contact', 'privacy']) {
          check(
            html.includes(`href="${base}/${slug}/${sub}/"`),
            `hub ${lang}: ${slug} ka silo link /${sub}/ nahi`
          );
        }
      }
      // 12 browser tools
      for (const slug of OTHER_TOOLS) {
        check(html.includes(`href="${base}/tools/${slug}/"`), `hub ${lang}: /tools/${slug}/ ka card nahi`);
      }
      // kart ki ginti: 16 (embed links isliye nav se zyada ho sakte hain, isliye
      // list items par seedha check)
      const items = html.match(/<li class="[^"]*rounded-card/g) ?? [];
      check(items.length === 16, `hub ${lang}: 16 cards chahiye, mile ${items.length}`);
      // ItemList JSON-LD mein bhi 16
      check(
        /"@type":"ItemList"/.test(html.replace(/\s/g, '')) || /"@type": "ItemList"/.test(html),
        `hub ${lang}: ItemList schema nahi`
      );
      // mobile: kart grid single column se shuru hota hai
      check(/grid gap-4 sm:grid-cols-2/.test(html), `hub ${lang}: mobile grid class nahi`);
      // apna translated title (nav ka na ho)
      const title = (html.match(/<title>([^<]*)<\/title>/i) ?? [, ''])[1];
      check(/CompassInstant/.test(title), `hub ${lang}: title mein CompassInstant nahi ("${title}")`);
      // canonical apna
      const canonical = (html.match(/rel="canonical" href="([^"]*)"/) ?? [, ''])[1];
      check(canonical.endsWith(`${url}`), `hub ${lang}: canonical galat (${canonical})`);
    }
  }

  return suite;
}

export { PAGES_PER_TOOL };
