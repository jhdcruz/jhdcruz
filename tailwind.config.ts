import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
	darkMode: "selector",
	content: [
		"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
		"./node_modules/flowbite/**/*.js",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Nunito Sans", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				transparent: "transparent",
				current: "currentColor",
				primary: colors.amber,
				brand: colors.amber[500],
				light: colors.zinc[50],
				dark: colors.zinc[950],
				dark_fg: colors.zinc[800],
			},
		},
	},
	plugins: [require("flowbite/plugin")],
} satisfies Config;
