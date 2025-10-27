<template>
  <div class="min-h-screen relative overflow-hidden film-grain">
    <!-- Vintage paper texture background -->
    <div class="fixed inset-0 aged-paper pointer-events-none"></div>
    
    <!-- Main content -->
    <div class="relative z-10">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: {
    lang: 'sk'
  }
})
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
