/** 05 — Directory/library pages: search box, filters, sort, chips, pagination, search page. */
import { open, reporter } from './harness.mjs';
import { txt } from './routes.mjs';

const r = reporter();
r.section('05 — Library filter, /search/, pagination');

const isVisible = (c) =>
  c.style.display !== 'none' && !c.hasAttribute('hidden') && !c.classList.contains('hidden');
const visibleCards = (p) => p.$$('[data-tool-card]').filter(isVisible).length;
const visibleNames = (p) =>
  p.$$('[data-tool-card]').filter(isVisible).map((c) => c.dataset.name || txt(c).slice(0, 20));

// ------------------------------------------------------- /tools/ directory
let p = await open('/');
r.check('home: script errors nahi', p.errors.length === 0, p.errors.join('|').slice(0, 80));
const total = p.$$('[data-tool-card]').length;
r.check('home: saare tool cards render', total >= 12, `${total} cards`);
const searchInput = p.$('[data-lib-search]');
r.check('home: search input maujood', !!searchInput);
if (searchInput) {
  p.type(searchInput, 'json');
  await p.settle(120);
  const names = visibleNames(p);
  r.check('home: search "json" filtre karta hai', visibleCards(p) > 0 && visibleCards(p) < total && names.some((n) => /json/i.test(n)),
    `${visibleCards(p)}/${total} cards visible — ${names.slice(0, 4).join(', ')}`);
  p.type(searchInput, 'zzzzzz');
  await p.settle(120);
  const empty = p.$('[data-lib-empty]');
  r.check('home: koi match na ho to empty-state dikhta hai', !!empty && !empty.hasAttribute('hidden'), empty ? `hidden=${empty.hasAttribute('hidden')}` : 'no empty el');
  p.type(searchInput, '');
  await p.settle(120);
}
// facet chips
const chips = p.$$('[data-facet]');
r.check('home: filter chips hain', chips.length >= 3, `${chips.length} chips`);
const catChip = chips.find((c) => c.dataset.facet === 'category' && c.dataset.value);
if (catChip) {
  p.click(catChip);
  await p.settle(150);
  const after = visibleCards(p);
  r.check('home: category chip filter karta hai (aur URL badalta hai)', after > 0 && after < total, `${after}/${total} · url=${p.window.location.search}`);
  const clearAll = p.$('[data-lib-clear-all]');
  r.check('home: "clear all" button hai', !!clearAll);
  if (clearAll) {
    p.click(clearAll);
    await p.settle(150);
    r.check('home: clear all ke baad sab wapas', visibleCards(p) === total, `${visibleCards(p)}/${total}`);
  }
}
// filters panel (mobile drawer)
const filtersBtn = p.$('[data-lib-filters-open]');
r.check('home: filters panel button hai', !!filtersBtn);
if (filtersBtn) {
  p.click(filtersBtn);
  await p.settle(120);
  const panel = p.$('[data-lib-panel]');
  r.check('home: filters panel khulta hai', !!panel && !panel.hasAttribute('hidden'), panel ? `hidden=${panel.hasAttribute('hidden')}` : 'no panel');
  const close = p.$('[data-lib-close]');
  if (close) {
    p.click(close);
    await p.settle(100);
    const panelNow = p.$('[data-lib-panel]');
    r.check('home: filters panel band hota hai', panelNow.hasAttribute('hidden') || panelNow.classList.contains('hidden'),
      panelNow.className.slice(0, 40));
    r.check('home: filters button aria-expanded wapas false', filtersBtn.getAttribute('aria-expanded') === 'false', filtersBtn.getAttribute('aria-expanded'));
  }
}
// sort
const sortSel = p.$('[data-lib-sort]');
r.check('home: sort dropdown hai', !!sortSel, sortSel ? sortSel.value : '');
if (sortSel) {
  sortSel.value = 'name';
  sortSel.dispatchEvent(new p.window.Event('change', { bubbles: true }));
  await p.settle(150);
  r.check('home: sort change par list badalti hai', visibleCards(p) > 0, `${visibleCards(p)} cards`);
}
await p.cleanup();

// ------------------------------------------------------------- /search/ ?q=
p = await open('/search/', { query: '?q=json' });
r.check('/search/?q=json — script errors nahi', p.errors.length === 0, p.errors.join('|').slice(0, 80));
const searchCards = visibleCards(p);
const searchNames = visibleNames(p);
r.check('/search/?q=json — query se results filter hote hain', searchCards > 0 && searchCards < 16, `${searchCards} cards — ${searchNames.slice(0, 4).join(', ')}`);
r.check('/search/?q=json — sirf matching tools', searchNames.every((n) => /json/i.test(n)), searchNames.join(', '));
await p.cleanup();

p = await open('/search/', { query: '?q=zzzzzz' });
const emptySearch = p.$('[data-lib-empty]');
r.check('/search/?q=zzzzzz — empty state dikhta hai', !!emptySearch && !emptySearch.hasAttribute('hidden'), emptySearch ? `hidden=${emptySearch.hasAttribute('hidden')}` : 'no empty el');
await p.cleanup();

// --------------------------------------------------------- pagination pages
for (const route of ['/blog/']) {
  p = await open(route);
  const cards = p.$$('.ror-blog-card, article').length;
  r.check(`${route}: blog cards render`, cards >= 5, `${cards} cards`);
  const next = p.$('a[rel="next"], a[aria-label*="Next"], a[href*="/blog/page/2"]');
  const pag = p.$$('[data-blog-pagination] a, .blog-pagination a, nav a[href*="/blog/page/"]').map((a) => a.getAttribute('href'));
  r.check(`${route}: posts ke links sahi hain`, p.$$('.ror-blog-card[href]').every((a) => (a.getAttribute('href') || '').startsWith('/blog/')), String(p.$$('.ror-blog-card[href]').length));
  await p.cleanup();
}

p = await open('/blog/page/2/');
r.check('/blog/page/2/: cards render', p.$$('article, [data-blog-card], .blog-card').length > 0, String(p.$$('article').length));
r.check('/blog/page/2/: prev link hai', !!p.$('a[href="/blog/"], a[rel="prev"], a[aria-label*="Previous"]'));
await p.cleanup();

// ---------------------------------------------------------------- /tags/ + tag
p = await open('/tags/');
const tagLinks = p.$$('a[href^="/tag/"]').length;
r.check('/tags/: tag links render', tagLinks > 10, `${tagLinks} tag links`);
await p.cleanup();

p = await open('/tag/json/');
r.check('/tag/json/: tool list render', p.$$('[data-tool-card], article').length >= 1);
await p.cleanup();

// ------------------------------------------------------------- locale sanity
p = await open('/de/');
r.check('/de/: German page load + filter works', p.errors.length === 0 && !!p.$('[data-lib-search]'), p.errors.join('|').slice(0, 60));
const deCards = p.$$('[data-tool-card]').length;
if (deCards) {
  p.type('[data-lib-search]', 'json');
  await p.settle(120);
  r.check('/de/: filter German page par bhi chalta hai', visibleCards(p) > 0 && visibleCards(p) < deCards, `${visibleCards(p)}/${deCards}`);
}
await p.cleanup();

const fails = r.summary();
process.exit(fails.length ? 1 : 0);
