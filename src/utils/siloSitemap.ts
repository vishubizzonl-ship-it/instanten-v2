import type { APIRoute } from 'astro';
import { escapeXml } from './sitemapXml';
import { nonDefaultLangs } from '../i18n/ui';
import { getArticleLangs } from '../i18n/articleLangs';

/**
 * Per-tool silo sitemap — compassinstant ka wahi pattern, instanten-v2 ke
 * locales ke saath.
 *
 * Output: `/<tool>/sitemap.xml` (har tool ka apna sitemap):
 *   /onlinecompass/sitemap.xml
 *   /onlinebubblelevel/sitemap.xml
 *   /onlinespeedometer/sitemap.xml
 *   /onlineqibla/sitemap.xml
 *
 * Us tool ke silo ka HAR indexable page:
 *   · tool page (EN + har locale mirror)
 *   · blog index (EN + locales)
 *   · blog articles — file system se apne aap discover (naya post kabhi
 *     sitemap se chhoot na jaye)
 *   · about / contact / privacy / terms (EN + locales)
 *
 * 403/404/500/503 jaise noindex pages kabhi list nahi hote. Site-wide pages
 * (home, /tools/<slug>/, /blog/) bhi nahi — wo root sitemap ka kaam hai.
 *
 * Untranslated articles (audit item 3): jab kisi article ka us bhasha me asli
 * content hi na ho, to uska locale URL noindex hota hai (dekho
 * src/i18n/articleLangs.ts) — aur noindex URL sitemap me nahi jaata, warna
 * Search Console "Submitted URL marked noindex" error deta hai.
 */

export type SiloTool =
  | 'onlinecompass'
  | 'onlinebubblelevel'
  | 'onlinespeedometer'
  | 'onlineqibla';

type Entry = { path: string; changefreq: string; priority: string };

/** Blog articles per tool — glob static chahiye, isliye chaar alag globs. */
const postsByTool: Record<SiloTool, string[]> = {
  onlinecompass: Object.keys(import.meta.glob('/src/pages/onlinecompass/blog/*.astro')),
  onlinebubblelevel: Object.keys(import.meta.glob('/src/pages/onlinebubblelevel/blog/*.astro')),
  onlinespeedometer: Object.keys(import.meta.glob('/src/pages/onlinespeedometer/blog/*.astro')),
  onlineqibla: Object.keys(import.meta.glob('/src/pages/onlineqibla/blog/*.astro')),
} as Record<SiloTool, string[]>;

function toSlug(filePath: string): string {
  return filePath.split('/').pop()!.replace(/\.astro$/, '');
}

/** `index` blog index hai, article nahi. */
function isPost(slug: string): boolean {
  return slug !== 'index';
}

/** Silo pages jo har tool ke paas hain (EN + har locale). */
const SILO_PAGES = [
  { page: 'blog', changefreq: 'weekly', priority: '0.8' },
  { page: 'about', changefreq: 'yearly', priority: '0.5' },
  { page: 'contact', changefreq: 'yearly', priority: '0.5' },
  { page: 'privacy', changefreq: 'yearly', priority: '0.3' },
  { page: 'terms', changefreq: 'yearly', priority: '0.3' },
];

function entriesFor(tool: SiloTool): Entry[] {
  const posts = postsByTool[tool].map(toSlug).filter(isPost).sort();
  const locales = nonDefaultLangs as string[];

  // EN (prefix-free) — tool page, silo pages, articles
  const entries: Entry[] = [
    { path: `/${tool}/`, changefreq: 'weekly', priority: '1.0' },
    ...SILO_PAGES.map(({ page, changefreq, priority }) => ({
      path: `/${tool}/${page}/`,
      changefreq,
      priority,
    })),
    ...posts.map((slug) => ({
      path: `/${tool}/blog/${slug}/`,
      changefreq: 'monthly',
      priority: '0.7',
    })),
  ];

  // Har locale ka mirror (tool page, silo pages, articles)
  for (const locale of locales) {
    entries.push({ path: `/${locale}/${tool}/`, changefreq: 'monthly', priority: '0.6' });
    for (const { page, changefreq, priority } of SILO_PAGES) {
      entries.push({ path: `/${locale}/${tool}/${page}/`, changefreq, priority });
    }
    for (const slug of posts) {
      // Us bhasha me asli content nahi? → page noindex hai, sitemap me nahi.
      const langs = getArticleLangs(slug);
      if (langs && !langs.includes(locale)) continue;
      entries.push({
        path: `/${locale}/${tool}/blog/${slug}/`,
        changefreq: 'monthly',
        priority: '0.6',
      });
    }
  }

  return entries;
}

export function buildSiloSitemap(tool: SiloTool): APIRoute {
  return ({ site }) => {
    const baseUrl = (site ? site.toString() : 'https://instanten.com').replace(/\/$/, '');
    const lastmod = new Date().toISOString().slice(0, 10);

    const urls = entriesFor(tool)
      .map(
        (entry) => `  <url>
    <loc>${escapeXml(`${baseUrl}${entry.path}`)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`,
      )
      .join('\n');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

    return new Response(xml, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  };
}

/** Per-tool robots.txt — sirf us tool ka silo allow, aur uska sitemap batata hai. */
export function buildSiloRobots(tool: SiloTool): APIRoute {
  return ({ site }) => {
    const baseUrl = (site ? site.toString() : 'https://instanten.com').replace(/\/$/, '');

    // robots.txt mein har rule apni alag line par hota hai (comma-list valid nahi).
    const allowLines = [`/${tool}/`, ...(nonDefaultLangs as string[]).map((l) => `/${l}/${tool}/`)]
      .map((path) => `Allow: ${path}`)
      .join('\n');

    // Per-tool error pages (403/404/500/503) noindex hain aur kisi sitemap mein
    // nahi — crawl ki zarurat bhi nahi, isliye Disallow (crawl budget bachta hai).
    // Dono shapes block karte hain: flat .html (jo build deta hai) aur /code/.
    const errorLines = ['403', '404', '500', '503']
      .map((code) => `Disallow: /${tool}/${code}.html\nDisallow: /${tool}/${code}/`)
      .join('\n');

    const body = `# ${tool} silo robots.txt
# Sirf is tool ka silo + uska apna sitemap.

User-agent: *
${allowLines}

# Per-tool error pages — noindex hain, kisi sitemap mein nahi.
${errorLines}

Sitemap: ${baseUrl}/${tool}/sitemap.xml
`;

    return new Response(body, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  };
}
