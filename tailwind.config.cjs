const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: ['./public/**/*.html', './src/**/*.{astro,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      display: ['Inter', ...defaultTheme.fontFamily.sans],
      body: ['Inter', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        matte: '#2e1e1e',
        dark: '#1f0f0f',
        light: '#f9f9fa',
        primary: '#f2ab48',
        'primary-darken': '#ca9f3c',
      },
    },
  },
  plugins: [],
};
