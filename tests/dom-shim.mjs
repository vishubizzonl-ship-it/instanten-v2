/**
 * Chhota DOM shim — sirf `mountLibraryFilter` ke liye.
 *
 * Kyun: filter section ka asli behaviour (chip click se cards hide, sort se
 * order, empty state, URL sync) browser ke bina verify karna hai. Koi naya
 * package nahi (rule: no new deps), isliye itna hi DOM implement kiya hai
 * jitna `src/scripts/library-filter.js` use karta hai:
 *   - attribute selectors: [attr], [attr="value"]
 *   - classList add/remove/contains/toggle
 *   - dataset get/set, setAttribute/getAttribute/removeAttribute
 *   - addEventListener + dispatch (bubbling with closest())
 *   - appendChild / children / hidden
 */

let uid = 0;

export class El {
  constructor(tag = 'div', attrs = {}) {
    this.tag = tag;
    this.attrs = { ...attrs };
    this.children = [];
    this.parent = null;
    this._classes = new Set();
    this._listeners = new Map();
    this._text = '';
    this.hidden = false;
    this.id = ++uid;
    const cls = attrs.class ?? '';
    attrs.class?.split(/\s+/).filter(Boolean).forEach((c) => this._classes.add(c));
    void cls;
  }

  /* --- attributes ------------------------------------------------------ */
  setAttribute(name, value) {
    this.attrs[name] = String(value);
    if (name === 'class') {
      this._classes = new Set(String(value).split(/\s+/).filter(Boolean));
    }
    if (name === 'hidden') this.hidden = true;
  }
  getAttribute(name) {
    return name in this.attrs ? this.attrs[name] : null;
  }
  removeAttribute(name) {
    delete this.attrs[name];
    if (name === 'hidden') this.hidden = false;
  }
  hasAttribute(name) {
    return name in this.attrs;
  }

  get dataset() {
    const el = this;
    return new Proxy(
      {},
      {
        get: (_, key) =>
          el.attrs[`data-${String(key).replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`)}`],
        set: (_, key, value) => {
          el.attrs[`data-${String(key).replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`)}`] = String(value);
          return true;
        },
        has: (_, key) =>
          `data-${String(key).replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`)}` in el.attrs,
      }
    );
  }

  /* --- classes --------------------------------------------------------- */
  get classList() {
    const set = this._classes;
    return {
      add: (...names) => names.forEach((n) => set.add(n)),
      remove: (...names) => names.forEach((n) => set.delete(n)),
      contains: (name) => set.has(name),
      toggle: (name, force) => {
        const on = force === undefined ? !set.has(name) : Boolean(force);
        if (on) set.add(name);
        else set.delete(name);
        return on;
      },
    };
  }
  get className() {
    return [...this._classes].join(' ');
  }

  /* --- text ------------------------------------------------------------ */
  get textContent() {
    if (this.children.length) return this.children.map((c) => c.textContent).join('');
    return this._text;
  }
  set textContent(value) {
    this._text = String(value);
    this.children = [];
  }

  /* --- tree ------------------------------------------------------------ */
  appendChild(child) {
    if (child.parent) child.parent.children = child.parent.children.filter((c) => c !== child);
    child.parent = this;
    this.children.push(child);
    return child;
  }
  contains(node) {
    if (node === this) return true;
    return this.children.some((child) => child.contains(node));
  }

  /* --- query ----------------------------------------------------------- */
  querySelectorAll(selector) {
    const found = [];
    const walk = (node) => {
      for (const child of node.children) {
        if (matches(child, selector)) found.push(child);
        walk(child);
      }
    };
    walk(this);
    return found;
  }
  querySelector(selector) {
    return this.querySelectorAll(selector)[0] ?? null;
  }

  closest(selector) {
    let node = this;
    while (node) {
      if (matches(node, selector)) return node;
      node = node.parent;
    }
    return null;
  }

  /* --- focus (shim) ---------------------------------------------------- */
  focus() {
    this.attrs['data-focused'] = 'true';
  }
  blur() {
    delete this.attrs['data-focused'];
  }

  /* --- events ---------------------------------------------------------- */
  addEventListener(type, handler) {
    if (!this._listeners.has(type)) this._listeners.set(type, []);
    this._listeners.get(type).push(handler);
  }
  /** Dispatch with bubbling; options.target se "kaun click hua" set hota hai. */
  dispatch(type, options = {}) {
    const event = {
      type,
      key: options.key,
      defaultPrevented: false,
      preventDefault() {
        this.defaultPrevented = true;
      },
      get target() {
        return options.target ?? this.__owner;
      },
      __this: options.target ?? this.__owner,
    };
    let node = options.bubbles === false ? this : options.target ?? this.__owner;
    while (node) {
      for (const handler of node._listeners?.get(type) ?? []) handler.call(node, event);
      node = node.parent;
    }
    return event;
  }
}

/**
 * Selector matching — sirf `[attr]`, `[attr="value"]`, aur plain class/attr
 * combos jo is project ki filter script mein aate hain.
 */
function matches(node, selector) {
  return selector.split(',').some((part) => {
    const sel = part.trim();
    const tokenRe = /\[([\w-]+)(?:=(?:"([^"]*)"|'([^']*)'))?\]/g;
    let consumed = 0;
    let m;
    let ok = true;
    while ((m = tokenRe.exec(sel))) {
      consumed += m[0].length;
      const [, name, quoted, single] = m;
      const expected = quoted ?? single;
      if (!(name in node.attrs)) ok = false;
      else if (expected !== undefined && node.attrs[name] !== expected) ok = false;
      if (!ok) break;
    }
    if (!ok) return false;
    if (consumed === sel.length) return true;
    // koi aur selector (class / tag) — sirf class support karte hain
    const rest = sel.replace(tokenRe, '').trim();
    if (!rest) return true;
    return rest
      .split(/\s+/)
      .filter(Boolean)
      .every((piece) => piece.startsWith('.') && node._classes.has(piece.slice(1)));
  });
}

/** document + location + history ka minimal global set ek page ke liye. */
export function createDocument() {
  const body = new El('body');
  const listeners = new Map();
  const document = {
    body,
    listeners,
    addEventListener(type, handler) {
      if (!listeners.has(type)) listeners.set(type, []);
      listeners.get(type).push(handler);
    },
    querySelector: (sel) => body.querySelector(sel),
    querySelectorAll: (sel) => body.querySelectorAll(sel),
    /** Document-level event (jaise keydown Escape). */
    dispatch(type, options = {}) {
      for (const handler of listeners.get(type) ?? []) handler({ type, key: options.key, target: options.target ?? body });
    },
  };
  return { body, document };
}

/** Ek card element — ToolCard.astro ke data attributes ke saath. */
export function makeCard(data) {
  return new El('article', {
    'data-tool-card': '',
    'data-name': data.name,
    'data-category': data.category,
    'data-pricing': data.pricing,
    'data-tags': (data.tags ?? []).join(','),
    'data-featured': data.featured ? 'true' : 'false',
    'data-added': data.added ?? '',
    'data-updated': data.updated ?? '',
    'data-search': data.search ?? '',
  });
}
