<script setup lang="ts">
defineProps<{ onToggleSidebar?: () => void }>()
</script>

<template>
  <header class="h-16 w-full sticky top-0 z-50 bg-bg-main/90 backdrop-blur-md border-b border-border-subtle/10">
    <div class="h-full flex items-center justify-between px-4 lg:px-6">
      <div class="flex items-center gap-3">
        <button class="lg:hidden text-text-muted hover:text-white" @click="onToggleSidebar && onToggleSidebar()">
          <Icon name="lucide:menu" class="text-xl" />
        </button>
        <NuxtLink to="/" class="flex items-center gap-2">
          <img src="/raktajs.svg" alt="Rakta.js" class="h-6 w-6">
          <span class="font-heading font-bold text-white">Rakta.js</span>
        </NuxtLink>
        <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-bg-elevated text-text-muted border border-border-subtle/10">
          v0.1.0
        </span>
      </div>

      <nav class="hidden lg:flex items-center gap-6">
        <NuxtLink to="/docs/introduction" class="nav-link text-sm font-medium text-white">Documentation</NuxtLink>
        <a href="#showcase" class="nav-link text-sm font-medium text-text-muted hover:text-white transition-colors">Showcase</a>
        <a href="#blog" class="nav-link text-sm font-medium text-text-muted hover:text-white transition-colors">Blog</a>
        <button class="nav-link text-sm font-medium text-text-muted hover:text-white transition-colors flex items-center gap-1">
          Enterprise <Icon name="lucide:chevron-down" class="text-xs" />
        </button>
      </nav>

      <div class="flex items-center gap-3">
        <button class="hidden md:flex items-center gap-2 text-sm text-text-subtle border border-border-subtle/10 rounded px-3 py-1.5 hover:border-border-subtle/30 transition-colors">
          <Icon name="lucide:search" class="text-sm" />
          <span>Search docs...</span>
          <span class="text-xs font-mono opacity-60">⌘K</span>
        </button>
        <a href="https://github.com" target="_blank" class="hidden sm:flex items-center gap-1.5 text-xs font-medium text-text-muted border border-border-subtle/10 rounded px-2 py-1.5 hover:text-white transition-colors">
          <Icon name="lucide:star" class="text-sm" /> 1.2k
        </a>
        <button class="text-text-muted hover:text-white transition-colors">
          <Icon name="lucide:moon" class="text-lg" />
        </button>
        <div class="hidden sm:flex items-center gap-1 text-xs font-medium text-text-muted border border-border-subtle/10 rounded px-2 py-1">
          <span class="text-white">EN</span>
          <span class="opacity-50">/</span>
          <span>ID</span>
        </div>
      </div>
    </div>
  </header>
</template>
