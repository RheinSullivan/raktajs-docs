<script setup lang="ts">
const route = useRoute()

interface NavItem {
  title: string
  path: string
  children?: NavItem[]
}

const props = defineProps<{
  items: NavItem[]
  depth?: number
}>()

const depth = computed(() => props.depth ?? 0)
</script>

<template>
  <nav
    :class="[
      depth === 0
        ? 'h-full overflow-y-auto thin-scrollbar py-8 px-4'
        : 'flex flex-col'
    ]"
  >
    <template
      v-for="item in props.items"
      :key="item.path"
    >
      
      <div
        v-if="item.children?.length"
        class="mb-6"
      >
        <div
          class="
            flex
            items-center
            justify-between
            px-2
            py-1
            text-xs
            font-heading
            font-bold
            tracking-wider
            uppercase
            text-text-subtle
          "
        >
          <span>
            {{ item.title }}
          </span>

          <Icon
            name="lucide:chevron-down"
            class="size-3"
          />
        </div>

        <div
          class="
            mt-3
            flex
            flex-col
            border-l
            border-border-subtle/10
          "
        >
          <DocsNav
            :items="item.children"
            :depth="depth + 1"
          />
        </div>
      </div>

     
      <NuxtLink
        v-else
        :to="item.path"
        class="
          group
          flex
          items-center
          min-h-9
          pl-4
          pr-2
          py-1.5
          -ml-px
          border-l-2
          text-sm
          transition-colors
        "
        :class="
          route.path === item.path
            ? 'border-primary text-primary font-medium'
            : 'border-transparent text-text-muted hover:text-white hover:border-border-subtle/30'
        "
      >
        {{ item.title }}
      </NuxtLink>
    </template>
  </nav>
</template>