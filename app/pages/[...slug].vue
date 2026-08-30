<script setup lang="ts">
const route = useRoute()

const path = computed(() => {
  const slug = route.params.slug
  if (!slug || (Array.isArray(slug) && slug.length === 0)) return '/'
  return '/' + (Array.isArray(slug) ? slug.join('/') : slug)
})

const { data: page } = await useAsyncData(
  () => `page-${path.value}`,
  () => queryCollection('docs').path(path.value).first()
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Halaman tidak ditemukan' })
}

const { data: surround } = await useAsyncData(
  () => `surround-${path.value}`,
  () => queryCollectionItemSurroundings('docs', path.value)
)

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description
})
</script>

<template>
  <article v-if="page" class="prose">
    <h1 v-if="page.title">{{ page.title }}</h1>
    <p v-if="page.description" class="lead">{{ page.description }}</p>

    <ContentRenderer :value="page" />

    <nav v-if="surround?.length" class="surround">
      <NuxtLink v-if="surround[0]" :to="surround[0].path" class="surround-link prev">
        ← {{ surround[0].title }}
      </NuxtLink>
      <NuxtLink v-if="surround[1]" :to="surround[1].path" class="surround-link next">
        {{ surround[1].title }} →
      </NuxtLink>
    </nav>
  </article>
</template>
