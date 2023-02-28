/** @type {import('tailwindcss').Config} */
// import useLocalStorage from './hooks/useLocalStorage'
const { fontFamily } = require('tailwindcss/defaultTheme')
// const primaryColor = useLocalStorage('primary-color', '#5388fc')
const primaryColor = '#5388fc'
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          'primary': primaryColor,

          'secondary': '#D926AA',

          'accent': '#1FB2A5',

          'neutral': '#191D24',

          'base-100': '#2A303C',

          'info': '#3ABFF8',

          'success': '#36D399',

          'warning': '#FBBD23',

          'error': '#F87272',
        },
      },
    ],
  },
  plugins: [require('daisyui'), require('tailwindcss-animate')],
}
