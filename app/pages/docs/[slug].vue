<script setup lang="ts">
definePageMeta({ layout: 'docs' })

const route = useRoute()

const pageData: Record<string, { eyebrow: string; title: string; description: string }> = {
  'create-app': { eyebrow: 'Getting Started', title: 'Create App', description: 'Scaffold a new Rakta.js project with the official CLI, choosing between frontend-only and fullstack modes.' },
  'project-structure': { eyebrow: 'Getting Started', title: 'Project Structure', description: 'A tour of the folders Rakta.js generates for you, and what belongs where.' },
  routing: { eyebrow: 'Fundamentals', title: 'Routing (MegaWeave)', description: 'File-based routing that maps your app/ folder directly to URL paths.' },
  components: { eyebrow: 'Fundamentals', title: 'Components', description: 'How Rakta.js components are written, styled, and composed.' },
  'data-fetching': { eyebrow: 'Fundamentals', title: 'Data Fetching', description: 'Fetching data on the server, on the client, or a mix of both.' },
  'shrimp-step': { eyebrow: 'Features', title: 'ShrimpStep', description: 'The built-in navigation component used for client-side transitions between routes.' },
  'trusmi-frame': { eyebrow: 'Features', title: 'TrusmiFrame', description: 'An optimized picture component with automatic resizing and lazy loading.' },
  'kasepuhan-gate': { eyebrow: 'Features', title: 'KasepuhanGate', description: 'Define API endpoints alongside your routes, colocated in the same app/ folder.' },
  'kanoman-shield': { eyebrow: 'Features', title: 'KanomanShield', description: 'Route protection middleware for guarding pages like dashboards behind auth.' },
  'sunyaragi-crown': { eyebrow: 'Features', title: 'SunyaragiCrown', description: 'The metadata manager for page titles, meta tags, and social previews.' },
  'mega-signal': { eyebrow: 'Features', title: 'MegaSignal', description: 'A complete SEO layer that generates sitemaps, robots.txt, and RSS feeds automatically.' },
  'shrimp-harbor': { eyebrow: 'Features', title: 'ShrimpHarbor', description: 'Native PWA and offline support, built directly into the framework.' },
  'jati-lens': { eyebrow: 'Features', title: 'JatiLens', description: 'Deep diagnostics and project health monitoring, built in.' },
  cli: { eyebrow: 'Tooling', title: 'CLI', description: 'The create-rakta-app command line tool and its available flags.' },
  'cheribon-engine': { eyebrow: 'Tooling', title: 'CheribonEngine', description: 'The core build and development engine, optimized for the Bun runtime.' },
  deployment: { eyebrow: 'Tooling', title: 'Deployment', description: 'Deploying Rakta.js frontend-only and fullstack apps to production.' },
}

const slug = route.params.slug as string
const page = pageData[slug] ?? { eyebrow: 'Docs', title: 'Coming soon', description: 'This page hasn\'t been written yet.' }

useHead({ title: `${page.title} - Rakta.js Docs` })
</script>

<template>
  <article>
    <p class="text-xs font-mono font-semibold uppercase tracking-wider text-primary-bright mb-3">
      {{ page.eyebrow }}
    </p>
    <h1 class="font-heading text-4xl font-bold text-white mb-6">{{ page.title }}</h1>
    <p class="text-text-muted text-lg leading-relaxed mb-10">
      {{ page.description }}
    </p>

    <div class="glass-panel rounded-xl p-8 flex flex-col items-center text-center gap-3">
      <Icon name="lucide:construction" class="text-3xl text-primary-bright" />
      <p class="text-text-muted text-sm">
        This is dummy content for the <span class="text-white font-medium">{{ page.title }}</span> page.
        Replace it with real documentation whenever it's ready.
      </p>
    </div>
  </article>
</template>
