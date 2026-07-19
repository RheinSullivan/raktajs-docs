// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-07-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxtjs/google-fonts'],
  css: ['~/assets/css/main.css'],
  googleFonts:{
    families:{
      Inter:[400,500,600],
      "JetBrains Mono": [400],
      "Space Grotesk": [400,500,600,700]
    }
  },

  app: {
    head: {
      title: 'Rakta.js | Small in size. Fierce in speed. Alive in every route.',
      htmlAttrs: { lang: 'en', class: 'dark' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'description', content: 'A lightweight, composable frontend framework on Bun.' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
  },

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.ts',
  },

  icon: {
    collections: ['lucide'],
  },
})