import type { APIRoute } from 'astro';
import { escapeXml } from './sitemapXml';
import { nonDefaultLangs } from '../i18n/ui';

/**
 * **Instanten route ka apna sitemap** — root route aur uske silo pages ko ek
 * alag website maan kar (`/sitemap-instanten.xml`).
 *
 * Isme sirf instanten silo ke pages hain:
 *   · `/`                     — instanten route page
 *   · `/about/`, `/contact/`  — company pages
 *   · `/privacy-policy/`, `/terms/`
 *   · `/blog/`                — blog index
 *   · `/blog/<slug>/`         — blog articles (file system se auto-discover,
 *                               naya post kabhi sitemap se chhoot na jaye)
 *   · har page ka locale mirror (`/de/…`, `/ja/…`, …)
 *
 * Isme **nahi** aate:
 *   · chaar sensor tools ke silo pages (unka apna sitemap hai:
 *     `/onlinecompass/sitemap.xml` aadi)
 *   · `/tools/<slug>/` standalone tool pages — wo site-wide library hain,
 *     root `sitemap.xml` ka kaam hai
 *   · error pages (403/404/500/503) — noindex, kisi sitemap mein nahi
 */

type Entry = { path: string; changefreq: string; priority: string };

/** Instanten silo ke apne pages (EN, prefix-free). */
const INSTANTEN_PAGES: Entry[] = [
  { path: '/', changefreq: 'daily', priority: '1.0' },
  { path: '/blog/', changefreq: 'daily', priority: '0.9' },
  { path: '/about/', changefreq: 'monthly', priority: '0.7' },
  { path: '/contact/', changefreq: 'monthly', priority: '0.6' },
  { path: '/privacy-policy/', changefreq: 'yearly', priority: '0.4' },
  { path: '/terms/', changefreq: 'yearly', priority: '0.4' },
];

/** Blog articles — `src/pages/blog/**` se (index ke alawa). */
const blogPostFiles = Object.keys(import.meta.glob('/src/pages/blog/[[]slug[]].astro'));

/**
 * Blog slugs source of truth content collection hai, lekin sitemap static
 * build par chalta hai — isliye dono jagah se slug nikaal kar union lete hain:
 * route files (agar post ka apna .astro ho) aur content entries (jo
 * `getCollection('blog')` se aate hain).
 */
export async function instantenBlogSlugs(): Promise<string[]> {
  const { getCollection } = await import('astro:content');
  const posts = await getCollection('blog');
  const fromContent = posts
    .map((post: any) => post.data?.slug ?? post.id)
    .filter((slug: unknown): slug is string => typeof slug === 'string' && slug.length > 0);
  return [...new Set(fromContent)].sort();
}

export function buildInstantenSitemap(): APIRoute {
  return async ({ site }) => {
    const baseUrl = (site ? site.toString() : 'https://instanten.com').replace(/\/$/, '');
    const lastmod = new Date().toISOString().slice(0, 10);
    const locales = nonDefaultLangs as string[];
    const slugs = await instantenBlogSlugs();

    const postEntries: Entry[] = slugs.map((slug) => ({
      path: `/blog/${slug}/`,
      changefreq: 'monthly',
      priority: '0.8',
    }));

    const entries: Entry[] = [...INSTANTEN_PAGES, ...postEntries];

    // Har locale ka mirror — instanten route aur uske silo pages ke liye.
    for (const locale of locales) {
      entries.push({ path: `/${locale}/`, changefreq: 'weekly', priority: '0.8' });
      for (const entry of INSTANTEN_PAGES) {
        if (entry.path === '/') continue; // locale root upar hi add ho gaya
        entries.push({ ...entry, priority: '0.6' });
        entries[entries.length - 1].path = `/${locale}${entry.path}`;
      }
      for (const slug of slugs) {
        entries.push({
          path: `/${locale}/blog/${slug}/`,
          changefreq: 'monthly',
          priority: '0.6',
        });
      }
    }

    const urls = entries
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

/** `/sitemap-instanten.xml` route ka GET. */
export const GET: APIRoute = buildInstantenSitemap();

export { blogPostFiles as instantenBlogRouteFiles };
