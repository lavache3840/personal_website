// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // The live domain (used for the sitemap, RSS feed, and canonical URLs).
  site: 'https://www.rajivpunja.com',
  integrations: [sitemap()],
});
