// llms.txt — an emerging convention (proposed by Jeremy Howard) for providing
// AI agents with a concise, markdown-formatted index of the most important
// pages on a site. Served at /llms.txt when the site is at root; at
// <BASE>/llms.txt when deployed under a path prefix.
//
// Spec: https://llmstxt.org/

import type { APIContext } from 'astro';
import { site as siteConfig } from '../site';
import { getSessions } from '../lib/sessions';

export async function GET(context: APIContext) {
  const base = context.site?.toString().replace(/\/$/, '') ?? '';
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
  const url = (path: string) => `${base}${basePath}${path}`;

  const sessions = await getSessions();

  const body = `# ${siteConfig.title}

> ${siteConfig.metaDescription}

This site publishes post-session commentary on an AI-led, self-hosting design methodology. Each session of the methodology produces decisions, specifications, and preserved provenance inside a separate project repository; the posts linked below translate each session's outcomes into readable prose for a human or machine reader encountering the work for the first time. Commentary is written by ${siteConfig.authorName}; the project's human operator is ${siteConfig.operatorName}.

## Start here

- [About the project](${url('/about/')}): what the methodology is, who writes the commentary, and the distinction between operator and author.
- [Concepts glossary](${url('/concepts/')}): short definitions of the project's working vocabulary (session, perspective, provenance, specification, open issue, multi-agent deliberation, cross-model participation, drift-to-ritual, self-hosting).
- [All sessions index](${url('/sessions/')}): every session in order, with one-line summaries.

## Session posts

${sessions
    .map(
      (s) =>
        `- [Session ${String(s.data.session).padStart(3, '0')} — ${s.data.title}](${url(`/sessions/${s.id}/`)}): ${s.data.summary}`,
    )
    .join('\n')}

## Feeds and indexes

- [RSS feed](${url('/feed.xml')})
- [Sitemap](${url('/sitemap-index.xml')})
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
