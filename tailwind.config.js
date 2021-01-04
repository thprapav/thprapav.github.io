const colors = require('tailwindcss/colors');
const typography = require('@tailwindcss/typography');
const aspectRatio = require('@tailwindcss/aspect-ratio');

module.exports = {
  important: true,
  purge: {
    content: ['./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}'],
  },
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
      },
    },
  },
  variants: {},
  plugins: [typography, aspectRatio],
  future: {
    purgeLayersByDefault: true,
  },
};
