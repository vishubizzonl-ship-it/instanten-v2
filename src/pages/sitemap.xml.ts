import type { APIRoute } from 'astro';
import { buildSitemapEntries, escapeXml } from '../utils/sitemapXml';
import { nonDefaultLangs, defaultLang, languages, type LangCode } from '../i18n/ui';

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = (site ? site.toString() : 'https://instanten.com').replace(/\/$/, '');
  const entries = await buildSitemapEntries(baseUrl);
  const allLangs = [defaultLang, ...nonDefaultLangs] as LangCode[];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries
  .map(
    (entry) => {
      const urlPath = new URL(entry.loc).pathname;
      const links = allLangs.map((code) => {
        const langPath = code === defaultLang ? urlPath : `/${code}${urlPath}`;
        const cleanPath = langPath.replace(/(?<!:)\/+/g, '/');
        const langUrl = `${baseUrl}${cleanPath}`;
        return `<xhtml:link rel="alternate" hreflang="${code}" href="${escapeXml(langUrl)}" />`;
      });
      links.unshift(`<xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(`${baseUrl}${urlPath.replace(/(?<!:)\/+/g, '/')}`)}" />`);
      return `  <url>
    <loc>${escapeXml(entry.loc)}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
    ${links.join('\n    ')}
  </url>`;
    }
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
