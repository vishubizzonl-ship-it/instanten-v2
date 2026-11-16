/**
 * Heading outline lock (audit item 2).
 *
 * Silo blog ke 4 "how-to-use-…" articles me sections `h3` se shuru ho rahe the
 * (h1 ke turant baad), beech me koi `h2` nahi — 4 articles × 10 locales = 40
 * pages. Screen reader outline toot jaata hai (h1 → h3 ek level skip) aur
 * assistive tech users ko structure galat sunai deta hai.
 *
 * Ye suite har page par headings ko document order me nikaal kar check karta
 * hai:
 *   1. skip nahi (level ek se zyada neeche nahi girti)
 *   2. exactly ek h1 (error/redirect-stub pages exempt)
 *   3. pehla heading h1 hi hai
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { createSuite } from './lib.mjs';

/** Content pages jo jaan-boojh kar h1 ke bina hain (error pages + redirect stubs). */
const NO_H1_ALLOWED = /(^|\/)(403|404|500|503)(\.html)?\/?index\.html$/;

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (entry.endsWith('.html')) out.push(full);
  }
  return out;
}

/** Document order me heading levels: [1, 2, 2, 3, ...] */
function headingLevels(html) {
  const body = html.slice(html.indexOf('<body'));
  const levels = [];
  for (const m of body.matchAll(/<h([1-6])[\s>]/gi)) levels.push(Number(m[1]));
  return levels;
}

export function run() {
  const suite = createSuite('headings');
  const { check } = suite;

  const files = walk('dist');
  let checked = 0;
  let skipPages = 0;

  for (const file of files) {
    const rel = file.replace(/^dist\//, '');
    const html = readFileSync(file, 'utf8');
    const levels = headingLevels(html);
    if (levels.length === 0) continue;
    checked += 1;

    // 1. Ek bhi jump ek level se zyada nahi (h1 -> h3 = +2 = fail)
    let prev = 0;
    const skips = [];
    for (const level of levels) {
      if (prev !== 0 && level > prev + 1) skips.push(`h${prev}->h${level}`);
      prev = level;
    }
    if (skips.length) skipPages += 1;
    check(skips.length === 0, `/${rel}: heading level skip (${skips.slice(0, 3).join(', ')})`);

    // 2. exactly ek h1 (error pages exempt)
    const h1s = levels.filter((l) => l === 1).length;
    if (!NO_H1_ALLOWED.test('/' + rel)) {
      check(h1s === 1, `/${rel}: ${h1s} h1 hain, exactly 1 chahiye`);
    }

    // 3. pehla heading h1 hi ho (error pages exempt)
    if (!NO_H1_ALLOWED.test('/' + rel)) {
      check(levels[0] === 1, `/${rel}: pehla heading h${levels[0]} hai, h1 chahiye`);
    }
  }

  check(checked > 1000, `sirf ${checked} pages me headings mili (build adhoora?)`);
  check(skipPages === 0, `${skipPages} pages me heading skip hai`);

  /* ---------- 4. Wahi 4 articles jo pehle toote the ---------- */
  // Ye source-level guard hai: template me sections/FAQ ka level wapas h3 na ho.
  for (const file of [
    'src/components/pages/compass/articles/how-to-use-an-online-compass.astro',
    'src/components/pages/onlineqibla/articles/how-to-find-qibla-direction-anywhere.astro',
    'src/components/pages/onlinespeedometer/articles/how-to-use-an-online-speedometer.astro',
    'src/components/pages/onlinebubblelevel/articles/how-to-use-an-online-bubble-level.astro',
  ]) {
    const source = readFileSync(file, 'utf8');
    check(!/<h3[\s>]/.test(source), `${file}: h1 ke neeche seedha h3 wapas aa gaya`);
  }

  return suite;
}
