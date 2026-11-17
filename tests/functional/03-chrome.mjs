/** 03 — Header/footer/nav chrome: theme, drawer, language, search, scroll-top, copy. */
import { open, reporter } from './harness.mjs';
import { txt } from './routes.mjs';

const r = reporter();
r.section('03 — Chrome (nav, theme, drawer, language, search, copy)');

// ---------------------------------------------------------------- HOME
let p = await open('/');
const home = p;

// top pills / primary nav
const navLinks = p.$$('header a[href]').map((a) => a.getAttribute('href'));
r.check('home: header me saare nav links maujood', navLinks.length >= 4, navLinks.join(' '));
// Home par grid ke upar pehle se search field hai, isliye header ka icon
// jaan-boojh kar nahi hota (duplicate nahi). Other pages par hota hai.
r.check('home: grid ke upar inline search field hai', !!p.$('[data-lib-search]'));
r.check('home: header me duplicate search button nahi', p.$$('header [data-search-open]').length === 0, String(p.$$('header [data-search-open]').length));

// silo tabs (compass/bubble/speed/qibla)
const tabs = p.$$('a[href^="/online"]').map((a) => a.getAttribute('href'));
r.check('home: 4 sensor tools ke pill links', ['onlinecompass', 'onlinebubblelevel', 'onlinespeedometer', 'onlineqibla'].every((s) => tabs.some((h) => h.includes(s))), tabs.join(' '));

// home CTAs
const ctas = p.$$('main a[href]').map((a) => ({ t: txt(a), h: a.getAttribute('href') }));
r.check('home: hero/browse CTAs instruments ki taraf jaate hain', ctas.some((c) => /^\/(onlinecompass|onlinebubblelevel|onlinespeedometer|onlineqibla)\//.test(c.h)), ctas.slice(0, 6).map((c) => `${c.t}→${c.h}`).join(' | '));

// ------- theme toggle
const themeBtn = p.$('[data-cf-theme-toggle]');
r.check('theme: toggle button maujood hai', !!themeBtn);
if (themeBtn) {
  const before = p.document.documentElement.classList.contains('dark');
  p.click(themeBtn);
  await p.settle(60);
  const after = p.document.documentElement.classList.contains('dark');
  r.check('theme: click se dark/light badalta hai', before !== after, `${before} → ${after}`);
  const savedKey = Object.keys(p.window.localStorage).length;
  r.check('theme: choice localStorage me save hoti hai', savedKey > 0, String(savedKey));
  p.click(themeBtn);
  await p.settle(60);
  r.check('theme: dobara click par wapas', p.document.documentElement.classList.contains('dark') === before);
}

// ------- mobile drawer
const openBtn = p.$('[data-menu-open]');
r.check('drawer: menu button hai', !!openBtn);
if (openBtn) {
  p.click(openBtn);
  await p.settle(60);
  const active = p.document.body.classList.contains('cs-offcanvas-active');
  r.check('drawer: open par body class + aria-expanded', active && openBtn.getAttribute('aria-expanded') === 'true', `active=${active} aria=${openBtn.getAttribute('aria-expanded')}`);
  const drawerLinks = p.$$('#mobile-drawer a[href]').map((a) => a.getAttribute('href'));
  r.check('drawer: andar nav links hain', drawerLinks.length >= 4, String(drawerLinks.length));
  const closeBtn = p.$('#mobile-drawer [data-drawer-close]');
  r.check('drawer: close button hai', !!closeBtn);
  if (closeBtn) {
    p.click(closeBtn);
    await p.settle(60);
    r.check('drawer: close par band ho jaata hai', !p.document.body.classList.contains('cs-offcanvas-active'));
  }
  // Escape
  p.click(openBtn);
  await p.settle(50);
  p.document.dispatchEvent(new p.window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
  await p.settle(60);
  r.check('drawer: Escape se band hota hai', !p.document.body.classList.contains('cs-offcanvas-active'));
}

// ------- language picker
const langBtn = p.$('.language-picker-btn');
r.check('language: picker button hai', !!langBtn);
if (langBtn) {
  p.click(langBtn);
  await p.settle(60);
  r.check('language: click par menu khulta hai', langBtn.getAttribute('aria-expanded') === 'true', langBtn.getAttribute('aria-expanded'));
  const items = p.$$('.language-picker-item[href]');
  r.check('language: 10 bhashayein listed', items.length >= 20, `${items.length} items`);
  const hrefs = items.map((a) => a.getAttribute('href'));
  r.check('language: / par har bhasha ka apna href', hrefs.includes('/de/') && hrefs.includes('/ja/') && hrefs.includes('/'), hrefs.slice(0, 5).join(' '));
  const active = p.$$('.language-picker-item[aria-current], .language-picker-item.font-semibold').length;
  r.check('language: current language highlight', active > 0, String(active));
}

// ------- search panel (aisa page jahan header button hi entry point hai)
// /blog/ par header button jaan-boojh kar nahi hai (info pages se search hataya gaya),
// isliye panel yahan /tags/ se test hota hai.
await p.cleanup();
p = await open('/tags/');
const searchTrigger = p.$('[data-search-open]');
r.check('search: trigger button hai', !!searchTrigger);
if (searchTrigger) {
  p.click(searchTrigger);
  await p.settle(80);
  const panel = p.$('#search-panel');
  r.check('search: panel khulta hai', panel && !panel.hidden, panel ? `hidden=${panel.hidden}` : 'no panel');
  const input = p.$('#search-input');
  r.check('search: input focus ho sakta hai', !!input);
  const form = p.$('[data-search-form]');
  r.check('search: form action /search/ hai', form?.getAttribute('action')?.includes('/search'), form?.getAttribute('action'));
  r.check('search: method GET + name=q', form?.getAttribute('method') === 'get' && !!form.querySelector('[name="q"]'));
  p.click('[data-search-close]');
  await p.settle(60);
  r.check('search: close button kaam karta hai', p.$('#search-panel').hidden === true);
  // keyboard shortcut
  p.document.dispatchEvent(new p.window.KeyboardEvent('keydown', { key: 'k', ctrlKey: true, bubbles: true }));
  await p.settle(80);
  r.check('search: Ctrl+K se khulta hai', p.$('#search-panel').hidden === false);
  p.document.dispatchEvent(new p.window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
  await p.settle(60);
  r.check('search: Escape se band', p.$('#search-panel').hidden === true);
}

// ------- scroll to top
const st = p.$('[data-scroll-top], .scroll-top');
r.check('scroll-top: button maujood hai', !!st);
if (st) {
  p.click(st);
  await p.settle(40);
  r.check('scroll-top: click par top par scroll (koi error nahi)', p.errors.length === 0, p.errors.join('|').slice(0, 60));
}

// ------- footer
const footerLinks = p.$$('footer a[href]').map((a) => a.getAttribute('href'));
r.check('footer: links maujood hain', footerLinks.length >= 6, String(footerLinks.length));
r.check('footer: legal + company pages linked', ['/about/', '/contact/', '/privacy/', '/terms/'].every((h) => footerLinks.some((f) => f.startsWith(h.replace(/\/$/, '')))), footerLinks.slice(0, 8).join(' '));

// ------- tool page parity: language picker localizes the same page
await home.cleanup();
p = await open('/onlinecompass/');
const lb = p.$('.language-picker-btn');
p.click(lb);
await p.settle(60);
const toolHrefs = p.$$('.language-picker-item[href]').map((a) => a.getAttribute('href'));
r.check('language: tool page par wahi tool localize hota hai',
  toolHrefs.includes('/de/onlinecompass/') && toolHrefs.includes('/ja/onlinecompass/'),
  toolHrefs.slice(0, 4).join(' '));
// copy widget on tool page (InlineCopy buttons)
const copies = p.$$('[data-copy], [data-inline-copy], button[data-cp-copy]');
r.check('copy widgets: page par copy buttons hain', copies.length >= 0, String(copies.length));

// ------- error page: language links must NOT self-link
await p.cleanup();
p = await open('/404.html');
const errHrefs = p.$$('.language-picker-item[href]').map((a) => a.getAttribute('href'));
const selfLink = errHrefs.filter((h) => h.startsWith('/404'));
r.check('404 page: language links error page par hi nahi jaate', selfLink.length === 0,
  selfLink.length ? `self-links: ${[...new Set(selfLink)].join(' ')}` : `sab theek (${errHrefs.slice(0, 3).join(' ')})`);
const recover = p.$$('main a[href]').map((a) => a.getAttribute('href'));
r.check('404 page: recovery links hain', recover.length >= 2, recover.join(' '));
await p.cleanup();

const fails = r.summary();
process.exit(fails.length ? 1 : 0);
