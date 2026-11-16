/**
 * 08 — Search end-to-end (entry point → panel → results).
 *
 * Background: ek waqt aisa tha jab SearchPanel ka poora code page me tha par
 * usko kholne wala koi button hi nahi tha — search sirf Ctrl+K se chalta tha,
 * yaani practically band. Ye file usi cheez ko permanently pakadti hai:
 * button har page type / har bhasha par hona chahiye, aur usse khula panel
 * sach me filtered results tak le jaana chahiye.
 */
import { open, reporter } from './harness.mjs';
import { txt } from './routes.mjs';

const r = reporter();
r.section('08 — Search: entry point → panel → results');

/**
 * `gridSearch: true` = us page par grid ke upar pehle se search field hai,
 * isliye header ka icon jaan-boojh kar nahi hota (duplicate na ho).
 */
const entryPages = [
  { route: '/', expectAction: '/search/', gridSearch: true },
  { route: '/de/', expectAction: '/de/search/', gridSearch: true },
  { route: '/ja/', expectAction: '/ja/search/', gridSearch: true },
  { route: '/search/', expectAction: '/search/', gridSearch: true },
  { route: '/blog/', expectAction: '/search/' },
  { route: '/tools/json-formatter/', expectAction: '/search/' },
  { route: '/tags/', expectAction: '/search/' },
  { route: '/contact/', expectAction: '/search/' },
  { route: '/404.html', expectAction: '/search/' },
];

for (const { route, expectAction, gridSearch = false } of entryPages) {
  const p = await open(route);
  const inlineField = p.$('[data-lib-search]');
  const buttons = p.$$('header [data-search-open]');
  const inMobileBar = p.$$('[data-mobile-bar] [data-search-open]').length;
  const inDesktopBar = p.$$('[data-desktop-bar] [data-search-open]').length;

  if (gridSearch) {
    // grid ke upar wala field hi entry point hai — header button duplicate nahi hona chahiye
    r.check(`${route}: grid ke upar inline search field hai`, !!inlineField);
    r.check(`${route}: header me duplicate button nahi`, buttons.length === 0, `${buttons.length} buttons`);
    // form wahi hai jo us field ke saath chalta hai
    const form = p.$('[data-search-form]') || inlineField?.closest('form');
    r.check(`${route}: inline search ka form sahi jagah jaata hai`,
      (form?.getAttribute('action') || '').includes('search'), form?.getAttribute('action'));
    p.document.dispatchEvent(new p.window.KeyboardEvent('keydown', { key: 'k', ctrlKey: true, bubbles: true }));
    await p.settle(80);
    r.check(`${route}: Ctrl+K phir bhi panel kholta hai`, p.$('#search-panel').hidden === false);
    p.document.dispatchEvent(new p.window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    await p.settle(60);
    await p.cleanup();
    continue;
  }

  r.check(`${route}: header me search button hai`, buttons.length >= 2, `${buttons.length} buttons (mobile ${inMobileBar}, desktop ${inDesktopBar})`);
  r.check(`${route}: mobile + desktop dono bars me`, inMobileBar >= 1 && inDesktopBar >= 1, `mobile=${inMobileBar} desktop=${inDesktopBar}`);

  if (buttons.length) {
    const b = buttons[0];
    r.check(`${route}: button accessible hai`, !!b.getAttribute('aria-label') && b.getAttribute('aria-controls') === 'search-panel' && b.type === 'button',
      `label="${b.getAttribute('aria-label')}" controls=${b.getAttribute('aria-controls')} type=${b.type}`);
    r.check(`${route}: icon dikhta hai`, /<svg/i.test(b.innerHTML) && txt(b) === '', txt(b).slice(0, 20) || '(khali text — sirf icon ✓)');
  }

  // click → panel khulta hai, dono buttons ka aria-expanded true
  p.click(buttons[0]);
  await p.settle(90);
  const panel = p.$('#search-panel');
  r.check(`${route}: click par panel khulta hai`, panel && !panel.hidden, panel ? `hidden=${panel.hidden}` : 'panel nahi');
  r.check(`${route}: dono buttons ka aria-expanded true`, p.$$('header [data-search-open]').every((x) => x.getAttribute('aria-expanded') === 'true'),
    p.$$('header [data-search-open]').map((x) => x.getAttribute('aria-expanded')).join(','));
  r.check(`${route}: input ready hai`, !!p.$('#search-input'));

  const form = p.$('[data-search-form]');
  const action = form?.getAttribute('action') || '';
  r.check(`${route}: form usi bhasha ke search page par jaata hai`, action === expectAction, `${action} (expected ${expectAction})`);
  r.check(`${route}: form GET + name=q`, form?.getAttribute('method') === 'get' && !!form.querySelector('[name="q"]'));

  // type karke submit — URL wahi bane jo browser banata
  const input = p.$('#search-input');
  input.value = 'json';
  input.dispatchEvent(new p.window.Event('input', { bubbles: true }));
  await p.settle(30);
  const uri = `${action}?${new URLSearchParams(new p.window.FormData(form)).toString()}`;
  r.check(`${route}: submit se sahi search URL banti hai`, /[?&]q=json(&|$)/.test(uri), uri);

  // panel band hone par aria-expanded wapas false
  p.click('[data-search-close]');
  await p.settle(80);
  r.check(`${route}: close par aria-expanded wapas false`, p.$$('header [data-search-open]').every((x) => x.getAttribute('aria-expanded') === 'false'),
    p.$$('header [data-search-open]').map((x) => x.getAttribute('aria-expanded')).join(','));

  // keyboard: Ctrl+K aur Escape
  p.document.dispatchEvent(new p.window.KeyboardEvent('keydown', { key: 'k', ctrlKey: true, bubbles: true }));
  await p.settle(80);
  const openedByKey = p.$('#search-panel').hidden === false;
  p.document.dispatchEvent(new p.window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
  await p.settle(70);
  r.check(`${route}: Ctrl+K khulta hai, Escape band karta hai`, openedByKey && p.$('#search-panel').hidden === true, `k=${openedByKey} esc=${p.$('#search-panel').hidden}`);

  await p.cleanup();
}

// ---- results page: query se sirf matching tools
for (const [route, query] of [['/search/', '?q=json'], ['/de/search/', '?q=json'], ['/search/', '?q=password']]) {
  const p = await open(route, { query });
  const cards = p.$$('[data-tool-card]').filter((c) => c.style.display !== 'none' && !c.hasAttribute('hidden'));
  const names = cards.map((c) => c.dataset.name || txt(c).slice(0, 24));
  r.check(`${route}${query}: results filter hote hain`, cards.length > 0 && cards.length < 16, `${cards.length} cards — ${names.slice(0, 3).join(', ')}`);
  r.check(`${route}${query}: sirf matching tools`, names.length > 0 && names.every((n) => /json|password|format/i.test(n)), names.join(' | '));
  // /search/ static HTML hai (query client-side filter karta hai), isliye canonical
  // aur title generic rehte hain — yahi SEO ke liye sahi hai (duplicate URL nahi).
  const canonical = p.$('link[rel="canonical"]')?.getAttribute('href') || '';
  r.check(`${route}${query}: canonical /search/ par hi rehta hai (duplicate URL nahi)`, /\/search\/?$/.test(canonical), canonical);
  await p.cleanup();
}

// ---- blog pagination pages ka chhota search button (dusra entry point)
{
  const p = await open('/blog/page/1/');
  const cardSearch = p.$('.blog-card__search-btn');
  r.check('blog pagination: card ka search button hai', !!cardSearch);
  if (cardSearch) {
    p.click(cardSearch);
    await p.settle(90);
    r.check('blog pagination: card search se panel khulta hai', p.$('#search-panel').hidden === false);
    r.check('blog pagination: panel ke baad search input focusable', !!p.$('#search-input'));
  }
  await p.cleanup();
}

const fails = r.summary();
process.exit(fails.length ? 1 : 0);
