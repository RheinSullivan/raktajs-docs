<script setup lang="ts">
const sidebarOpen = ref(false)
</script>

<template>
  <div class="min-h-screen w-full bg-bg-main">
    <DocsNavbar :on-toggle-sidebar="() => (sidebarOpen = !sidebarOpen)" />

    <div class="max-w-[1400px] mx-auto flex">
      <!-- Sidebar -->
      <aside
        class="fixed lg:sticky top-16 lg:top-16 left-0 z-40 w-64 h-[calc(100vh-4rem)] border-r border-border-subtle/10 bg-bg-main lg:bg-transparent transition-transform lg:translate-x-0"
        :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full'"
      >
        <DocsSidebar />
      </aside>

      <!-- Overlay for mobile -->
      <div
        v-if="sidebarOpen"
        class="fixed inset-0 bg-black/60 z-30 lg:hidden"
        @click="sidebarOpen = false"
      />

      <!-- Content -->
      <main class="flex-1 min-w-0 px-6 md:px-12 py-12 max-w-3xl mx-auto">
        <slot />
      </main>
    </div>
  </div>
</template>
