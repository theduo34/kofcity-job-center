/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kjc: {
          50: '#fbf9eb',
          100: '#ffead5',
          200: '#ede59b',
          300: '#e2d062',
          400: '#d8bb37',
          500: '#c8a62a',
          600: '#ac8322',
          700: '#8a611e',
          800: '#734e20',
          900: '#654321',
          950: '#39220f'
        },
        kjcBtn: {
          50: '#fff6ed',
          100: '#ffead5',
          200: '#fdc695',
          300: '#fcb175',
          400: '#fa863d',
          500: '#f76518',
          600: '#f76518',
          700: '#c1360d',
          800: '#992b13',
          900: '#7b2613',
          950: '#431007'
        }
      }
    },
  },
  plugins: [],
}
