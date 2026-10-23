import { getCollection } from 'astro:content';

export function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export interface SitemapEntry {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

export async function buildSitemapEntries(baseUrl: string, siteName = 'Instanten'): Promise<SitemapEntry[]> {
  const nowIso = new Date().toISOString();
  const urlMap = new Map<string, SitemapEntry>();

  const staticPages = [
    { route: '/', changefreq: 'daily', priority: '1.0' },
    { route: '/blog/', changefreq: 'daily', priority: '0.9' },
    { route: '/about/', changefreq: 'weekly', priority: '0.8' },
    { route: '/contact/', changefreq: 'weekly', priority: '0.8' },
    { route: '/privacy-policy/', changefreq: 'monthly', priority: '0.7' },
    { route: '/terms/', changefreq: 'monthly', priority: '0.7' },
    { route: '/submit/', changefreq: 'monthly', priority: '0.7' },
    { route: '/search/', changefreq: 'weekly', priority: '0.7' },
    { route: '/categories/', changefreq: 'weekly', priority: '0.8' },
    { route: '/tags/', changefreq: 'weekly', priority: '0.7' },
    { route: '/makers/', changefreq: 'weekly', priority: '0.7' },
    { route: '/pricing/', changefreq: 'weekly', priority: '0.7' },
    { route: '/tools/', changefreq: 'daily', priority: '0.9' },
    { route: '/page/1/', changefreq: 'weekly', priority: '0.7' },
    { route: '/page/2/', changefreq: 'weekly', priority: '0.7' },
  ];

  for (const page of staticPages) {
    const loc = page.route === '/' ? `${baseUrl}/` : `${baseUrl}${page.route}`;
    urlMap.set(loc, {
      loc,
      lastmod: nowIso,
      changefreq: page.changefreq,
      priority: page.priority,
    });
  }

  try {
    const posts = await getCollection('blog');
    for (const post of posts) {
      const slug = (post.data as Record<string, any>).slug || (post as Record<string, any>).id || 'post';
      const loc = `${baseUrl}/blog/${slug}`;
      const rawDate =
        (post.data as Record<string, any>).updatedDate ||
        (post.data as Record<string, any>).publishedAt ||
        (post.data as Record<string, any>).date ||
        nowIso;
      urlMap.set(loc, {
        loc,
        lastmod: new Date(rawDate).toISOString(),
        changefreq: 'weekly',
        priority: '0.85',
      });
    }
  } catch {
    // Gracefully skip if no 'blog' content collection
  }

  return Array.from(urlMap.values()).sort((a, b) => a.loc.localeCompare(b.loc));
}
