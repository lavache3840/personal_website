// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: replace with your real domain (used for the sitemap, RSS feed, and canonical URLs).
  site: 'https://example.com',
  integrations: [sitemap()],
});
