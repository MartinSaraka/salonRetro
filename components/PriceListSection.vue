<template>
  <section id="sluzby" class="py-20 relative">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16 space-y-4 scroll-fade-in">
        <div class="flex justify-center mb-4">
          <div class="w-24 h-0.5 bg-vintage-gold"></div>
          <Icon name="mdi:star" class="text-vintage-gold text-xl mx-2" />
          <div class="w-24 h-0.5 bg-vintage-gold"></div>
        </div>
        <h2 class="font-serif text-4xl md:text-6xl font-bold text-vintage-brown vintage-heading">
          Cenník služieb
        </h2>
        <p class="font-body text-lg text-sepia-light italic max-w-2xl mx-auto">
          Férové ceny od roku 1925
        </p>
      </div>

      <!-- Collapsible Vintage Menu Style Price List -->
      <div class="max-w-4xl mx-auto">
        <div class="vintage-card p-8 md:p-12 corner-decoration scroll-fade-in">
          <!-- Decorative header -->
          <div class="text-center mb-6 pb-6 border-b-4 border-vintage-gold/30">
            <div class="font-serif text-3xl md:text-4xl font-bold text-vintage-brown mb-2">
              VINTAGE BARBERSHOP
            </div>
            <div class="font-elegant text-sm text-sepia-light italic uppercase tracking-widest">
              Est. 1925 • Tradičné služby
            </div>
          </div>

          <!-- Toggle Button -->
          <div class="text-center mb-6">
            <button 
              @click="isExpanded = !isExpanded"
              class="inline-flex items-center gap-3 px-8 py-3 font-serif font-semibold text-lg border-2 border-vintage-brown text-vintage-brown bg-transparent hover:bg-vintage-tan transition-all duration-300"
            >
              <span>{{ isExpanded ? 'Zbaliť cenník' : 'Rozbaliť celý cenník' }}</span>
              <Icon 
                :name="isExpanded ? 'mdi:chevron-up' : 'mdi:chevron-down'" 
                class="text-2xl transition-transform duration-300"
              />
            </button>
          </div>

          <!-- Expandable content -->
          <div 
            class="overflow-hidden transition-all duration-500 ease-in-out"
            :style="{ maxHeight: isExpanded ? '3000px' : '0px' }"
          >
            <!-- Price categories -->
            <div class="space-y-8 pt-4">
              <!-- Men's Services -->
              <div class="scroll-fade-in" style="animation-delay: 0.1s">
                <h3 class="font-serif text-2xl font-bold text-vintage-brown mb-6 text-center border-b-2 border-vintage-gold/20 pb-3">
                  Pánske služby
                </h3>
                <div class="space-y-4">
                  <div v-for="service in mensServices" :key="service.name" class="flex items-start justify-between group">
                    <div class="flex-1">
                      <h4 class="font-serif text-lg font-semibold text-vintage-brown group-hover:text-vintage-gold transition-colors duration-300">
                        {{ service.name }}
                      </h4>
                      <p class="font-body text-sm text-sepia-light italic mt-1">
                        {{ service.description }}
                      </p>
                      <p class="font-body text-xs text-sepia-light/70 mt-1">
                        ⏱ {{ service.duration }}
                      </p>
                    </div>
                    <div class="ml-4 flex-shrink-0">
                      <div class="font-serif text-2xl font-bold text-vintage-brown">
                        {{ service.price }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Additional Services -->
              <div class="scroll-fade-in" style="animation-delay: 0.2s">
                <h3 class="font-serif text-2xl font-bold text-vintage-brown mb-6 text-center border-b-2 border-vintage-gold/20 pb-3">
                  Doplnkové služby
                </h3>
                <div class="space-y-4">
                  <div v-for="service in additionalServices" :key="service.name" class="flex items-start justify-between group">
                    <div class="flex-1">
                      <h4 class="font-serif text-lg font-semibold text-vintage-brown group-hover:text-vintage-gold transition-colors duration-300">
                        {{ service.name }}
                      </h4>
                      <p class="font-body text-sm text-sepia-light italic mt-1">
                        {{ service.description }}
                      </p>
                      <p class="font-body text-xs text-sepia-light/70 mt-1">
                        ⏱ {{ service.duration }}
                      </p>
                    </div>
                    <div class="ml-4 flex-shrink-0">
                      <div class="font-serif text-2xl font-bold text-vintage-brown">
                        {{ service.price }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Packages -->
              <div class="scroll-fade-in" style="animation-delay: 0.3s">
                <h3 class="font-serif text-2xl font-bold text-vintage-brown mb-6 text-center border-b-2 border-vintage-gold/20 pb-3">
                  Špeciálne balíčky
                </h3>
                <div class="space-y-4">
                  <div v-for="service in packages" :key="service.name" class="flex items-start justify-between bg-vintage-tan/20 p-4 border-l-4 border-vintage-gold group hover:bg-vintage-tan/40 transition-colors duration-300">
                    <div class="flex-1">
                      <h4 class="font-serif text-lg font-semibold text-vintage-brown group-hover:text-vintage-gold transition-colors duration-300">
                        {{ service.name }}
                      </h4>
                      <p class="font-body text-sm text-sepia-light italic mt-1">
                        {{ service.description }}
                      </p>
                      <p class="font-body text-xs text-sepia-light/70 mt-1">
                        ⏱ {{ service.duration }}
                      </p>
                      <p v-if="service.savings" class="font-body text-xs text-vintage-gold font-semibold mt-2">
                        💰 {{ service.savings }}
                      </p>
                    </div>
                    <div class="ml-4 flex-shrink-0">
                      <div class="font-serif text-2xl font-bold text-vintage-brown">
                        {{ service.price }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Footer note -->
              <div class="mt-8 pt-6 border-t-2 border-vintage-gold/30 text-center">
                <p class="font-body text-sm text-sepia-light italic">
                  Všetky ceny sú uvedené v eurách. Akceptujeme hotovosť a platobné karty.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Decorative bottom -->
      <div class="flex justify-center mt-16 scroll-fade-in" style="animation-delay: 0.5s">
        <div class="w-32 h-1 bg-vintage-gold"></div>
        <div class="w-3 h-3 bg-vintage-gold transform rotate-45 -mt-1"></div>
        <div class="w-32 h-1 bg-vintage-gold"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
const isExpanded = ref(false)

const mensServices = [
  {
    name: 'Klasický strih',
    description: 'Tradičný pánsky strih nožnicami a hrebeňom',
    price: '15€',
    duration: '30 min'
  },
  {
    name: 'Moderný strih',
    description: 'Súčasný strih so strojčekom a nožnicami',
    price: '18€',
    duration: '35 min'
  },
  {
    name: 'Holenie britvou',
    description: 'Klasické holenie ostrou britvou s horúcimi uterákmi',
    price: '12€',
    duration: '25 min'
  },
  {
    name: 'Strih + Holenie',
    description: 'Kompletná starostlivosť - strih a holenie',
    price: '25€',
    duration: '50 min'
  },
  {
    name: 'Detský strih',
    description: 'Šetrný strih pre deti do 12 rokov',
    price: '12€',
    duration: '25 min'
  }
]

const additionalServices = [
  {
    name: 'Úprava brady',
    description: 'Tvarovanie a styling brady',
    price: '10€',
    duration: '20 min'
  },
  {
    name: 'Úprava fúzov',
    description: 'Precízne tvarovanie fúzov',
    price: '8€',
    duration: '15 min'
  },
  {
    name: 'Styling vlasov',
    description: 'Profesionálny styling s prémiovými produktmi',
    price: '8€',
    duration: '15 min'
  },
  {
    name: 'Masáž hlavy',
    description: 'Relaxačná masáž pokožky hlavy',
    price: '12€',
    duration: '20 min'
  }
]

const packages = [
  {
    name: 'Gentleman Premium',
    description: 'Strih + Holenie + Úprava brady + Masáž hlavy',
    price: '45€',
    duration: '90 min',
    savings: 'Ušetríte 4€'
  },
  {
    name: 'Classic Deluxe',
    description: 'Strih + Holenie + Styling',
    price: '40€',
    duration: '75 min',
    savings: 'Ušetríte 3€'
  },
  {
    name: 'Quick Refresh',
    description: 'Strih + Úprava brady + Styling',
    price: '30€',
    duration: '55 min',
    savings: 'Ušetríte 3€'
  }
]
</script>
