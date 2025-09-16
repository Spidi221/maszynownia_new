/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ems-gold': '#D9BA74',
        'ems-black': '#18191B',
        'ems-black-darker': '#18161C',
        'ems-stone': '#0c0a09',
        'gym-yellow': '#D9A748',
      },
      fontFamily: {
        'dosis': ['Dosis', 'sans-serif'],
      },
      letterSpacing: {
        'mega': '6.5px',
        'wide': '3px',
        'wider': '2px',
      }
    },
  },
  plugins: [],
}