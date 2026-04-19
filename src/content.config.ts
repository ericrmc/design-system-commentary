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
    // High-level events this session produced. Rendered as chips on the sessions
    // index to show methodology growth at a glance (specs revised, issues
    // opened/closed, multi-agent use, cross-model participation, first external
    // application, watchpoints surfaced). Canonical posts only; summaries inherit.
    events: z
      .array(
        z.enum([
          'spec-created',
          'spec-revised',
          'oi-opened',
          'oi-closed',
          'multi-agent',
          'cross-model',
          'external-application',
          'watchpoints',
        ]),
      )
      .optional(),
  }),
});

export const collections = { sessions };
