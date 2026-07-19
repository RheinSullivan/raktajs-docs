<script setup lang="ts">
const route = useRoute()

type NavItem = { label: string; to: string }
type NavGroup = { label: string; items: NavItem[]; defaultOpen?: boolean }

const groups: NavGroup[] = [
  {
    label: 'Getting Started',
    defaultOpen: true,
    items: [
      { label: 'Introduction', to: '/docs/introduction' },
      { label: 'Installation', to: '/docs/installation' },
      { label: 'Create App', to: '/docs/create-app' },
      { label: 'Project Structure', to: '/docs/project-structure' },
    ],
  },
  {
    label: 'Fundamentals',
    items: [
      { label: 'Routing (MegaWeave)', to: '/docs/routing' },
      { label: 'Components', to: '/docs/components' },
      { label: 'Data Fetching', to: '/docs/data-fetching' },
    ],
  },
  {
    label: 'Features',
    items: [
      { label: 'ShrimpStep', to: '/docs/shrimp-step' },
      { label: 'TrusmiFrame', to: '/docs/trusmi-frame' },
      { label: 'KasepuhanGate', to: '/docs/kasepuhan-gate' },
      { label: 'KanomanShield', to: '/docs/kanoman-shield' },
      { label: 'SunyaragiCrown', to: '/docs/sunyaragi-crown' },
      { label: 'MegaSignal', to: '/docs/mega-signal' },
      { label: 'ShrimpHarbor', to: '/docs/shrimp-harbor' },
      { label: 'JatiLens', to: '/docs/jati-lens' },
    ],
  },
  {
    label: 'Tooling',
    items: [
      { label: 'CLI', to: '/docs/cli' },
      { label: 'CheribonEngine', to: '/docs/cheribon-engine' },
      { label: 'Deployment', to: '/docs/deployment' },
    ],
  },
]

const openGroups = reactive<Record<string, boolean>>(
  Object.fromEntries(groups.map((g) => [g.label, !!g.defaultOpen || g.items.some((i) => i.to === route.path)])),
)

function toggleGroup(label: string) {
  openGroups[label] = !openGroups[label]
}
</script>

<template>
  <nav class="h-full overflow-y-auto thin-scrollbar py-8 px-4">
    <div v-for="group in groups" :key="group.label" class="mb-6">
      <button
        class="w-full flex items-center justify-between px-2 py-1 text-xs font-heading font-bold tracking-wider uppercase text-text-subtle hover:text-text-muted transition-colors"
        @click="toggleGroup(group.label)"
      >
        {{ group.label }}
        <Icon
          name="lucide:chevron-right"
          class="text-xs transition-transform"
          :class="{ 'rotate-90': openGroups[group.label] }"
        />
      </button>

      <div v-show="openGroups[group.label]" class="mt-2 flex flex-col border-l border-border-subtle/10">
        <NuxtLink
          v-for="item in group.items"
          :key="item.to"
          :to="item.to"
          class="pl-4 pr-2 py-1.5 -ml-px border-l-2 text-sm transition-colors"
          :class="route.path === item.to
            ? 'border-primary text-primary font-medium'
            : 'border-transparent text-text-muted hover:text-white hover:border-border-subtle/30'"
        >
          {{ item.label }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>
