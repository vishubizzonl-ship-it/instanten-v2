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
  'json-formatter': 'json-formatter',
  'base64-encoder': 'base64-encoder',
  'word-counter': 'word-counter',
  'password-generator': 'password-generator',
  'qr-generator': 'qr-generator',
  'image-compressor': 'image-compressor',
  'color-palette': 'color-palette',
  'css-grid-generator': 'css-grid-generator',
  'markdown-editor': 'markdown-editor',
  'meta-tag-generator': 'meta-tag-generator',
  'online-ruler': 'online-ruler',
  'regex-tester': 'regex-tester',
};

/** Har tool mein kam se kam itne interactive controls hone chahiye. */
const MIN_CONTROLS = 2;

export function run(pages) {
  const suite = createSuite('tools');
  const { check } = suite;

  for (const [slug, rootName] of Object.entries(TOOLS)) {
    const url = `/tools/${slug}/`;
    const html = pages.get(url);
    check(Boolean(html), `tool page missing: ${url}`);
    if (!html) continue;

    // --- 1. working UI page par hai -------------------------------------
    check(html.includes(`data-tool-root="${rootName}"`), `${slug}: tool UI (data-tool-root) nahi mila`);
    check(html.includes('id="tool"'), `${slug}: in-page tool section (#tool) nahi hai`);
    check(/Use the .* right here/.test(html), `${slug}: tool section ka heading nahi mila`);

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

    const parts = [];
    for (const body of inlineBodies) {
      if (body.includes('data-tool-root') && body.includes(rootName)) parts.push(body);
    }
    for (const src of moduleSrcs) {
      const file = 'dist' + src;
      if (!existsSync(file)) continue;
      const body = readFileSync(file, 'utf8');
      if (body.includes(`data-tool-root="${rootName}"`)) parts.push(body);
    }
    const toolScript = parts.join('\n');
    check(toolScript.length > 0, `${slug}: tool ka JS (inline ya chunk) page par nahi hai`);
    check(/addEventListener/.test(toolScript), `${slug}: tool script mein koi event binding nahi`);
    check(/data-tool-root/.test(toolScript), `${slug}: tool script root selector nahi dhoondta`);

    // --- 2b. DOM contract: script jo element dhoondta hai wo markup mein ho
    // (typo wale selector = tool chalta hua dikhta hai par dead hota hai)
    // JS-generated markup (backtick templates) ke attributes page par nahi hote
    const generatedMarkup = [...toolScript.matchAll(/`([^`]*)`/g)].map((m) => m[1]).join('\n');
    const wantedAttributes = new Set();
    for (const m of toolScript.matchAll(/data-[a-z0-9-]{3,}/g)) {
      // `data-x-${name}` jaisi dynamic templates skip karo
      if (m[0].endsWith('-')) continue;
      if (generatedMarkup.includes(m[0])) continue;
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
      const localized = pages.get(`/${lang}/tools/${slug}/`);
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
  const listing = pages.get('/tools/');
  if (listing) {
    check(!/curated SaaS/i.test(stripTags(listing)), '/tools/ par purani "curated SaaS" copy abhi bhi hai');
    const externalToolLinks = [...listing.matchAll(/href="(https?:\/\/(?!instanten\.com)[^"]+)"/g)].map((m) => m[1]);
    const toolHosts = externalToolLinks.filter((href) => !/fonts\.googleapis|fonts\.gstatic|x\.com|github\.com|instagram\.com|youtube\.com|t\.me/.test(href));
    check(toolHosts.length === 0, `/tools/ par external tool links hain: ${toolHosts.slice(0, 3).join(', ')}`);
  }

  // --- 7. "SaaS" shabd site copy se chala gaya --------------------------
  for (const [url, html] of pages) {
    if (!/^\/tools\//.test(url) && url !== '/') continue;
    check(!/\bSaaS\b/.test(stripTags(html)), `${url}: copy mein "SaaS" shabd abhi bhi hai`);
    check(!/\bPro\b/.test(stripTags(html)), `${url}: copy mein "Pro" paid-tier zikr hai`);
  }

  // --- 8. mobile CSS lock (phone Chrome par overflow na ho) -------------
  try {
    const cssFile = readdirSync('dist/_astro').find((f) => f.startsWith('Layout.') && f.endsWith('.css'));
    if (cssFile) {
      const css = readFileSync(`dist/_astro/${cssFile}`, 'utf8');
      check(css.includes('.tool-shell'), 'tools CSS build mein nahi aayi');
      check(/@media\s*\(max-width:\s*640px\)/.test(css), 'tools CSS mein mobile breakpoint nahi hai');
      check(/\.tool-row\{[^}]*flex-wrap:wrap/.test(css.replace(/\s+/g, '')) || /flex-wrap:wrap/.test(css), 'mobile: tool-row wrap nahi hota');
      check(/font-size:16px/.test(css.replace(/\s+/g, '')), 'mobile: inputs 16px nahi (auto-zoom hoga)');
    } else {
      check(false, 'Layout CSS bundle nahi mila');
    }
  } catch (error) {
    check(false, `mobile CSS check fail: ${error.message}`);
  }

  return suite;
}
