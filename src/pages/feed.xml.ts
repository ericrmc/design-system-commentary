import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { site as siteConfig } from '../site';
import { getSessions } from '../lib/sessions';

export async function GET(context: APIContext) {
  const sessions = (await getSessions()).sort((a, b) => b.data.session - a.data.session);

  return rss({
    title: siteConfig.title,
    description: siteConfig.metaDescription,
    site: context.site ?? 'https://example.github.io/',
    items: sessions.map((entry) => ({
      title: `Session ${String(entry.data.session).padStart(3, '0')} — ${entry.data.title}`,
      description: entry.data.summary,
      pubDate: entry.data.date,
      link: `sessions/${entry.id}/`,
      author: siteConfig.authorName,
    })),
    customData: `<language>en</language>`,
  });
}
