<script setup lang="ts">
useHead({ title: 'Rakta.js | Small in size. Fierce in speed. Alive in every route.' })

const features = [
  { icon: 'lucide:atom', title: 'React at the core', desc: 'Built on modern React foundations with full Server Components support.' },
  { icon: 'lucide:zap', title: 'Bun-powered speed', desc: 'Insanely fast builds and dev server thanks to the Bun runtime.' },
  { icon: 'lucide:route', title: 'MegaWeave', desc: 'Intuitive file-based routing layer inspired by Cirebon cloud rhythms.' },
  { icon: 'lucide:cable', title: 'TrusmiThread', desc: 'Automated import system that feels like seamless batik crafting.' },
  { icon: 'lucide:search', title: 'MegaSignal', desc: 'Complete SEO layer covering sitemaps, robots.txt, and RSS out of the box.' },
  { icon: 'lucide:anchor', title: 'ShrimpHarbor', desc: 'Native PWA and offline support built directly into the framework.' },
  { icon: 'lucide:cpu', title: 'CheribonEngine', desc: 'The core build and development engine optimized for modern web.' },
  { icon: 'lucide:activity', title: 'JatiLens', desc: 'Deep diagnostics and project health monitoring built-in.' },
]

const terminology = [
  { name: 'MegaWeave', meaning: 'file-based routing layer', example: 'app/docs/page.tsx' },
  { name: 'ShrimpStep', meaning: 'navigation component', example: '<click to="/docs">' },
  { name: 'TrusmiFrame', meaning: 'picture component', example: '<picture path="/shrimp.png">' },
  { name: 'KasepuhanGate', meaning: 'API endpoint', example: 'app/api/hello/route.ts' },
  { name: 'KanomanShield', meaning: 'route protection', example: 'protect dashboard pages' },
  { name: 'SunyaragiCrown', meaning: 'metadata manager', example: 'page title and meta' },
  { name: 'NagaLimanWire', meaning: 'typed RPC', example: 'shared request contracts' },
  { name: 'TrusmiThread', meaning: 'auto import system', example: 'generated imports' },
  { name: 'CheribonEngine', meaning: 'build/dev engine', example: 'Bun-powered tooling' },
  { name: 'NorthCoastFlow', meaning: 'runtime layer', example: 'request/render flow' },
  { name: 'MegaSignal', meaning: 'SEO layer', example: 'sitemap, robots, RSS' },
  { name: 'ShrimpHarbor', meaning: 'PWA support', example: 'offline support' },
  { name: 'JatiLens', meaning: 'diagnostics', example: 'project health' },
]

const renderModes = [
  { code: 'CSR', desc: 'Client-Side Rendering for dynamic apps.' },
  { code: 'SSR', desc: 'Server-Side Rendering for SEO.' },
  { code: 'SSG', desc: 'Static Site Generation for pure speed.' },
  { code: 'CSG', desc: 'Component Static Generation.' },
  { code: 'SPA', desc: 'Single Page Application mode.' },
  { code: 'HYB', desc: 'Hybrid mix of all modes per route.' },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="w-full max-w-7xl mx-auto px-6 pt-32 pb-24 flex flex-col lg:flex-row items-center justify-between gap-16">
      <div class="flex-1 max-w-2xl">
        <h1 class="font-heading text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
          Small in size.<br>
          <span class="text-primary-bright">Fierce in speed.</span><br>
          Alive in every route.
        </h1>
        <p class="text-xl text-text-muted mb-10 font-medium">
          A lightweight, composable frontend framework on Bun.
        </p>

        <div class="glass-panel rounded-lg p-1 mb-8 inline-flex items-center w-full max-w-md bg-bg-surface">
          <div class="text-text-subtle pl-4 pr-2 font-mono text-sm">$</div>
          <code class="flex-1 text-text-main font-mono text-sm py-3">bun create-rakta-app@latest my-app</code>
          <button class="p-2 text-text-muted hover:text-white hover:bg-bg-elevated rounded transition-colors">
            <Icon name="lucide:copy" />
          </button>
        </div>

        <div class="flex flex-wrap items-center gap-4">
          <NuxtLink to="/docs/installation" class="px-8 py-3.5 rounded-lg text-base font-semibold bg-primary hover:bg-primary-bright text-white transition-colors shadow-glow">
            Get Started
          </NuxtLink>
          <a href="https://github.com" target="_blank" class="px-8 py-3.5 rounded-lg text-base font-semibold glass-panel text-white hover:bg-bg-elevated transition-colors flex items-center gap-2">
            <Icon name="lucide:github" /> View GitHub
          </a>
        </div>
      </div>

      <div class="flex-1 relative flex justify-center items-center">
        <img src="/raktajs.svg" alt="Rakta Shrimp Mascot" class="w-[320px] h-[320px] object-contain shrimp-mascot drop-shadow-[0_0_20px_rgba(198,0,5,0.3)]">
      </div>
    </section>

    <!-- CLI Panel -->
    <section class="w-full max-w-5xl mx-auto px-6 py-20">
      <div class="glass-panel rounded-xl overflow-hidden border border-border-strong/30">
        <div class="bg-bg-surface border-b border-border-subtle/10 px-4 py-3 flex items-center gap-2">
          <div class="w-3 h-3 rounded-full bg-primary-bright" />
          <div class="w-3 h-3 rounded-full bg-yellow-500" />
          <div class="w-3 h-3 rounded-full bg-green-500" />
          <span class="ml-2 text-xs font-mono text-text-subtle">Create Your App</span>
        </div>
        <div class="p-6 md:p-8 bg-bg-card font-mono text-sm leading-relaxed">
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
            <span class="text-white font-medium">Frontend-only mode</span> creates the app directly at root without backend or database folders.
          </div>
        </div>
      </div>
    </section>

    <!-- Why Rakta.js -->
    <section class="w-full max-w-7xl mx-auto px-6 py-24">
      <h2 class="font-heading text-3xl font-bold mb-12 text-center">Why Rakta.js</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="f in features"
          :key="f.title"
          class="glass-panel p-6 rounded-xl border-l-2 border-l-primary"
        >
          <Icon :name="f.icon" class="text-3xl text-primary-bright mb-4 block" />
          <h3 class="font-heading text-lg font-bold mb-2">{{ f.title }}</h3>
          <p class="text-sm text-text-muted">{{ f.desc }}</p>
        </div>
      </div>
    </section>

    <!-- Frontend-only vs Fullstack -->
    <section class="w-full max-w-6xl mx-auto px-6 py-24">
      <h2 class="font-heading text-3xl font-bold mb-6 text-center">Scale only when you need it</h2>
      <p class="text-center text-text-muted mb-16 max-w-2xl mx-auto">
        Create frontend-only apps without backend noise. Scale into fullstack only when your project requires it.
      </p>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div class="glass-panel rounded-xl overflow-hidden">
          <div class="bg-bg-surface border-b border-border-subtle/10 px-6 py-4">
            <h3 class="font-heading font-bold text-white flex items-center gap-2">
              <Icon name="lucide:layout-template" class="text-primary-bright" /> Frontend-only
            </h3>
          </div>
          <pre class="p-6 text-sm text-text-muted leading-loose">your-app/
├─ app/
├─ components/
├─ lib/
├─ public/
├─ styles/
├─ docs/
├─ rakta.config.ts
└─ package.json</pre>
        </div>

        <div class="glass-panel rounded-xl overflow-hidden opacity-70 hover:opacity-100 transition-opacity">
          <div class="bg-bg-surface border-b border-border-subtle/10 px-6 py-4">
            <h3 class="font-heading font-bold text-white flex items-center gap-2">
              <Icon name="lucide:server" class="text-text-subtle" /> Fullstack
            </h3>
          </div>
          <pre class="p-6 text-sm text-text-subtle leading-loose">your-app/
├─ frontend/
├─ backend/
├─ shared/
├─ docs/
└─ package.json</pre>
        </div>
      </div>
    </section>

    <!-- Terminology -->
    <section class="w-full max-w-6xl mx-auto px-6 py-24">
      <h2 class="font-heading text-3xl font-bold mb-12">Cirebon Identity Terminology</h2>
      <div class="glass-panel rounded-xl overflow-hidden overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="border-b border-border-strong bg-bg-elevated">
              <th class="p-4 text-sm font-heading font-bold text-white">Feature Name</th>
              <th class="p-4 text-sm font-heading font-bold text-white">What it means</th>
              <th class="p-4 text-sm font-heading font-bold text-white">Example</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/5 font-mono text-sm">
            <tr v-for="t in terminology" :key="t.name" class="hover:bg-bg-elevated/50 transition-colors">
              <td class="p-4 text-text-main">{{ t.name }}</td>
              <td class="p-4 text-text-muted">{{ t.meaning }}</td>
              <td class="p-4 text-text-subtle">{{ t.example }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Offline Game Preview -->
    <section class="w-full max-w-6xl mx-auto px-6 py-24">
      <div class="glass-panel rounded-xl h-[400px] relative overflow-hidden bg-bg-deep border-border-strong">
        <div class="absolute top-6 left-6 flex items-center gap-2">
          <img src="/raktajs.svg" alt="Logo" class="h-6 w-6">
          <span class="font-heading font-bold text-white">Rakta.js</span>
        </div>
        <div class="absolute top-6 right-6 text-xs font-mono text-text-subtle">
          Frontend-only • Dev Mode
        </div>

        <div class="absolute inset-0 flex flex-col items-center justify-center pt-10">
          <p class="font-mono text-sm text-text-muted mb-2">bun create-rakta-app@latest my-app</p>
          <h3 class="font-heading text-2xl text-white mb-8">Press Space to wake the shrimp</h3>
        </div>

        <div class="absolute bottom-16 left-0 w-full h-[2px] bg-primary" />
        <div class="absolute bottom-[66px] left-20">
          <img src="/raktajs.svg" alt="Mascot" class="w-16 h-16 drop-shadow-[0_0_10px_rgba(198,0,5,0.8)]">
        </div>
        <div class="absolute bottom-[66px] left-1/2 w-12 h-16 border-2 border-text-subtle flex items-center justify-center font-mono text-xs text-text-subtle">
          /docs
        </div>
        <div class="absolute bottom-[66px] right-32 w-16 h-12 border-2 border-text-subtle flex items-center justify-center font-mono text-xs text-text-subtle">
          /route
        </div>
      </div>
    </section>

    <!-- Rendering Modes -->
    <section class="w-full max-w-7xl mx-auto px-6 py-24">
      <h2 class="font-heading text-3xl font-bold mb-12 text-center">Versatile Rendering Modes</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div v-for="m in renderModes" :key="m.code" class="glass-panel p-6 rounded-xl hover:border-primary transition-colors">
          <div class="w-10 h-10 rounded bg-bg-elevated flex items-center justify-center text-primary-bright font-bold font-heading mb-4">
            {{ m.code }}
          </div>
          <p class="text-sm text-text-muted">{{ m.desc }}</p>
        </div>
      </div>
    </section>

    <!-- Community -->
    <section class="w-full max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
      <div class="flex flex-col items-center text-center">
        <h2 class="font-heading text-3xl font-bold mb-4">Built by Developers, for Developers</h2>
        <p class="text-text-muted mb-10 max-w-xl">Rakta.js is an open-source project carefully crafted by a passionate community.</p>

        <div class="glass-panel px-8 py-6 rounded-full inline-flex items-center gap-4 mb-12">
          <div class="w-12 h-12 rounded-full bg-bg-elevated flex items-center justify-center text-xl overflow-hidden">
            <img src="/raktajs.svg" alt="Creator" class="w-8 h-8 opacity-50">
          </div>
          <div class="text-left">
            <div class="text-xs font-mono text-primary-bright uppercase tracking-wider mb-1">Creator</div>
            <div class="font-heading font-bold text-white">Rhein Sullivan</div>
          </div>
        </div>

        <div class="flex flex-wrap justify-center gap-4 opacity-70">
          <div v-for="i in 4" :key="i" class="w-10 h-10 rounded-full bg-bg-elevated border border-white/10" />
          <div class="w-10 h-10 rounded-full bg-bg-elevated border border-white/10 flex items-center justify-center text-xs">+42</div>
        </div>
      </div>
    </section>
  </div>
</template>
