import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';

export default defineConfig({
  integrations: [
    sitemap({
      customPages: ['https://jhdcruz.pages.dev'],
    }),
    tailwind(),
    icon({
      include: {
        heroicons: ['*'],
      },
    }),
    partytown({}),
  ],
  site: 'https://jhdcruz.pages.dev',
  server: {
    port: 3000,
    host: true,
  },
});
