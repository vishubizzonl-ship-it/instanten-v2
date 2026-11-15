(function () {
  var KEYS = ['instanten-theme', 'theme', 'site-theme', 'color-scheme'];
  /** Cookie bhi rakhte hain: private mode / storage clear / partitioned storage
   *  mein localStorage khaali ho jaata hai, par cookie reh jaati hai — isliye
   *  jis page se site kholi gayi thi uska mode poore site par bana rehta hai. */
  var COOKIE = 'instanten_theme';
  var COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

  function readCookieTheme() {
    try {
      var parts = (document.cookie || '').split('; ');
      for (var i = 0; i < parts.length; i++) {
        var eq = parts[i].indexOf('=');
        if (eq < 0) continue;
        if (parts[i].slice(0, eq) === COOKIE) {
          var val = decodeURIComponent(parts[i].slice(eq + 1));
          if (val === 'dark' || val === 'light') return val;
        }
      }
    } catch (e) {}
    return null;
  }

  function writeCookieTheme(mode) {
    try {
      document.cookie =
        COOKIE + '=' + mode + '; path=/; max-age=' + COOKIE_MAX_AGE + '; SameSite=Lax';
    } catch (e) {}
  }

  /**
   * Site ka mode: pehle URL override, phir localStorage, phir cookie, aur agar
   * kuch bhi saved nahi to system preference. Jo mode yahan resolve hota hai
   * wahi turant save ho jaata hai — yaani jis page/mode se user site mein
   * aaya, wahi mode poore site ka mode ban jaata hai.
   */
  function readSavedTheme() {
    try {
      var params = new URLSearchParams(window.location.search);
      var urlTheme = params.get('theme');
      if (urlTheme === 'dark' || urlTheme === 'light') {
        writeSavedTheme(urlTheme);
        return urlTheme;
      }
      for (var i = 0; i < KEYS.length; i++) {
        var val = localStorage.getItem(KEYS[i]);
        if (val === 'dark' || val === 'light') return val;
      }
    } catch (e) {}
    var fromCookie = readCookieTheme();
    if (fromCookie) return fromCookie;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  function writeSavedTheme(mode) {
    try {
      for (var i = 0; i < KEYS.length; i++) {
        localStorage.setItem(KEYS[i], mode);
      }
    } catch (e) {}
    writeCookieTheme(mode);
  }

  function applyThemeToDOM(mode) {
    var isDark = mode === 'dark';
    var html = document.documentElement;
    html.classList.toggle('dark', isDark);
    html.classList.toggle('light', !isDark);
    html.setAttribute('data-theme', mode);
    html.setAttribute('data-scheme', mode);
    html.style.colorScheme = mode;

    if (document.body) {
      document.body.classList.toggle('dark', isDark);
      document.body.setAttribute('data-theme', mode);
      document.body.setAttribute('data-scheme', mode);
    }

    // Mobile browser ka address bar / status bar bhi mode ke saath badle —
    // warna dark site par upar safed patti reh jaati hai.
    try {
      var metas = document.querySelectorAll('meta[name="theme-color"]');
      for (var m = 0; m < metas.length; m++) {
        metas[m].setAttribute('content', isDark ? '#1C1C1C' : '#FDFDFF');
        metas[m].removeAttribute('media');
      }
    } catch (e) {
      /* meta na ho to bhi theme lagti rahe */
    }

    document.dispatchEvent(new CustomEvent('instanten:themechange', { detail: { theme: mode } }));
  }

  function setTheme(mode) {
    var clean = mode === 'dark' ? 'dark' : 'light';
    writeSavedTheme(clean);
    applyThemeToDOM(clean);
    return clean;
  }

  function toggleTheme() {
    var current = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    return setTheme(current === 'dark' ? 'light' : 'dark');
  }

  // API shape wahi jo src/scripts/theme.js deta hai — get() / set(mode) /
  // toggle() / sync(), taaki dono toggles ek hi tarah call karein.
  window.InstantenTheme = {
    key: 'theme',
    get: readSavedTheme,
    set: function (mode) {
      return setTheme(mode);
    },
    toggle: function () {
      return toggleTheme();
    },
    sync: function () {
      applyThemeToDOM(readSavedTheme());
    },
  };

  var initial = readSavedTheme();
  writeSavedTheme(initial);
  applyThemeToDOM(initial);

  document.addEventListener('DOMContentLoaded', function () {
    applyThemeToDOM(readSavedTheme());
  });
  document.addEventListener('astro:after-swap', function () {
    applyThemeToDOM(readSavedTheme());
  });
  window.addEventListener('pageshow', function () {
    applyThemeToDOM(readSavedTheme());
  });
  // Tab wapas focus par bhi sync — doosre tab mein mode badla ho to yahan bhi
  // wahi mode (storage event har browser mein reliably nahi aata).
  window.addEventListener('focus', function () {
    applyThemeToDOM(readSavedTheme());
  });
  document.addEventListener('visibilitychange', function () {
    if (!document.hidden) applyThemeToDOM(readSavedTheme());
  });
  window.addEventListener('storage', function (e) {
    if (e.key && KEYS.indexOf(e.key) !== -1 && (e.newValue === 'dark' || e.newValue === 'light')) {
      applyThemeToDOM(e.newValue);
    }
  });
})();
