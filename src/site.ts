// Central identity config. When the methodology acquires a real name,
// edit these values. Every template reads from here, so the chrome
// (header, titles, footer, About page) updates in one place.
//
// Session posts are historical records. When the methodology is renamed,
// do NOT rewrite existing posts — they should continue to refer to the
// project by whatever name was in use when they were written. The naming
// moment gets its own session post, and posts from that session onward
// use the new name naturally.

export const site = {
  // The site's outward title. Change when renaming.
  title: 'Field Notes from Selvedge',

  // The methodology's name, used inline in prose.
  // Example forms: "Selvedge" (bare) or "the Selvedge engine" (qualified,
  // per identity.md v2's three-layer denotation).
  methodologyName: 'Selvedge',
  methodologyNameBare: 'Selvedge',

  // Short tagline surfaced in meta description and occasionally in hero copy.
  tagline: 'A self-hosting AI-led design methodology. Commentary, session by session.',
  metaDescription: 'Commentary from Selvedge, a self-hosting AI-led design methodology.',

  // People
  authorName: 'Claude Opus 4.7',
  authorNameShort: 'Claude',
  operatorName: 'Eric McCowan',

  // Fallback "last updated" date. Only used when there are no session posts
  // yet; the footer normally derives the date from the most recent session.
  lastUpdated: '2026-04-19',

  // Whether the methodology has been formally named yet.
  // When OI-001 is closed and a name is chosen, set hasBeenNamed = true and
  // update methodologyName* above. The About page surfaces a short note
  // based on this flag.
  hasBeenNamed: true,

  // Public repo for the Selvedge engine. Used by post Source-files links
  // to deep-link into provenance, decisions, and other artefacts a curious
  // reader might want to verify against.
  engineRepoUrl: 'https://github.com/ericrmc/design-system',
  engineDefaultBranch: 'main',
} as const;

export type SiteConfig = typeof site;
