const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: ['./public/**/*.html', './src/**/*.{astro,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Cantarell', ...defaultTheme.fontFamily.sans],
      display: ['Cantarell', ...defaultTheme.fontFamily.sans],
      body: ['Cantarell', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        matte: '#1e1e1e',
        dark: '#0f0f0f',
        light: '#f8f9fa',
        primary: '#f1ab48',
        'primary-darken': '#ca8f3c',
      },
    },
  },
  plugins: [],
};
