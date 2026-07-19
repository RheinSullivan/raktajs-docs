# raktajs-docs

Landing page + documentation site for **Rakta.js**, built with **Nuxt 4** and **Tailwind CSS**.

## Structure

```
raktajs-docs/
├─ app/
│  ├─ assets/css/main.css       Tailwind entry + CSS color variables
│  ├─ layouts/
│  │  ├─ default.vue            Landing page layout (header + footer)
│  │  └─ docs.vue               Docs layout (top navbar + sidebar)
│  ├─ components/
│  │  ├─ landing/                Landing page sections
│  │  └─ docs/                   DocsNavbar, DocsSidebar, DocsCodeBlock
│  └─ pages/
│     ├─ index.vue               Landing page ("/")
│     └─ docs/
│        ├─ introduction.vue     /docs/introduction
│        ├─ installation.vue     /docs/installation
│        └─ [slug].vue           Dummy content for every other sidebar link
├─ tailwind.config.ts            Color variables (bg, border, text, primary, accent)
└─ nuxt.config.ts
```

## Color variables

All colors from the original design are wired up as Tailwind theme colors backed by CSS
variables in `app/assets/css/main.css`, so you can restyle the whole site by editing one place:

| Tailwind class            | CSS variable              | Hex        |
|----------------------------|----------------------------|------------|
| `bg-bg-main`               | `--color-bg-main`          | `#050507`  |
| `bg-bg-deep`                | `--color-bg-deep`          | `#030304`  |
| `bg-bg-surface`             | `--color-bg-surface`       | `#0B0F16`  |
| `bg-bg-elevated`            | `--color-bg-elevated`      | `#111827`  |
| `bg-bg-card`                | `--color-bg-card`          | `#0E111A`  |
| `border-border-subtle`      | `--color-border-subtle`    | white, use with `/10` etc. |
| `border-border-strong`      | `--color-border-strong`    | `#C60005`, use with `/45` etc. |
| `text-text-main`            | `--color-text-main`        | `#F8FAFC`  |
| `text-text-muted`           | `--color-text-muted`       | `#94A3B8`  |
| `text-text-subtle`          | `--color-text-subtle`      | `#64748B`  |
| `bg-primary` / `text-primary` | `--color-primary`        | `#C60005`  |
| `primary-bright`            | `--color-primary-bright`   | `#EF233C`  |
| `primary-dark`              | `--color-primary-dark`     | `#9F0003`  |
| `accent-white`              | `--color-accent-white`     | `#FFFFFF`  |

## Getting started

```bash
npm install
npm run dev
```

Then open `http://localhost:3000` for the landing page, and `http://localhost:3000/docs/introduction`
or `/docs/installation` for the docs layout with sidebar.

## Notes

- Icons use `@nuxt/icon` with the `lucide` collection (replaces the `iconify-icon` CDN script
  from the original static HTML).
- The shrimp mascot logo is a placeholder SVG at `public/raktajs.svg` — swap it for the real
  brand asset whenever you have it.
- `/docs/[slug].vue` renders dummy "coming soon" content for every sidebar link other than
  Introduction and Installation, so the whole sidebar is clickable out of the box.
