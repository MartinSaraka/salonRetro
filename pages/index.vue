<template>
  <div>
    <Navigation />
    <HeroSection />
    <PriceListSection />
    <GallerySection />
    <TestimonialsSection />
    <ContactSection />
    <Footer />
  </div>
</template>

<script setup>
useHead({
  title: 'Vintage Barbershop - Tradičné Kaderníctvo od roku 1925',
  meta: [
    { name: 'description', content: 'Tradičné kaderníctvo s dušou minulosti. Klasické strihy, holenie britvou a starostlivosť o vzhľad od roku 1925. Navštívte nás v Bratislave.' },
    { property: 'og:title', content: 'Vintage Barbershop - Tradičné Kaderníctvo' },
    { property: 'og:description', content: 'Tradičné kaderníctvo s dušou minulosti od roku 1925.' }
  ]
})
</script>
