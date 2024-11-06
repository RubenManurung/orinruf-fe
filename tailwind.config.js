/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        'xxl': '1440px',
        '2xl': '1536px'
      },
      colors: {
        'distilled-rose': '#B88E2F',
        'doeskin': '#FFF3E3',
        'carbon': "#333333",
        'dead-pixel': '#3A3A3A',
        'jade-mountain': "#2EC1AC",
        'squant': "#666666",
        'grams-hair': "#F4F5F7",
        'argent': '#898989',
        'palladium': '#B0B0B0',
        'pastrami': '#E97171',
        'unbleached': '#FCF8F3',
        'kettlemen': '#616161',
        'gold-grey': '#9F9F9F'
      },
      maxWidth: {
        '2xl': '90rem',
      },
    },
  },
  plugins: [],
}

