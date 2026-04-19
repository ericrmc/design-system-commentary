import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const site = context.site?.toString().replace(/\/$/, '') ?? '';
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
  const body = `User-agent: *
Allow: /

Sitemap: ${site}${basePath}/sitemap-index.xml
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
