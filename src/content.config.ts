import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const topics = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/topics" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    importance: z.enum(['HIGH', 'MEDIUM', 'LOW']).default('MEDIUM'),
    revisionTime: z.number().default(3), // minutes
    category: z.string(),
      subcategory: z.string().optional(),
      order: z.number().optional(),
  }),
});

export const collections = { topics };
