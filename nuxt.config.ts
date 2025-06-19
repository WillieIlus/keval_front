// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  modules: [
    '@pinia/nuxt',
    'pinia-plugin-persistedstate',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],
  css: [
    '~/assets/css/tailwind.css' 
  ],
  components: {
    global: true,
    dirs: ['~/components']
  },

  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap', rel: 'stylesheet' }
      ]
    }
  },
  colorMode: {
    classSuffix: '' // Recommended for Tailwind CSS dark mode variant (dark:)
  }


})