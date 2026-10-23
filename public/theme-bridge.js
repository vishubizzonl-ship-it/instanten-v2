(function () {
  var KEYS = ['instanten-theme', 'theme', 'site-theme', 'color-scheme'];

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

  window.InstantenTheme = {
    get: readSavedTheme,
    set: setTheme,
    toggle: toggleTheme,
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
  window.addEventListener('storage', function (e) {
    if (e.key && KEYS.indexOf(e.key) !== -1 && (e.newValue === 'dark' || e.newValue === 'light')) {
      applyThemeToDOM(e.newValue);
    }
  });
})();
