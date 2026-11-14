/**
 * Tool core — pure logic for every tool on instanten.com.
 *
 * Sab kuch plain JS hai (TypeScript nahi) taaki browser ka component aur node
 * ka unit test dono ek hi code chalayein. Koi DOM/network access nahi.
 */


/* ── JSON scanner: exact line/column of the first syntax error ──────────
 * V8 ka message browser mein position deta hai par node/some browsers mein
 * nahi. Isliye ek chhota recursive-descent validator khud chalate hain.
 */
function jsonErrorPosition(text) {
  let i = 0;
  let line = 1;
  let col = 1;
  const bump = (n = 1) => {
    for (let k = 0; k < n; k++) {
      if (text[i] === '\n') {
        line++;
        col = 1;
      } else col++;
      i++;
    }
  };
  const ws = () => {
    while (i < text.length && /[ \t\n\r]/.test(text[i])) bump();
  };
  const fail = (msg) => {
    const e = new Error(msg);
    e.jsonLine = line;
    e.jsonCol = col;
    throw e;
  };
  const str = () => {
    if (text[i] !== '"') fail(`Expected string, found "${text[i] ?? 'end of input'}"`);
    bump();
    while (i < text.length && text[i] !== '"') {
      if (text[i] === '\\') bump(2);
      else if (text[i] === '\n') fail('Unescaped newline inside a string');
      else bump();
    }
    if (i >= text.length) fail('Unterminated string');
    bump();
  };
  const num = () => {
    const m = /^-?(0|[1-9]\d*)(\.\d+)?([eE][+-]?\d+)?/.exec(text.slice(i));
    if (!m) fail(`Invalid number at "${text.slice(i, i + 8)}"`);
    bump(m[0].length);
  };
  const value = () => {
    ws();
    const c = text[i];
    if (c === '{') {
      bump();
      ws();
      if (text[i] === '}') return bump();
      for (;;) {
        ws();
        str();
        ws();
        if (text[i] !== ':') fail('Expected ":" after a key');
        bump();
        value();
        ws();
        if (text[i] === ',') {
          bump();
          continue;
        }
        if (text[i] === '}') return bump();
        fail(`Expected "," or "}", found "${text[i] ?? 'end of input'}"`);
      }
    }
    if (c === '[') {
      bump();
      ws();
      if (text[i] === ']') return bump();
      for (;;) {
        value();
        ws();
        if (text[i] === ',') {
          bump();
          continue;
        }
        if (text[i] === ']') return bump();
        fail(`Expected "," or "]", found "${text[i] ?? 'end of input'}"`);
      }
    }
    if (c === '"') return str();
    if (c === '-' || (c >= '0' && c <= '9')) return num();
    if (text.startsWith('true', i)) return bump(4);
    if (text.startsWith('false', i)) return bump(5);
    if (text.startsWith('null', i)) return bump(4);
    fail(`Unexpected "${c ?? 'end of input'}"`);
  };

  try {
    value();
    ws();
    if (i < text.length) fail(`Unexpected "${text[i]}" after the JSON value`);
    return null;
  } catch (err) {
    return { line: err.jsonLine ?? line, column: err.jsonCol ?? col, message: err.message };
  }
}

/* ─────────────────────────── JSON formatter ─────────────────────────── */

/**
 * RFC 8259 ke hisaab se parse karta hai. Error par line/column nikalta hai
 * taaki user ko exact jagah pata chale (V8 ka message akela kaam ka nahi).
 */
export function formatJson(text, indent = 2) {
  if (typeof text !== 'string' || text.trim() === '') {
    return { ok: false, error: { message: 'Input khaali hai — JSON paste karo.', line: 0, column: 0 } };
  }
  try {
    const value = JSON.parse(text);
    return { ok: true, output: JSON.stringify(value, null, indent), minified: JSON.stringify(value) };
  } catch (err) {
    const message = String(err && err.message ? err.message : err);
    // Browser ka native message position de sakta hai; warna apna scanner.
    const posMatch = message.match(/position (\d+)/i);
    if (posMatch) {
      const pos = Number(posMatch[1]);
      const before = text.slice(0, pos);
      return {
        ok: false,
        error: { message, line: before.split('\n').length, column: pos - before.lastIndexOf('\n') },
      };
    }
    const found = jsonErrorPosition(text);
    if (found) return { ok: false, error: { message: found.message, line: found.line, column: found.column } };
    return { ok: false, error: { message, line: 0, column: 0 } };
  }
}

export function minifyJson(text) {
  const res = formatJson(text);
  if (!res.ok) return res;
  return { ok: true, output: res.minified };
}

/* ───────────────────────────── Base64 ───────────────────────────────── */

/** UTF-8 safe encode (btoa sirf latin1 leta hai). */
export function encodeBase64(text) {
  const bytes = new TextEncoder().encode(text);
  let binary = '';
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary);
}

export function decodeBase64(input) {
  const clean = String(input).replace(/\s+/g, '');
  if (!/^[A-Za-z0-9+/]*={0,2}$/.test(clean) || clean.length % 4 === 1) {
    return { ok: false, error: 'Ye valid Base64 nahi hai (RFC 4648 alphabet ke bahar character mila).' };
  }
  try {
    const binary = atob(clean);
    const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
    return { ok: true, output: new TextDecoder().decode(bytes) };
  } catch {
    return { ok: false, error: 'Decode fail hua — string adhoori ya corrupt lagti hai.' };
  }
}

/* ─────────────────────────── Word counter ───────────────────────────── */

const WORD_RE = /[\p{L}\p{N}][\p{L}\p{N}'’\-]*/gu;

/**
 * Word document conventions: whitespace se alag tokens, sirf punctuation
 * wale tokens count nahi hote. Reading speed 225 wpm, speaking 150 wpm
 * (industry standard estimates).
 */
export function countText(text) {
  const trimmed = String(text ?? '');
  const words = (trimmed.match(WORD_RE) ?? []).length;
  const chars = trimmed.length;
  const charsNoSpaces = trimmed.replace(/\s/g, '').length;
  const sentences = (trimmed.match(/[^.!?…]+[.!?…]+(\s|$)/g) ?? []).length || (trimmed.trim() ? 1 : 0);
  const paragraphs = trimmed.trim() ? trimmed.trim().split(/\n\s*\n/).filter((p) => p.trim()).length : 0;
  return {
    words,
    chars,
    charsNoSpaces,
    sentences,
    paragraphs,
    readingMinutes: words === 0 ? 0 : Math.max(1, Math.round(words / 225)),
    speakingMinutes: words === 0 ? 0 : Math.max(1, Math.round(words / 150)),
  };
}

/** Top keywords, stop-words hata kar. */
export function keywordDensity(text, limit = 8) {
  const stop = new Set(
    'the a an and or but if then than that this these those of in on at to for from by with is are was were be been being it its as not no you your we our they their he she his her i me my so do does did can could will would should about into over under more most other some such only own same too very just'.split(
      ' '
    )
  );
  const counts = new Map();
  for (const raw of String(text).toLowerCase().match(WORD_RE) ?? []) {
    const w = raw.replace(/['’].*$/, '');
    if (w.length < 3 || stop.has(w)) continue;
    counts.set(w, (counts.get(w) ?? 0) + 1);
  }
  const total = [...counts.values()].reduce((a, b) => a + b, 0) || 1;
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([word, count]) => ({ word, count, percent: Math.round((count / total) * 1000) / 10 }));
}

/* ────────────────────────── Password generator ──────────────────────── */

export const CHARSETS = {
  lower: 'abcdefghijklmnopqrstuvwxyz',
  upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  digits: '0123456789',
  symbols: '!@#$%^&*()-_=+[]{};:,.?/',
};

export const AMBIGUOUS = 'O0oIl1|`\'"{}[]()/\\';

/**
 * crypto.getRandomValues se password. `randomBytes` injectable hai taaki test
 * deterministic ho sake (browser mein window.crypto, node mein crypto).
 */
export function generatePassword(options = {}, randomBytes) {
  const {
    length = 16,
    lower = true,
    upper = true,
    digits = true,
    symbols = true,
    excludeAmbiguous = true,
  } = options;

  const rand = randomBytes ?? ((n) => {
    const buf = new Uint8Array(n);
    (globalThis.crypto ?? require('node:crypto').webcrypto).getRandomValues(buf);
    return buf;
  });

  let pool = '';
  if (lower) pool += CHARSETS.lower;
  if (upper) pool += CHARSETS.upper;
  if (digits) pool += CHARSETS.digits;
  if (symbols) pool += CHARSETS.symbols;
  if (excludeAmbiguous) pool = [...pool].filter((c) => !AMBIGUOUS.includes(c)).join('');
  if (!pool) return { ok: false, error: 'Kam se kam ek character set chuno.' };

  const size = Math.min(128, Math.max(4, Math.trunc(length)));
  const bytes = rand(size * 2);
  let out = '';
  for (let i = 0; out.length < size && i < size * 2; i++) {
    // modulo bias se bachne ke liye rejection sampling
    const b = bytes[i];
    if (b >= 256 - (256 % pool.length)) continue;
    out += pool[b % pool.length];
  }
  while (out.length < size) out += pool[0];

  return { ok: true, password: out, entropyBits: Math.round(size * Math.log2(pool.length)) };
}

/* ──────────────────────────── Colour palette ────────────────────────── */

export function hexToRgb(hex) {
  const clean = String(hex).replace('#', '').trim();
  const full = clean.length === 3 ? clean.split('').map((c) => c + c).join('') : clean;
  if (!/^[0-9a-fA-F]{6}$/.test(full)) return null;
  return {
    r: parseInt(full.slice(0, 2), 16),
    g: parseInt(full.slice(2, 4), 16),
    b: parseInt(full.slice(4, 6), 16),
  };
}

export function rgbToHex({ r, g, b }) {
  const h = (n) => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, '0');
  return `#${h(r)}${h(g)}${h(b)}`;
}

export function rgbToHsl({ r, g, b }) {
  const rn = r / 255;
  const gn = g / 255;
  const bn = b / 255;
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  const l = (max + min) / 2;
  if (max === min) return { h: 0, s: 0, l: Math.round(l * 100) };
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h;
  if (max === rn) h = ((gn - bn) / d + (gn < bn ? 6 : 0)) / 6;
  else if (max === gn) h = ((bn - rn) / d + 2) / 6;
  else h = ((rn - gn) / d + 4) / 6;
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

export function hslToHex({ h, s, l }) {
  const sn = s / 100;
  const ln = l / 100;
  const c = (1 - Math.abs(2 * ln - 1)) * sn;
  const hp = (((h % 360) + 360) % 360) / 60;
  const x = c * (1 - Math.abs((hp % 2) - 1));
  const [r1, g1, b1] =
    hp < 1 ? [c, x, 0] : hp < 2 ? [x, c, 0] : hp < 3 ? [0, c, x] : hp < 4 ? [0, x, c] : hp < 5 ? [x, 0, c] : [c, 0, x];
  const m = ln - c / 2;
  return rgbToHex({ r: (r1 + m) * 255, g: (g1 + m) * 255, b: (b1 + m) * 255 });
}

/** WCAG 2.x relative luminance. */
export function relativeLuminance(hex) {
  const rgb = hexToRgb(hex);
  if (!rgb) return 0;
  const channel = (v) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * channel(rgb.r) + 0.7152 * channel(rgb.g) + 0.0722 * channel(rgb.b);
}

/** Contrast ratio 1–21. WCAG 2.2 AA: 4.5 normal text, 3 large text. */
export function contrastRatio(hexA, hexB) {
  const a = relativeLuminance(hexA);
  const b = relativeLuminance(hexB);
  const [hi, lo] = a > b ? [a, b] : [b, a];
  return Math.round(((hi + 0.05) / (lo + 0.05)) * 100) / 100;
}

export function contrastGrade(ratio) {
  if (ratio >= 7) return 'AAA';
  if (ratio >= 4.5) return 'AA';
  if (ratio >= 3) return 'AA large';
  return 'Fail';
}

export function harmonies(hex) {
  const rgb = hexToRgb(hex);
  if (!rgb) return null;
  const { h, s, l } = rgbToHsl(rgb);
  const make = (offset) => hslToHex({ h: h + offset, s, l });
  return {
    complementary: [hex, make(180)],
    analogous: [make(-30), hex, make(30)],
    triadic: [hex, make(120), make(240)],
    monochromatic: [hslToHex({ h, s, l: Math.min(95, l + 25) }), hex, hslToHex({ h, s, l: Math.max(10, l - 25) })],
  };
}

/* ───────────────────────── CSS grid generator ───────────────────────── */

export function gridCss({ columns = 3, rows = 2, gap = 16, rowGap, columnGap, align, justify } = {}) {
  const cols = Math.min(24, Math.max(1, Math.trunc(columns)));
  const rws = Math.min(24, Math.max(1, Math.trunc(rows)));
  const g = Math.max(0, Math.trunc(gap));
  const rg = rowGap == null ? g : Math.max(0, Math.trunc(rowGap));
  const cg = columnGap == null ? g : Math.max(0, Math.trunc(columnGap));

  const lines = ['display: grid;', `grid-template-columns: repeat(${cols}, 1fr);`];
  if (rws > 1) lines.push(`grid-template-rows: repeat(${rws}, auto);`);
  if (rg === cg) lines.push(`gap: ${g}px;`);
  else {
    if (rg) lines.push(`row-gap: ${rg}px;`);
    if (cg) lines.push(`column-gap: ${cg}px;`);
  }
  if (align && align !== 'stretch') lines.push(`align-items: ${align};`);
  if (justify && justify !== 'stretch') lines.push(`justify-items: ${justify};`);
  return lines.join('\n');
}

/* ─────────────────────────── Markdown editor ────────────────────────── */

const escapeHtml = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/**
 * Chhota CommonMark-subset renderer: headings, bold/italic/code, links,
 * lists, blockquote, hr, fenced code. Preview ke liye kaafi hai — poora
 * CommonMark parser bundle karna is tool ke liye zyada hai.
 */
export function markdownToHtml(markdown) {
  const src = String(markdown ?? '').replace(/\r\n/g, '\n');
  const blocks = [];

  const inline = (text) =>
    escapeHtml(text)
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/(^|[^*])\*([^*\n]+)\*/g, '$1<em>$2</em>')
      .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2" rel="noopener noreferrer">$1</a>');

  // fenced code pehle nikaal do, warna andar ka markdown render ho jayega
  const withoutCode = src.replace(/```(\w*)\n([\s\S]*?)```/g, (_, lang, code) => {
    blocks.push(`<pre><code${lang ? ` class="language-${escapeHtml(lang)}"` : ''}>${escapeHtml(code.replace(/\n$/, ''))}</code></pre>`);
    return `\u0000${blocks.length - 1}\u0000`;
  });

  const lines = withoutCode.split('\n');
  const html = [];
  let listType = null;
  let paragraph = [];

  const flushParagraph = () => {
    if (paragraph.length) {
      html.push(`<p>${inline(paragraph.join(' '))}</p>`);
      paragraph = [];
    }
  };
  const closeList = () => {
    if (listType) {
      html.push(`</${listType}>`);
      listType = null;
    }
  };

  for (const raw of lines) {
    const line = raw.trimEnd();

    const placeholder = line.match(/^\u0000(\d+)\u0000$/);
    if (placeholder) {
      flushParagraph();
      closeList();
      html.push(blocks[Number(placeholder[1])]);
      continue;
    }
    if (!line.trim()) {
      flushParagraph();
      closeList();
      continue;
    }
    const heading = line.match(/^(#{1,6})\s+(.*)$/);
    if (heading) {
      flushParagraph();
      closeList();
      const level = heading[1].length;
      html.push(`<h${level}>${inline(heading[2])}</h${level}>`);
      continue;
    }
    if (/^(-{3,}|\*{3,})$/.test(line.trim())) {
      flushParagraph();
      closeList();
      html.push('<hr />');
      continue;
    }
    const quote = line.match(/^>\s?(.*)$/);
    if (quote) {
      flushParagraph();
      closeList();
      html.push(`<blockquote><p>${inline(quote[1])}</p></blockquote>`);
      continue;
    }
    const bullet = line.match(/^[-*+]\s+(.*)$/);
    if (bullet) {
      flushParagraph();
      if (listType !== 'ul') {
        closeList();
        html.push('<ul>');
        listType = 'ul';
      }
      html.push(`<li>${inline(bullet[1])}</li>`);
      continue;
    }
    const ordered = line.match(/^\d+[.)]\s+(.*)$/);
    if (ordered) {
      flushParagraph();
      if (listType !== 'ol') {
        closeList();
        html.push('<ol>');
        listType = 'ol';
      }
      html.push(`<li>${inline(ordered[1])}</li>`);
      continue;
    }
    closeList();
    paragraph.push(line);
  }
  flushParagraph();
  closeList();
  return html.join('\n');
}

/* ─────────────────────── Meta tag generator ─────────────────────────── */

export function metaTags(config = {}) {
  const { title = '', description = '', url = '', image = '', type = 'website', siteName = '', twitter = '' } = config;
  const tags = [];
  if (title) tags.push(`<title>${escapeHtml(title)}</title>`);
  if (description) tags.push(`<meta name="description" content="${escapeHtml(description)}" />`);
  if (url) tags.push(`<link rel="canonical" href="${escapeHtml(url)}" />`);
  if (title) tags.push(`<meta property="og:title" content="${escapeHtml(title)}" />`);
  if (description) tags.push(`<meta property="og:description" content="${escapeHtml(description)}" />`);
  if (url) tags.push(`<meta property="og:url" content="${escapeHtml(url)}" />`);
  if (siteName) tags.push(`<meta property="og:site_name" content="${escapeHtml(siteName)}" />`);
  tags.push(`<meta property="og:type" content="${escapeHtml(type)}" />`);
  if (image) {
    tags.push(`<meta property="og:image" content="${escapeHtml(image)}" />`);
    tags.push(`<meta property="og:image:width" content="1200" />`);
    tags.push(`<meta property="og:image:height" content="630" />`);
  }
  tags.push('<meta name="twitter:card" content="summary_large_image" />');
  if (title) tags.push(`<meta name="twitter:title" content="${escapeHtml(title)}" />`);
  if (description) tags.push(`<meta name="twitter:description" content="${escapeHtml(description)}" />`);
  if (image) tags.push(`<meta name="twitter:image" content="${escapeHtml(image)}" />`);
  if (twitter) tags.push(`<meta name="twitter:site" content="${escapeHtml(twitter)}" />`);
  return tags.join('\n');
}

/* ───────────────────────────── Regex tester ─────────────────────────── */

export function regexMatches(pattern, flags, text) {
  if (!pattern) return { ok: false, error: 'Pattern khaali hai.' };
  let re;
  try {
    re = new RegExp(pattern, flags.includes('g') ? flags : `${flags}g`);
  } catch (err) {
    return { ok: false, error: String(err.message || err) };
  }
  const matches = [];
  let m;
  let guard = 0;
  while ((m = re.exec(text)) !== null && guard++ < 5000) {
    matches.push({ match: m[0], index: m.index, groups: m.slice(1) });
    if (m[0] === '') re.lastIndex++;
  }
  return { ok: true, matches, count: matches.length };
}

/* ───────────────────────────── Online ruler ─────────────────────────── */

/** CSS px per millimetre — ISO/IEC 7810 ID-1 card = 85.60 × 53.98 mm. */
export const CARD_MM = { w: 85.6, h: 53.98 };

export function pixelsPerMm(cardPixels) {
  if (!cardPixels || cardPixels <= 0) return 3.7795; // 96 dpi fallback
  return Math.round((cardPixels / CARD_MM.w) * 10000) / 10000;
}

export function mmToInches(mm) {
  return Math.round((mm / 25.4) * 1000) / 1000; // NIST: 1 in = 25.4 mm exactly
}

/* ────────────────────────────── QR payload ──────────────────────────── */

/** Wi-Fi QR format: WIFI:T:WPA;S:ssid;P:pass;; (special chars escape). */
export function wifiQrPayload({ ssid = '', password = '', encryption = 'WPA', hidden = false } = {}) {
  const esc = (v) => String(v).replace(/([\\;,":])/g, '\\$1');
  return `WIFI:T:${encryption};S:${esc(ssid)};P:${esc(password)};${hidden ? 'H:true;' : ''};`;
}

export function vcardPayload({ name = '', org = '', phone = '', email = '', url = '' } = {}) {
  const lines = ['BEGIN:VCARD', 'VERSION:3.0', `FN:${name}`];
  if (org) lines.push(`ORG:${org}`);
  if (phone) lines.push(`TEL;TYPE=CELL:${phone}`);
  if (email) lines.push(`EMAIL:${email}`);
  if (url) lines.push(`URL:${url}`);
  lines.push('END:VCARD');
  return lines.join('\n');
}
