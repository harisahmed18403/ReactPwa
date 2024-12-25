/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern: /grid-cols-./,
    }
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
      gridTemplateColumns: {
        '70/30': '70% 30%'
      }
    },
  },
  plugins: [],
}

