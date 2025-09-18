/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      screens: {
        // Override default breakpoints for better tablet support
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1200px', // NEW: True desktop starts here (not 1024px)
        '2xl': '1536px',
        // Custom breakpoints for specific cases
        'tablet-portrait': '768px',
        'tablet-landscape': '1024px',
        'desktop-small': '1200px',
      },
      colors: {
        'ems-gold': '#D9BA74',
        'ems-gold-rich': '#E5C988',
        'ems-gold-deep': '#C1A55E',
        'ems-gold-whisper': '#F2E6C7',
        'ems-black': '#18191B',
        'ems-black-darker': '#18161C',
        'ems-stone': '#0c0a09',
        'ems-charcoal': '#1C1D1F',
        'ems-graphite': '#2A2B2D',
        'ems-pearl': '#FEFDFB',
        'gym-yellow': '#D9A748',
        'gym-yellow-light': '#E8C472',
        'gym-yellow-deep': '#C49A35',
        'gym-yellow-soft': '#F4E5B3',
        'gym-orange-accent': '#a16207',
        'gym-cream': '#FFF8E7',
        'gym-beige': '#F5F0E4',
        'gym-brown-warm': '#8B4513',
        'gym-navy-trust': '#2C3E50',
      },
      fontFamily: {
        'bebas': ['Bebas Neue', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
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