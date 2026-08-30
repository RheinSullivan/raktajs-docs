<script setup lang="ts">
const { data: navigation } = await useAsyncData(
  'docs-navigation',
  () => queryCollectionNavigation('content')
)
</script>

<template>
  <DocsNav
    v-if="navigation"
    :items="navigation"
  />
</template>