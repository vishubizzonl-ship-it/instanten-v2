/**
 * Theme — ek hi jagah se light/dark control (poori site ke liye).
 *
 * Kyun: site par do theme toggles hain — normal pages ka `ThemeToggle` aur
 * sensor tool pages ka `InstrumentNav` wala. Dono ko ek hi API se chalna
 * chahiye, warna ek toggle `data-theme` set karta hai, doosra sirf `.dark`
 * class — aur page badalne par theme "yaad" nahi rehti.
 *
 * Rules:
 *   · storage key `theme` (`'light' | 'dark'`) — Layout ke head-script bhi
 *     isi key ko padhta hai, isliye page load par paint se pehle theme lagti hai
 *   · ek hi mode ko teen jagah likha jaata hai: <html> class + data-theme +
 *     data-scheme, aur (agar body maujood ho) <body> par bhi
 *   · koi mode save na ho to system preference (`prefers-color-scheme`)
 *
 * Module sirf browser mein kuch karta hai; import karna safe hai.
 */

export const THEME_KEY = 'theme';

/** Wahi keys jo head ka bootstrap likhta hai — dono jagah ek hi sach. */
const THEME_KEYS = ['instanten-theme', 'theme', 'site-theme', 'color-scheme'];
const THEME_COOKIE = 'instanten_theme';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

/** @typedef {'light' | 'dark'} ThemeMode */

/** Cookie se saved mode — localStorage clear/private mode ka fallback. */
export function readCookieTheme() {
  try {
    const raw = document.cookie || '';
    const match = new RegExp(`${THEME_COOKIE}=(dark|light)`).exec(raw);
    return match ? match[1] : null;
  } catch {
    return null;
  }
}

/** localStorage se saved mode (galat value ho to null). */
export function readTheme() {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'dark' || saved === 'light') return saved;
  } catch {
    /* private mode */
  }
  return readCookieTheme();
}

/** System preference — saved mode na ho tab default. */
export function systemTheme() {
  try {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  } catch {
    return 'light';
  }
}

/** Abhi ka effective mode (class/data attribute/localStorage, jo bhi mile). */
export function currentTheme() {
  const root = document.documentElement;
  const saved = readTheme();
  if (saved) return saved;
  if (root.classList.contains('dark')) return 'dark';
  const attr = root.getAttribute('data-theme') || root.getAttribute('data-scheme');
  return attr === 'dark' ? 'dark' : 'light';
}

/**
 * Theme lagao + yaad rakho.
 * @param {ThemeMode} mode
 * @param {{ persist?: boolean }} [options]
 */
export function setTheme(mode, { persist = true } = {}) {
  const next = mode === 'dark' ? 'dark' : 'light';
  const isDark = next === 'dark';
  const root = document.documentElement;
  const body = document.body;

  root.classList.toggle('dark', isDark);
  root.setAttribute('data-theme', next);
  root.setAttribute('data-scheme', next);
  root.style.colorScheme = next;

  if (body) {
    body.classList.toggle('dark', isDark);
    body.setAttribute('data-theme', next);
    body.setAttribute('data-scheme', next);
  }

  if (persist) {
    // Bootstrap ke saath same keys + cookie — warna cookie purane mode par
    // atak jaati hai aur storage clear hone par galat mode wapas aata hai.
    try {
      for (const key of THEME_KEYS) localStorage.setItem(key, next);
    } catch {
      /* private mode — theme sirf is page par */
    }
    try {
      const secure = window.location.protocol === 'https:' ? '; Secure' : '';
      document.cookie = `${THEME_COOKIE}=${next}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax${secure}`;
    } catch {
      /* cookie band ho to bhi localStorage kaafi hai */
    }
  }

  // Mobile address bar ka rang bhi mode ke saath
  try {
    document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => {
      meta.setAttribute('content', isDark ? '#1C1C1C' : '#FDFDFF');
      meta.removeAttribute('media');
    });
  } catch {
    /* meta na ho to bhi theme lagti rahe */
  }

  // Toggles ko batao (icon sync, doosre components)
  try {
    window.dispatchEvent(new CustomEvent('instanten:theme', { detail: { mode: next } }));
  } catch {
    /* purane browser */
  }
  try {
    document.dispatchEvent(new CustomEvent('instanten:themechange', { detail: { theme: next } }));
  } catch {
    /* purane browser */
  }

  return next;
}

/**
 * Saved (ya system) theme lagao — page load / navigation par.
 *
 * User ka chunav saved ho to hi persist karte hain: pehli visit par system ka
 * mode "lock" nahi hota, isliye OS raat mein dark ho jaye to site bhi dark ho
 * jaati hai (jab tak user khud kuch choose na kare).
 */
export function initTheme() {
  const saved = readTheme();
  return setTheme(saved ?? systemTheme(), { persist: saved !== null });
}

/**
 * OS mode badle aur user ne khud kuch choose na kiya ho to site saath badle.
 * (Bootstrap bhi yahi karta hai — ye sirf module-side mirror hai.)
 */
export function watchSystemTheme() {
  try {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    if (typeof mq.addEventListener !== 'function') return;
    mq.addEventListener('change', () => {
      if (readTheme() === null) setTheme(mq.matches ? 'dark' : 'light', { persist: false });
    });
  } catch {
    /* purane browser */
  }
}

/** Ulta mode. */
export function toggleTheme() {
  return setTheme(currentTheme() === 'dark' ? 'light' : 'dark');
}

/** Ek hi API se dono toggles chalein. */
export function installThemeApi() {
  window.InstantenTheme = {
    get: currentTheme,
    set: (mode) => setTheme(mode),
    toggle: toggleTheme,
    sync: () => setTheme(readTheme() ?? systemTheme(), { persist: readTheme() !== null }),
    key: THEME_KEY,
  };
  return window.InstantenTheme;
}
