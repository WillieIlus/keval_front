// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'persian-green': {
          50: 'var(--color-persian-green-50)',
          100: 'var(--color-persian-green-100)',
          200: 'var(--color-persian-green-200)',
          300: 'var(--color-persian-green-300)',
          400: 'var(--color-persian-green-400)',
          500: 'var(--color-persian-green-500)',
          600: 'var(--color-persian-green-600)',
          700: 'var(--color-persian-green-700)',
          800: 'var(--color-persian-green-800)',
          900: 'var(--color-persian-green-900)',
          950: 'var(--color-persian-green-950)',
        },
        gray: {
          50: 'var(--color-gray-50)',
          100: 'var(--color-gray-100)',
          200: 'var(--color-gray-200)',
          300: 'var(--color-gray-300)',
          400: 'var(--color-gray-400)',
          500: 'var(--color-gray-500)',
          600: 'var(--color-gray-600)',
          700: 'var(--color-gray-700)',
          800: 'var(--color-gray-800)',
          900: 'var(--color-gray-900)',
          950: 'var(--color-gray-950)',
        },
        'yellow-orange': {
          50: 'var(--color-yellow-orange-50)',
          100: 'var(--color-yellow-orange-100)',
          200: 'var(--color-yellow-orange-200)',
          300: 'var(--color-yellow-orange-300)',
          400: 'var(--color-yellow-orange-400)',
          500: 'var(--color-yellow-orange-500)',
          600: 'var(--color-yellow-orange-600)',
          700: 'var(--color-yellow-orange-700)',
          800: 'var(--color-yellow-orange-800)',
          900: 'var(--color-yellow-orange-900)',
          950: 'var(--color-yellow-orange-950)',
        },
      },
      fontFamily: {
        body: ['Montserrat', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
        heading: ['Montserrat', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
        serif: ['Georgia', 'serif'], // You can keep this or change it if needed
        mono: ['Menlo', 'monospace'],  // You can keep this or change it if needed
      },
    },
  },
  plugins: [],
}