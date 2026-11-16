/**
 * AGENTS.md ke rules ka automated lock — `node tests/run.mjs` mein shamil.
 *
 * Rule 1 : sirf wahi 8 cheezein, "koi naya package/framework/tool nahi"
 * Rule 2 : design tokens = compilefuture.com wale (koi bahar ka rang nahi)
 * Rule 7 : saara styling Tailwind CSS v4 (koi alag hand-written CSS nahi)
 *
 * Ye suite source code padhta hai (dist nahi), isliye har build par chalta hai.
 */
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { createSuite } from './lib.mjs';

/** Rule 1: runtime dependency sirf Astro. Baaki sab devDependencies. */
const ALLOWED_DEPENDENCIES = ['astro'];
/** Rule 1: ye devDependencies pehle se thi (Astro project ka hissa). */
const ALLOWED_DEV_DEPENDENCIES = [
  '@astrojs/check',
  '@astrojs/rss',
  '@astrojs/sitemap',
  '@tailwindcss/postcss',
  'autoprefixer',
  'postcss',
  'tailwindcss',
  'typescript',
  'vitest',
];

/** Rule 2: compilefuture tokens + neutral white/black (QR ke liye). */
const TOKEN_HEX = new Set([
  '#fdfdff',
  '#f8f7ff',
  '#ffffff',
  '#29294b',
  '#696981',
  '#828282',
  '#e1e1e8',
  '#f0f0f0',
  '#514dcc',
  '#9895ff',
  '#3b2f8a',
  '#eae8fd',
  '#067647',
  '#ecfdf3',
  '#ab570a',
  '#fff6e5',
  '#f2f2f6',
  '#1c1c1c',
  '#222222',
  '#000000',
]);

export function run() {
  const suite = createSuite('rules');
  const { check } = suite;

  /* ---------- Rule file: RULES.md hi ek hi source of truth ---------- */
  check(existsSync('RULES.md'), 'RULES.md gayab hai (combined rule file honi chahiye)');
  if (existsSync('RULES.md')) {
    const rules = readFileSync('RULES.md', 'utf8');
    const required = [
      ['Rule 1', 'Rule 1 (8 cheezein) ka heading'],
      ['Rule 2', 'Rule 2 (design tokens) ka heading'],
      ['Rule 3', 'Rule 3 (jo kaam bola hai wahi karo) ka heading'],
      ['Rule 3.1', 'Rule 3.1 (check + report) ka heading'],
      ['na kam, na zyada', 'user ki ek-line rule'],
      ['kya banaya → kaise check kiya → pass/fail + saboot', 'report format'],
      ['compilefuture.com', 'design source'],
      ['Koi naya package / framework / tool nahi', 'no-new-package rule'],
    ];
    for (const [needle, label] of required) {
      check(rules.includes(needle), `RULES.md mein ${label} missing hai (${needle})`);
    }
    // token table bhi wahi honi chahiye (Rule 2)
    for (const token of ['#29294B', '#696981', '#5955D1', '#E1E1E8', 'DM Sans']) {
      check(rules.toUpperCase().includes(token.toUpperCase()), `RULES.md mein compilefuture token ${token} missing`);
    }
    // Standing orders user ne NAHI maange the — rule file mein wapas na aayein
    check(!/^## Standing orders/m.test(rules), 'RULES.md mein standing orders wapas aa gaye (user ne nahi maange)');
    check(!/^## Standing orders/m.test(readFileSync('AGENTS.md', 'utf8')), 'AGENTS.md mein standing orders wapas aa gaye (user ne nahi maange)');

    // AGENTS.md = auto-loaded file: usme bhi poore rules inline hone chahiye
    const agents = readFileSync('AGENTS.md', 'utf8');
    check(agents.includes('RULES.md'), 'AGENTS.md RULES.md ko point nahi karta');
    for (const [needle, label] of [
      ['## Rule 1', 'Rule 1 heading'],
      ['## Rule 2', 'Rule 2 heading'],
      ['## Rule 3', 'Rule 3 heading'],
      ['## Rule 3.1', 'Rule 3.1 heading'],
      ['na kam, na zyada', 'ek-line rule'],
      ['kya banaya → kaise check kiya → pass/fail + saboot', 'report format'],
      ['Reading ka tareeka'.replace('Reading ka tareeka', 'Kaam karne ka tareeka'), 'har-command workflow'],
    ]) {
      check(agents.includes(needle), `AGENTS.md mein ${label} inline nahi hai (${needle})`);
    }
    for (const token of ['#29294B', '#696981', '#5955D1', '#E1E1E8', 'DM Sans']) {
      check(agents.toUpperCase().includes(token.toUpperCase()), `AGENTS.md mein token ${token} missing`);
    }
  }

  /* ---------- Rule 1: koi naya package nahi ---------- */
  const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
  const deps = Object.keys(pkg.dependencies ?? {});
  const devDeps = Object.keys(pkg.devDependencies ?? {});

  for (const dep of deps) {
    check(ALLOWED_DEPENDENCIES.includes(dep), `Rule 1: naya runtime package — ${dep}`);
  }
  for (const dep of devDeps) {
    check(ALLOWED_DEV_DEPENDENCIES.includes(dep), `Rule 1: naya dev package — ${dep}`);
  }
  check(deps.length === 1 && deps[0] === 'astro', `Rule 1: dependencies sirf astro honi chahiye (mile: ${deps.join(', ') || 'kuch nahi'})`);

  /* ---------- Rule 7: styling sirf Tailwind v4 ---------- */
  const toolFiles = readdirSync('src/components/tools').filter((f) => f.endsWith('.astro'));
  check(toolFiles.length === 12, `Rule 7: 12 tool components hone chahiye (mile ${toolFiles.length})`);

  const styles = readdirSync('src/styles');
  check(!styles.includes('tools.css'), 'Rule 7: alag tools.css wapas aa gayi (Tailwind use karo)');

  let utilityClasses = 0;
  for (const file of toolFiles) {
    const source = readFileSync(`src/components/tools/${file}`, 'utf8');
    const path = `src/components/tools/${file}`;

    check(!/<style[\s>]/.test(source), `Rule 7: ${path} mein <style> block hai (Tailwind utilities chahiye)`);
    check(!/\bclass="[^"]*\btool-[a-z]/.test(source), `Rule 7: ${path} mein custom .tool-* class hai`);

    const classes = [...source.matchAll(/class="([^"]*)"/g)].map((m) => m[1]).join(' ');
    if (/(^|\s)(flex|grid|rounded-|text-|border|bg-|p-|m-|gap-)/.test(classes)) utilityClasses++;

    // Rule 1: koi external library import nahi (apna core/qr lib chhod ke)
    for (const match of source.matchAll(/import\s+(?:([\w{}*,\s]+)\s+from\s+)?['"]([^'"]+)['"]/g)) {
      const specifier = match[2];
      const allowed = specifier.startsWith('./') || specifier.startsWith('../') || specifier.startsWith('astro');
      check(allowed, `Rule 1: ${path} external package import karta hai — ${specifier}`);
    }

    // Rule 2: sirf approved tokens ke rang (QR canvas ke white/black allowed)
    for (const hex of source.matchAll(/#[0-9a-fA-F]{6}\b/g)) {
      check(TOKEN_HEX.has(hex[0].toLowerCase()), `Rule 2: ${path} mein token ke bahar ka rang — ${hex[0]}`);
    }
  }
  check(utilityClasses === 12, `Rule 7: sirf ${utilityClasses}/12 tool components Tailwind utilities use karte hain`);

  /* ---------- Rule 1: tools ka library code bhi apna ---------- */
  const coreFiles = readdirSync('src/lib/tools');
  check(coreFiles.includes('core.mjs'), 'Rule 1: src/lib/tools/core.mjs gayab hai');
  check(coreFiles.includes('qr.mjs'), 'Rule 1: apna QR encoder (src/lib/tools/qr.mjs) gayab hai');
  check(!existsSync('node_modules/qrcode-generator'), 'Rule 1: qrcode-generator package abhi bhi installed hai');
  const qrSource = readFileSync('src/lib/tools/qr.mjs', 'utf8');
  check(!/from\s+['"]qrcode/.test(qrSource), 'Rule 1: qr.mjs kisi package se import karta hai');

  /* ---------- Rule 2: tool pages ke tokens sach mein compilefuture ke ---------- */
  const layout = readFileSync('src/styles/app.css', 'utf8');
  for (const [name, value] of [
    ['--ink', '#29294B'],
    ['--hairline', '#E1E1E8'],
    ['--accent', '#514DCC'],
    ['--accent-start', '#9895FF'],
    ['--accent-end', '#514DCC'],
  ]) {
    check(
      new RegExp(`${name}:\\s*${value}`, 'i').test(layout),
      `Rule 2: token ${name} compilefuture value (${value}) par nahi hai`
    );
  }
  for (const [name, value] of [
    ['--danger', '#b42318'],
    ['--danger-soft', '#fef3f2'],
  ]) {
    check(new RegExp(`${name}:\\s*${value}`, 'i').test(layout), `Rule 2: token ${name} app.css mein nahi`);
    check(layout.includes(`--color-${name.slice(2)}: var(${name})`), `Rule 2: token ${name} Tailwind theme se juda nahi`);
  }
  check(/font-family:[^;]*DM Sans/i.test(layout) || /--font-display:[^;]*DM Sans/i.test(layout), 'Rule 2: DM Sans font token nahi mila');

  /* ---------- Contact form: asli transport, jhootha "sent" nahi ---------- */
  const submitLib = readFileSync('src/lib/contactSubmit.ts', 'utf8');
  check(submitLib.includes('fetch('), 'Contact: submit logic mein asli network transport (fetch) nahi hai');
  check(submitLib.includes('mailto:'), 'Contact: mailto fallback nahi hai (Worker na ho to form kaam karna chahiye)');
  check(submitLib.includes('sendViaWorker'), 'Contact: Cloudflare Worker transport missing');
  check(submitLib.includes('sendViaWeb3Forms'), 'Contact: backup transport missing');

  /* Cloudflare-only path: Worker + send_email binding (koi third-party service nahi) */
  check(existsSync('worker/index.mjs'), 'Cloudflare: worker/index.mjs gayab hai');
  const workerSrc = readFileSync('worker/index.mjs', 'utf8');
  check(workerSrc.includes('env.EMAIL.send'), 'Cloudflare: worker send_email binding use nahi karta');
  check(workerSrc.includes("'/api/contact'"), 'Cloudflare: worker /api/contact route nahi karta');
  check(workerSrc.includes('env.ASSETS.fetch'), 'Cloudflare: worker static assets serve nahi karta');
  check(workerSrc.includes('replyTo'), 'Cloudflare: worker Reply-To set nahi karta (visitor ko seedha reply)');
  check(workerSrc.includes('botcheck'), 'Cloudflare: worker honeypot check nahi karta');
  check(/cf-connecting-ip/.test(workerSrc), 'Cloudflare: worker rate limit (per-IP) nahi karta');
  check(/origin/i.test(workerSrc), 'Cloudflare: worker origin check nahi karta');

  check(existsSync('wrangler.jsonc'), 'Cloudflare: wrangler.jsonc gayab hai');
  const wrangler = readFileSync('wrangler.jsonc', 'utf8');
  check(/"send_email"/.test(wrangler), 'Cloudflare: wrangler.jsonc me send_email binding nahi');
  check(/destination_address/.test(wrangler), 'Cloudflare: send_email binding kisi fixed address par locked nahi');
  check(/"directory":\s*"\.\/dist"/.test(wrangler), 'Cloudflare: wrangler.jsonc static assets = ./dist nahi');
  check(/"main":\s*"worker\/index\.mjs"/.test(wrangler), 'Cloudflare: wrangler.jsonc main worker nahi');
  check(existsSync('worker/contact.test.mjs'), 'Cloudflare: worker test file gayab hai');

  // Third-party form services (Web3Forms/Formspree) primary path nahi hone chahiye
  const contactCfg2 = readFileSync('src/config/contact.ts', 'utf8');
  check(contactCfg2.includes("'/api/contact'"), 'Contact config: CONTACT_API_PATH /api/contact nahi hai');

  for (const file of ['src/components/ContactForm.astro', 'src/components/pages/ContactPage.astro']) {
    const src = readFileSync(file, 'utf8');
    check(src.includes('wireContactForm'), `${file}: shared submit logic (wireContactForm) use nahi karta`);
    check(!/style\.display\s*=\s*['"]block['"]\s*;?\s*\n?\s*form\.reset/.test(src), `${file}: purana fake-success pattern (display=block + reset) wapas aa gaya`);
    check(src.includes('name="botcheck"'), `${file}: honeypot (name="botcheck") missing`);
    check(src.includes('data-live'), `${file}: data-live flag missing (live vs mailto mode)`)
  }

  const contactCfg = readFileSync('src/config/contact.ts', 'utf8');
  check(/PUBLIC_EMAIL\s*=\s*'[^']+@[^']+'/.test(contactCfg), 'Contact config: PUBLIC_EMAIL missing');
  check(/DELIVERY_EMAIL\s*=\s*'[^']+@[^']+'/.test(contactCfg), 'Contact config: DELIVERY_EMAIL missing');
  check(contactCfg.includes('helloinstanten@gmail.com'), 'Contact config: public email helloinstanten@gmail.com nahi hai');
  check(contactCfg.includes('vishubizz.onl@gmail.com'), 'Contact config: delivery inbox vishubizz.onl@gmail.com nahi hai');

  // Retired address (hello@instanten.com) poore source me kahin na ho
  const retired = [];
  const walk = (dir) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const p = `${dir}/${entry.name}`;
      if (entry.isDirectory()) walk(p);
      else if (/\.(astro|ts|mjs|json|md|txt)$/.test(entry.name)) {
        if (readFileSync(p, 'utf8').includes('hello@instanten.com')) retired.push(p);
      }
    }
  };
  walk('src');
  check(retired.length === 0, `Contact: purana address hello@instanten.com ${retired.length} file(s) me bacha hai — ${retired.slice(0, 3).join(', ')}`);

  /* ---------- Thin tag pages: noindex threshold ek hi jagah ---------- */
  check(existsSync('src/utils/tagIndexable.ts'), 'Tag indexability helper (src/utils/tagIndexable.ts) gayab hai');
  const tagIdx = readFileSync('src/utils/tagIndexable.ts', 'utf8');
  check(/MIN_TOOLS_FOR_INDEX\s*=\s*3/.test(tagIdx), 'Thin tag threshold 3 nahi hai');
  for (const file of ['src/pages/tag/[slug].astro', 'src/pages/[lang]/tag/[slug].astro']) {
    const src = readFileSync(file, 'utf8');
    check(src.includes('isTagIndexable'), `${file}: isTagIndexable use nahi hota`);
    check(/noindex=\{!tagIndexable\}/.test(src), `${file}: noindex={!tagIndexable} missing`);
  }

  /* ---------- public/ me unused OG assets na padein ---------- */
  const ogFiles = readdirSync('public').filter((f) => /^og-.*\.(svg|png)$/.test(f));
  for (const f of ogFiles) {
    if (!f.endsWith('.svg')) continue;
    // SVG ko social crawlers ignore karte hain — sirf tab theek hai jab kahin use ho
    let used = false;
    const scan = (dir) => {
      for (const entry of readdirSync(dir, { withFileTypes: true })) {
        const p = `${dir}/${entry.name}`;
        if (entry.isDirectory()) scan(p);
        else if (/\.(astro|ts|md|json|mjs)$/.test(entry.name)) {
          if (readFileSync(p, 'utf8').includes(f)) used = true;
        }
      }
    };
    scan('src');
    check(used, `public/${f} kahin use nahi hota — delete kar dein`);
  }

  /* ---------- Regressions jo functional audit me mile (Nov 2026) ---------- */

  // 1. Header me search trigger hona chahiye — warna SearchPanel ka koi raasta nahi.
  const header = readFileSync('src/components/Header.astro', 'utf8');
  const triggers = (header.match(/data-search-open/g) || []).length;
  check(triggers >= 2, `Header me search button nahi (mobile + desktop chahiye, mile ${triggers})`);
  check(
    readFileSync('src/layouts/Layout.astro', 'utf8').includes('<SearchPanel />'),
    'Layout me SearchPanel mount nahi hai'
  );
  check(
    (header.match(/aria-controls="search-panel"/g) || []).length >= 2,
    'Header ke search buttons par aria-controls="search-panel" nahi'
  );
  // Mobile bar aur desktop bar — dono me ek-ek button.
  const mobileBar = header.slice(header.indexOf('data-mobile-bar'), header.indexOf('data-desktop-bar'));
  const desktopBar = header.slice(header.indexOf('data-desktop-bar'));
  check(mobileBar.includes('data-search-open'), 'Mobile bar me search button nahi');
  check(desktopBar.includes('data-search-open'), 'Desktop bar me search button nahi');

  // 2. Tool pages har locale me hain — language picker unhe localize kar sake.
  const i18nUtils = readFileSync('src/i18n/utils.ts', 'utf8');
  const prefixesBlock = i18nUtils.slice(i18nUtils.indexOf('localizedPrefixes'), i18nUtils.indexOf('];', i18nUtils.indexOf('localizedPrefixes')));
  check(prefixesBlock.includes("'/tools'"), "localizedPrefixes me '/tools' nahi — tool page par language switch kaam nahi karega");

  // 3. Error pages ke language links khud error page par na jaayein.
  const picker = readFileSync('src/components/LanguagePicker.astro', 'utf8');
  check(picker.includes('rootErrorMatch'), 'LanguagePicker root error pages (404.html) handle nahi karta — self-links banenge');

  // 4. Silo error page ka "Try again" dead URL na ho (Astro.url.pathname se /500/ banta tha).
  const toolError = readFileSync('src/components/pages/ToolErrorPage.astro', 'utf8');
  check(!/href=\{Astro\.url\.pathname\}/.test(toolError), 'ToolErrorPage "Try again" link dead URL bana raha hai — location.reload() use karo');

  return suite;
}

