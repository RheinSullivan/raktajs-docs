<script setup lang="ts">
definePageMeta({ layout: 'docs' })
useHead({ title: 'Installation - Rakta.js Docs' })

const managers = ['bun', 'npm', 'yarn', 'pnpm']
</script>

<template>
  <article>
    <p class="text-xs font-mono font-semibold uppercase tracking-wider text-primary-bright mb-3">
      Getting Started
    </p>
    <h1 class="font-heading text-4xl font-bold text-white mb-6">Installation</h1>
    <p class="text-text-muted text-lg leading-relaxed mb-10">
      Get up and running with Rakta.js in seconds using your preferred package manager. We
      recommend Bun for the best experience.
    </p>

    <h2 class="font-heading text-2xl font-bold text-white mb-4">Requirements</h2>
    <p class="text-text-muted leading-relaxed mb-4">
      Before installing Rakta.js, ensure your development environment meets the following requirements:
    </p>
    <ul class="space-y-2 mb-6">
      <li class="flex items-start gap-2 text-text-muted">
        <span class="text-primary-bright mt-1.5">•</span>
        <span><span class="text-white font-medium">Node.js 18.17.0</span> or newer, OR <span class="text-white font-medium">Bun 1.0.0</span> or newer.</span>
      </li>
      <li class="flex items-center gap-2 text-text-muted">
        <span class="text-primary-bright mt-0">•</span>
        <span class="flex items-center gap-2 flex-wrap">
          A package manager:
          <code
            v-for="m in managers"
            :key="m"
            class="px-2 py-0.5 rounded bg-bg-elevated text-text-main text-xs font-mono"
          >{{ m }}</code>
        </span>
      </li>
      <li class="flex items-start gap-2 text-text-muted">
        <span class="text-primary-bright mt-1.5">•</span>
        <span>Git for version control (optional but recommended).</span>
      </li>
    </ul>

    <p class="text-text-muted leading-relaxed mb-8">
      While Rakta.js works perfectly with Node.js, we strongly recommend using
      <span class="text-white font-medium"> Bun</span>. Rakta.js's internal build engine
      (CheribonEngine) is heavily optimized for Bun's runtime, providing significantly faster
      installation, transpilation, and development server startup times.
    </p>

    <h2 class="font-heading text-2xl font-bold text-white mb-4">Create Your First App</h2>
    <p class="text-text-muted leading-relaxed mb-2">
      The easiest way to start a new Rakta.js project is by using the official CLI tool. Run the
      following command in your terminal:
    </p>

    <DocsCodeBlock label="Create Your App" code="bun create-rakta-app@latest my-app" />

    <p class="text-text-muted leading-relaxed mb-2">
      The CLI will ask what kind of project you want to create:
    </p>

    <div class="glass-panel rounded-xl overflow-hidden my-6">
      <div class="p-6 font-mono text-sm leading-relaxed">
        <div class="text-text-muted mb-4">$ bun create-rakta-app@latest my-app</div>
        <div class="text-primary-bright mb-2">? What do you want to create?</div>
        <div class="pl-4 mb-4 flex flex-col gap-2">
          <div class="flex items-center gap-2 text-text-muted">
            <Icon name="lucide:circle" class="text-xs" /> Fullstack app
          </div>
          <div class="flex items-center gap-2 text-text-main">
            <Icon name="lucide:check-circle-2" class="text-xs text-primary-bright" /> Frontend only
          </div>
        </div>
        <div class="border-l-2 border-primary pl-4 py-2 bg-bg-elevated text-text-muted rounded-r">
          <span class="text-white font-medium">Frontend-only mode</span> creates the app directly
          at root without backend or database folders.
        </div>
      </div>
    </div>

    <h2 class="font-heading text-2xl font-bold text-white mb-4 mt-10">Start the Dev Server</h2>
    <p class="text-text-muted leading-relaxed mb-2">
      Once your app is created, move into the project folder and start the development server:
    </p>

    <DocsCodeBlock
      label="Terminal"
      code="cd my-app
bun dev"
    />

    <p class="text-text-muted leading-relaxed mb-8">
      Your app will be available at <code class="px-1.5 py-0.5 rounded bg-bg-elevated text-white text-xs font-mono">http://localhost:3000</code>.
      CheribonEngine watches your files and hot-reloads changes instantly.
    </p>

    <div class="flex flex-wrap gap-4">
      <NuxtLink
        to="/docs/create-app"
        class="px-6 py-3 rounded-lg text-sm font-semibold bg-primary hover:bg-primary-bright text-white transition-colors inline-flex items-center gap-2"
      >
        Create App <Icon name="lucide:arrow-right" class="text-sm" />
      </NuxtLink>
      <NuxtLink
        to="/docs/introduction"
        class="px-6 py-3 rounded-lg text-sm font-semibold glass-panel text-white hover:bg-bg-elevated transition-colors inline-flex items-center gap-2"
      >
        <Icon name="lucide:arrow-left" class="text-sm" /> Introduction
      </NuxtLink>
    </div>
  </article>
</template>
