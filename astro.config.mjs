// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import partytown from "@astrojs/partytown";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import solidJs from "@astrojs/solid-js";

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
        ssr: {
            noExternal: ["workerd", "astrojs/cloudflare"],
        },

        plugins: [tailwindcss()],
    },
    image: {
        service: passthroughImageService(),
        experimentalLayout: "responsive",
    },
    integrations: [
        partytown(),
        sitemap(),
        icon({
            include: {
                tabler: ["*"],
            },
        }),
        solidJs(),
    ],
});
