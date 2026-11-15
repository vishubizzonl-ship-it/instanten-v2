/**
 * Library filter lock (grid cards ke upar wala filter section).
 *
 * Design reference: opendesignmd.com ka filter section — chip row + Filters
 * popover + sort select + card size. Do tarah ke check:
 *
 *   A. Markup (built HTML): chips, counts, panel, a11y attributes, i18n.
 *   B. Function (pure module): filtering, combining facets, counts, sorting,
 *      URL sync — browser ke bina, `src/scripts/library-filter.js` import kar
 *      kar asli function chalti hai.
 */
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { createSuite, stripTags } from './lib.mjs';
import { createDocument, El, makeCard } from './dom-shim.mjs';
import {
  EMPTY_FACETS,
  activeCount,
  cardMatches,
  computeCounts,
  filterCards,
  fromQuery,
  mountLibraryFilter,
  normalizeFacets,
  sortCards,
  toQuery,
} from '../src/scripts/library-filter.js';

const chipRowReady = (root) => root.querySelector('[data-lib-chips]')?.attrs['data-ready'] === 'true';

function loadCss(outDir) {
  const dir = join(outDir, '_astro');
  if (!existsSync(dir)) return '';
  return readdirSync(dir)
    .filter((f) => f.endsWith('.css'))
    .map((f) => readFileSync(join(dir, f), 'utf8'))
    .join('\n');
}

const squeeze = (t) => t.replace(/\s+/g, '');

/** Test cards — shape wahi jo data-tool-card se banta hai. */
const CARDS = [
  { name: 'JSON Formatter', category: 'Developer', pricing: 'Free', tags: ['json', 'developer'], featured: true, updated: '2024-11-20', search: 'format json' },
  { name: 'Word Counter', category: 'Writing', pricing: 'Free', tags: ['writing', 'seo'], featured: true, updated: '2024-10-01', search: 'count words' },
  { name: 'Color Palette', category: 'Design', pricing: 'Free', tags: ['design', 'color'], featured: false, updated: '2024-05-02', search: 'palette colors' },
  { name: 'Online Compass', category: 'Utility', pricing: 'Free', tags: ['utility', 'compass'], featured: false, updated: '2024-09-09', search: 'compass north' },
  { name: 'Meta Tag Generator', category: 'Marketing', pricing: 'Freemium', tags: ['seo', 'marketing'], featured: false, updated: '2023-12-12', search: 'meta seo' },
];

export async function run(pages, outDir) {
  const suite = createSuite('library-filter');
  const { check } = suite;

  /* ======================================================================
   * A. MARKUP
   * ==================================================================== */

  const FILTER_PAGES = ['/tools/', '/search/'];
  for (const locale of ['de', 'ja', 'fr', 'es', 'ko', 'nl', 'sv', 'it', 'pt']) {
    FILTER_PAGES.push(`/${locale}/tools/`);
  }

  for (const url of FILTER_PAGES) {
    const html = pages.get(url);
    check(Boolean(html), `${url}: page build mein nahi hai`);
    if (!html) continue;

    const root = html.match(/<section[^>]*data-library-filter[^>]*>/)?.[0] ?? '';
    check(Boolean(root), `${url}: filter section (data-library-filter) nahi hai`);
    check(/data-base-url="[^"]*"/.test(root), `${url}: filter section par base URL nahi hai`);
    check(/aria-label="[^"]+"/.test(root), `${url}: filter section par aria-label nahi hai`);

    // Row 1: segmented group (All / Featured) — left, search right
    const tabsMatch = html.match(/<div[^>]*data-lib-tabs[^>]*>/)?.[0] ?? '';
    check(Boolean(tabsMatch), `${url}: segmented tabs group (data-lib-tabs) nahi hai`);
    check(/role="group"/.test(tabsMatch), `${url}: tabs par role="group" nahi hai`);
    const tabEls = [
      ...html.matchAll(/<button[^>]*class="[^"]*h-\[34px\][^"]*"[^>]*data-facet="featured"[^>]*>/g),
    ].map((m) => m[0]);
    check(tabEls.length === 2, `${url}: segmented group mein ${tabEls.length} tabs (2 chahiye — All / Featured)`);
    check(tabEls.some((t) => /data-value=""/.test(t)), `${url}: tabs mein "All" segment nahi hai`);
    check(tabEls.some((t) => /data-value="1"/.test(t)), `${url}: tabs mein "Featured" segment nahi hai`);
    check(/aria-pressed="true"/.test(tabEls[0] ?? ''), `${url}: default tab pressed nahi hai`);
    // segmented track: ink/6% + radius 12px + 3px padding (opendesignmd .tabs)
    check(/data-lib-tabs/.test(html) && html.includes('rounded-xl bg-ink/[0.06] p-[3px]'), `${url}: tabs track ki styling reference se nahi milti`);

    // search tabs ke BAAD aata hai (row 1 ka right side), pehle nahi
    check(
      html.indexOf('data-lib-tabs') < html.indexOf('data-lib-search'),
      `${url}: search tabs ke baad nahi hai (row 1 ka right side hona chahiye)`
    );

    check(/data-lib-search/.test(html), `${url}: search field nahi hai`);
    check(/data-lib-chips/.test(html), `${url}: chip row nahi hai`);
    check(/data-lib-filters-open/.test(html), `${url}: Filters button nahi hai`);
    check(/data-lib-sort/.test(html), `${url}: sort select nahi hai`);
    check(/data-lib-panel/.test(html), `${url}: filters panel nahi hai`);
    check(/data-lib-backdrop/.test(html), `${url}: mobile backdrop nahi hai`);
    check(/data-lib-close/.test(html), `${url}: close button nahi hai`);
    check(/data-lib-count/.test(html), `${url}: result count line nahi hai`);
    // Result bar: count + "Clear all" (default hidden, koi filter nahi)
    const resultBar = html.match(/<div[^>]*data-lib-resultbar[^>]*>([\s\S]*?)<\/div>/)?.[1] ?? '';
    check(Boolean(resultBar), `${url}: result bar nahi hai`);
    check(/data-lib-clear-all/.test(resultBar), `${url}: result bar mein "Clear all" nahi hai`);
    check(
      /<button[^>]*class="hidden[^"]*"[^>]*data-lib-clear-all/.test(resultBar),
      `${url}: bina filter ke bhi "Clear all" dikh raha hai`
    );
    check(/role="status"/.test(resultBar) && /aria-live="polite"/.test(resultBar), `${url}: live result count nahi hai`);
    // order: tabs -> search -> chip row -> Filters -> sort -> result bar -> grid
    const order = ['data-lib-tabs', 'data-lib-search', 'data-lib-chips', 'data-lib-filters-open', 'data-lib-sort', 'data-lib-resultbar', 'data-directory-grid'];
    const positions = order.map((marker) => html.indexOf(marker));
    check(positions.every((pos) => pos !== -1), `${url}: filter section ka koi hissa missing hai`);
    check(
      positions.every((pos, index) => index === 0 || pos > positions[index - 1]),
      `${url}: filter section ka order reference se alag hai (${order.join(' > ')})`
    );
    // mobile: grid order (row1 tabs, row2 search+Filters+sort, row3 chips)
    check(/max-sm:row-start-2/.test(html) && /max-sm:row-start-3/.test(html), `${url}: mobile grid order classes nahi hain`);
    check(/data-lib-empty/.test(html), `${url}: empty state nahi hai`);

    // a11y: dialog + aria states
    check(/role="dialog"/.test(html), `${url}: filters panel par role="dialog" nahi hai`);
    check(/aria-haspopup="dialog"/.test(html), `${url}: Filters button par aria-haspopup nahi hai`);
    check(/aria-expanded="false"/.test(html), `${url}: Filters button par aria-expanded nahi hai`);
    check(/aria-controls="library-filters"/.test(html), `${url}: Filters button panel se juda nahi hai`);

    // facet chips: category + featured + pricing + tag + clear
    const chips = [...html.matchAll(/<button[^>]*data-facet="([^"]+)"[^>]*>([\s\S]*?)<\/button>/g)].map((m) => ({
      facet: m[1],
      label: stripTags(m[2]).trim(),
      html: m[0],
    }));
    check(chips.length >= 10, `${url}: sirf ${chips.length} facet chips (10+ chahiye)`);
    for (const facet of ['category', 'tag', 'featured', 'clear']) {
      check(
        chips.some((chip) => chip.facet === facet),
        `${url}: "${facet}" facet ke chips nahi hain`
      );
    }

    // Pricing chips sirf tab jab site par ek se zyada pricing ho — ek hi option
    // (sab "Free") ke liye khali group nahi dikhana chahiye.
    const pricingValues = new Set(
      [...html.matchAll(/data-tool-card[^>]*data-pricing="([^"]*)"/g)].map((m) => m[1]).filter(Boolean)
    );
    const pricingChips = chips.filter((chip) => chip.facet === 'pricing');
    if (pricingValues.size > 1) {
      check(pricingChips.length === pricingValues.size, `${url}: pricing chips adhoore — ${pricingChips.length}/${pricingValues.size}`);
    } else {
      check(pricingChips.length === 0, `${url}: ek hi pricing option par bhi pricing chips hain (${pricingChips.length})`);
      check(!html.includes('data-facet="pricing"'), `${url}: single-option pricing group markup mein hai`);
    }

    // har chip par count + pressed state
    for (const chip of chips) {
      if (chip.facet === 'clear') continue;
      check(/aria-pressed="(true|false)"/.test(chip.html), `${url}: chip par aria-pressed nahi — ${chip.label.slice(0, 30)}`);
      check(/data-count/.test(chip.html), `${url}: chip par count nahi — ${chip.label.slice(0, 30)}`);
      check(/\d/.test(chip.label), `${url}: chip par number nahi dikh raha — "${chip.label.slice(0, 30)}"`);
    }

    // "All" chip = poora count
    const allChip = chips.find((chip) => chip.facet === 'category' && !/data-value="[^"]+"/.test(chip.html));
    check(Boolean(allChip), `${url}: "All" chip nahi hai`);
    if (allChip) {
      check(/aria-current="true"/.test(allChip.html), `${url}: All chip active nahi hai (default view)`);
      check(/data-value=""/.test(allChip.html), `${url}: All chip par data-value="" nahi hai`);
    }

    // card size + sort options
    check(/data-lib-size="large"/.test(html) && /data-lib-size="small"/.test(html), `${url}: card size buttons nahi hain`);
    const sortOptions = [...html.matchAll(/<select[^>]*data-lib-sort[\s\S]*?<\/select>/g)][0]?.[0] ?? '';
    const optionValues = [...sortOptions.matchAll(/<option value="([^"]+)"/g)].map((m) => m[1]);
    check(
      ['featured', 'az', 'za', 'newest', 'oldest'].every((value) => optionValues.includes(value)),
      `${url}: sort options adhoore hain — ${optionValues.join(', ')}`
    );

    // filter poori list par chalta hai: page par hi saare cards hone chahiye
    // (static build par `?page=2` ka koi matlab nahi — wo page 1 hi deta hai).
    const cardCount = (html.match(/data-tool-card/g) ?? []).length;
    check(cardCount >= 16, `${url}: grid mein sirf ${cardCount} cards (16 tools chahiye — pagination ne kaat diya)`);
    check(!/\?page=2/.test(html), `${url}: dead pagination link (?page=2) abhi bhi hai`);

    // chips grid ke just upar hain, grid ke andar nahi
    const filterIndex = html.indexOf('data-library-filter');
    const gridIndex = html.indexOf('data-directory-grid');
    check(
      filterIndex !== -1 && gridIndex !== -1 && filterIndex < gridIndex,
      `${url}: filter section grid ke upar nahi hai`
    );
    const between = html.slice(filterIndex, gridIndex);
    check(!between.includes('data-tool-card'), `${url}: filter section ke andar tool cards aa gaye`);

    // i18n: English labels localized pages par leak na hon
    if (url.startsWith('/de/') || url.startsWith('/ja/')) {
      check(!/>\s*Search tools\s*</.test(html), `${url}: search label English mein hai`);
      check(!/>\s*Card size\s*</.test(html), `${url}: card size label English mein hai`);
    }
  }

  // purana FilterBar grid pages se hata diya gaya hai
  for (const url of FILTER_PAGES) {
    const html = pages.get(url) ?? '';
    check(!/id="filter-bar"/.test(html), `${url}: purana filter bar abhi bhi hai (do filter sections)`);
  }

  /* ======================================================================
   * B. FUNCTION (pure module)
   * ==================================================================== */

  // normalizeFacets
  const n1 = normalizeFacets({ tags: 'SEO, writing', q: '  Pack ' });
  check(n1.tags.join(',') === 'seo,writing', `normalizeFacets tags galat: ${n1.tags}`);
  check(n1.q === 'pack', `normalizeFacets q lowercase nahi: ${n1.q}`);
  check(normalizeFacets().category === '', 'normalizeFacets default category khali nahi');

  // single facet
  check(filterCards(CARDS, { category: 'Design' }).length === 1, 'category filter kaam nahi kar raha');
  check(filterCards(CARDS, { pricing: 'Freemium' }).length === 1, 'pricing filter kaam nahi kar raha');
  check(filterCards(CARDS, { featured: true }).length === 2, 'featured filter kaam nahi kar raha');

  // tags: ek se zyada = AND
  check(filterCards(CARDS, { tags: ['seo'] }).length === 2, 'tag filter kaam nahi kar raha');
  check(filterCards(CARDS, { tags: ['seo', 'writing'] }).length === 1, 'do tags AND se filter nahi hue');
  check(filterCards(CARDS, { tags: ['seo', 'nope'] }).length === 0, 'unknown tag par results aa rahe hain');

  // facets combine (AND)
  check(
    filterCards(CARDS, { category: 'Writing', tags: ['seo'] }).length === 1,
    'category + tag combine nahi hua'
  );
  check(
    filterCards(CARDS, { category: 'Design', tags: ['seo'] }).length === 0,
    'category + tag ne galat match diya'
  );

  // search
  check(filterCards(CARDS, { q: 'compass' }).length === 1, 'search q kaam nahi kar raha');
  check(filterCards(CARDS, { q: 'SEO' }).length === 2, 'search case-insensitive nahi hai');

  // ignore option (counts)
  check(cardMatches(CARDS[0], { category: 'Writing' }, { ignore: 'category' }), 'ignore category kaam nahi kar raha');
  check(!cardMatches(CARDS[0], { category: 'Writing' }, {}), 'bina ignore ke category match galat');

  // counts
  const counts = computeCounts(CARDS, EMPTY_FACETS);
  check(counts.all === 5, `counts.all galat: ${counts.all}`);
  check(counts.total === 5, `counts.total galat: ${counts.total}`);
  check(counts.categories.Design === 1, `category count galat: ${counts.categories.Design}`);
  check(counts.categories.Developer === 1, `category count galat: ${counts.categories.Developer}`);
  check(counts.tags.seo === 2, `tag count galat: ${counts.tags.seo}`);
  check(counts.featured === 2, `featured count galat: ${counts.featured}`);
  check(counts.pricings.Freemium === 1, `pricing count galat: ${counts.pricings.Freemium}`);

  // counts selection ke saath sahi rehte hain (doosre facets ignore hote hain)
  const countsDesign = computeCounts(CARDS, { category: 'Design' });
  check(countsDesign.total === 1, `filtered total galat: ${countsDesign.total}`);
  // apna hi facet ignore hota hai: Design selected hone par baaki categories
  // ke counts 0 nahi hone chahiye, warna chip se switch karna namumkin ho jaata.
  check(
    countsDesign.categories.Writing === 1,
    `category counts par apna hi filter lag gaya: Writing=${countsDesign.categories.Writing}`
  );
  check(countsDesign.categories.Design === 1, `selected category ka count galat: ${countsDesign.categories.Design}`);
  // baaki facets ka count selected category ke andar hi ginta hai
  check(countsDesign.tags.design === 1, `tag count selection ke baad galat: ${countsDesign.tags.design}`);
  check(!countsDesign.tags.seo, `doosri category ka tag count leak ho raha hai: ${countsDesign.tags.seo}`);

  // sort
  check(sortCards(CARDS, 'az')[0].name === 'Color Palette', 'A–Z sort galat');
  check(sortCards(CARDS, 'za')[0].name === 'Word Counter', 'Z–A sort galat');
  check(sortCards(CARDS, 'newest')[0].name === 'JSON Formatter', 'newest sort galat');
  check(sortCards(CARDS, 'oldest')[0].name === 'Meta Tag Generator', 'oldest sort galat');
  const featuredSort = sortCards(CARDS, 'featured');
  check(featuredSort[0].featured && featuredSort[1].featured, 'recommended sort mein featured pehle nahi');
  check(sortCards(CARDS, 'az') !== CARDS, 'sort ne original array mutate kar diya');

  // active count + query
  check(activeCount(EMPTY_FACETS) === 0, 'khali facets ka active count 0 nahi');
  check(
    activeCount({ category: 'Design', tags: ['seo', 'color'], q: 'x', featured: true }) === 5,
    'active count galat'
  );
  check(toQuery(EMPTY_FACETS, 'featured') === '', 'khali query bani');
  check(toQuery({ category: 'Design', tags: ['seo'] }, 'az') === '?category=Design&tags=seo&sort=az', `toQuery galat: ${toQuery({ category: 'Design', tags: ['seo'] }, 'az')}`);
  const roundTrip = fromQuery('?category=Writing&tags=seo,writing&q=word&featured=1');
  check(roundTrip.category === 'Writing' && roundTrip.tags.length === 2 && roundTrip.featured === true, 'fromQuery round-trip galat');

  /* ======================================================================
   * C. STYLE (reference measurements)
   * ==================================================================== */
  const bundle = loadCss(outDir);
  check(bundle.length > 5000, 'built CSS nahi mila');
  check(/aria-pressed\\:bg-ink\[aria-pressed=true\]/.test(bundle), 'chip ka pressed state (ink fill) CSS mein nahi');
  check(/data-\\\[empty\\=true\\\]\\:opacity-40/.test(bundle), 'empty facet chip ka dim state CSS mein nahi');
  check(/min-height:\s*44px/.test(bundle), 'mobile tap target rule nahi hai');

  /* ======================================================================
   * D. WIRING (real mountLibraryFilter, chhote DOM shim par)
   * ==================================================================== */
  const { body, document: doc } = createDocument();

  const root = new El('section', { 'data-library-filter': '', 'data-base-url': '/tools/' });
  const searchInput = new El('input', { 'data-lib-search': '' });
  const chips = new El('div', { 'data-lib-chips': '' });
  const chipSpecs = [
    ['category', '', 'All'],
    ['featured', '1', 'Featured'],
    ['category', 'Developer', 'Developer'],
    ['category', 'Design', 'Design'],
    ['pricing', 'Freemium', 'Freemium'],
    ['tag', 'seo', 'SEO'],
    ['tag', 'writing', 'Writing'],
    ['clear', '', 'Clear'],
  ];
  const chipEls = chipSpecs.map(([facet, value, label]) => {
    const chip = new El('button', { 'data-facet': facet, 'data-value': value, 'aria-pressed': 'false' });
    chip.appendChild(new El('span', { 'data-count': '' }));
    chip.appendChild(new El('span', {}, {})).textContent = label;
    chips.appendChild(chip);
    return chip;
  });
  // segmented scope: All (value="") — real markup mein bhi dono segments hote hain
  const scopeAllChip = new El('button', { 'data-facet': 'featured', 'data-value': '', 'aria-pressed': 'true' });
  scopeAllChip.appendChild(new El('span', { 'data-count': '' }));
  chips.appendChild(scopeAllChip);
  chipEls.push(scopeAllChip);

  const filtersBtn = new El('button', { 'data-lib-filters-open': '', 'aria-expanded': 'false' });
  const filtersCount = new El('span', { 'data-lib-filters-count': '', class: 'hidden' });
  const panel = new El('div', { 'data-lib-panel': '', class: 'hidden' });
  const panelCount = new El('span', { 'data-lib-panel-count': '' });
  panel.appendChild(panelCount);
  const backdrop = new El('div', { 'data-lib-backdrop': '', class: 'hidden' });
  const closeBtn = new El('button', { 'data-lib-close': '' });
  const sortSelect = new El('select', { 'data-lib-sort': '' });
  sortSelect.value = 'featured';
  const sizeLarge = new El('button', { 'data-lib-size': 'large', 'aria-pressed': 'true' });
  const sizeSmall = new El('button', { 'data-lib-size': 'small', 'aria-pressed': 'false' });
  const countEl = new El('p', { 'data-lib-count': '', 'data-template': '{count} tools' });
  const clearAll = new El('button', { 'data-lib-clear-all': '', class: 'hidden' });
  const scopeAll = new El('button', { 'data-scope-all': '' });
  const emptyEl = new El('div', { 'data-lib-empty': '', class: 'hidden' });

  for (const node of [searchInput, chips, filtersBtn, filtersCount, panel, backdrop, closeBtn, sortSelect, sizeLarge, sizeSmall, countEl, clearAll, emptyEl]) {
    root.appendChild(node);
  }

  const grid = new El('div', { 'data-directory-grid': '', class: 'grid' });
  const cardEls = CARDS.map((data) => grid.appendChild(makeCard(data)));
  body.appendChild(root);
  body.appendChild(grid);

  // globals jo script padhta hai
  globalThis.document = doc;
  globalThis.location = { search: '?category=Design', pathname: '/tools/' };
  const replaced = [];
  globalThis.history = {
    replaceState: (_state, _title, url) => replaced.push(url),
  };

  const api = mountLibraryFilter(root);
  check(Boolean(api), 'mountLibraryFilter ne null return kiya (grid/root nahi mila)');

  const visibleNames = () => cardEls.filter((el) => !el.hidden).map((el) => el.attrs['data-name']);
  const clickChip = (facet, value = '') => {
    const chip = chipEls.find((el) => el.attrs['data-facet'] === facet && (el.attrs['data-value'] ?? '') === value);
    chip.dispatch('click', { target: chip });
  };

  // URL se initial state
  check(api.getFacets().category === 'Design', `URL se category nahi aayi: ${api.getFacets().category}`);
  check(visibleNames().join('|') === 'Color Palette', `URL state se grid filter nahi hua: ${visibleNames()}`);
  check(countEl.textContent === '1 tools', `result count galat: ${countEl.textContent}`);
  check(panelCount.textContent === '1', `panel count galat: ${panelCount.textContent}`);
  check(chipEls[3].attrs['aria-pressed'] === 'true', 'pre-selected chip par aria-pressed nahi');
  check(filtersCount.textContent === '1' && !filtersCount.classList.contains('hidden'), 'Filters badge count galat');

  // chip click = toggle (Design off -> sab wapas)
  clickChip('category', 'Design');
  check(visibleNames().length === 5, `chip toggle ke baad sab cards nahi aaye: ${visibleNames().length}`);
  check(chipEls[3].attrs['aria-pressed'] === 'false', 'chip unpressed nahi hua');

  // category select
  clickChip('category', 'Developer');
  check(visibleNames().join('|') === 'JSON Formatter', `category chip ne filter nahi kiya: ${visibleNames()}`);
  check(replaced.at(-1) === '/tools/?category=Developer', `URL sync galat: ${replaced.at(-1)}`);

  // featured + tag combine
  clickChip('category', 'Developer'); // off
  clickChip('featured', '1');
  check(visibleNames().length === 2, `featured chip galat: ${visibleNames()}`);
  clickChip('tag', 'seo');
  clickChip('tag', 'writing');
  check(visibleNames().join('|') === 'Word Counter', `featured + 2 tags galat: ${visibleNames()}`);

  // scope tab "All" (value="") featured off karta hai
  clickChip('featured', '');
  check(!api.getFacets().featured, 'scope All tab ne featured off nahi kiya');
  clickChip('featured', '1');
  check(api.getFacets().featured, 'scope Featured tab ne feature on nahi kiya');

  // clear
  clickChip('clear');
  check(api.getFacets().tags.length === 0 && !api.getFacets().featured, 'Clear ne facets reset nahi kiye');
  check(visibleNames().length === 5, 'Clear ke baad sab cards nahi aaye');
  check(searchInput.value === '', 'Clear ne search input khali nahi kiya');
  check(replaced.at(-1) === '/tools/', `Clear ke baad URL saaf nahi hua: ${replaced.at(-1)}`);

  // Clear all (result bar) — sirf filter laga ho tab dikhta hai
  check(clearAll.classList.contains('hidden'), 'bina filter ke Clear all dikh raha hai');
  clickChip('tag', 'seo');
  check(!clearAll.classList.contains('hidden'), 'filter lagne par Clear all nahi aaya');
  clearAll.dispatch('click', { target: clearAll });
  check(api.getFacets().tags.length === 0, 'Clear all ne tags reset nahi kiye');
  check(clearAll.classList.contains('hidden'), 'Clear all ke baad button chhupa nahi');
  check(visibleNames().length === 5, 'Clear all ke baad saare cards nahi aaye');

  // empty state ke andar ka Clear all bhi wahi kaam karta hai
  searchInput.value = 'zzz';
  searchInput.dispatch('input', { target: searchInput });
  await new Promise((resolve) => setTimeout(resolve, 220));
  const emptyClear = new El('button', {});
  root.appendChild(emptyClear);
  clickChip('clear');
  check(emptyEl.classList.contains('hidden'), 'empty state clear ke baad band nahi hua');

  // sort
  const clickSort = (value) => {
    sortSelect.value = value;
    sortSelect.dispatch('change', { target: sortSelect });
  };
  clickSort('az');
  check(grid.children[0].attrs['data-name'] === 'Color Palette', `sort az grid par lagu nahi hua: ${grid.children[0].attrs['data-name']}`);
  check(replaced.at(-1) === '/tools/?sort=az', `sort URL sync galat: ${replaced.at(-1)}`);

  // search (debounced 120ms)
  searchInput.value = 'compass';
  searchInput.dispatch('input', { target: searchInput });
  await new Promise((resolve) => setTimeout(resolve, 220));
  check(visibleNames().join('|') === 'Online Compass', `search ne filter nahi kiya: ${visibleNames()}`);
  check(replaced.at(-1).includes('q=compass'), `search URL sync galat: ${replaced.at(-1)}`);

  // empty state
  searchInput.value = 'zzzz-nothing';
  searchInput.dispatch('input', { target: searchInput });
  await new Promise((resolve) => setTimeout(resolve, 220));
  check(visibleNames().length === 0, 'empty search par cards bache hue hain');
  check(!emptyEl.classList.contains('hidden'), 'empty state dikhaya nahi gaya');
  check(countEl.textContent === '0 tools', `empty state par count galat: ${countEl.textContent}`);

  // empty state se wapas
  clickChip('clear');
  check(emptyEl.classList.contains('hidden'), 'cards aane ke baad empty state hide nahi hua');

  // card size
  sizeSmall.dispatch('click', { target: sizeSmall });
  check(grid.classList.contains('lg:grid-cols-4'), `small size classes nahi lagi: ${grid.className}`);
  check(sizeSmall.attrs['aria-pressed'] === 'true' && sizeLarge.attrs['aria-pressed'] === 'false', 'size buttons ka pressed state galat');
  sizeLarge.dispatch('click', { target: sizeLarge });
  check(grid.classList.contains('lg:grid-cols-3'), 'large size classes wapas nahi aayi');

  // popover open / close / Escape
  filtersBtn.dispatch('click', { target: filtersBtn });
  check(!panel.classList.contains('hidden'), 'Filters button se panel khula nahi');
  check(filtersBtn.attrs['aria-expanded'] === 'true', 'open par aria-expanded true nahi');
  check(!backdrop.classList.contains('hidden'), 'panel khulne par backdrop nahi aaya');
  closeBtn.dispatch('click', { target: closeBtn });
  check(panel.classList.contains('hidden'), 'close button se panel band nahi hua');
  check(backdrop.classList.contains('hidden'), 'close par backdrop band nahi hua');
  check(filtersBtn.attrs['aria-expanded'] === 'false', 'close par aria-expanded false nahi');
  filtersBtn.dispatch('click', { target: filtersBtn });
  doc.dispatch('keydown', { key: 'Escape' });
  check(panel.classList.contains('hidden'), 'Escape se panel band nahi hua');
  check(chipRowReady(root), 'chip row par data-ready nahi (fade mask/scroll ke liye)');

  // facet counts: doosri category 0 nahi honi chahiye (warna switch namumkin)
  filtersBtn.dispatch('click', { target: filtersBtn }); // band karo
  clickChip('category', 'Design');
  check(
    Number(chipEls[2].querySelector('[data-count]').textContent) === 1,
    `baaki category ka count dim ho gaya (ignore fail): ${chipEls[2].querySelector('[data-count]').textContent}`
  );
  // tag counts bhi selected category ke andar hi ginte hain
  check(
    Number(chipEls[5].querySelector('[data-count]').textContent) === 0,
    `doosri category ka tag count leak ho raha hai: ${chipEls[5].querySelector('[data-count]').textContent}`
  );

  return suite;
}
