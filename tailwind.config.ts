import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/app.vue',
    './app/error.vue',
  ],
  theme: {
    extend: {
      // === Rakta.js color variables ===
      // Each color is wired to a CSS custom property (see assets/css/main.css)
      // so themes can be swapped or re-skinned without touching component code.
      colors: {
        bg: {
          main: 'rgb(var(--color-bg-main) / <alpha-value>)',
          deep: 'rgb(var(--color-bg-deep) / <alpha-value>)',
          surface: 'rgb(var(--color-bg-surface) / <alpha-value>)',
          elevated: 'rgb(var(--color-bg-elevated) / <alpha-value>)',
          card: 'rgb(var(--color-bg-card) / <alpha-value>)',
        },
        border: {
          subtle: 'rgb(var(--color-border-subtle) / <alpha-value>)',
          strong: 'rgb(var(--color-border-strong) / <alpha-value>)',
        },
        text: {
          main: 'rgb(var(--color-text-main) / <alpha-value>)',
          muted: 'rgb(var(--color-text-muted) / <alpha-value>)',
          subtle: 'rgb(var(--color-text-subtle) / <alpha-value>)',
        },
        primary: {
          DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
          bright: 'rgb(var(--color-primary-bright) / <alpha-value>)',
          dark: 'rgb(var(--color-primary-dark) / <alpha-value>)',
        },
        accent: {
          white: 'rgb(var(--color-accent-white) / <alpha-value>)',
        },
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 20px rgb(var(--color-primary) / 0.4)',
        'glow-lg': '0 0 20px rgb(var(--color-primary) / 0.8)',
      },
      backgroundImage: {
        cloud: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10,50 Q25,30 40,50 T70,50' stroke='rgba(255,255,255,0.03)' fill='none' stroke-width='1'/%3E%3Cpath d='M0,80 Q20,60 40,80 T80,80' stroke='rgba(255,255,255,0.02)' fill='none' stroke-width='1'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
