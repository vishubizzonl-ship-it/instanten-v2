import "./dev-guard.mjs";
// @ts-check
import { defineConfig } from 'astro/config';
import sitemap, { ChangeFreqEnum } from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://instanten.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'ja', 'fr', 'es', 'ko', 'nl', 'sv', 'it', 'pt'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    {
      name: 'error-pages',
      // 404.astro / 500.astro Astro khud dist/404.html, dist/500.html par deta hai.
      // 403/503 directory ke roop mein bante hain — unhe root par .html bana do,
      // taaki koi bhi host (nginx, Netlify, Vercel, serve-static) unhe dhoondh le.
      hooks: {
        'astro:build:done': async ({ dir }) => {
          const fs = await import('node:fs/promises');
          const path = await import('node:path');
          const root = dir.pathname;
          const flat = async (dir, code) => {
            const from = path.join(dir, code, 'index.html');
            const to = path.join(dir, `${code}.html`);
            try {
              await fs.rename(from, to);
              await fs.rm(path.join(dir, code), { recursive: true, force: true });
            } catch {
              // page generate nahi hua — build fail karne ki zarurat nahi
            }
          };

          for (const code of ['403', '503']) await flat(root, code);

          /**
           * Per-tool error pages (compassinstant pattern):
           * dist/<tool>/403/index.html → dist/<tool>/403.html
           * Har tool ke apne 403/404/500/503 — noindex hain aur kisi sitemap
           * mein nahi, isliye flat .html shape host ke liye simplest hai.
           */
          for (const tool of ['onlinecompass', 'onlinebubblelevel', 'onlinespeedometer', 'onlineqibla']) {
            for (const code of ['403', '404', '500', '503']) await flat(path.join(root, tool), code);
          }
        },
      },
    },
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          de: 'de',
          ja: 'ja',
          fr: 'fr',
          es: 'es',
          ko: 'ko',
          nl: 'nl',
          sv: 'sv',
          it: 'it',
          pt: 'pt',
        },
      },
      // Error pages (403/404/500/503) kabhi sitemap mein nahi — wo noindex hain.
      filter: (page) =>
        !page.endsWith('.xml') &&
        !/\/(403|404|500|503)(\/|\.html)?$/.test(page),
      serialize: (item) => {
        item.lastmod = new Date().toISOString();
        if (item.url === 'https://instanten.com/' || item.url === 'https://instanten.com') {
          item.changefreq = ChangeFreqEnum.DAILY;
          item.priority = 1.0;
        } else if (item.url.includes('/blog/')) {
          item.changefreq = ChangeFreqEnum.WEEKLY;
          item.priority = 0.85;
        } else if (item.url.endsWith('/blog') || item.url.endsWith('/about') || item.url.endsWith('/contact')) {
          item.changefreq = ChangeFreqEnum.WEEKLY;
          item.priority = 0.8;
        } else {
          item.changefreq = ChangeFreqEnum.MONTHLY;
          item.priority = 0.6;
        }
        return item;
      },
    }),
    {
      /**
       * Per-tool silo sitemaps ko sitemap-index.xml mein register karta hai.
       *
       * @astrojs/sitemap index khud likhta hai (sirf sitemap-0), isliye build ke
       * baad usme chaar tool sitemaps add ho jaate hain:
       *   /onlinecompass/sitemap.xml, /onlinebubblelevel/sitemap.xml,
       *   /onlinespeedometer/sitemap.xml, /onlineqibla/sitemap.xml
       * Root robots.txt bhi inhe list karta hai — dono raaste se discover ho jaate hain.
       */
      name: 'per-tool-sitemaps',
      hooks: {
        'astro:build:done': async ({ dir, logger }) => {
          const fs = await import('node:fs/promises');
          const path = await import('node:path');
          const root = dir.pathname;
          const tools = ['onlinecompass', 'onlinebubblelevel', 'onlinespeedometer', 'onlineqibla'];
          const indexFile = path.join(root, 'sitemap-index.xml');
          try {
            const xml = await fs.readFile(indexFile, 'utf8');
            // integration index ko ek hi line par likhta hai — isliye naye
            // entries bhi usi compact shape mein add hote hain.
            const missing = tools.filter((tool) => !xml.includes(`/${tool}/sitemap.xml`));
            if (missing.length) {
              const entries = missing
                .map(
                  (tool) =>
                    `<sitemap><loc>https://instanten.com/${tool}/sitemap.xml</loc><lastmod>${new Date().toISOString()}</lastmod></sitemap>`
                )
                .join('');
              const next = xml.replace('</sitemapindex>', `${entries}</sitemapindex>`);
              await fs.writeFile(indexFile, next, 'utf8');
              logger.info(`sitemap-index: ${missing.length} per-tool sitemaps added`);
            }
          } catch {
            // index na ho to build fail karne ki zarurat nahi
          }
        },
      },
    },
  ],
  vite: {
    css: {
      postcss: './postcss.config.mjs',
    },
  },
  content: {
    collections: {
      tools: {
        type: 'data',
        schema: ({ z }) => z.object({
          name: z.string(),
          category: z.string(),
          description: z.string(),
          pricing: z.enum(['Free', 'Freemium', 'Paid']),
          image: z.string(),
          url: z.string(),
          tags: z.array(z.string()).optional(),
          maker: z.string().optional(),
          addedDate: z.string().optional(),
          updatedDate: z.string().optional(),
          featured: z.boolean().optional(),
        }),
      },
      blog: {
        type: 'data',
        schema: ({ z }) => z.object({
          slug: z.string(),
          title: z.string(),
          excerpt: z.string(),
          thumbnail: z.string(),
          thumbnailAlt: z.string(),
          categories: z.array(z.object({
            name: z.string(),
            slug: z.string(),
          })),
          author: z.object({
            name: z.string(),
            slug: z.string(),
          }),
          publishedAt: z.string(),
          readingTime: z.number(),
        }),
      },
    },
  },
});
