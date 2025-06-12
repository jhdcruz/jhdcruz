// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import partytown from "@astrojs/partytown";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://deuz.tech",
  prefetch: {
    prefetchAll: true,
  },
  experimental: {
    responsiveImages: true,
  },
  server: {
    port: 3000,
    host: true,
  },
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
    imageService: "cloudflare",
  }),
  vite: {
    resolve: {
      alias: import.meta.env.PROD && {
        "react-dom/server": "react-dom/server.edge",
      } || {},
    },
    ssr: {
      noExternal: ["workerd", "astrojs/cloudflare"],
    },
    plugins: [tailwindcss()],
  },
  image: {
    service: passthroughImageService(),
    experimentalLayout: "constrained",
  },
  integrations: [
    react(),
    partytown(),
    sitemap(),
    icon({
      include: {
        tabler: ["*"],
      },
    }),
  ],
});
