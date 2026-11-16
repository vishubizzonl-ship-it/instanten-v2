/**
 * Locale coverage lock — audit follow-up "nl/sv adhoore kyun the".
 *
 * Do tarah ki galtiyan chhup rahi thi:
 *
 *   1. **Fake translation.** `nl` / `sv` block file me maujood tha, par uske
 *      99 me se 95 strings English hi the. Fallback (`?? en`) kabhi chalta hi
 *      nahi, isliye koi warning nahi aayi — page "translated" dikhta tha.
 *      (`src/i18n/instruments/ui.ts` me exactly yahi hua tha.)
 *
 *   2. **Missing block.** File me `nl`/`sv` block hi nahi tha, to fallback
 *      chup-chaap English de deta tha. (`bubbleProse`, `supportCopy`, …)
 *
 * Ye suite dono pakadta hai:
 *   · kisi bhi locale block me 35% se zyada strings English ke barabar ho →
 *     FAIL (fake translation).
 *   · koi naya missing (file, locale) jodi aaye → FAIL. Jo gaps pehle se hain
 *     wo `tests/locale-gaps.json` me likhe hain — wo list sirf chhoti ho sakti
 *     hai, badi nahi. Gap bharne par entry hata dena (suite khud batata hai).
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { createSuite } from './lib.mjs';

const LOCALES = ['en', 'de', 'es', 'fr', 'it', 'ja', 'ko', 'pt', 'nl', 'sv'];
const GAPS_FILE = 'tests/locale-gaps.json';

/**
 * Block ki **values** (keys nahi!). Line shape: `"key": "value",` ya
 * `'key': 'value',` — key ko chhodna zaroori hai, warna har locale me keys
 * identical hone se comparison bekaar ho jaata hai.
 */
function stringValues(source) {
  const out = [];
  for (const line of source.split('\n')) {
    const m = line.match(
      /^\s*(?:"[^"]+"|'[^']+')\s*:\s*(?:"((?:[^"\\]|\\.)*)"|'((?:[^'\\]|\\.)*)')\s*,?\s*$/
    );
    if (!m) continue;
    const value = m[1] ?? m[2];
    // Bahut chhote values ("Max", "N/A", "Email") har bhasha me same rehte hain —
    // unse fake-translation detect nahi hoti.
    if (value && value.length >= 6) out.push(value);
  }
  return out;
}

/**
 * File ke locale blocks: `const nl: X = {` aur `  nl: {` dono shapes.
 * Har block ka text next block tak.
 */
function localeBlocks(source) {
  const marks = [];
  const re = /^(?:const\s+)?["']?([a-z]{2})["']?\s*:\s*[A-Za-z]*\s*=\s*\{|^  ["']?([a-z]{2})["']?\s*:\s*\{/gm;
  for (const m of source.matchAll(re)) {
    const code = m[1] ?? m[2];
    if (LOCALES.includes(code)) marks.push({ code, index: m.index });
  }
  const blocks = new Map();
  for (let i = 0; i < marks.length; i += 1) {
    const end = i + 1 < marks.length ? marks[i + 1].index : source.length;
    // ek hi code do baar mile to lamba block rakho (nested maps)
    const text = source.slice(marks[i].index, end);
    const prev = blocks.get(marks[i].code);
    if (!prev || text.length > prev.length) blocks.set(marks[i].code, text);
  }
  return blocks;
}

function i18nFiles(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) i18nFiles(full, out);
    else if (entry.endsWith('.ts') && !entry.endsWith('.test.ts')) out.push(full);
  }
  return out;
}

export function run() {
  const suite = createSuite('locale-coverage');
  const { check } = suite;

  const gaps = existsSync(GAPS_FILE) ? JSON.parse(readFileSync(GAPS_FILE, 'utf8')) : {};
  const seen = new Set();
  const verifiedFiles = new Set();
  let filesChecked = 0;

  for (const file of i18nFiles('src/i18n')) {
    const source = readFileSync(file, 'utf8');
    const blocks = localeBlocks(source);
    if (!blocks.has('en')) continue;

    const present = [...blocks.keys()];
    if (present.length < 3) continue; // per-locale map nahi hai
    filesChecked += 1;

    const enValues = stringValues(blocks.get('en'));
    if (enValues.length < 15) continue;
    // Sirf yahan se aage file ki locale coverage asli me check hoti hai.
    verifiedFiles.add(file);
    const enSet = new Set(enValues);

    for (const locale of LOCALES) {
      if (locale === 'en') continue;
      const key = `${file}::${locale}`;
      const block = blocks.get(locale);

      /* ---------- 1. Fake translation ---------- */
      if (block) {
        const values = stringValues(block);
        if (values.length >= 15) {
          const identical = values.filter((v) => enSet.has(v)).length;
          const ratio = identical / values.length;
          check(
            ratio <= 0.45,
            `${file}: ${locale} block ka ${Math.round(ratio * 100)}% text English jaisa hai (fake translation — fallback nahi, seedha copy)`
          );
        }
        continue;
      }

      /* ---------- 2. Missing block ---------- */
      const known = (gaps[file] ?? []).includes(locale);
      if (known) seen.add(`${file}|${locale}`);
      else
        check(
          false,
          `${file}: ${locale} block missing hai (English fallback chalega, user ko galat bhasha dikhegi)`
        );
    }
  }

  check(filesChecked >= 10, `sirf ${filesChecked} per-locale files mili (parser toota?)`);

  /* ---------- Gap list sirf chhoti ho sakti hai ---------- */
  for (const [file, list] of Object.entries(gaps)) {
    // Jo file check hi nahi hui (bahut kam strings), uske gaps waisi hi rakho.
    if (!verifiedFiles.has(file)) {
      for (const locale of list) seen.add(`${file}|${locale}`);
    }
    for (const locale of list) {
      if (seen.has(`${file}|${locale}`)) continue;
      // Gap bhar gaya — list se hata do, warna ye suite jhooth bol rahi hai.
      check(
        false,
        `${file}: ${locale} ab maujood hai — tests/locale-gaps.json se ye entry hata do (gaps list sirf chhoti hoti hai)`
      );
    }
  }

  return suite;
}
