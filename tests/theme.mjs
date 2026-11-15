/**
 * Theme lock — ek hi light/dark chunav POORE site par.
 *
 * User ki requirement: dark chuna ho to kisi bhi page par jaao, sab dark;
 * light chuna ho to sab light. Isliye har page ko:
 *
 *   1. paint se PEHLE theme lagani chahiye — bootstrap `<head>` ke andar,
 *      inline (koi network round-trip nahi), warna dark site par safed flash.
 *   2. bootstrap wahi localStorage key (`theme`) padhe jo toggles likhte hain.
 *   3. `theme-color` meta bhi mode ke saath badle (mobile address bar).
 *   4. apne containers token-based rakhe — hardcoded light surface nahi.
 *   5. ek theme toggle control rakhe (redirect stubs ko chhod kar).
 */
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { createSuite } from './lib.mjs';
import vm from 'node:vm';

/** Sirf yahan hi white surface jaan-boojh kar hai: QR code ko white quiet zone chahiye. */
const WHITE_ALLOWED = ['qr-generator'];

const isRedirectStub = (html) => /http-equiv="refresh"/i.test(html);

export function run(pages, outDir) {
  const suite = createSuite('theme');
  const { check } = suite;

  // --- 1. bootstrap: inline, head ke andar, har page par --------------------
  for (const [url, html] of pages) {
    const head = html.slice(0, html.indexOf('</head>'));
    const body = html.slice(html.indexOf('<body'));

    check(head.includes('InstantenTheme'), `theme bootstrap head mein nahi :: ${url}`);
    check(!body.includes('window.InstantenTheme ='), `theme bootstrap body mein hai (paint ke baad) :: ${url}`);
    check(
      head.includes("localStorage.getItem('theme')") || head.includes('localStorage.getItem(KEYS'),
      `bootstrap saved key 'theme' nahi padhta :: ${url}`
    );
    // light/dark dono branch mojood hon
    check(/theme-color/.test(head), `theme-color meta nahi :: ${url}`);
    check(/'dark'/.test(head) && /'light'/.test(head), `bootstrap mein light/dark branch nahi :: ${url}`);

    // --- 2. toggle control (redirect stubs ke alawa) ------------------------
    if (!isRedirectStub(html)) {
      check(
        html.includes('data-cf-theme-toggle') || html.includes('tool-theme-btn'),
        `theme toggle control nahi :: ${url}`
      );
    }

    // --- 3. hardcoded light surface ----------------------------------------
    const allowed = WHITE_ALLOWED.some((slug) => url.includes(slug));
    if (!allowed) {
      check(!/\bbg-white\b/.test(html), `hardcoded bg-white container :: ${url}`);
      check(!/style="[^"]*background:\s*#?fff/i.test(html), `inline light background :: ${url}`);
    }
  }

  // --- 3b. bootstrap ko CHALAO aur natija dekho (asli functional check) -----
  // Sirf string check kaafi nahi: script ko chhote DOM stub par run karke
  // dekhte hain ki saved 'dark' par html class / data-theme / theme-color
  // sach mein badalte hain, aur 'light' par wapas.
  for (const mode of ['dark', 'light']) {
    const html = pages.get('/') ?? '';
    const match = html.match(/<script>([\s\S]*?InstantenTheme[\s\S]*?)<\/script>/);
    check(Boolean(match), `runtime: bootstrap script page se nahi mila (${mode})`);
    if (!match) break;
    const result = runBootstrap(match[1], mode);
    check(result.applied === true, `runtime ${mode}: bootstrap chal nahi raha`);
    check(result.htmlClass.includes(mode), `runtime ${mode}: html class "${mode}" nahi mili (${result.htmlClass.join(',')})`);
    check(result.dataTheme === mode, `runtime ${mode}: data-theme "${result.dataTheme}" hai, "${mode}" chahiye`);
    check(result.colorScheme === mode, `runtime ${mode}: color-scheme "${result.colorScheme}" hai`);
    const want = mode === 'dark' ? '#1C1C1C' : '#FDFDFF';
    check(
      result.themeColor === want,
      `runtime ${mode}: theme-color "${result.themeColor}" hai, "${want}" chahiye`
    );

    // toggle(): ulta mode + wahi localStorage key — yahi "yaad rehna" hai
    const flipped = mode === 'dark' ? 'light' : 'dark';
    check(result.afterToggle === flipped, `runtime ${mode}: toggle() ne mode "${result.afterToggle}" kiya`);
    check(result.storedAfterToggle === flipped, `runtime ${mode}: toggle ke baad localStorage "${result.storedAfterToggle}" hai`);
    check(
      result.classAfterToggle.includes(flipped),
      `runtime ${mode}: toggle ke baad html class "${flipped}" nahi (` + '${result.classAfterToggle.join(",")})'
    );
  }

  // --- 3c. body token-based background (hardcoded light nahi) --------------
  for (const [url, html] of pages) {
    if (isRedirectStub(html)) continue;
    const bodyTag = (html.match(/<body[^>]*>/) ?? [''])[0];
    check(
      /bg-canvas|bg-surface|bg-\[/.test(bodyTag),
      `body par token-based background class nahi :: ${url}`
    );
  }

  // --- 4. dark tokens poore hain (light ke barabar) ------------------------
  const cssDir = `${outDir}/_astro`;
  if (existsSync(cssDir)) {
    const css = readdirSync(cssDir)
      .filter((f) => f.endsWith('.css'))
      .map((f) => readFileSync(`${cssDir}/${f}`, 'utf8'))
      .join('\n');
    const darkBlock = (css.match(/\.dark\s*\{[^}]*\}/g) ?? []).join('');
    for (const token of ['--canvas', '--surface', '--ink', '--body', '--hairline', '--accent']) {
      check(darkBlock.includes(`${token}:`), `dark theme mein ${token} token nahi`);
    }
    check(/color-scheme:\s*dark/.test(darkBlock), 'dark theme mein color-scheme: dark nahi');
  }

  return suite;
}

/**
 * Chhota DOM stub: bootstrap ko node:vm mein chala kar natija return karta hai.
 * Sirf wahi API di jaati hai jo bootstrap use karta hai.
 */
function runBootstrap(code, savedTheme) {
  const htmlClasses = new Set();
  const attrs = {};
  const meta = {
    content: '#ffffff',
    media: '(prefers-color-scheme: light)',
    setAttribute(k, v) {
      if (k === 'content') this.content = v;
    },
    removeAttribute(k) {
      if (k === 'media') delete this.media;
    },
  };
  const storage = { theme: savedTheme };

  const documentElement = {
    classList: {
      toggle: (name, on) => (on ? htmlClasses.add(name) : htmlClasses.delete(name)),
      contains: (name) => htmlClasses.has(name),
      add: (name) => htmlClasses.add(name),
      remove: (name) => htmlClasses.delete(name),
    },
    style: {},
    setAttribute: (k, v) => (attrs[k] = v),
    getAttribute: (k) => attrs[k] ?? null,
    removeAttribute: (k) => delete attrs[k],
  };

  const document = {
    documentElement,
    body: null,
    addEventListener: () => {},
    dispatchEvent: () => {},
    querySelectorAll: (sel) => (sel.includes('theme-color') ? [meta] : []),
  };

  const sandbox = {
    document,
    window: {
      location: { search: '' },
      matchMedia: () => ({ matches: false }),
      addEventListener: () => {},
      dispatchEvent: () => {},
    },
    localStorage: {
      getItem: (k) => (k in storage ? storage[k] : null),
      setItem: (k, v) => (storage[k] = v),
    },
    CustomEvent: class {
      constructor(type, init) {
        this.type = type;
        this.detail = init?.detail;
      }
    },
    URLSearchParams,
    console,
  };
  sandbox.window.document = document;
  sandbox.window.localStorage = sandbox.localStorage;
  sandbox.globalThis = sandbox;

  let applied = false;
  const snapshot = { classes: [], dataTheme: null, colorScheme: null, themeColor: null };
  let afterToggle = null;
  let storedAfterToggle = null;
  try {
    vm.runInNewContext(code, sandbox, { timeout: 2000 });
    applied = typeof sandbox.window.InstantenTheme?.get === 'function';
    if (applied) {
      // pehle load-state snapshot, phir toggle (warna report post-toggle state dikhata hai)
      snapshot.classes = [...htmlClasses];
      snapshot.dataTheme = attrs['data-theme'] ?? null;
      snapshot.colorScheme = documentElement.style.colorScheme ?? null;
      snapshot.themeColor = meta.content;
      afterToggle = sandbox.window.InstantenTheme.toggle();
      storedAfterToggle = storage.theme;
    }
  } catch {
    applied = false;
  }

  return {
    applied,
    afterToggle,
    storedAfterToggle,
    classAfterToggle: [...htmlClasses],
    htmlClass: snapshot.classes,
    dataTheme: snapshot.dataTheme,
    colorScheme: snapshot.colorScheme,
    themeColor: snapshot.themeColor,
  };
}
