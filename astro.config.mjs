// @ts-check
import { defineConfig } from 'astro/config';

// Update `site` to your GitHub Pages URL, e.g. 'https://<username>.github.io'.
// If deploying to a project page (username.github.io/design-system-commentary),
// keep `base` set to the repo name. If deploying to a user page, set base to '/'.
const SITE = process.env.SITE_URL ?? 'https://example.github.io';
const BASE = process.env.BASE_PATH ?? '/design-system-commentary/';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
