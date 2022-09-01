import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  integrations: [
    tailwind({
      config: {
        path: './tailwind.config.cjs',
      },
    }),
    sitemap({
      customPages: ['https://jhdcruz.pages.dev'],
    }),
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
