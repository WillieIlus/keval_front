/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // This enables class-based dark mode
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue", // If you are using an app.vue
  ],
  theme: {
    extend: {
      colors: {
        // Assuming 'persian-green' is a custom color palette.
        // If these are already part of your theme or default Tailwind, adjust as needed.
        'persian-green': {
          50: '#f0fdfa',
          100: '#ccfbf1', // Used for mobile menu button text
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6', // Used for mobile menu background
          600: '#0d9488', // Used for header background
          700: '#0f766e', // Used for hover states
          800: '#115e59', // A potential dark mode variant for persian-green-600
          900: '#134e4a',
          950: '#042f2e',
        },
      }
    },
  },
  plugins: [
    // Add any Tailwind plugins you are using here
  ],
}