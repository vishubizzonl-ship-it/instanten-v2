/**
 * Library filter — pure logic + DOM wiring.
 *
 * Grid cards ke upar wala filter section (search field, facet chips, Filters
 * popover, sort select, card size) isi module par chalta hai. Site static hai,
 * isliye filtering browser mein hoti hai: build par saare cards grid mein hote
 * hain aur yahan wo show/hide + reorder hote hain.
 *
 * Design reference: opendesignmd.com ka filter section (chips + Filters
 * popover + sort + card size) — wahi measurements, wahi behaviour:
 *   · facet types aapas mein AND, ek hi type ke andar OR (tags)
 *   · counts har click ke baad dobara bante hain (facet-count style)
 *   · URL query params sync (share/reload par wahi view)
 *
 * Pure functions yahan hain taaki tests bina browser ke chala sakein
 * (`tests/library-filter.mjs`).
 */

/** Facets ka default shape. */
export const EMPTY_FACETS = Object.freeze({
  category: '',
  pricing: '',
  tags: [],
  q: '',
  featured: false,
});

const norm = (value) => String(value ?? '').trim();

/** Kisi bhi input (object / query string) ko saaf facets mein badlo. */
export function normalizeFacets(raw = {}) {
  const tags = Array.isArray(raw.tags)
    ? raw.tags
    : norm(raw.tags)
      ? String(raw.tags).split(',')
      : [];
  return {
    category: norm(raw.category),
    pricing: norm(raw.pricing),
    tags: tags.map((tag) => norm(tag).toLowerCase()).filter(Boolean),
    q: norm(raw.q).toLowerCase(),
    featured: raw.featured === true || raw.featured === 'true' || raw.featured === '1',
  };
}

/** Card ke tags lowercase array. */
const cardTags = (card) =>
  (Array.isArray(card.tags) ? card.tags : norm(card.tags) ? String(card.tags).split(',') : [])
    .map((tag) => norm(tag).toLowerCase())
    .filter(Boolean);

/**
 * Accent/diacritic hata do: "brújula" → "brujula".
 *
 * Kyun: Spanish/French/Portuguese users bina accent wala shabd type karte hain.
 * `toLowerCase()` sirf case theek karta hai, "brujula" se "brújula" match nahi
 * hota tha. (CJK par normalise kuch nahi badalta.)
 */
export const fold = (value) =>
  String(value ?? '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

const cardText = (card) =>
  fold(`${card.name ?? ''} ${card.category ?? ''} ${card.search ?? ''} ${(card.tags || []).join(' ')}`);

/**
 * Ek card facets se match karta hai ya nahi.
 * `ignore` se ek facet type chhod kar baaki check hote hain — counts isi se
 * bante hain (jaise "Design" par 3 dikhe, chahe pricing filter laga ho).
 */
export function cardMatches(card, facets, { ignore = null } = {}) {
  const f = normalizeFacets(facets);

  // Case-insensitive compare: URL se `?category=utility` (lowercase) aata hai
  // aur card par "Utility" hota hai — dono match hone chahiye.
  if (ignore !== 'category' && f.category) {
    if (norm(card.category).toLowerCase() !== f.category.toLowerCase()) return false;
  }
  if (ignore !== 'pricing' && f.pricing) {
    if (norm(card.pricing).toLowerCase() !== f.pricing.toLowerCase()) return false;
  }
  if (ignore !== 'tags' && f.tags.length) {
    const have = cardTags(card);
    if (!f.tags.every((tag) => have.includes(tag))) return false;
  }
  if (ignore !== 'featured' && f.featured) {
    if (!card.featured) return false;
  }
  if (ignore !== 'q' && f.q) {
    // Har shabd alag-alag match hona chahiye ("prettify json", "kompass nadel").
    // Plural bhi chalta hai: "niveaux" → "niveau", "compasses" → "compass"
    // (French/Spanish/Portuguese/English me log plural likhte hain).
    const text = cardText(card);
    const tokens = fold(f.q).split(/\s+/).filter(Boolean);
    const variants = (token) => {
      if (token.length <= 3) return [token];
      // "niveaux" → "niveau" (French -eaux), "vitesses" → "vitesse" (s), "compasses" → "compass"
      if (token.endsWith('x') || token.endsWith('s')) return [token, token.slice(0, -1)];
      return [token];
    };
    if (!tokens.every((token) => variants(token).some((form) => text.includes(form)))) return false;
  }
  return true;
}

/** Filtered cards (order same rehta hai). */
export function filterCards(cards, facets) {
  return cards.filter((card) => cardMatches(card, facets));
}

const time = (value) => {
  const t = Date.parse(norm(value));
  return Number.isNaN(t) ? 0 : t;
};

/** Sort: recommended (featured pehle) | az | za | newest | oldest. */
export function sortCards(cards, sort = 'featured') {
  const list = [...cards];
  const byName = (a, b) => norm(a.name).localeCompare(norm(b.name), undefined, { sensitivity: 'base' });
  switch (sort) {
    case 'az':
      return list.sort(byName);
    case 'za':
      return list.sort((a, b) => byName(b, a));
    case 'newest':
      return list.sort((a, b) => time(b.updated || b.added) - time(a.updated || a.added));
    case 'oldest':
      return list.sort((a, b) => time(a.updated || a.added) - time(b.updated || b.added));
    case 'featured':
    default:
      return list.sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)) || byName(a, b));
  }
}

/**
 * Facet counts — har value ke saamne wahi number jo click karne par milega.
 * `all` total cards, `total` abhi ka result count.
 */
export function computeCounts(cards, facets) {
  const f = normalizeFacets(facets);
  const categories = {};
  const pricings = {};
  const tags = {};

  for (const card of cards) {
    const category = norm(card.category).toLowerCase();
    const pricing = norm(card.pricing).toLowerCase();
    if (category && cardMatches(card, f, { ignore: 'category' })) {
      categories[category] = (categories[category] ?? 0) + 1;
    }
    if (pricing && cardMatches(card, f, { ignore: 'pricing' })) {
      pricings[pricing] = (pricings[pricing] ?? 0) + 1;
    }
    for (const tag of cardTags(card)) {
      if (cardMatches(card, f, { ignore: 'tags' })) tags[tag] = (tags[tag] ?? 0) + 1;
    }
  }

  return {
    all: cards.length,
    total: filterCards(cards, f).length,
    featured: cards.filter((card) => card.featured && cardMatches(card, f, { ignore: 'featured' })).length,
    categories,
    pricings,
    tags,
  };
}

/** Chips par dikhne wala active count (Filters button ka badge). */
export function activeCount(facets) {
  const f = normalizeFacets(facets);
  return (
    (f.category ? 1 : 0) + (f.pricing ? 1 : 0) + f.tags.length + (f.featured ? 1 : 0) + (f.q ? 1 : 0)
  );
}

/** Facets + sort -> "?category=Design&sort=az" (khali values chhod kar). */
export function toQuery(facets, sort = 'featured') {
  const f = normalizeFacets(facets);
  const params = new URLSearchParams();
  if (f.category) params.set('category', f.category);
  if (f.pricing) params.set('pricing', f.pricing);
  if (f.tags.length) params.set('tags', f.tags.join(','));
  if (f.featured) params.set('featured', '1');
  if (f.q) params.set('q', f.q);
  if (sort && sort !== 'featured') params.set('sort', sort);
  const query = params.toString();
  return query ? `?${query}` : '';
}

/** URLSearchParams / query string se facets. */
export function fromQuery(search = '') {
  const params = new URLSearchParams(search.replace(/^\?/, ''));
  return normalizeFacets({
    category: params.get('category'),
    pricing: params.get('pricing'),
    tags: params.get('tags'),
    q: params.get('q'),
    featured: params.get('featured') === '1',
  });
}

/* -------------------------------------------------------------------------
 * DOM wiring (sirf browser mein chalta hai)
 * ---------------------------------------------------------------------- */

const CARD_SIZE_CLASSES = {
  large: ['grid', 'grid-cols-1', 'gap-6', 'sm:grid-cols-2', 'lg:grid-cols-3', 'lg:gap-6', 'xl:gap-7'],
  small: ['grid', 'grid-cols-2', 'gap-3', 'sm:grid-cols-3', 'lg:grid-cols-4', 'lg:gap-4'],
};

const cardData = (el) => ({
  el,
  name: el.dataset.name || '',
  category: el.dataset.category || '',
  pricing: el.dataset.pricing || '',
  tags: (el.dataset.tags || '').split(',').filter(Boolean),
  featured: el.dataset.featured === 'true',
  added: el.dataset.added || '',
  updated: el.dataset.updated || '',
  search: el.dataset.search || '',
});

/**
 * Filter section ko zinda karo. Sab state yahin, koi framework nahi.
 * @param {HTMLElement} root [data-library-filter] wala section
 */
export function mountLibraryFilter(root) {
  if (!root) return null;

  // Directory pages ka grid `data-directory-grid`, home ka blog-grid `data-lib-grid`.
  const grid = document.querySelector('[data-directory-grid], [data-lib-grid]');
  if (!grid) return null;

  /**
   * Is page par search field pehle se maujood hai (yahi section), isliye header
   * ka search icon duplicate lagta hai — hata dete hain. Jo pages filter section
   * nahi rakhte (blog, tool detail, tags, contact…) wahan header ka button hi
   * ekmatr raasta hai, wo chalta rehta hai. Ctrl+K / "/" har jagah chalta hai.
   */
  document.querySelectorAll('header [data-search-open]').forEach((trigger) => trigger.remove());

  const cards = [...grid.querySelectorAll('[data-tool-card]')].map(cardData);
  const searchInput = root.querySelector('[data-lib-search]');
  const chipRow = root.querySelector('[data-lib-chips]');
  const filtersBtn = root.querySelector('[data-lib-filters-open]');
  const filtersCount = root.querySelector('[data-lib-filters-count]');
  const panel = root.querySelector('[data-lib-panel]');
  const backdrop = root.querySelector('[data-lib-backdrop]');
  const closeBtn = root.querySelector('[data-lib-close]');
  const sortSelect = root.querySelector('[data-lib-sort]');
  const countEl = root.querySelector('[data-lib-count]');
  const countTemplate = countEl?.dataset.template || '{count}';
  const baseUrl = root.dataset.baseUrl || location.pathname;
  const emptyState = root.querySelector('[data-lib-empty]');

  let facets = fromQuery(location.search);
  let sort = new URLSearchParams(location.search).get('sort') || 'featured';
  let cardSize = 'large';

  const chipButtons = () => [...root.querySelectorAll('[data-facet]')];

  const paintChips = (counts) => {
    for (const chip of chipButtons()) {
      const facet = chip.dataset.facet;
      const value = chip.dataset.value || '';
      let pressed = false;
      let count = null;

      if (facet === 'category') {
        pressed = facets.category.toLowerCase() === value.toLowerCase();
        count = value ? counts.categories[value.toLowerCase()] : counts.all;
      } else if (facet === 'pricing') {
        pressed = facets.pricing.toLowerCase() === value.toLowerCase();
        count = value ? counts.pricings[value.toLowerCase()] : counts.all;
      } else if (facet === 'tag') {
        pressed = facets.tags.includes(value.toLowerCase());
        count = counts.tags[value.toLowerCase()] ?? 0;
      } else if (facet === 'featured') {
        // Do segments: value "" = All, value "1" = Featured only
        const wanted = value === '1';
        pressed = wanted ? facets.featured : !facets.featured;
        count = wanted ? counts.featured : counts.all;
        if (!wanted) {
          chip.setAttribute('aria-current', facets.featured ? 'false' : 'true');
        }
      } else if (facet === 'clear') {
        pressed = false;
      }

      if (count !== null) {
        chip.setAttribute('aria-pressed', pressed ? 'true' : 'false');
        if (facet === 'category' && !value) {
          chip.setAttribute('aria-current', pressed ? 'true' : 'false');
        }
        chip.dataset.empty = count === 0 && !pressed ? 'true' : 'false';
        const countElChip = chip.querySelector('[data-count]');
        if (countElChip) countElChip.textContent = String(count);
      }
    }
    if (filtersCount) {
      const active = activeCount(facets);
      filtersCount.textContent = String(active);
      filtersCount.classList.toggle('hidden', active === 0);
    }
  };

  const paintGrid = () => {
    const visible = [];
    for (const card of cards) {
      const show = cardMatches(card, facets);
      card.el.hidden = !show;
      if (show) visible.push(card);
    }
    const ordered = sortCards(visible, sort);
    for (const card of ordered) grid.appendChild(card.el);

    if (countEl) {
      countEl.textContent = countTemplate.replace('{count}', String(ordered.length));
      countEl.dataset.total = String(ordered.length);
    }
    const panelCount = root.querySelector('[data-lib-panel-count]');
    if (panelCount) panelCount.textContent = String(ordered.length);
    if (emptyState) emptyState.classList.toggle('hidden', ordered.length > 0);
  };

  const sync = () => {
    const query = toQuery(facets, sort);
    history.replaceState(null, '', `${baseUrl}${query}`);
    paintChips(computeCounts(cards, facets));
    paintGrid();
    paintClearAll();
  };

  /* --- chips ------------------------------------------------------------ */
  root.addEventListener('click', (event) => {
    const chip = event.target.closest('[data-facet]');
    if (!chip) return;
    event.preventDefault();
    const facet = chip.dataset.facet;
    const value = chip.dataset.value || '';

    if (facet === 'category') {
      // toggle bhi case-insensitive (URL lowercase, chip value capital)
      const same = facets.category.toLowerCase() === value.toLowerCase();
      facets = { ...facets, category: same ? '' : value };
    } else if (facet === 'pricing') {
      const same = facets.pricing.toLowerCase() === value.toLowerCase();
      facets = { ...facets, pricing: same ? '' : value };
    } else if (facet === 'tag') {
      const tag = value.toLowerCase();
      facets = {
        ...facets,
        tags: facets.tags.includes(tag) ? facets.tags.filter((item) => item !== tag) : [...facets.tags, tag],
      };
    } else if (facet === 'featured') {
      facets = { ...facets, featured: value === '1' ? !facets.featured : false };
    } else if (facet === 'clear') {
      facets = normalizeFacets({ ...EMPTY_FACETS });
      if (searchInput) searchInput.value = '';
    }
    sync();
  });

  /* --- clear all (result bar + empty state) ----------------------------- */
  const clearAllButtons = [...root.querySelectorAll('[data-lib-clear-all], [data-lib-empty-clear]')];
  const paintClearAll = () => {
    const rowButton = root.querySelector('[data-lib-clear-all]');
    if (rowButton) rowButton.classList.toggle('hidden', activeCount(facets) === 0);
  };
  for (const button of clearAllButtons) {
    button.addEventListener('click', () => {
      facets = normalizeFacets({ ...EMPTY_FACETS });
      if (searchInput) searchInput.value = '';
      sync();
    });
  }

  /* --- search ----------------------------------------------------------- */
  if (searchInput) {
    searchInput.value = facets.q;
    let timer = null;
    searchInput.addEventListener('input', () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        facets = { ...facets, q: searchInput.value };
        sync();
      }, 120);
    });
  }

  /* --- sort ------------------------------------------------------------- */
  if (sortSelect) {
    sortSelect.value = sort;
    sortSelect.addEventListener('change', () => {
      sort = sortSelect.value;
      sync();
    });
  }

  /* --- card size -------------------------------------------------------- */
  const sizeButtons = [...root.querySelectorAll('[data-lib-size]')];
  const applySize = (size) => {
    cardSize = size;
    // Home page ka grid apna fixed layout rakhta hai (blog-grid) — wahan
    // column classes override nahi karte, sirf state yaad rehti hai.
    if (grid.hasAttribute('data-lib-fixed-grid')) {
      grid.dataset.cardSize = size;
      for (const btn of sizeButtons) {
        btn.setAttribute('aria-pressed', btn.dataset.libSize === size ? 'true' : 'false');
      }
      return;
    }
    grid.classList.remove(...CARD_SIZE_CLASSES.small, ...CARD_SIZE_CLASSES.large);
    grid.classList.add(...CARD_SIZE_CLASSES[size]);
    grid.dataset.cardSize = size;
    for (const btn of sizeButtons) {
      btn.setAttribute('aria-pressed', btn.dataset.libSize === size ? 'true' : 'false');
    }
  };
  for (const btn of sizeButtons) {
    btn.addEventListener('click', () => applySize(btn.dataset.libSize));
  }

  /* --- popover ---------------------------------------------------------- */
  const openPanel = () => {
    panel?.classList.remove('hidden');
    backdrop?.classList.remove('hidden');
    filtersBtn?.setAttribute('aria-expanded', 'true');
    closeBtn?.focus();
  };
  const closePanel = () => {
    panel?.classList.add('hidden');
    backdrop?.classList.add('hidden');
    filtersBtn?.setAttribute('aria-expanded', 'false');
    filtersBtn?.focus();
  };
  filtersBtn?.addEventListener('click', () => {
    if (panel?.classList.contains('hidden')) openPanel();
    else closePanel();
  });
  closeBtn?.addEventListener('click', closePanel);
  backdrop?.addEventListener('click', closePanel);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && panel && !panel.classList.contains('hidden')) closePanel();
  });
  document.addEventListener('click', (event) => {
    if (!panel || panel.classList.contains('hidden')) return;
    if (panel.contains(event.target) || filtersBtn?.contains(event.target)) return;
    if (event.target.closest('[data-facet]')) return;
    closePanel();
  });

  chipRow?.setAttribute('data-ready', 'true');
  applySize(cardSize);
  paintChips(computeCounts(cards, facets));
  paintGrid();
  paintClearAll();

  return { getFacets: () => facets, sync };
}
