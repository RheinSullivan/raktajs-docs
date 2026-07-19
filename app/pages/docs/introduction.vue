<script setup lang="ts">
definePageMeta({ layout: 'docs' })
useHead({ title: 'Introduction - Rakta.js Docs' })
</script>

<template>
  <article>
    <p class="text-xs font-mono font-semibold uppercase tracking-wider text-primary-bright mb-3">
      Getting Started
    </p>
    <h1 class="font-heading text-4xl font-bold text-white mb-6">Introduction</h1>
    <p class="text-text-muted text-lg leading-relaxed mb-8">
      Rakta.js is a lightweight, composable frontend framework built on top of the Bun runtime.
      It pairs a familiar React-based component model with a file-based routing layer, so you spend
      your time building routes instead of wiring up plumbing.
    </p>

    <h2 class="font-heading text-2xl font-bold text-white mt-12 mb-4">Why Rakta.js</h2>
    <p class="text-text-muted leading-relaxed mb-6">
      Most frameworks force you to choose between a minimal frontend-only setup and a full backend
      stack from day one. Rakta.js lets you start frontend-only and scale into a fullstack project
      only when your product actually needs one.
    </p>

    <ul class="space-y-3 mb-8">
      <li class="flex items-start gap-3 text-text-muted">
        <Icon name="lucide:atom" class="text-primary-bright mt-0.5 shrink-0" />
        <span><span class="text-white font-medium">React at the core</span> — built on modern React foundations with full Server Components support.</span>
      </li>
      <li class="flex items-start gap-3 text-text-muted">
        <Icon name="lucide:zap" class="text-primary-bright mt-0.5 shrink-0" />
        <span><span class="text-white font-medium">Bun-powered speed</span> — insanely fast builds and dev server thanks to the Bun runtime.</span>
      </li>
      <li class="flex items-start gap-3 text-text-muted">
        <Icon name="lucide:route" class="text-primary-bright mt-0.5 shrink-0" />
        <span><span class="text-white font-medium">MegaWeave routing</span> — intuitive file-based routing, no config required.</span>
      </li>
      <li class="flex items-start gap-3 text-text-muted">
        <Icon name="lucide:search" class="text-primary-bright mt-0.5 shrink-0" />
        <span><span class="text-white font-medium">MegaSignal SEO</span> — sitemaps, robots.txt and RSS generated out of the box.</span>
      </li>
    </ul>

    <h2 class="font-heading text-2xl font-bold text-white mt-12 mb-4">A quick look</h2>
    <p class="text-text-muted leading-relaxed mb-2">
      Every Rakta.js route is just a file. Here's a minimal page component:
    </p>

    <DocsCodeBlock
      label="app/page.tsx"
      code="export default function HomePage() {
  return <h1>Hello, Rakta.js</h1>
}"
    />

    <h2 class="font-heading text-2xl font-bold text-white mt-12 mb-4">Next steps</h2>
    <p class="text-text-muted leading-relaxed mb-6">
      Ready to try it out? Head to the installation guide to set up your environment, then create
      your first app in under a minute.
    </p>

    <div class="flex flex-wrap gap-4">
      <NuxtLink
        to="/docs/installation"
        class="px-6 py-3 rounded-lg text-sm font-semibold bg-primary hover:bg-primary-bright text-white transition-colors inline-flex items-center gap-2"
      >
        Installation <Icon name="lucide:arrow-right" class="text-sm" />
      </NuxtLink>
    </div>
  </article>
</template>
