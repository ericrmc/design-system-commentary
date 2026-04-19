import { getCollection, type CollectionEntry } from 'astro:content';

const NUMBER_WORDS: Record<number, string> = {
  1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five',
  6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten',
};

// Below 10 we prefer the word; at 10+ numerals read cleaner in prose.
export function numberAsWord(n: number): string {
  return NUMBER_WORDS[n] ?? String(n);
}

// Canonical sessions only (variant === 'default'). The home page, sessions index,
// feed, and llms.txt all want this — variants are alternate views of a canonical post.
export async function getSessions(): Promise<CollectionEntry<'sessions'>[]> {
  const all = await getCollection('sessions');
  return all
    .filter((e) => e.data.variant === 'default')
    .sort((a, b) => a.data.session - b.data.session);
}

// Variants of a canonical session, excluding the default. Used by the route generator
// and the layout's variant switcher.
export async function getVariantsForSession(
  session: number,
): Promise<CollectionEntry<'sessions'>[]> {
  const all = await getCollection('sessions');
  return all.filter((e) => e.data.session === session && e.data.variant !== 'default');
}

export async function getLatestSession(): Promise<CollectionEntry<'sessions'> | undefined> {
  const sessions = await getSessions();
  return sessions[sessions.length - 1];
}

export async function getSessionCount(): Promise<number> {
  return (await getSessions()).length;
}

export function formatDate(d: Date): string {
  return d.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function isoDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}
