<template>
  <div class="min-h-screen w-full flex flex-col relative overflow-hidden bg-bg-main">
    <!-- Background patterns -->
    <div class="absolute inset-0 pattern-cloud z-0 pointer-events-none opacity-50" />
    <div class="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/4" />

    <LandingHeader />

    <main class="flex-1 relative z-10">
      <slot />
    </main>

    <LandingFooter />
  </div>
</template>
