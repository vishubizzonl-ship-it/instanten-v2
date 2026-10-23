import type { APIRoute } from 'astro';

const SITEMAP_PATH = '/sitemap.xml';

const getRobotsTxt = (sitemapURL: URL) => `# Instanten — Production SEO robots.txt
# Search engines & social preview crawlers explicitly allowed

User-agent: Googlebot
Allow: /

User-agent: Googlebot-Image
Allow: /

User-agent: Bingbot
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Applebot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: LinkedInBot
Allow: /

User-agent: WhatsApp
Allow: /

User-agent: TelegramBot
Allow: /

# Block AI model training scrapers while keeping search indexing open
User-agent: Amazonbot
Disallow: /

User-agent: Applebot-Extended
Disallow: /

User-agent: Bytespider
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: Claude-Web
Disallow: /

User-agent: anthropic-ai
Disallow: /

User-agent: Diffbot
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: GPTBot
Disallow: /

User-agent: meta-externalagent
Disallow: /

User-agent: MistralAI-Training
Disallow: /

User-agent: cohere-ai
Disallow: /

User-agent: PetalBot
Disallow: /

# Global default rule for all standard search crawlers
User-agent: *
Content-Signal: search=yes,ai-train=no,use=reference
Allow: /
Disallow: /api/
Disallow: /404
Disallow: /500

Sitemap: ${new URL('sitemap.xml', sitemapURL.origin).href}
Sitemap: ${new URL('sitemap-index.xml', sitemapURL.origin).href}
`;

export const GET: APIRoute = ({ site }) => {
  const baseUrl = site ?? new URL('https://instanten.com');
  const sitemapURL = new URL(SITEMAP_PATH, baseUrl);

  return new Response(getRobotsTxt(sitemapURL), {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
