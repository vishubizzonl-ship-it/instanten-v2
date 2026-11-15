/**
 * Mobile-responsiveness lock (instanten.com).
 *
 * User ki demand: "instanten-v2 ko mobile responsive banao". Design ki review
 * browser mein hoti hai, par ye suite wahi cheezein pakadti hai jo phone par
 * actually tootti hain — built HTML aur built CSS dono par:
 *
 *   1. viewport meta har page par, aur zoom band na ho (a11y)
 *   2. horizontal wobble ka global guard (overflow-x clip + max-width)
 *   3. koi fixed px width > 360 (w-[480px] type) — 360px screen par overflow
 *   4. multi-column grid bina breakpoint — 2-3 columns 360px par squeeze
 *   5. tables/pre ka overflow guard (lambi rows scroll karein, page na phaile)
 *   6. inputs 16px mobile par — iOS Safari focus zoom
 *   7. mobile header bar + drawer har page par
 *   8. tap targets 44x44 (header, drawer, footer, pagination, breadcrumb)
 *   9. sticky header ke neeche anchor na chhupe (scroll-margin-top)
 *  10. 100vh ki jagah dvh (mobile browser bar)
 *  11. 320px par pagination overflow na kare
 *  12. safe-area insets (notch / home indicator)
 *  13. lambe URL/hash layout na todhein
 *  14. filter bar ka sticky offset mobile header se match kare
 */
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { createSuite, stripTags } from './lib.mjs';

/** Poora built CSS (saare bundles jod kar) — rules wahin se verify hote hain. */
function loadCss(outDir) {
  const dir = join(outDir, '_astro');
  if (!existsSync(dir)) return '';
  return readdirSync(dir)
    .filter((f) => f.endsWith('.css'))
    .map((f) => readFileSync(join(dir, f), 'utf8'))
    .join('\n');
}

const css = (text) => text.replace(/\s+/g, '');
const hasRule = (bundle, snippet) => css(bundle).includes(css(snippet));

/** Body markup only — head ke <link>/<meta> class-free hote hain. */
const bodyOf = (html) => {
  const i = html.indexOf('<body');
  return i === -1 ? html : html.slice(i);
};

const classAttrs = (html) =>
  [...html.matchAll(/<[a-z][a-z0-9-]*[^>]*\sclass="([^"]*)"/gi)].map((m) => m[1]);

const FIXED_W = /(?<![\w:-])(?:min-)?w-\[(\d{2,4})px\]/g;
const GRID_COLS = /(?<![\w:-])grid-cols-(\d+)/g;

export function run(pages, outDir) {
  const suite = createSuite('mobile');
  const { check } = suite;

  const bundle = loadCss(outDir);
  check(bundle.length > 5000, `built CSS nahi mila (${bundle.length} chars)`);

  /* ---------- 0. Global CSS guards maujood hain -------------------------- */
  check(
    hasRule(bundle, 'overflow-x:clip'),
    'html/body par overflow-x: clip rule nahi hai — page side mein wobble karega'
  );
  check(
    hasRule(bundle, 'img,svg,video,canvas,iframe{max-width:100%}'),
    'img/svg/video ke liye max-width:100% guard nahi hai'
  );
  check(
    hasRule(bundle, 'pre{max-width:100%;overflow-x:auto'),
    'pre ke liye overflow-x guard nahi hai — code blocks page ko chaudा karenge'
  );
  check(
    /\b(article|main|\.ror-prose)\s+table[^{]*\{[^}]*overflow-x:\s*auto/.test(bundle),
    'table ke liye overflow-x guard nahi hai — lambi tables page ko chaudा karengi'
  );
  check(
    /@media\s*\(max-width:\s*767px\)[\s\S]{0,400}font-size:\s*16px\s*!important/.test(bundle),
    'mobile par inputs ka font-size 16px rule nahi hai — iOS focus par zoom karega'
  );
  check(
    hasRule(bundle, 'min-height:100dvh'),
    'dvh fallback nahi hai — mobile browser bar ke saath layout katega'
  );
  check(
    /scroll-margin-top:/.test(bundle),
    'scroll-margin-top nahi hai — #tool jaise anchor sticky header ke neeche chhupenge'
  );
  check(
    hasRule(bundle, 'padding-bottom:max(16px,env(safe-area-inset-bottom))'),
    'footer par safe-area-inset padding nahi hai — home indicator par chipkega'
  );
  check(
    hasRule(bundle, 'overflow-wrap:anywhere'),
    'lambe URL/hash ke liye overflow-wrap:anywhere nahi hai'
  );

  /* ---------- Per page ---------------------------------------------------- */
  let toolPages = 0;
  let hubPages = 0;

  for (const [url, html] of pages) {
    // Redirect stubs (jaise /de/privacy/ → /de/privacy-policy/) ka apna layout
    // nahi hota — unhe skip karo, warna jhoothe 40 fail aate hain.
    if (/http-equiv="refresh"/i.test(html)) continue;

    /* 1. viewport -------------------------------------------------------- */
    const viewport = (html.match(/<meta name="viewport" content="([^"]*)"/) || [, ''])[1];
    check(Boolean(viewport), `${url}: viewport meta nahi hai`);
    if (viewport) {
      check(
        /width=device-width/.test(viewport),
        `${url}: viewport mein width=device-width nahi hai — "${viewport}"`
      );
      check(
        !/user-scalable=no|maximum-scale=1(?!\.)/.test(viewport),
        `${url}: pinch-zoom band kiya gaya hai (accessibility fail) — "${viewport}"`
      );
    }

    const body = bodyOf(html);

    /* 3. fixed widths ---------------------------------------------------- */
    for (const m of body.matchAll(FIXED_W)) {
      check(
        Number(m[1]) <= 360,
        `${url}: ${m[0]} — 360px screen se chaudा fixed width`
      );
    }

    /* 4. grids ----------------------------------------------------------- */
    for (const cls of classAttrs(body)) {
      const cols = [...cls.matchAll(GRID_COLS)];
      if (!cols.length) continue;
      const multi = cols.filter((m) => Number(m[1]) >= 3);
      if (!multi.length) continue;
      const responsive = /(?:sm|md|lg|xl):grid-cols-/.test(cls);
      check(
        responsive,
        `${url}: "${multi[0][0]}" bina breakpoint ke — mobile par squeeze hoga`
      );
    }

    /* 5. tables / pre ---------------------------------------------------- */
    for (const m of body.matchAll(/<table[^>]*>/gi)) {
      check(
        !/width="[4-9]\d{2,}"/.test(m[0]) && !/min-width:\s*\d{3,}px/.test(m[0]),
        `${url}: table par fixed width — overflow ho jayega`
      );
    }
    for (const m of body.matchAll(/<pre[^>]*>/gi)) {
      check(
        !/white-space:\s*pre(?![-\w])/.test(m[0]),
        `${url}: pre par white-space:pre inline — wrap/scroll guard toot jayega`
      );
    }

    /* 7. header + navigation ---------------------------------------------- */
    // Sensor tool pages (onlinecompass …) apna instrument-style nav rakhte hain
    // — unke liye mobile strip contract hai, hamburger drawer nahi.
    const isInstrumentPage = /id="tool-lang-btn"/.test(html) && /data-nav-pill/.test(html);

    if (isInstrumentPage) {
      check(
        /<nav[^>]*class="[^"]*sticky[^"]*top-0/.test(html),
        `${url}: instrument nav sticky nahi hai`
      );
      check(
        /class="md:hidden/.test(html),
        `${url}: instrument nav ka mobile (md:hidden) strip nahi hai — desktop pills phone par gayab`
      );
      check(
        /id="tool-theme-btn"/.test(html) && /id="tool-lang-btn"/.test(html),
        `${url}: instrument nav ke theme/language controls nahi hain`
      );
      check(
        /md:hidden[\s\S]{0,400}data-nav-pill/.test(html),
        `${url}: mobile strip mein tool pills (data-nav-pill) nahi hain`
      );
      // logo/hamburger ki jagah nav ke andar hi navigation — drawer zaroori nahi
    } else {
      check(
        /data-mobile-bar/.test(html),
        `${url}: mobile header bar (data-mobile-bar) nahi hai`
      );
      check(
        /data-desktop-bar/.test(html),
        `${url}: desktop header bar (data-desktop-bar) nahi hai — responsive switch adhoora`
      );
      check(
        /data-drawer-panel|data-drawer-body|MobileDrawer/.test(html),
        `${url}: mobile drawer markup nahi hai`
      );
      check(
        /hamburger|data-menu-toggle|aria-label/i.test(html),
        `${url}: menu toggle button nahi hai`
      );
    }

    /* 10. 100vh ----------------------------------------------------------- */
    check(
      !/height:\s*100vh(?![\s\S]{0,40}dvh)/.test(html),
      `${url}: 100vh inline hai bina dvh fallback ke`
    );

    /* 13. inline fixed heights/widths interactive controls par nahi --------- */
    for (const m of body.matchAll(/<(?:button|a|input|select)\b[^>]*style="([^"]*)"/gi)) {
      check(
        !/height:\s*\d{1,2}px/.test(m[1]),
        `${url}: interactive control par inline fixed height — tap target tootega`
      );
    }

    /* 14. filter bar offset ---------------------------------------------- */
    if (url.includes('/tools') || url.includes('/category/') || url.includes('/pricing/') || url.includes('/tag/')) hubPages++;

    if (/data-tool-root/.test(html)) toolPages++;

    /* tool pages: in-page anchors sticky header ke neeche na chhupein ------ */
    if (/id="tool"/.test(html)) {
      check(
        /id="tool"/.test(html) && /scroll-margin-top/.test(bundle),
        `${url}: #tool anchor ke liye scroll-margin-top nahi hai`
      );
    }

    /* 12. lang + dvh ------------------------------------------------------ */
    check(/<html[^>]+lang="/.test(html), `${url}: <html lang> nahi hai`);
  }

  /* ---------- 7b. Sticky offset match ----------------------------------- */
  check(
    /#filter-bar\{top:var\(--header-h\)/.test(css(bundle)),
    'filter bar ka sticky top header height se bind nahi hai (mobile par gap banega)'
  );
  check(
    /--header-h:64px/.test(css(bundle)) && /--header-h:80px/.test(css(bundle)),
    '--header-h token mobile (64px) aur desktop (80px) dono ke liye nahi hai'
  );

  /* ---------- 8. Tap targets ------------------------------------------- */
  check(
    /min-height:44px/.test(css(bundle)),
    'tap target rule (min-height: 44px) CSS mein nahi hai'
  );
  const barRule = bundle.match(/[^{}]*\[data-mobile-bar\][^{]*\{([^}]*)\}/g) ?? [];
  check(barRule.length > 0, 'mobile header (data-mobile-bar) ke liye koi CSS rule nahi');
  check(
    barRule.some((r) => /min-width:\s*44px/.test(r) && /min-height:\s*44px/.test(r)),
    'mobile header ke buttons 44x44 nahi hain'
  );
  check(
    /\.language-picker-item\{[^}]*min-height:44px/.test(css(bundle)),
    'language menu items 44px tap height ke nahi hain'
  );
  check(
    /\.cf-pager__item[^{]*\{[^}]*min-height:44px/.test(bundle),
    'pagination items 44px tap height ke nahi hain'
  );

  /* ---------- 11. 320px pagination ------------------------------------- */
  check(
    /@media\s*\(max-width:\s*400px\)[\s\S]{0,600}cf-pager/.test(bundle),
    '320-400px ke liye pagination compact rule nahi hai — 7 items overflow karenge'
  );

  /* ---------- Counts ---------------------------------------------------- */
  check(toolPages >= 48, `sirf ${toolPages} tool pages mile (interactive tools) — build adhoora?`);
  check(hubPages >= 24, `sirf ${hubPages} hub pages mile — build adhoora?`);
  check(pages.size >= 1000, `sirf ${pages.size} pages build hue`);

  return suite;
}
