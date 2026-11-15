/**
 * Desktop-responsiveness lock (instanten.com) — 1024px se 1920px.
 *
 * mobile.mjs phone par tootne wali cheezein pakadta hai; ye suite ulta taraf:
 *
 *   1. `style="…@media…"` — style attribute mein at-rule invalid hota hai,
 *      browser baaki declarations chhod deta hai. Yahi bug tools hub ka grid
 *      desktop par 1 column kar raha tha (650 pages).
 *   2. Directory/hub grids desktop par multi-column (lg:grid-cols-3).
 *   3. Container discipline: ek hi site container (75rem = 1200px), koi page
 *      apna 1296px jaisa alag container na banaye.
 *   4. Desktop type scale: h1 desktop par chhoti na ho (52px cap), line-height
 *      compilefuture jaisa (1.19), letter-spacing -0.03em.
 *   5. Gutter bade screens par bada (1280px+ par 2rem).
 *   6. Desktop header (80px) + sticky filter bar usi ke saath flush.
 *   7. Prose ki line length 68ch par capped (1920px par bhi padhne layak).
 *   8. Card grids mein fixed aspect thumbnails (400x225) — desktop par stretch
 *      na ho.
 *   9. Mobile ke liye chhupe hue blocks desktop par bhi chhupe na rahein
 *      (md:hidden ke saath desktop alternative hona chahiye).
 */
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { createSuite } from './lib.mjs';

function loadCss(outDir) {
  const dir = join(outDir, '_astro');
  if (!existsSync(dir)) return '';
  return readdirSync(dir)
    .filter((f) => f.endsWith('.css'))
    .map((f) => readFileSync(join(dir, f), 'utf8'))
    .join('\n');
}

const squeeze = (t) => t.replace(/\s+/g, '');
const has = (bundle, snippet) => squeeze(bundle).includes(squeeze(snippet));

export function run(pages, outDir) {
  const suite = createSuite('desktop');
  const { check } = suite;

  const bundle = loadCss(outDir);
  check(bundle.length > 5000, `built CSS nahi mila (${bundle.length} chars)`);

  let directoryPages = 0;
  let toolDetailPages = 0;

  for (const [url, html] of pages) {
    if (/http-equiv="refresh"/i.test(html)) continue;

    /* 1. Invalid CSS in style attributes -------------------------------- */
    for (const m of html.matchAll(/style="([^"]*)"/g)) {
      check(
        !/@media|@supports|@container/.test(m[1]),
        `${url}: style attribute mein at-rule hai — browser baaki CSS drop kar dega`
      );
    }

    /* 2. Directory grid -------------------------------------------------- */
    if (/data-directory-grid/.test(html)) {
      directoryPages++;
      const tag = html.slice(html.indexOf('data-directory-grid') - 220, html.indexOf('data-directory-grid'));
      const cls = (tag.match(/class="([^"]*)"\s*$/) || [, ''])[1];
      check(
        /lg:grid-cols-3|xl:grid-cols-3|lg:grid-cols-4/.test(cls),
        `${url}: directory grid desktop par multi-column nahi — "${cls.slice(-60)}"`
      );
      check(
        /grid-cols-1/.test(cls),
        `${url}: directory grid ka mobile base (grid-cols-1) nahi hai`
      );
    }

    /* 8. Card thumbnails: fixed ratio ------------------------------------ */
    for (const m of html.matchAll(/<img[^>]*class="[^"]*blog-card__thumbnail[^"]*"[^>]*>/gi)) {
      check(/width="\d+"/.test(m[0]) && /height="\d+"/.test(m[0]), `${url}: card thumbnail par width/height nahi`);
    }

    /* 7b. Tool detail pages: content desktop par bada na ho ---------------- */
    if (/id="tool"/.test(html) && /data-tool-root/.test(html)) {
      toolDetailPages++;
      check(
        /max-w-5xl|max-w-\[48rem\]|site-container/.test(html),
        `${url}: tool page par desktop container width nahi hai`
      );
    }

    /* 9. Mobile-only blocks: desktop alternative hona chahiye ------------- */
    if (/class="md:hidden/.test(html)) {
      check(
        /class="hidden md:flex|md:flex|sm:flex|hidden lg:flex/.test(html),
        `${url}: md:hidden block hai par desktop alternative nahi — content desktop par gayab`
      );
    }
  }

  check(directoryPages >= 60, `sirf ${directoryPages} pages par directory grid mila`);
  check(toolDetailPages >= 48, `sirf ${toolDetailPages} tool pages mile`);

  /* ---------- 3. Container discipline ---------------------------------- */
  check(
    /--container-site:\s*75rem/.test(bundle),
    'site container token (--container-site: 75rem) nahi mila'
  );
  check(
    /\.site-container\{[^}]*max-width:var\(--container-site\)/.test(squeeze(bundle)),
    '.site-container se max-width nahi lag raha'
  );
  // Koi page apna alag desktop container na banaye (1296px etc.)
  for (const [url, html] of pages) {
    for (const m of html.matchAll(/max-w-\[(\d{3,4})px\]/g)) {
      const px = Number(m[1]);
      check(
        px <= 1200 || /dial|thumbnail|panel|menu/i.test(html.slice(Math.max(0, m.index - 200), m.index)),
        `${url}: ${m[0]} — site container (1200px) se chaudा custom container`
      );
    }
  }

  /* ---------- 4. Desktop type scale ------------------------------------ */
  check(
    /font-size:clamp\(26px,7vw,52px\)/.test(squeeze(bundle)),
    'desktop h1 ka clamp 52px par khatam nahi hota — heading desktop par chhoti rahegi'
  );
  check(
    /@media\s*\(min-width:\s*1020px\)[\s\S]{0,300}line-height:\s*1\.19/.test(bundle),
    'desktop (1020px+) ke liye h1 line-height 1.19 rule nahi hai'
  );
  check(
    /letter-spacing:\s*-0?\.03em/.test(bundle),
    'desktop h1 ka letter-spacing (-0.03em) nahi hai'
  );

  /* ---------- 5. Gutter scaling ---------------------------------------- */
  check(
    /@media\s*\(min-width:\s*1280px\)[\s\S]{0,200}--spacing-gutter:\s*2rem/.test(bundle),
    '1280px+ par gutter (2rem) scale nahi hota'
  );

  /* ---------- 6. Header / sticky offsets -------------------------------- */
  check(
    /@media\s*\(min-width:\s*1020px\)[\s\S]{0,200}\[data-desktop-bar\]\s*\{\s*display:\s*flex/.test(bundle),
    'desktop header bar (data-desktop-bar) 1020px+ par show nahi hota'
  );
  check(
    /@media\s*\(min-width:\s*1020px\)[\s\S]{0,200}\[data-mobile-bar\]\s*\{\s*display:\s*none/.test(bundle),
    'mobile header bar 1020px+ par hide nahi hota'
  );
  check(
    /#filter-bar\{top:var\(--header-h\)/.test(squeeze(bundle)),
    'sticky filter bar header height se bind nahi hai'
  );
  check(
    /--header-h:80px/.test(squeeze(bundle)),
    'desktop header height token (80px) nahi hai'
  );

  /* ---------- 7. Prose line length ------------------------------------- */
  check(
    /max-width:\s*68ch/.test(bundle),
    'prose ke liye 68ch line-length cap nahi hai — 1920px par lines bahut lambi'
  );
  check(
    /\.ror-container\{[^}]*max-width:\s*\d{3}px/.test(squeeze(bundle)),
    'blog/subpage ka reading column (ror-container) max-width ke bina hai'
  );

  /* ---------- 8b. Hover affordance ------------------------------------- */
  check(
    /@media\s*\(hover:\s*hover\)\s*and\s*\(pointer:\s*fine\)/.test(bundle),
    'pointer devices ke liye hover-specific rule nahi hai'
  );

  return suite;
}
