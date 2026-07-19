<script setup lang="ts">
const dropdownOpen = ref(false)
</script>

<template>
  <header class="h-20 w-full sticky top-0 z-50 bg-bg-main/90 backdrop-blur-md border-b border-border-subtle/10">
    <div class="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
      <NuxtLink to="/" class="flex items-center gap-3">
        <img src="/raktajs.svg" alt="Rakta.js" class="h-8 w-8">
        <span class="font-heading font-bold text-xl tracking-tight text-white">Rakta.js</span>
      </NuxtLink>

      <nav class="hidden lg:flex items-center gap-8">
        <NuxtLink to="/docs/introduction" class="nav-link text-sm font-medium text-text-muted hover:text-white transition-colors">
          Documentation
        </NuxtLink>
        <a href="#showcase" class="nav-link text-sm font-medium text-text-muted hover:text-white transition-colors">Showcase</a>
        <a href="#blog" class="nav-link text-sm font-medium text-text-muted hover:text-white transition-colors">Blog</a>
        <div
          class="relative dropdown-trigger py-2"
          @mouseenter="dropdownOpen = true"
          @mouseleave="dropdownOpen = false"
        >
          <button class="nav-link text-sm font-medium text-text-muted hover:text-white transition-colors flex items-center gap-1">
            Enterprise <Icon name="lucide:chevron-down" class="text-xs" />
          </button>
          <div v-show="dropdownOpen" class="dropdown-menu absolute top-full left-0 mt-2 w-48 glass-panel rounded-lg py-2">
            <a href="#agencies" class="block px-4 py-2 text-sm text-text-muted hover:text-white hover:bg-bg-elevated">Agencies</a>
            <a href="#sponsor" class="block px-4 py-2 text-sm text-text-muted hover:text-white hover:bg-bg-elevated">Sponsor</a>
          </div>
        </div>
      </nav>

      <div class="flex items-center gap-4">
        <a href="https://github.com" target="_blank" class="text-text-muted hover:text-white transition-colors">
          <Icon name="lucide:github" class="text-xl" />
        </a>
        <button class="text-text-muted hover:text-white transition-colors">
          <Icon name="lucide:moon" class="text-lg" />
        </button>
        <div class="flex items-center gap-1 text-xs font-medium text-text-muted border border-border-subtle/10 rounded px-2 py-1">
          <span class="text-white">EN</span>
          <span class="opacity-50">/</span>
          <span>ID</span>
        </div>
        <NuxtLink
          to="/docs/introduction"
          class="ml-4 px-5 py-2 rounded text-sm font-semibold bg-primary hover:bg-primary-bright text-white transition-colors flex items-center gap-2"
        >
          Get Started <Icon name="lucide:arrow-right" class="text-sm" />
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
