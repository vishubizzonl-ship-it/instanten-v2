/**
 * Shared helpers for the instanten.com test suite.
 *
 * Every check runs against the *built* HTML (same bytes a browser gets), so a
 * green run means the real site is fine — not just the source.
 */
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

export const SITE = 'https://instanten.com';
export const LOCALES = ['en', 'de', 'ja', 'fr', 'es', 'ko', 'nl', 'sv', 'it', 'pt'];

/** Build directory: CLI arg / OUT_DIR env / releases/current / dist — first that exists. */
export function resolveOutDir(arg) {
  const candidates = [arg, process.env.OUT_DIR, 'releases/current', 'dist'].filter(Boolean);
  for (const dir of candidates) if (existsSync(join(dir, 'index.html'))) return dir;
  throw new Error(`Koi build nahi mila (dekha: ${candidates.join(', ')}). Pehle build karo.`);
}

/** url path (e.g. "/de/tools/qr-generator/") -> raw html */
export function loadPages(outDir) {
  const pages = new Map();
  const walk = (dir) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.name.endsWith('.html')) {
        const rel = '/' + relative(outDir, full).split('\\').join('/');
        // "/x/y/index.html" -> "/x/y/", "/404.html" stays "/404.html"
        const url = rel.endsWith('/index.html')
          ? rel.slice(0, -'index.html'.length)
          : rel;
        pages.set(url, readFileSync(full, 'utf8'));
      }
    }
  };
  walk(outDir);
  return pages;
}

/** Locale of a URL path ("/de/x/" -> "de", everything else -> "en"). */
export const localeOf = (url) => {
  const first = url.split('/')[1];
  return LOCALES.includes(first) && first !== 'en' ? first : 'en';
};

/** Same path in another locale: "/de/tools/x/" + "ja" -> "/ja/tools/x/". */
export const localize = (url, lang) => {
  const loc = localeOf(url);
  const rest = loc === 'en' ? url : url.slice(loc.length + 1); // "/de/tools/" -> "/tools/"
  return lang === 'en' ? rest : `/${lang}${rest}`;
};

export const stripTags = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z#0-9]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();

export const meta = (html, name) => {
  const m = html.match(new RegExp(`<meta name="${name}" content="([^"]*)"`, 'i'));
  return m ? m[1] : null;
};

export const attr = (html, re) => {
  const m = html.match(re);
  return m ? m[1] : null;
};

export const titleOf = (html) => attr(html, /<title>([^<]*)<\/title>/i);
export const canonicalOf = (html) => attr(html, /<link rel="canonical" href="([^"]*)"/i);
export const hreflangOf = (html) =>
  [...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/gi)].map((m) => ({
    lang: m[1],
    href: m[2],
  }));
export const linksOf = (html) =>
  [...html.matchAll(/<a\b[^>]*href="([^"]*)"/gi)].map((m) => m[1]);

/** JSON-LD blocks, parsed. Invalid JSON is reported instead of thrown. */
export function jsonLdOf(html) {
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)];
  return blocks.map((m) => {
    try {
      return { ok: true, data: JSON.parse(m[1]) };
    } catch (err) {
      return { ok: false, error: String(err), raw: m[1].slice(0, 120) };
    }
  });
}

/** Stable rule key for the baseline file: numbers and sample values removed. */
export const ruleOf = (message) => {
  const [rule] = message.split(' :: ');
  return rule
    .replace(/\b\d+\b/g, 'N')
    .replace(/"[^"]*"/g, '"…"')
    .replace(/\s+/g, ' ')
    .trim();
};

/** Tiny assertion collector — every suite returns {name, fails[], checked}. */
export function createSuite(name) {
  const fails = [];
  let checked = 0;
  const api = {
    name,
    get checked() {
      return checked;
    },
    get fails() {
      return fails;
    },
    /** assert(condition, message) */
    check(condition, message) {
      checked++;
      if (!condition) fails.push(message);
      return condition;
    },
    fail(message) {
      checked++;
      fails.push(message);
    },
    /** Group failures by rule: total count + up to two examples per rule. */
    report(messages) {
      const groups = new Map();
      for (const message of messages) {
        const [rule, example = ''] = message.split(' :: ');
        const bucket = groups.get(rule) ?? { count: 0, examples: [] };
        bucket.count++;
        if (bucket.examples.length < 2) bucket.examples.push(example);
        groups.set(rule, bucket);
      }
      return [...groups].map(
        ([rule, { count, examples }]) =>
          `${rule}  ×${count}` + (examples.length ? `  (e.g. ${examples.join(' | ')})` : '')
      );
    },
  };
  return api;
}
