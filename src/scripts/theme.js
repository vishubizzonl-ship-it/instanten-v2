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

/** @typedef {'light' | 'dark'} ThemeMode */

/** localStorage se saved mode (galat value ho to null). */
export function readTheme() {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    return saved === 'dark' || saved === 'light' ? saved : null;
  } catch {
    return null;
  }
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
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      /* private mode — theme sirf is page par */
    }
  }

  // Toggles ko batao (icon sync, doosre components)
  try {
    window.dispatchEvent(new CustomEvent('instanten:theme', { detail: { mode: next } }));
  } catch {
    /* purane browser */
  }

  return next;
}

/** Saved (ya system) theme lagao — page load / navigation par. */
export function initTheme() {
  return setTheme(readTheme() ?? systemTheme());
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
    key: THEME_KEY,
  };
  return window.InstantenTheme;
}
