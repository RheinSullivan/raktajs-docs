<script setup lang="ts">
withDefaults(defineProps<{ label?: string; code: string }>(), {
  label: 'Terminal',
})
</script>

<template>
  <div class="glass-panel rounded-xl overflow-hidden my-6">
    <div class="bg-bg-surface border-b border-border-subtle/10 px-4 py-3 flex items-center gap-2">
      <div class="w-3 h-3 rounded-full bg-primary-bright" />
      <div class="w-3 h-3 rounded-full bg-yellow-500" />
      <div class="w-3 h-3 rounded-full bg-green-500" />
      <span class="ml-2 text-xs font-mono text-text-subtle">{{ label }}</span>
    </div>
    <pre class="p-5 text-sm font-mono text-text-muted overflow-x-auto"><code>{{ code }}</code></pre>
  </div>
</template>
