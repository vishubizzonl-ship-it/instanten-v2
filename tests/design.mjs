/**
 * Design lock: instanten-v2 follows the compilefuture.com design language.
 * Tokens yahan pin hain — koi bhi change galti se design drift karega to test fail.
 *
 * Reference: https://compilefuture.com (values us site ke CSS se liye gaye).
 */
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { createSuite } from './lib.mjs';

const cssFiles = (outDir) => {
  const dir = join(outDir, '_astro');
  return readdirSync(dir).filter((f) => f.endsWith('.css')).map((f) => readFileSync(join(dir, f), 'utf8'));
};

export function run(pages, outDir) {
  const suite = createSuite('design');
  const { check } = suite;
  const css = cssFiles(outDir).join('\n');

  // --- compilefuture tokens (Tailwind minify karta hai: 0.5rem -> .5rem) ----
  const tokens = {
    '--radius-btn': '.5rem',       // button 8px
    '--container-site': '75rem',   // 1200px laptop container
  };
  for (const [token, value] of Object.entries(tokens)) {
    check(css.includes(`${token}:${value}`), `token ${token} ${value} nahi mila`);
  }
  check(css.includes('.rounded-card{border-radius:1rem}'), 'card radius 16px nahi hai');
  check(css.includes('border-radius:6px'), 'tag/chip radius 6px nahi hai');

  // --- surfaces -----------------------------------------------------------
  check(css.includes('--canvas:#fdfdff'), 'site background #FDFDFF nahi hai');
  check(css.includes('--canvas-end:#f8f7ff'), 'site gradient end #F8F7FF nahi hai');
  check(
    /background:linear-gradient\(180deg,var\(--canvas\) 0%,var\(--canvas-end\) 100%\)/.test(css),
    'body ka gradient nahi laga'
  );

  // --- typography ---------------------------------------------------------
  check(css.includes('DM Sans'), 'DM Sans font stack nahi hai');
  check(/\.text-heading-lg\{font-size:2\.625rem/.test(css), 'h2 42px (2.625rem) nahi hai');
  check(/\.text-body-md\{font-size:1rem/.test(css), 'body base 16px nahi hai');

  // --- buttons ------------------------------------------------------------
  check(
    /\.btn-primary\{background-image:linear-gradient\(180deg,var\(--accent-start\) 0%,var\(--accent-end\) 100%\)/.test(css),
    'primary button par compilefuture gradient nahi hai'
  );
  check(/\.btn\{border-radius:var\(--radius-btn\)/.test(css), 'button radius 8px nahi hai');

  // --- no pill CTAs left in HTML -----------------------------------------
  for (const [url, html] of pages) {
    const pills = [...html.matchAll(/<(a|button)\b[^>]*class="[^"]*rounded-full[^"]*"[^>]*>/g)].map((m) => m[0]);
    for (const pill of pills) {
      // circles (social icons, scroll-to-top) allowed: same width & height
      const equalBox = /w-(\d+)\s+h-\1\b/.test(pill) || /h-(\d+)\s+w-\1\b/.test(pill);
      check(equalBox, `pill-shaped CTA bacha hua hai :: ${url} :: ${pill.slice(0, 90)}`);
    }
  }

  return suite;
}
