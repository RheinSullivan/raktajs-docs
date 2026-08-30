<script setup lang="ts">
const { data: navigation } = await useAsyncData("navigation", () =>
  queryCollectionNavigation("content"),
);

const colorMode = ref<"light" | "dark">("light");

function toggleColorMode() {
  colorMode.value = colorMode.value === "light" ? "dark" : "light";
}

useHead({
  htmlAttrs: {
    class: computed(() => (colorMode.value === "dark" ? "dark" : "")),
  },
});

const sidebarOpen = ref(false);
</script>

<template>
  <div class="min-h-screen w-full bg-bg-main">
    <header class="topbar">
      <NuxtLink to="/" class="brand">📘 Docs</NuxtLink>
      <button class="theme-toggle" @click="toggleColorMode">
        {{ colorMode === "dark" ? "☀️ Light" : "🌙 Dark" }}
      </button>
    </header>

    <div class="max-w-350 mx-auto flex">
      <!-- <aside class="sidebar">
        <DocsNav :items="navigation ?? []" />
      </aside> -->

      <!-- Sidebar -->
      <aside
        class="fixed lg:sticky top-16 lg:top-16 left-0 z-40 w-64 h-[calc(100vh-4rem)] border-r border-border-subtle/10 bg-bg-main lg:bg-transparent transition-transform lg:translate-x-0"
        :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full'"
      >
        <DocsSidebar v-if="navigation" :items="navigation" />
      </aside>

      <main class="flex-1 min-w-0 px-6 md:px-12 py-12 max-w-3xl mx-auto">
        <slot />
      </main>
    </div>
  </div>
</template>
