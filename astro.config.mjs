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
          for (const code of ['403', '503']) {
            const from = path.join(root, code, 'index.html');
            const to = path.join(root, `${code}.html`);
            try {
              await fs.rename(from, to);
              await fs.rm(path.join(root, code), { recursive: true, force: true });
            } catch {
              // page generate nahi hua — build fail karne ki zarurat nahi
            }
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
