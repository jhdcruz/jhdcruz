// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  // Enable the Solid renderer to support Solid JSX components.
  renderers: ["@astrojs/renderer-solid"],
  buildOptions: {
    sitemap: true,
    site: "https://jhdcruz.pages.dev",
  },
});
