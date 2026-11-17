/**
 * In-page tools lock.
 *
 * instanten khud tools hub hai: har tool page par us tool ka working UI
 * hona chahiye, external "visit website" CTA nahi. Ye suite wahi pin karta hai.
 */
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { createSuite, stripTags } from './lib.mjs';

/** slug -> jis data attribute se us tool ka root pehchana jata hai */
export const TOOLS = {
  onlinecompass: 'onlinecompass',
  onlinebubblelevel: 'onlinebubblelevel',
  onlinespeedometer: 'onlinespeedometer',
  onlineqibla: 'onlineqibla',
};

/** Har tool mein kam se kam itne interactive controls hone chahiye. */
const MIN_CONTROLS = 2;

export function run(pages) {
  const suite = createSuite('tools');
  const { check } = suite;

  for (const [slug, rootName] of Object.entries(TOOLS)) {
    const url = `/${slug}/`;
    const html = pages.get(url);
    check(Boolean(html), `tool page missing: ${url}`);
    if (!html) continue;

    // --- 1. working UI page par hai -------------------------------------
    check(html.includes(`data-tool-root="${rootName}"`), `${slug}: tool UI (data-tool-root) nahi mila`);
    check(html.includes('id="tool"'), `${slug}: in-page tool section (#tool) nahi hai`);
    check(/data-tool-root/.test(html), `${slug}: instrument root nahi mila`);

    const controls =
      (html.match(/<input\b/g) || []).length +
      (html.match(/<textarea\b/g) || []).length +
      (html.match(/<select\b/g) || []).length +
      (html.match(/<button\b/g) || []).length;
    check(controls >= MIN_CONTROLS, `${slug}: sirf ${controls} controls (${MIN_CONTROLS}+ chahiye)`);

    // --- 2. tool ka apna JS page se load hota hai ------------------------
    // Astro kabhi script inline karta hai, kabhi external chunk banata hai —
    // dono case handle karo, aur tool ka script root selector se pehchano.
    const inlineBodies = [...html.matchAll(/<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/g)].map((m) => m[1]);
    const moduleSrcs = [...html.matchAll(/<script[^>]*type="module"[^>]*src="([^"]+)"/g)].map((m) => m[1]);

    // Instrument pages apna JS inline <script type="module"> ke roop mein
    // ship karte hain, generic tool pages Astro chunk ke roop mein — dono ko
    // ek hi dher mein jama karke contract check karte hain.
    const parts = [...inlineBodies];
    for (const src of moduleSrcs) {
      const file = 'dist' + src;
      if (existsSync(file)) parts.push(readFileSync(file, 'utf8'));
    }
    const toolScript = parts.join('\n');
    check(toolScript.length > 0, `${slug}: tool ka JS (inline ya chunk) page par nahi hai`);
    check(/addEventListener/.test(toolScript), `${slug}: tool script mein koi event binding nahi`);
    check(/data-tool-root|document\.querySelector|getElementById/.test(toolScript), `${slug}: instrument script root selector nahi dhoondta`);

    // --- 2b. DOM contract: script jo element dhoondta hai wo markup mein ho
    // (typo wale selector = tool chalta hua dikhta hai par dead hota hai)
    // JS-generated markup (backtick templates) ke attributes page par nahi hote
    const generatedMarkup = [...toolScript.matchAll(/`([^`]*)`/g)].map((m) => m[1]).join('\n');
    const wantedAttributes = new Set();
    for (const m of toolScript.matchAll(/data-[a-z0-9-]{3,}/g)) {
      // `data-x-${name}` jaisi dynamic templates skip karo
      if (m[0].endsWith('-')) continue;
      if (generatedMarkup.includes(m[0])) continue;
      // theme API ke attributes head script set karti hai, markup mein nahi aate
      if (['data-theme', 'data-scheme', 'data-theme-toggle'].includes(m[0])) continue;
      wantedAttributes.add(m[0]);
    }
    const markup = html.replace(/<script[^>]*>[\s\S]*?<\/script>/g, '');
    const deadSelectors = [...wantedAttributes].filter(
      (attr) => !new RegExp(`${attr}(?=[\\s=>/"']|$)`).test(markup)
    );
    check(
      deadSelectors.length === 0,
      `${slug}: script in elements ka selector page par nahi hai → ${deadSelectors.slice(0, 4).join(', ')}`
    );

    // --- 3. external tool CTA gaya ---------------------------------------
    const extToolHosts = [
      'base64.guru',
      'coolors.co',
      'cssgrid-generator.netlify.app',
      'tinypng.com',
      'jsonformatter.curiousconcept.com',
      'stackedit.io',
      'metatags.io',
      'online-ruler.com',
      'bitwarden.com',
      'qr-code-generator.com',
      'regexr.com',
      'wordcounter.net',
    ];
    for (const host of extToolHosts) {
      check(!html.includes(host), `${slug}: purana external tool link (${host}) abhi bhi page par hai`);
    }
    check(
      !/target="_blank"[^>]*rel="noopener noreferrer"[^>]*>\s*(Visit|Open)/i.test(html),
      `${slug}: external "visit" CTA abhi bhi maujood hai`
    );

    // --- 4. localStorage/privacy claim page par sach ho ------------------
    check(/browser/i.test(stripTags(html)), `${slug}: "runs in your browser" wali baat nahi hai`);

    // --- 5. localized pages: tool UI wahan bhi chale ---------------------
    for (const lang of ['de', 'ja', 'pt']) {
      const localized = pages.get(`/${lang}/${slug}/`);
      check(Boolean(localized), `${slug}: /${lang}/ version nahi bana`);
      if (localized) {
        check(
          localized.includes(`data-tool-root="${rootName}"`),
          `${slug}/${lang}: localized page par tool UI nahi hai`
        );
      }
    }
  }

  // --- 6. listing page se bhi external hop na ho ------------------------
  const listing = pages.get('/');
  if (listing) {
    check(!/curated SaaS/i.test(stripTags(listing)), 'home par purani "curated SaaS" copy abhi bhi hai');
    const externalToolLinks = [...listing.matchAll(/href="(https?:\/\/(?!instanten\.com)[^"]+)"/g)].map((m) => m[1]);
    const toolHosts = externalToolLinks.filter((href) => !/fonts\.googleapis|fonts\.gstatic|x\.com|github\.com|instagram\.com|youtube\.com|t\.me/.test(href));
    check(toolHosts.length === 0, `home par external tool links hain: ${toolHosts.slice(0, 3).join(', ')}`);
  }

  // --- 7. "SaaS" shabd site copy se chala gaya --------------------------
  for (const [url, html] of pages) {
    if (!/^\/tools\//.test(url) && url !== '/') continue;
    check(!/\bSaaS\b/.test(stripTags(html)), `${url}: copy mein "SaaS" shabd abhi bhi hai`);
    check(!/\bPro\b/.test(stripTags(html)), `${url}: copy mein "Pro" paid-tier zikr hai`);
  }

  // --- 8. styling: sirf Tailwind v4 utilities (koi alag hand-written CSS nahi) ---
  try {
    const cssFile = readdirSync('dist/_astro').find((f) => f.startsWith('Layout.') && f.endsWith('.css'));
    if (!cssFile) {
      check(false, 'Layout CSS bundle nahi mila');
    } else {
      const css = readFileSync(`dist/_astro/${cssFile}`, 'utf8');
      const compact = css.replace(/\s+/g, '');

      // tools ke pages ke markup mein purani .tool-* classes wapas na aayein
      const page = pages.get('/onlinecompass/') ?? '';
      check(!/class="[^"]*\btool-(shell|btn|input|textarea|table|swatch)\b/.test(page), 'instrument markup mein purani .tool-* class wapas aa gayi');

      // Tailwind utilities CSS mein sach mein hain
      check(compact.includes('.rounded-2xl'), 'Tailwind utility (rounded-2xl) build CSS mein nahi hai');
      check(compact.includes('border-border-hairline') || compact.includes('--color-border-hairline'), 'hairline token CSS mein nahi');
      check(compact.includes('--accent:#514dcc') || compact.includes('var(--accent)'), 'accent token CSS mein nahi');

      // mobile: instrument pages par text inputs nahi hain (iOS auto-zoom ka
      // sawaal hi nahi), isliye purane max-sm/16px locks hata diye gaye hain.
      check(/sm:|lg:/.test(page), 'instrument markup mein responsive breakpoints nahi hain');
      check(compact.includes('@media(max-width:40rem)') || compact.includes('@media(max-width:640px)'), 'mobile breakpoint CSS mein nahi');

      // aapke design tokens (compilefuture) — grey/purple hard-code nahi
      check(!/#17171c|#6b6b7b|#9a9ab0/i.test(page), 'tool markup mein token ke bahar ka rang hard-coded hai');
    }
  } catch (error) {
    check(false, `styling check fail: ${error.message}`);
  }

  return suite;
}
