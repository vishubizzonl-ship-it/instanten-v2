/** 02 — 12 tool pages: input → button → output, asli DOM me. */
import { open, reporter } from './harness.mjs';
import { TOOL_ROUTES, txt } from './routes.mjs';

const r = reporter();
r.section('02 — Tools (12 pages)');

async function run(slug, fn) {
  const route = TOOL_ROUTES[slug];
  let p;
  try {
    p = await open(route);
    if (p.errors.length) r.fail(`${slug}: script errors`, p.errors.join(' | '));
    await fn(p);
  } catch (e) {
    r.fail(`${slug}: exception`, e.message);
  } finally {
    p?.cleanup();
  }
}

// ---------------------------------------------------------------- JSON
await run('json-formatter', async (p) => {
  p.type('[data-json-input]', '{"a":1,"b":[2,3]}');
  p.click('[data-json-format]');
  await p.settle(50);
  const out = p.$('[data-json-out]').textContent;
  r.check('json: Format → indented JSON', out.includes('\n  "a": 1') && out.includes('\n    2,'), JSON.stringify(out.slice(0, 30)));
  r.check('json: meta line (lines/chars)', /line/i.test(txt(p.$('[data-json-meta]'))), txt(p.$('[data-json-meta]')));
  p.click('[data-json-minify]');
  await p.settle(30);
  r.check('json: Minify → single line', txt(p.$('[data-json-out]')) === '{"a":1,"b":[2,3]}', txt(p.$('[data-json-out]')));
  p.type('[data-json-input]', '{bad json');
  await p.settle(50);
  r.check('json: galat input par error dikhta hai', txt(p.$('[data-json-error]')).length > 0, txt(p.$('[data-json-error]')).slice(0, 60));
  p.click('[data-json-sample]');
  await p.settle(50);
  const sample = p.$('[data-json-input]').value;
  r.check('json: Sample button input bharta hai', sample.length > 20 && sample.trim().startsWith('{'), sample.slice(0, 40).replace(/\n/g, ' '));
  p.click('[data-json-copy]');
  await p.settle(30);
  r.check('json: Copy → clipboard', p.window.__clipboard.text.length > 5, p.window.__clipboard.text.slice(0, 30));
  p.click('[data-json-clear]');
  await p.settle(30);
  r.check('json: Clear → input khaali', p.$('[data-json-input]').value === '', JSON.stringify(p.$('[data-json-input]').value));
});

// -------------------------------------------------------------- Base64
await run('base64-encoder', async (p) => {
  p.type('[data-b64-input]', 'hello instanten');
  await p.settle(60);
  const enc = txt(p.$('[data-b64-out]'));
  r.check('base64: encode "hello instanten"', enc === 'aGVsbG8gaW5zdGFudGVu', enc);
  p.click('[data-b64-mode="decode"]');
  p.type('[data-b64-input]', 'aGVsbG8gaW5zdGFudGVu');
  await p.settle(60);
  r.check('base64: decode wapas text', txt(p.$('[data-b64-out]')) === 'hello instanten', txt(p.$('[data-b64-out]')));
  p.type('[data-b64-input]', '%%%%');
  await p.settle(50);
  r.check('base64: galat input par error', txt(p.$('[data-b64-error]')).length > 0, txt(p.$('[data-b64-error]')).slice(0, 50));
  p.click('[data-b64-clear]');
  await p.settle(30);
  r.check('base64: Clear kaam karta hai', p.$('[data-b64-input]').value === '');
});

// --------------------------------------------------------- Word counter
await run('word-counter', async (p) => {
  p.type('[data-wc-input]', 'apple banana apple cherry apple banana date.\n\nSecond paragraph here.');
  await p.settle(60);
  const words = txt(p.$('[data-wc-words]'));
  const paras = txt(p.$('[data-wc-paragraphs]'));
  const chars = txt(p.$('[data-wc-chars]'));
  r.check('word-counter: 10 words gine', words.startsWith('10'), `words="${words}"`);
  r.check('word-counter: 2 paragraphs', paras.startsWith('2'), `paras="${paras}"`);
  r.check('word-counter: char count sahi', /\d/.test(chars), `chars="${chars}"`);
  r.check('word-counter: reading time number deta hai', /^\d+$/.test(txt(p.$('[data-wc-read]'))), `read="${txt(p.$('[data-wc-read]'))}"`);
  r.check('word-counter: keyword table bhara', (p.$$('[data-wc-keywords] li, [data-wc-keywords] tr').length || 0) > 0,
    String(p.$$('[data-wc-keywords] li, [data-wc-keywords] tr').length));
});

// --------------------------------------------------------------- Regex
await run('regex-tester', async (p) => {
  p.type('[data-re-pattern]', '(\\w+)@(\\w+)\\.com');
  p.type('[data-re-flags]', 'g');
  p.type('[data-re-text]', 'a@b.com c@d.com');
  await p.settle(80);
  const rows = p.$$('[data-re-rows] tr').length;
  r.check('regex: 2 matches mile', rows === 2, `${rows} rows`);
  r.check('regex: match meta dikhta hai', /\d/.test(txt(p.$('[data-re-meta]'))), txt(p.$('[data-re-meta]')).slice(0, 50));
  p.type('[data-re-pattern]', '([');
  await p.settle(60);
  r.check('regex: galat pattern par error', txt(p.$('[data-re-error]')).length > 0, txt(p.$('[data-re-error]')).slice(0, 50));
});

// ------------------------------------------------------------ Password
await run('password-generator', async (p) => {
  const first = p.$('[data-pw-out]').value ?? txt(p.$('[data-pw-out]'));
  r.check('password: page load par password ready', (first || '').length === 16, `len=${(first || '').length}`);
  p.click('[data-pw-generate]');
  await p.settle(40);
  const second = p.$('[data-pw-out]').value ?? txt(p.$('[data-pw-out]'));
  r.check('password: Generate naya password deta hai', second && second !== first, `${first} -> ${second}`);
  p.type('[data-pw-length]', '32');
  await p.settle(60);
  const long = p.$('[data-pw-out]').value ?? txt(p.$('[data-pw-out]'));
  r.check('password: length slider 32 kaam karta hai', (long || '').length === 32, `len=${(long || '').length}`);
  r.check('password: strength/meta dikhta hai', txt(p.$('[data-pw-meta]')).length > 0, txt(p.$('[data-pw-meta]')).slice(0, 40));
  const symbols = p.$('[data-pw-set="symbols"]');
  symbols.checked = false;
  symbols.dispatchEvent(new p.window.Event('change', { bubbles: true }));
  await p.settle(60);
  const noSym = p.$('[data-pw-out]').value ?? txt(p.$('[data-pw-out]'));
  r.check('password: symbols off → koi symbol nahi', /^[A-Za-z0-9]+$/.test(noSym || ''), (noSym || '').slice(0, 20));
  p.click('[data-pw-copy]');
  await p.settle(30);
  r.check('password: Copy → clipboard', p.window.__clipboard.text.length > 5, String(p.window.__clipboard.text.length));
});

// ------------------------------------------------------------ Markdown
await run('markdown-editor', async (p) => {
  p.type('[data-md-input]', '# Hello\n\n**bold** and *italic*');
  await p.settle(80);
  const html = p.$('[data-md-preview]').innerHTML;
  r.check('markdown: # → h1', /<h1[^>]*>Hello<\/h1>/.test(html), html.slice(0, 60));
  r.check('markdown: **bold** → <strong>', /<strong>bold<\/strong>/.test(html), html.slice(0, 80));
  r.check('markdown: meta (words/chars)', /\d/.test(txt(p.$('[data-md-meta]'))), txt(p.$('[data-md-meta]')).slice(0, 40));
  p.click('[data-md-sample]');
  await p.settle(60);
  r.check('markdown: Sample button bharta hai', p.$('[data-md-input]').value.length > 20, String(p.$('[data-md-input]').value.length));
});

// -------------------------------------------------------------- Meta tags
await run('meta-tag-generator', async (p) => {
  p.type('[data-meta-title]', 'Instanten — free online tools');
  p.type('[data-meta-desc]', 'Free browser-based tools for instant work.');
  p.type('[data-meta-url]', 'https://instanten.com/');
  await p.settle(80);
  const out = txt(p.$('[data-meta-out]'));
  r.check('meta-tags: <title> output me', out.includes('<title>'), out.slice(0, 60));
  r.check('meta-tags: og:title output me', /og:title/.test(out), out.slice(0, 80));
  r.check('meta-tags: description count', /\d+/.test(txt(p.$('[data-meta-desc-count]'))), txt(p.$('[data-meta-desc-count]')));
  r.click?.('[data-meta-copy]');
  p.click('[data-meta-copy]');
  await p.settle(40);
  r.check('meta-tags: Copy → clipboard', p.window.__clipboard.text.includes('og:title'), String(p.window.__clipboard.text.length));
});

// ----------------------------------------------------------- CSS grid
await run('css-grid-generator', async (p) => {
  p.type('[data-grid-columns]', '4');
  p.type('[data-grid-gap]', '24');
  await p.settle(60);
  const css = txt(p.$('[data-grid-css]'));
  r.check('css-grid: CSS me 4 columns', /grid-template-columns:\s*repeat\(4/.test(css), css.replace(/\n/g, ' ').slice(0, 70));
  r.check('css-grid: gap 24px', /gap:\s*24px/.test(css), css.replace(/\n/g, ' ').slice(0, 70));
  const preview = p.$('[data-grid-preview]');
  r.check('css-grid: preview par style lagta hai', /repeat\(4/.test(preview.getAttribute('style') || ''), preview.getAttribute('style') || '(none)');
  p.click('[data-grid-copy]');
  await p.settle(30);
  r.check('css-grid: Copy → clipboard', p.window.__clipboard.text.includes('grid'), String(p.window.__clipboard.text.length));
});

// -------------------------------------------------------- Color palette
await run('color-palette', async (p) => {
  p.click('[data-cp-generate]');
  await p.settle(60);
  const swatches = p.$$('[data-cp-swatches] [data-cp-color], [data-cp-swatches] button').length;
  const rows = p.$$('[data-cp-rows] tr').length;
  r.check('color-palette: harmony rows banti hain', rows >= 3, `${rows} rows`);
  r.check('color-palette: swatches render hote hain', swatches >= 3, `${swatches} swatches`);
  r.check('color-palette: hex values dikhte hain', /#[0-9a-f]{6}/i.test(txt(p.$('[data-cp-table]'))), txt(p.$('[data-cp-table]')).slice(0, 50));
  const copyBtn = p.$('[data-cp-copy]');
  r.check('color-palette: Copy CSS button hai', !!copyBtn);
  if (copyBtn) {
    p.click(copyBtn);
    await p.settle(40);
    r.check('color-palette: Copy CSS → clipboard', p.window.__clipboard.text.length > 10, p.window.__clipboard.text.slice(0, 40));
  }
});

// ------------------------------------------------------- Image compressor
await run('image-compressor', async (p) => {
  r.check('image-compressor: file input hai', !!p.$('[data-ic-file]'));
  p.click('[data-ic-run]');
  await p.settle(60);
  r.check('image-compressor: file ke bina error message', txt(p.$('[data-ic-error]')).length > 0, txt(p.$('[data-ic-error]')).slice(0, 60));
  const q = p.$('[data-ic-quality]');
  r.check('image-compressor: quality slider label update', !!q);
  if (q) {
    p.type(q, '40');
    await p.settle(40);
    r.check('image-compressor: quality label badalta hai', txt(p.$('[data-ic-quality-label]')).includes('40'), txt(p.$('[data-ic-quality-label]')));
  }
});

// ----------------------------------------------------------- QR generator
await run('qr-generator', async (p) => {
  const typeSel0 = p.$('[data-qr-type]');
  r.check('qr: default type = url aur URL prefilled', typeSel0.value === 'url' && p.$('[data-qr-url]').value.startsWith('https://'), `${typeSel0.value} / ${p.$('[data-qr-url]').value}`);
  typeSel0.value = 'text';
  typeSel0.dispatchEvent(new p.window.Event('change', { bubbles: true }));
  await p.settle(40);
  p.type('[data-qr-text]', 'instanten test 123');
  p.click('[data-qr-generate]');
  await p.settle(120);
  const canvasEl = p.$('[data-qr-canvas]');
  r.check('qr: QR canvas par draw hua (ready flag)', canvasEl?.dataset.qrReady === '1', `ready=${canvasEl?.dataset.qrReady} ${canvasEl?.width}x${canvasEl?.height}`);
  r.check('qr: modules/meta line', /\d+ × \d+ modules/.test(txt(p.$('[data-qr-meta]'))), txt(p.$('[data-qr-meta]')).slice(0, 60));
  r.check('qr: payload text wahi hai jo type kiya', txt(p.$('[data-qr-payload]')) === 'instanten test 123', txt(p.$('[data-qr-payload]')).slice(0, 60));
  r.check('qr: valid input par error hidden', p.$('[data-qr-error]').hasAttribute('hidden'), txt(p.$('[data-qr-error]')).slice(0, 40));
  p.type('[data-qr-text]', '');
  p.click('[data-qr-generate]');
  await p.settle(80);
  const errEl = p.$('[data-qr-error]');
  r.check('qr: khaali input par hint/error', !errEl.hasAttribute('hidden') && txt(errEl).length > 0, txt(errEl).slice(0, 60));
  // type switch: text -> url -> wifi forms
  const typeSel = p.$('[data-qr-type]');
  const wifiBlock = p.$('[data-qr-fields="wifi"]');
  typeSel.value = 'wifi';
  typeSel.dispatchEvent(new p.window.Event('change', { bubbles: true }));
  await p.settle(60);
  r.check('qr: type=wifi par wifi fields dikhte hain', wifiBlock && !wifiBlock.hasAttribute('hidden'));
  p.type('[data-qr-ssid]', 'MyWifi');
  p.type('[data-qr-pass]', 'secret123');
  p.click('[data-qr-generate]');
  await p.settle(100);
  r.check('qr: wifi QR payload banti hai', /WIFI:/.test(txt(p.$('[data-qr-payload]'))), txt(p.$('[data-qr-payload]')).slice(0, 60));
});

// ----------------------------------------------------------------- Ruler
await run('online-ruler', async (p) => {
  const boardCm = (p.$('[data-ruler-svg]')?.innerHTML || '').length;
  const svgCm = p.$('[data-ruler-svg]').innerHTML;
  p.click('[data-ruler-preset="inch"]');
  await p.settle(80);
  const svgIn = p.$('[data-ruler-svg]').innerHTML;
  r.check('ruler: cm → inch par board dobara banta hai', svgIn !== svgCm && /inches/.test(svgIn) && /centimetres/.test(svgCm),
    `cm=${boardCm} chars, inch=${svgIn.length} chars`);
  const cal = p.$('[data-ruler-cal]');
  r.check('ruler: calibration slider hai', !!cal);
  if (cal) {
    p.type(cal, '120');
    await p.settle(40);
    r.check('ruler: calibration par meta update', txt(p.$('[data-ruler-meta]')).length > 0, txt(p.$('[data-ruler-meta]')));
  }
  r.check('ruler: svg board render hua', (p.$('[data-ruler-svg]')?.innerHTML || '').length > 200, String((p.$('[data-ruler-svg]')?.innerHTML || '').length));
});

const fails = r.summary();
process.exit(fails.length ? 1 : 0);
