/** @type {import('tailwindcss').Config} */
import TailwindPrimeUI from 'tailwindcss-primeui'
export default {
  content: [],
  darkMode: 'selector',
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif']
      }
    }
  },
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  plugins: [TailwindPrimeUI]
}