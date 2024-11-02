/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'distilled-rose': '#B88E2F',
        'doeskin': '#FFF3E3'
      }
    },
  },
  plugins: [],
}

