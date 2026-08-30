// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-01-01",
  future: { compatibilityVersion: 4 },
  modules: ["@nuxt/content"],
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      title: "Docs",
      htmlAttrs: { lang: "id" },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'description', content: 'A lightweight, composable frontend framework on Bun.' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/raktajs.svg' },
      ],
    },
  },

  content: {
    build: {
      markdown: {
        // Nuxt Content menggunakan Shiki secara internal untuk syntax highlighting
        highlight: {
          // Tema untuk light mode & dark mode
          theme: {
            default: "github-light",
            dark: "github-dark",
          },
          // Bahasa tambahan selain default (json, js, ts, html, css, vue, shell, mdc, md, yaml)
          langs: [
            "bash",
            "diff",
            "jsx",
            "tsx",
            "vue",
            "python",
            "php",
            "go",
            "rust",
            "yaml",
            "dockerfile",
            "ini",
            "sql",
          ],
        },
      },
    },
  },
});
