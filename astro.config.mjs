// @ts-check
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
	site: "https://deuz.tech",
	prefetch: {
		prefetchAll: true,
	},
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
	image: {
		experimentalLayout: "responsive",
	},
	experimental: {
		responsiveImages: true,
	},
	server: {
		port: 3000,
		host: true,
	},

	integrations: [
		partytown(),
		sitemap(),
		tailwind(),
		icon({
			include: {
				tabler: ["*"],
			},
		}),
		solidJs(),
	],
});
