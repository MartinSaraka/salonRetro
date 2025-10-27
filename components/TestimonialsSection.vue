<template>
  <section id="recenzie" class="py-20 relative bg-vintage-tan/20">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16 space-y-4 scroll-fade-in">
        <div class="flex justify-center mb-4">
          <div class="w-24 h-0.5 bg-vintage-gold"></div>
          <Icon name="mdi:star" class="text-vintage-gold text-xl mx-2" />
          <div class="w-24 h-0.5 bg-vintage-gold"></div>
        </div>
        <h2 class="font-serif text-4xl md:text-6xl font-bold text-vintage-brown vintage-heading">
          Čo hovoria naši klienti
        </h2>
        <p class="font-body text-lg text-sepia-light italic max-w-2xl mx-auto">
          Recenzie z našich kroník
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div 
          v-for="(testimonial, index) in testimonials" 
          :key="index"
          class="vintage-card corner-decoration scroll-fade-in group"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <!-- Newspaper style header -->
          <div class="border-b-2 border-vintage-gold/30 pb-4 mb-4">
            <div class="flex items-start justify-between">
              <div class="flex-1">
                <h3 class="font-serif text-lg font-bold text-vintage-brown">
                  {{ testimonial.name }}
                </h3>
                <p class="font-body text-xs text-sepia-light italic">
                  {{ testimonial.profession }}
                </p>
              </div>
              <div class="text-vintage-gold">
                <Icon v-for="i in 5" :key="i" name="mdi:star" class="text-sm" />
              </div>
            </div>
          </div>

          <!-- Quote icon -->
          <div class="mb-3">
            <Icon name="mdi:format-quote-open" class="text-4xl text-vintage-gold/30" />
          </div>

          <!-- Testimonial text -->
          <blockquote class="font-body text-base text-vintage-brown/90 leading-relaxed italic mb-4">
            {{ testimonial.text }}
          </blockquote>

          <!-- Date in vintage style -->
          <div class="pt-3 border-t border-vintage-tan">
            <p class="font-elegant text-xs text-sepia-light text-right">
              — {{ testimonial.date }}
            </p>
          </div>

          <!-- Decorative corner stamp -->
          <div class="absolute top-4 right-4 w-12 h-12 border-2 border-vintage-gold rounded-full flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity duration-300">
            <Icon name="mdi:seal" class="text-2xl text-vintage-gold" />
          </div>
        </div>
      </div>

      <!-- Decorative bottom -->
      <div class="flex justify-center mt-16 scroll-fade-in">
        <div class="w-32 h-1 bg-vintage-gold"></div>
        <div class="w-3 h-3 bg-vintage-gold transform rotate-45 -mt-1"></div>
        <div class="w-32 h-1 bg-vintage-gold"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    name: 'Ján Novák',
    profession: 'Podnikateľ',
    text: 'Navštevujem tento salón už 15 rokov. Peter je skutočný majster svojho remesla. Vždy sa tam cítim ako doma.',
    date: 'September 2024'
  },
  {
    name: 'Martin Horváth',
    profession: 'Architekt',
    text: 'Holenie britvou je skvelý zážitok. Relaxačná atmosféra a profesionálny prístup. Každému odporúčam!',
    date: 'Október 2024'
  },
  {
    name: 'Peter Kováč',
    profession: 'Lekár',
    text: 'Tradičný barbershop v pravom slova zmysle. Kvalitné služby, príjemné prostredie a férové ceny.',
    date: 'August 2024'
  },
  {
    name: 'Tomáš Balog',
    profession: 'Učiteľ',
    text: 'Môj otec ma sem vodil ako malého a teraz sem chodím so svojím synom. Rodinná tradícia pokračuje.',
    date: 'Júl 2024'
  },
  {
    name: 'Michal Varga',
    profession: 'Manažér',
    text: 'Konečne miesto, kde si človek môže oddýchnuť a nechať sa odborne ošetriť. Vždy precízna práca.',
    date: 'November 2024'
  },
  {
    name: 'Andrej Šimko',
    profession: 'Právnik',
    text: 'Autentická atmosféra starých čias. Peter vie presne, čo potrebujem. Už nikam inam nechodím.',
    date: 'December 2024'
  }
]
</script>

