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

export function run(pages) {
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
      check(text.length > 3000, `${slug}/${lang}: page par long-form copy nahi (${text.length} chars)`);

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
  const hub = pages.get('/tools/') ?? '';
  check(Boolean(hub), '/tools/ page nahi mila');
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
    const langHub = pages.get(`/${lang}/tools/`) ?? '';
    const listed = SLUGS.filter((slug) => langHub.includes(`href="/${lang}/${slug}/"`));
    check(listed.length === SLUGS.length, `/${lang}/tools/ par ${SLUGS.length - listed.length} sensor card gayab`);
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

  // --- 12c. baaki site ka header waise hi (instrument chrome sirf 4 pages par) ---
  for (const url of ['/', '/tools/', '/blog/', '/about/']) {
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
