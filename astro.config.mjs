// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  // Enable the Solid renderer to support Solid JSX components.
  renderers: ['@astrojs/renderer-solid'],
  tailwindConfig: './tailwind.config.cjs',
  buildOptions: {
    sitemap: true,
    site: 'https://jhdcruz.pages.dev',
  },
  devOptions: {
    hostname: '0.0.0.0',
  },
});
