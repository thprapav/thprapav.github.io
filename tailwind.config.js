const colors = require('tailwindcss/colors');

module.exports = {
  purge: false,
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio')],
};
