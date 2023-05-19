/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        offwhite: '#FAF9F6',
        lightgreyish: '#8A8C97',
        greyish: '#4D5061',
        grey: '#3C3C3C',
        darkgrey: '#2E2E2E',
        black: '#080708',
        red: '#F55D3E',
        green: '#499F68',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        ptmono: ['PT Mono', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
