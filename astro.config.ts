import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  integrations: [
    sitemap({
      customPages: ['https://jhdcruz.pages.dev'],
    }),
    tailwind(),
    partytown({}),
  ],
  site: 'https://jhdcruz.pages.dev',
  server: {
    port: 3000,
    host: true,
  },
  vite: {
    ssr: {
      external: ['svgo'],
    },
  },
});
