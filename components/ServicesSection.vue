<template>
  <section id="sluzby" class="py-20 relative bg-vintage-tan/30">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16 space-y-4">
        <div class="flex justify-center mb-4">
          <div class="w-24 h-0.5 bg-vintage-gold"></div>
          <Icon name="mdi:star" class="text-vintage-gold text-xl mx-2" />
          <div class="w-24 h-0.5 bg-vintage-gold"></div>
        </div>
        <h2 class="font-serif text-4xl md:text-6xl font-bold text-vintage-brown vintage-heading">
          Naše služby
        </h2>
        <p class="font-body text-lg text-sepia-light italic max-w-2xl mx-auto">
          Tradičné kaderníctvo s osobným prístupom
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div 
          v-for="(service, index) in services" 
          :key="index"
          class="vintage-card corner-decoration group cursor-pointer scroll-fade-in"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="flex flex-col items-center text-center space-y-4">
            <div class="w-20 h-20 rounded-full bg-vintage-brown flex items-center justify-center border-4 border-vintage-gold shadow-vintage group-hover:scale-110 transition-all duration-300">
              <Icon :name="service.icon" class="text-4xl text-vintage-cream" />
            </div>
            
            <h3 class="font-serif text-xl font-semibold text-vintage-brown">
              {{ service.title }}
            </h3>
            
            <p class="font-body text-sm text-sepia-light leading-relaxed">
              {{ service.description }}
            </p>
            
            <div class="pt-4 border-t-2 border-vintage-gold/30 w-full">
              <div class="font-serif text-2xl font-bold text-vintage-brown">
                {{ service.price }}
              </div>
              <div class="font-body text-xs text-sepia-light italic">
                {{ service.duration }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-16">
        <NuxtLink to="/rezervacia" class="vintage-button">
          Objednať sa
        </NuxtLink>
      </div>

      <!-- Decorative bottom -->
      <div class="flex justify-center mt-12">
        <div class="w-32 h-1 bg-vintage-gold"></div>
        <div class="w-3 h-3 bg-vintage-gold transform rotate-45 -mt-1"></div>
        <div class="w-32 h-1 bg-vintage-gold"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    icon: 'mdi:content-cut',
    title: 'Klasický strih',
    description: 'Tradičný strih podľa starých majstrov. S nožnicami a hrebeňom.',
    price: '15€',
    duration: '30 minút'
  },
  {
    icon: 'mdi:razor-single-edge',
    title: 'Holenie britvou',
    description: 'Klasické holenie ostrou britvou s horúcimi uterákmi.',
    price: '12€',
    duration: '25 minút'
  },
  {
    icon: 'mdi:face-man',
    title: 'Strih + fúzy',
    description: 'Komplexná starostlivosť o vlasy a fúzy.',
    price: '20€',
    duration: '45 minút'
  },
  {
    icon: 'mdi:brush',
    title: 'Úprava brady',
    description: 'Starostlivé tvarovanie a úprava brady podľa želania.',
    price: '10€',
    duration: '20 minút'
  },
  {
    icon: 'mdi:head',
    title: 'Detský strih',
    description: 'Šetrný strih pre deti s trpezlivým prístupom.',
    price: '12€',
    duration: '25 minút'
  },
  {
    icon: 'mdi:hair-dryer',
    title: 'Styling vlasov',
    description: 'Profesionálny styling s použitím tradičných prípravkov.',
    price: '8€',
    duration: '15 minút'
  }
]
</script>
