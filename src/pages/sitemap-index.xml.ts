import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const baseUrl = (site ? site.toString() : 'https://instanten.com').replace(/\/$/, '');
  const nowIso = new Date().toISOString();

  const sitemapEntries = [
    { url: `${baseUrl}/sitemap.xml`, lastmod: nowIso },
    { url: `${baseUrl}/sitemap-0.xml`, lastmod: nowIso },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries
  .map(
    (entry) => `  <sitemap>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastmod}</lastmod>
  </sitemap>`
  )
  .join('\n')}
</sitemapindex>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
