/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ['"Space Grotesk"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
