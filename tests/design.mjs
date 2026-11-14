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

  // --- header language button must be a circle on EVERY breakpoint --------
  for (const rule of [
    'header [data-mobile-bar] .language-picker-btn{width:40px',
    'header [data-mobile-bar] .language-picker-btn{width:36px',
  ]) {
    check(css.includes(rule), `mobile header language button circle nahi hai (${rule})`);
  }
  const mobilePicker = css.match(/header \[data-mobile-bar\] \.language-picker-btn\{([^}]*)\}/g) ?? [];
  for (const rule of mobilePicker) {
    check(rule.includes('border-radius:9999px'), `mobile language button par border-radius circle nahi :: ${rule.slice(0, 80)}`);
    check(!/padding:(?!0)/.test(rule), `mobile language button par padding circle tod raha hai :: ${rule.slice(0, 80)}`);
  }

  // --- footer language button: gol pill, header ke barabar, menu center ----
  for (const [url, html] of pages) {
    if (!url.endsWith('/')) continue;                       // sirf page HTML
    if (html.includes('http-equiv="refresh"')) continue;     // redirect stub, layout nahi
    const footer = html.slice(html.indexOf('<footer'));
    if (!footer) continue;
    const btn = footer.match(/class="(language-picker-btn[^"]*)"/);
    const menu = footer.match(/class="(language-picker-menu[^"]*)"/);
    check(!!btn, `footer language button nahi mila :: ${url}`);
    check(!!menu, `footer language menu nahi mila :: ${url}`);
    if (btn) {
      check(btn[1].includes('rounded-full'), `footer language button rounded nahi hai :: ${url}`);
      check(/\bh-10\b/.test(btn[1]), `footer language button 40px height nahi hai :: ${url}`);
      // footer = pill with the language name, NOT a circle-only glyph button
      check(!/\bw-10\b/.test(btn[1]), `footer language button circle ban gaya (w-10) :: ${url}`);
      const label = footer.slice(0, footer.indexOf('</button>')).replace(/<svg[\s\S]*?<\/svg>/g, '');
      check(/[A-Za-z\u00C0-\u024F\u0400-\u04FF\u3040-\u30FF\u4E00-\u9FFF]{3,}/.test(label),
        `footer language button par language ka naam nahi hai :: ${url}`);
    }
    if (menu) {
      check(
        menu[1].includes('left-1/2') && menu[1].includes('-translate-x-1/2'),
        `footer language menu center se nahi khulta :: ${url}`
      );
      check(!/\bright-0\b/.test(menu[1]), `footer language menu right edge se khul raha hai :: ${url}`);
    }
  }

  // --- language picker globe icon must be the real globe, not the broken path
  const BROKEN_GLOBE = '15.3 15.3 0 0 1 4 10';
  for (const [url, html] of pages) {
    check(!html.includes(BROKEN_GLOBE), `language button ka globe icon toota hua path use kar raha hai :: ${url}`);
  }
  const footerHtml = pages.get('/') ?? '';
  const pickerSeg = footerHtml.slice(footerHtml.indexOf('language-picker-wrapper--footer'));
  check(pickerSeg.includes('M12 2a14.5'), 'language button ka globe icon sahi nahi hai');
  check(pickerSeg.includes('M2 12h20'), 'language button ke globe ki horizontal line nahi hai');

  // --- scroll-to-top button: compilefuture ka exact design ----------------
  check(/\.scroll-top\{position:fixed;bottom:1rem;right:1rem;z-index:9/.test(css),
    'scroll-top button fixed bottom-right nahi hai');
  check(/\.scroll-top\{[^}]*width:48px;height:48px/.test(css), 'scroll-top 48px circle nahi hai');
  check(/\.scroll-top\{[^}]*border-radius:50%/.test(css), 'scroll-top gol nahi hai');
  check(/\.scroll-top\{[^}]*opacity:0;visibility:hidden/.test(css), 'scroll-top shuru mein chhupa nahi hai');
  check(/\.scroll-top\.is-active\{opacity:1;visibility:visible/.test(css), 'scroll-top is-active state nahi hai');
  check(/\.scroll-top__progress path\{stroke:var\(--accent\)/.test(css), 'progress ring accent color nahi hai');
  check(/\.scroll-top__progress path\{[^}]*stroke-dasharray:141\.37px/.test(css), 'progress ring ki dasharray (141.37) nahi hai');
  check(/@media\(min-width:768px\)\{\.scroll-top\{bottom:2rem;right:2rem\}/.test(css),
    'desktop par scroll-top 2rem offset nahi hai');

  for (const [url, html] of pages) {
    if (html.includes('http-equiv="refresh"')) continue;
    const btn = html.match(/<button[^>]*data-scroll-top[\s\S]{0,1400}?<\/button>/);
    if (!check(!!btn, `scroll-to-top button page par nahi hai :: ${url}`)) continue;
    check(btn[0].includes('class="scroll-top"'), `scroll-top class galat :: ${url}`);
    check(btn[0].includes('scroll-top__progress'), `progress ring markup nahi :: ${url}`);
    check(btn[0].includes('scroll-top__border'), `border ring markup nahi :: ${url}`);
    check(btn[0].includes('M24.5,2 a22.5'), `ring path (r=22.5) nahi :: ${url}`);
    check(btn[0].includes('M18 15l-6-6-6 6'), `chevron-up icon nahi :: ${url}`);
    check(/aria-label="[^"]+"/.test(btn[0]), `scroll-top par aria-label nahi :: ${url}`);
    // clicking must actually scroll to top, smoothly
    check(html.includes('window.scrollTo({top:0,behavior:"smooth"})') ||
          html.includes("window.scrollTo({ top: 0, behavior: 'smooth' })"),
      `scroll-top click handler smooth scroll nahi karta :: ${url}`);
    check(html.includes('strokeDashoffset'), `progress update ka script nahi :: ${url}`);
  }

  // --- no pill CTAs left in HTML -----------------------------------------
  for (const [url, html] of pages) {
    const pills = [...html.matchAll(/<(a|button)\b[^>]*class="[^"]*rounded-full[^"]*"[^>]*>/g)].map((m) => m[0]);
    for (const pill of pills) {
      // language picker ka pill jaan-boojh kar hai (header + footer dono)
      if (pill.includes('language-picker-btn')) continue;
      // Sensor tools ka apna header (compassinstant se): wahan nav items pill
      // hain aur wo jaan-boojh kar hain — rule CTAs ke liye hai, nav ke liye nahi.
      if (pill.includes('data-nav-pill')) continue;
      // circles (social icons, scroll-to-top) allowed: same width & height
      const equalBox = /w-(\d+)\s+h-\1\b/.test(pill) || /h-(\d+)\s+w-\1\b/.test(pill);
      check(equalBox, `pill-shaped CTA bacha hua hai :: ${url} :: ${pill.slice(0, 90)}`);
    }
  }

  return suite;
}
