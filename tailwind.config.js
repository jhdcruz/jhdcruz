module.exports = {
  darkMode: 'class',
  content: ['./public/**/*.html', './src/**/*.{astro,tsx}'],
  theme: {
    extend: {
      colors: {
        matte: '#1e1e1e',
        dark: '#0f0f0f',
        primary: '#fac641',
      },
    },
  },
  plugins: [],
};
