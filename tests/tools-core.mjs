/**
 * Unit tests for src/lib/tools/core.mjs — wahi code jo browser mein chalta hai.
 * `node tests/tools-core.mjs`
 */
import { createRequire } from 'node:module';
import {
  formatJson,
  minifyJson,
  encodeBase64,
  decodeBase64,
  countText,
  keywordDensity,
  generatePassword,
  CHARSETS,
  hexToRgb,
  rgbToHex,
  contrastRatio,
  contrastGrade,
  harmonies,
  gridCss,
  markdownToHtml,
  metaTags,
  regexMatches,
  pixelsPerMm,
  mmToInches,
  wifiQrPayload,
  vcardPayload,
} from '../src/lib/tools/core.mjs';

const require = createRequire(import.meta.url);
const nodeCrypto = require('node:crypto');

let pass = 0;
let fail = 0;
const check = (name, cond, detail = '') => {
  if (cond) pass++;
  else {
    fail++;
    console.log(`FAIL  ${name}${detail ? ` — ${detail}` : ''}`);
  }
};
const eq = (name, actual, expected) =>
  check(name, JSON.stringify(actual) === JSON.stringify(expected), `got ${JSON.stringify(actual)}, want ${JSON.stringify(expected)}`);

/* ── JSON ─────────────────────────────────────────────────────────────── */
const valid = formatJson('{"a":1,"b":[2,3]}', 2);
check('json: valid parse', valid.ok);
eq('json: beautify', valid.output, '{\n  "a": 1,\n  "b": [\n    2,\n    3\n  ]\n}');
eq('json: minify', minifyJson('{ "a" : 1 }').output, '{"a":1}');
const broken = formatJson('{\n  "a": 1,\n  "b": \n}');
check('json: invalid -> error', !broken.ok);
check('json: error line reported', broken.error.line === 4, `line ${broken.error.line}`);
check('json: empty input rejected', !formatJson('   ').ok);
check('json: trailing comma rejected', !formatJson('{"a":1,}').ok);

/* ── Base64 ───────────────────────────────────────────────────────────── */
eq('base64: ascii round-trip', decodeBase64(encodeBase64('hello world')).output, 'hello world');
eq('base64: utf-8 emoji', decodeBase64(encodeBase64('नमस्ते 🚀')).output, 'नमस्ते 🚀');
eq('base64: known value', encodeBase64('instanten'), 'aW5zdGFudGVu');
check('base64: invalid alphabet rejected', !decodeBase64('not base64!!').ok);

/* ── Word counter ─────────────────────────────────────────────────────── */
const counts = countText('Hello world. This is a test!\n\nSecond paragraph here.');
eq('words: word count', counts.words, 9);
check('words: sentences', counts.sentences === 3, `${counts.sentences}`);
eq('words: paragraphs', counts.paragraphs, 2);
eq('words: chars no spaces', counts.charsNoSpaces, 'Hello world. This is a test!\n\nSecond paragraph here.'.replace(/\s/g, '').length);
eq('words: reading time 225wpm', countText(Array(225).fill('word').join(' ')).readingMinutes, 1);
eq('words: zero input', countText('').words, 0);
const kd = keywordDensity('ruler ruler ruler measure measure screen', 5);
eq('keywords: top word', kd[0].word, 'ruler');
eq('keywords: count', kd[0].count, 3);

/* ── Password ─────────────────────────────────────────────────────────── */
const det = (n) => Uint8Array.from({ length: n }, (_, i) => (i * 37 + 11) % 256);
const pw = generatePassword({ length: 20 }, det);
check('password: ok', pw.ok);
eq('password: length', pw.password.length, 20);
check('password: entropy sane', pw.entropyBits > 100, `${pw.entropyBits}`);
const lowerOnly = generatePassword({ length: 12, lower: true, upper: false, digits: false, symbols: false, excludeAmbiguous: false }, det);
check('password: charset respected', /^[a-z]{12}$/.test(lowerOnly.password), lowerOnly.password);
const noOops = generatePassword({ length: 40, excludeAmbiguous: true }, det);
check('password: ambiguous chars excluded', !/[O0oIl1|]/.test(noOops.password), noOops.password);
check('password: no pool -> error', !generatePassword({ lower: false, upper: false, digits: false, symbols: false }).ok);
const real = generatePassword({ length: 24 }, (n) => nodeCrypto.randomBytes(n));
const uniq = new Set(Array.from({ length: 50 }, () => generatePassword({ length: 24 }, (n) => nodeCrypto.randomBytes(n)).password));
eq('password: 50 runs all unique', uniq.size, 50);

/* ── Colour ───────────────────────────────────────────────────────────── */
eq('colour: hex->rgb', hexToRgb('#ff8800'), { r: 255, g: 136, b: 0 });
eq('colour: short hex', hexToRgb('#f80'), { r: 255, g: 136, b: 0 });
eq('colour: invalid hex', hexToRgb('nope'), null);
eq('colour: rgb->hex', rgbToHex({ r: 255, g: 136, b: 0 }), '#ff8800');
eq('contrast: black on white = 21', contrastRatio('#000000', '#ffffff'), 21);
eq('contrast: same colour = 1', contrastRatio('#123456', '#123456'), 1);
check('contrast: AA grade', contrastGrade(4.6) === 'AA');
check('contrast: AAA grade', contrastGrade(7.1) === 'AAA');
check('contrast: fail grade', contrastGrade(2.9) === 'Fail');
const har = harmonies('#3366cc');
eq('harmonies: complementary pair', har.complementary.length, 2);
eq('harmonies: triadic size', har.triadic.length, 3);
check('harmonies: invalid colour', harmonies('zzz') === null);

/* ── CSS grid ─────────────────────────────────────────────────────────── */
const css = gridCss({ columns: 3, rows: 2, gap: 16 });
check('grid: display', css.includes('display: grid;'));
check('grid: columns', css.includes('grid-template-columns: repeat(3, 1fr);'));
check('grid: gap', css.includes('gap: 16px;'));
check('grid: clamp columns', gridCss({ columns: 999 }).includes('repeat(24, 1fr)'));
check('grid: separate row/col gap', gridCss({ rowGap: 8, columnGap: 24 }).includes('row-gap: 8px;'));

/* ── Markdown ─────────────────────────────────────────────────────────── */
const md = markdownToHtml('# Title\n\n**bold** and *italic* and `code`\n\n- one\n- two\n\n```js\nconst a = 1;\n```');
check('md: heading', md.includes('<h1>Title</h1>'));
check('md: bold', md.includes('<strong>bold</strong>'));
check('md: italic', md.includes('<em>italic</em>'));
check('md: inline code', md.includes('<code>code</code>'));
check('md: list', md.includes('<ul>') && md.includes('<li>one</li>'));
check('md: fenced code', md.includes('<pre><code class="language-js">const a = 1;</code></pre>'));
check('md: html escaped', markdownToHtml('<script>alert(1)</script>').includes('&lt;script&gt;'));
check('md: link', markdownToHtml('[x](https://instanten.com)').includes('href="https://instanten.com"'));
check('md: ordered list', markdownToHtml('1. a\n2. b').includes('<ol>'));

/* ── Meta tags ────────────────────────────────────────────────────────── */
const tags = metaTags({ title: 'T', description: 'D', url: 'https://x.com/p', image: 'https://x.com/i.png' });
check('meta: title', tags.includes('<title>T</title>'));
check('meta: description', tags.includes('name="description" content="D"'));
check('meta: og image', tags.includes('property="og:image" content="https://x.com/i.png"'));
check('meta: og dims', tags.includes('og:image:width') && tags.includes('og:image:height'));
check('meta: twitter card', tags.includes('name="twitter:card" content="summary_large_image"'));
check('meta: escapes quotes', metaTags({ title: 'a"b' }).includes('a&quot;b'));

/* ── Regex ────────────────────────────────────────────────────────────── */
const re = regexMatches('(\\w+)@(\\w+)\\.com', 'g', 'a@b.com c@d.com');
eq('regex: match count', re.count, 2);
eq('regex: groups', re.matches[0].groups, ['a', 'b']);
check('regex: invalid pattern reported', !regexMatches('([a-', 'g', 'x').ok);
check('regex: empty pattern rejected', !regexMatches('', 'g', 'x').ok);
eq('regex: no matches', regexMatches('zzz', 'g', 'abc').count, 0);

/* ── Ruler ────────────────────────────────────────────────────────────── */
eq('ruler: px per mm from card', pixelsPerMm(323.6), 3.7804);
eq('ruler: fallback', pixelsPerMm(0), 3.7795);
eq('ruler: mm to inch', mmToInches(25.4), 1);
eq('ruler: card height in inch', mmToInches(53.98), 2.125);

/* ── QR payloads ──────────────────────────────────────────────────────── */
eq('qr: wifi payload', wifiQrPayload({ ssid: 'Home', password: 'pass', encryption: 'WPA' }), 'WIFI:T:WPA;S:Home;P:pass;;');
check('qr: wifi escapes semicolon', wifiQrPayload({ ssid: 'a;b' }).includes('a\\;b'));
const vc = vcardPayload({ name: 'Asha', phone: '+91 90000', email: 'a@b.com' });
check('qr: vcard begin/end', vc.startsWith('BEGIN:VCARD') && vc.endsWith('END:VCARD'));
check('qr: vcard phone', vc.includes('TEL;TYPE=CELL:+91 90000'));

console.log(`\ntools core test: ${pass} pass, ${fail} fail`);
process.exit(fail === 0 ? 0 : 1);
