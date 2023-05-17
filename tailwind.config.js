/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        offwhite: '#FAF9F6',
        greyish: '#4D5061',
        black: '#080708',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        ptmono: ['PT Mono', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
