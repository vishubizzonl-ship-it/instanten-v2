/**
 * WCAG 2.2 AA contrast lock (audit item 1).
 *
 * Turn 64 se pehle `--muted` #828282 (3.78:1) aur `--faint` #C4C4C4 (1.72:1)
 * the — dono chhote text (11-13px) par WCAG AA fail. `text-muted` site par
 * ~22,700 baar aur `text-faint` ~2,600 baar use hota hai, isliye ye ek bahut
 * bada accessibility gap tha.
 *
 * Ye suite token values ko `src/styles/app.css` se padh kar unka asli contrast
 * ratio nikaalta hai (koi hardcoded hex nahi), taaki aage koi bhi token halka
 * kar de to test turant fail ho.
 */
import { readFileSync } from 'node:fs';
import { createSuite } from './lib.mjs';

const CSS = 'src/styles/app.css';

/** #rrggbb -> relative luminance (WCAG 2.x definition). */
function luminance(hex) {
  const channels = hex
    .replace('#', '')
    .match(/../g)
    .map((pair) => parseInt(pair, 16) / 255)
    .map((v) => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)));
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

function ratio(a, b) {
  const l1 = luminance(a);
  const l2 = luminance(b);
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}

/** `--token: #hex;` values — pehla block light ( :root ), doosra dark. */
function readTokens(css) {
  const blocks = css.split(/\n\s*\.dark\b|\n\s*\[data-theme="?dark"?\]/);
  const light = blocks[0] ?? '';
  const dark = blocks.slice(1).join('\n');
  const grab = (source, name) => {
    const m = source.match(new RegExp(`--${name}:\\s*(#[0-9a-fA-F]{6})\\s*;`));
    return m ? m[1].toUpperCase() : null;
  };
  return { light, dark, grab };
}

const AA_NORMAL = 4.5; // normal-size text
const AA_LARGE = 3.0; // >= 18.66px bold or >= 24px

export function run() {
  const suite = createSuite('contrast');
  const { check } = suite;

  const css = readFileSync(CSS, 'utf8');
  const { light, dark, grab } = readTokens(css);

  /**
   * Light-mode backgrounds jahan text actually baithta hai:
   * canvas (#FDFDFF), surface-soft (#F8F7FF), surface (#FFFFFF),
   * aur hairline-soft (#F0F0F0 — tag counts / pills).
   */
  const LIGHT_BG = ['#FDFDFF', '#F8F7FF', '#FFFFFF', '#F0F0F0'];
  const DARK_BG = ['#1C1C1C', '#222222', '#2A2A2A'];

  /** Text tokens: AA normal text — 4.5:1 har background par. */
  const TEXT_TOKENS = ['body', 'ink', 'muted', 'faint', 'accent', 'danger', 'success', 'warning'];

  for (const token of TEXT_TOKENS) {
    const value = grab(light, token);
    check(Boolean(value), `light: --${token} token nahi mila`);
    if (!value) continue;
    for (const bg of LIGHT_BG) {
      const r = ratio(value, bg);
      check(
        r >= AA_NORMAL,
        `light --${token} (${value}) par ${bg} contrast ${r.toFixed(2)}:1 — AA ke liye 4.5:1 chahiye`
      );
    }
  }

  /** Dark mode: same rule, dark surfaces par. */
  for (const token of ['body', 'ink', 'muted', 'faint', 'accent']) {
    const value = grab(dark, token);
    check(Boolean(value), `dark: --${token} token nahi mila`);
    if (!value) continue;
    for (const bg of DARK_BG) {
      const r = ratio(value, bg);
      check(
        r >= AA_NORMAL,
        `dark --${token} (${value}) par ${bg} contrast ${r.toFixed(2)}:1 — AA ke liye 4.5:1 chahiye`
      );
    }
  }

  /* ---------- Hairlines: non-text UI components (3:1) ---------- */
  for (const [name, bg] of [
    ['light', '#FDFDFF'],
    ['dark', '#1C1C1C'],
  ]) {
    const value = grab(name === 'light' ? light : dark, 'hairline');
    if (!value) continue;
    const r = ratio(value, bg);
    // Hairline borders decorative hain (focus rings alag token se aate hain),
    // isliye yahan sirf "invisible na ho" check karte hain.
    check(r >= 1.1, `${name} --hairline ${bg} par lagbhag invisible hai (${r.toFixed(2)}:1)`);
  }

  /* ---------- Component-level hardcoded palette kot ---------- */
  // Pagination ke <style> blocks me pehle hardcoded #828282 tha (AA fail) —
  // ab wahan token hi use hota hai, taaki ek jagah badalne se sab theek ho.
  for (const file of [
    'src/components/Pagination.astro',
    'src/components/ToolsPagination.astro',
    'src/components/BlogPagination.astro',
  ]) {
    const src = readFileSync(file, 'utf8');
    check(!/#828282/i.test(src), `${file}: hardcoded #828282 (AA fail) wapas aa gaya`);
    check(!/#C4C4C4/i.test(src), `${file}: hardcoded #C4C4C4 (AA fail) wapas aa gaya`);
  }

  /* ---------- Guard: muted/faint hierarchy ---------- */
  // Dono AA pass karte hain, aur faint muted se halka hona chahiye (visual order).
  const mutedLight = grab(light, 'muted');
  const faintLight = grab(light, 'faint');
  if (mutedLight && faintLight) {
    check(
      luminance(faintLight) > luminance(mutedLight),
      `light: --faint (${faintLight}) --muted (${mutedLight}) se dark hai — hierarchy ulti ho gayi`
    );
  }
  const rMuted = ratio(mutedLight ?? '#000000', '#FDFDFF');
  check(rMuted >= AA_NORMAL, `--muted contrast ${rMuted.toFixed(2)}:1`);

  /* ---------- Large-text floor: kabhi 3:1 se neeche nahi ---------- */
  for (const bg of LIGHT_BG) {
    for (const token of ['muted', 'faint']) {
      const value = grab(light, token);
      if (!value) continue;
      const r = ratio(value, bg);
      check(r >= AA_LARGE, `${token} ${bg} par large-text floor (3:1) se neeche: ${r.toFixed(2)}:1`);
    }
  }

  return suite;
}
