import { getCollection } from 'astro:content';

export async function GET() {
  const tools = await getCollection('tools');
  const site = 'https://instanten.com';

  const staticPages = [
    '',
    'about/',
    'submit/',
    'privacy/',
    'terms/',
    'tools/',
    'categories/',
    'tags/',
    'makers/',
    'pricing/',
    'search/',
  ];

  const toolPages = tools.map(tool => `tools/${tool.data.slug}/`);
  const categoryPages = [...new Set(tools.map(t => t.data.category.toLowerCase()))].map(c => `category/${c}/`);
  const pricingPages = ['free', 'freemium', 'paid'].map(p => `pricing/${p}/`);
  const tagPages = [...new Set(tools.flatMap(t => t.data.tags || []))].map(t => `tag/${t.toLowerCase()}/`);
  const makerPages = [...new Set(tools.map(t => t.data.maker).filter(Boolean))].map(m => `maker/${m.toLowerCase().replace(/\s+/g, '-')}/`);

  const allPages = [...staticPages, ...toolPages, ...categoryPages, ...pricingPages, ...tagPages, ...makerPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${site}/${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : page === 'tools/' ? '0.9' : '0.7'}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}