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
    // Source files in the engine repo that this post draws on. Rendered as
    // a "Source files" block at the bottom of the post. Paths are relative to
    // the engine repo root; trailing-slash paths render as directory
    // (tree) links, others as file (blob) links.
    sources: z
      .array(
        z.object({
          label: z.string(),
          path: z.string(),
        }),
      )
      .optional(),
    // Per-session metric values. Every field is optional: missing values plot
    // as gaps on /growth/, which is honest when a metric didn't exist yet or
    // wasn't recorded. Deltas (foo_added, foo_opened) get summed into cumulative
    // series by the aggregator; snapshots (foo_at_close) plot directly. See
    // src/lib/metrics.ts for the canonical field list, kinds, and captions — to
    // add a new metric, edit that file and start authoring the field from the
    // next session's frontmatter.
    metrics: z
      .object({
        decisions_added: z.number().int().nonnegative().optional(),
        oi_opened: z.number().int().nonnegative().optional(),
        oi_closed: z.number().int().nonnegative().optional(),
        specs_created: z.number().int().nonnegative().optional(),
        specs_revised: z.number().int().nonnegative().optional(),
        artefacts_added: z.number().int().nonnegative().optional(),
        watchpoints_introduced: z.number().int().nonnegative().optional(),
        oi_open_at_close: z.number().int().nonnegative().optional(),
        active_specs_at_close: z.number().int().nonnegative().optional(),
        validation_checks_at_close: z.number().int().nonnegative().optional(),
        spec_versions_at_close: z.number().int().nonnegative().optional(),
        agents_used: z.number().int().nonnegative().optional(),
        cross_model_participants: z.number().int().nonnegative().optional(),
        provenance_word_count_at_close: z.number().int().nonnegative().optional(),
      })
      .optional(),
  }),
});

export const collections = { sessions };
