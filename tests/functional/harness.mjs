/**
 * Harness: built page ko jsdom me chalaata hai — Astro ke inline module
 * scripts bhi manually import hote hain — taaki buttons/inputs ka asli
 * behaviour test ho sake (sirf HTML padhna nahi).
 */
import { readFileSync, existsSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import path from 'node:path';
import { JSDOM, VirtualConsole } from 'jsdom';

export const ROOT = process.cwd();
// `node tests/functional/XX.mjs [distDir]` — default dist
const distArg = process.argv[2] && !process.argv[2].startsWith('-') ? process.argv[2] : 'dist';
export const DIST = path.resolve(ROOT, distArg);

const pagePath = (route) => {
  const clean = route.replace(/^\//, '');
  if (/\.html$/.test(clean)) return path.join(DIST, clean);       // /404.html
  if (clean === '') return path.join(DIST, 'index.html');
  return path.join(DIST, clean.replace(/\/$/, ''), 'index.html');
};

export async function open(route, opts = {}) {
  const file = pagePath(route);
  if (!existsSync(file)) throw new Error(`page not found: ${route} (${file})`);
  const html = readFileSync(file, 'utf8');

  const errors = [];
  const vc = new VirtualConsole();
  vc.on('jsdomError', (e) => {
    const msg = String(e.message || e);
    // hamesha aane wali noise ignore karo
    if (/Could not parse CSS|Not implemented: navigation|Could not load img/.test(msg)) return;
    errors.push(msg);
  });
  vc.on('error', (m) => errors.push(String(m)));

  const dom = new JSDOM(html, {
    url: `https://instanten.com/${route.replace(/^\//, '')}${opts.query || ''}`,
    runScripts: 'dangerously',
    pretendToBeVisual: true,
    virtualConsole: vc,
  });
  const { window } = dom;

  // ---- browser APIs jo jsdom nahi deta ----
  window.matchMedia ??= (q) => ({
    matches: /dark/.test(q) ? false : false,
    media: q,
    addEventListener() {},
    removeEventListener() {},
    addListener() {},
    removeListener() {},
    onchange: null,
    dispatchEvent: () => false,
  });
  class RO {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  window.ResizeObserver ??= RO;
  window.IntersectionObserver ??= class extends RO {
    constructor(cb) {
      super();
      this.cb = cb;
    }
    observe(el) {
      this.cb([{ target: el, isIntersecting: true, intersectionRatio: 1 }], this);
    }
  };
  window.scrollTo = () => {};
  // jsdom isSecureContext nahi deta — sensor scripts isi par ruk jaate hain
  Object.defineProperty(window, 'isSecureContext', { value: true, configurable: true });
  Object.defineProperty(window.navigator, 'isSecureContext', { value: true, configurable: true });
  window.HTMLElement.prototype.scrollIntoView ??= function () {};

  // clipboard: jsdom me nahi hota
  const clip = { text: '', writeText: async (t) => { clip.text = String(t); }, readText: async () => clip.text };
  Object.defineProperty(window.navigator, 'clipboard', { value: clip, configurable: true });
  window.__clipboard = clip;

  // node globals ko window se jodo, taaki module scripts chalein
  const globals = [
    'window', 'document', 'navigator', 'location', 'history', 'localStorage', 'sessionStorage',
    'HTMLElement', 'Element', 'Node', 'NodeList', 'Event', 'CustomEvent', 'MouseEvent',
    'KeyboardEvent', 'PointerEvent', 'InputEvent', 'FocusEvent', 'SubmitEvent',
    'getComputedStyle', 'requestAnimationFrame', 'cancelAnimationFrame', 'matchMedia',
    'ResizeObserver', 'IntersectionObserver', 'Blob', 'URL', 'FormData', 'DOMParser',
    'HTMLInputElement', 'HTMLTextAreaElement', 'HTMLSelectElement', 'HTMLButtonElement',
    'DocumentFragment', 'MutationObserver', 'CSS', 'Image', 'fetch', 'Headers', 'Request', 'Response',
    'DeviceOrientationEvent', 'DeviceMotionEvent',
  ];
  const saved = {};
  for (const g of globals) {
    saved[g] = Object.prototype.hasOwnProperty.call(globalThis, g) ? globalThis[g] : undefined;
    if (window[g] === undefined) continue;
    try {
      globalThis[g] = window[g];
    } catch {
      // node ke kuch globals (navigator) read-only hote hain — define karke set karo
      try {
        Object.defineProperty(globalThis, g, { value: window[g], configurable: true, writable: true });
      } catch {}
    }
  }
  globalThis.window = window;
  globalThis.self = window;
  globalThis.document = window.document;

  // Sensor events: jsdom me nahi hote — har page par available rakho
  if (!window.DeviceOrientationEvent) {
    window.DeviceOrientationEvent = class extends window.Event {
      constructor(type, init = {}) {
        super(type, init);
        this.alpha = init.alpha ?? 0;
        this.beta = init.beta ?? 0;
        this.gamma = init.gamma ?? 0;
        this.absolute = init.absolute ?? true;
      }
    };
    window.DeviceOrientationEvent.requestPermission = async () => 'granted';
  }
  if (!window.DeviceMotionEvent) {
    window.DeviceMotionEvent = class extends window.Event {
      constructor(type, init = {}) {
        super(type, init);
        this.accelerationIncludingGravity = init.accelerationIncludingGravity ?? { x: 0, y: 0, z: 9.8 };
        this.interval = 16;
      }
    };
    window.DeviceMotionEvent.requestPermission = async () => 'granted';
  }

  // jsdom me SVG ki geometry API aur canvas nahi hota — browser jaisa stub.
  const proto = window.SVGElement?.prototype;
  if (proto) {
    proto.getTotalLength ??= () => 100;
    proto.getPointAtLength ??= () => ({ x: 0, y: 0 });
  }
  const ctxStub = () => {
    const noop = () => {};
    return new Proxy(
      { fillStyle: '#000', strokeStyle: '#000', lineWidth: 1, canvas: null, font: '10px sans-serif' },
      { get: (t, k) => (k in t ? t[k] : noop), set: (t, k, v) => ((t[k] = v), true) }
    );
  };
  window.HTMLCanvasElement.prototype.getContext = function () {
    return ctxStub();
  };
  window.HTMLCanvasElement.prototype.toDataURL = () => 'data:image/png;base64,AAAA';
  window.HTMLCanvasElement.prototype.toBlob = (cb) => cb(new window.Blob([''], { type: 'image/png' }));

  // page-specific stubs (sensors, geolocation) — scripts chalne se PEHLE
  if (typeof opts.setup === 'function') await opts.setup(window);

  // ---- module scripts chalao ----
  const scripts = [...window.document.querySelectorAll('script[type="module"]')];
  const loaded = [];
  for (const s of scripts) {
    const src = s.getAttribute('src');
    try {
      if (src) {
        const rel = src.replace(/^\//, '');
        const abs = path.join(DIST, rel);
        if (!existsSync(abs)) {
          errors.push(`module missing: ${src}`);
          continue;
        }
        await import(pathToFileURL(abs).href + `?t=${Date.now()}-${loaded.length}`);
        loaded.push(src);
      } else {
        const code = s.textContent || '';
        if (!code.trim()) continue;
        // Har page ke liye URL alag rakho: ek hi data: URL dobara import karne par
        // Node cached module lautata hai aur script dobara CHALTI hi nahi — phir
        // naye document par koi listener bind nahi hota (test jhoothmot FAIL deta).
        const unique = code + `\n// harness-run:${Date.now()}-${loaded.length}`;
        await import('data:text/javascript;base64,' + Buffer.from(unique).toString('base64'));
        loaded.push('inline#' + loaded.length);
      }
    } catch (e) {
      errors.push(`script error (${src || 'inline'}): ${e.message}`);
    }
  }

  const settle = async (ms = 30) => {
    await new Promise((r) => setTimeout(r, ms));
    await new Promise((r) => window.requestAnimationFrame?.(() => r()) || r());
  };
  await settle();

  const $ = (sel) => window.document.querySelector(sel);
  const $$ = (sel) => [...window.document.querySelectorAll(sel)];

  const click = (elOrSel) => {
    const el = typeof elOrSel === 'string' ? $(elOrSel) : elOrSel;
    if (!el) throw new Error(`click: element nahi mila :: ${elOrSel}`);
    el.dispatchEvent(new window.MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
    return el;
  };

  const type = (sel, value) => {
    const el = typeof sel === 'string' ? $(sel) : sel;
    if (!el) throw new Error(`type: element nahi mila :: ${sel}`);
    el.focus?.();
    if ('value' in el) el.value = value;
    el.dispatchEvent(new window.Event('input', { bubbles: true }));
    el.dispatchEvent(new window.Event('change', { bubbles: true }));
    return el;
  };

  const cleanup = () => {
    try { dom.window.close(); } catch {}
    for (const g of globals) {
      try {
        if (saved[g] === undefined) delete globalThis[g];
        else Object.defineProperty(globalThis, g, { value: saved[g], configurable: true, writable: true });
      } catch {}
    }
    delete globalThis.self;
  };

  return { dom, window, document: window.document, $, $$, click, type, settle, errors, loaded, cleanup, route };
}

/** rolling test collector */
export function reporter() {
  const results = [];
  return {
    ok(name, detail = '') {
      results.push({ name, pass: true, detail });
      console.log(`  \x1b[32mPASS\x1b[0m ${name}${detail ? ` — ${detail}` : ''}`);
    },
    fail(name, detail = '') {
      results.push({ name, pass: false, detail });
      console.log(`  \x1b[31mFAIL\x1b[0m ${name}${detail ? ` — ${detail}` : ''}`);
    },
    check(name, cond, detail = '') {
      cond ? this.ok(name, detail) : this.fail(name, detail);
      return !!cond;
    },
    section(t) {
      console.log(`\n\x1b[1m${t}\x1b[0m`);
    },
    results,
    summary() {
      const fail = results.filter((r) => !r.pass);
      console.log(`\n  ${results.length} checks · ${results.length - fail.length} pass · ${fail.length} fail`);
      return fail;
    },
  };
}
