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
    // Source files in the methodology repo that this post draws on. Rendered as
    // a "Source files" block at the bottom of the post. Paths are relative to
    // the design-system repo root; trailing-slash paths render as directory
    // (tree) links, others as file (blob) links.
    sources: z
      .array(
        z.object({
          label: z.string(),
          path: z.string(),
        }),
      )
      .optional(),
  }),
});

export const collections = { sessions };
