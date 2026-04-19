import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const sessions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/sessions' }),
  schema: z.object({
    session: z.number(),
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.coerce.date(),
    summary: z.string(),
    variant: z.enum(['default', 'summary']).default('default'),
  }),
});

export const collections = { sessions };
