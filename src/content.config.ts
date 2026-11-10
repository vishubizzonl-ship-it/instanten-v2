import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const tools = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/tools' }),
  schema: z.object({
    slug: z.string().min(1),
    name: z.string().min(1),
    category: z.enum(['Utility', 'Developer', 'Marketing', 'Design', 'Writing', 'Productivity']),
    description: z.string().min(10),
    longDescription: z.string().optional(),
    pricing: z.enum(['Free', 'Freemium', 'Paid']),
    pricingDetails: z.string().optional(),
    image: z.string().min(1),
    url: z.url(),
    tags: z.array(z.string()).optional(),
    maker: z.string().optional(),
    addedDate: z.string().optional(),
    updatedDate: z.string().optional(),
    features: z.array(z.string()).optional(),
    useCases: z.array(z.string()).optional(),
    featured: z.boolean().optional().default(false),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{json,md}', base: './src/content/blog' }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    excerpt: z.string(),
    thumbnail: z.string().optional(),
    thumbnailAlt: z.string().optional(),
    categories: z.array(z.object({
      name: z.string(),
      slug: z.string(),
    })).optional(),
    author: z.object({
      name: z.string(),
      slug: z.string(),
    }).optional(),
    publishedAt: z.string(),
    readingTime: z.number().optional(),
    body: z.string().optional(),
  }),
});

export const collections = { tools, blog };