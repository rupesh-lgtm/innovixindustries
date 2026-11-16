/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0e2b45',
          navy: '#0b1e33',
          crimson: '#c05c65',
          banner: '#b95d66',
          bannerDark: '#a34851',
          accent: '#0d9488'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        '3d': '0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        '3d-dark': '0 20px 30px -10px rgba(0, 0, 0, 0.6), 0 10px 15px -5px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
        '3d-hover': '0 25px 35px -5px rgba(182, 88, 98, 0.25), 0 15px 15px -5px rgba(0, 0, 0, 0.12)',
        '3d-card': '0 10px 30px -5px rgba(7, 45, 75, 0.12), 0 4px 6px -2px rgba(7, 45, 75, 0.05)',
      }
    },
  },
  plugins: [],
};
