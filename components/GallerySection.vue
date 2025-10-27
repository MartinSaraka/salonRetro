<template>
  <section id="o-nas" class="py-20 relative">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16 space-y-4">
        <div class="flex justify-center mb-4">
          <div class="w-24 h-0.5 bg-vintage-gold"></div>
          <Icon name="mdi:star" class="text-vintage-gold text-xl mx-2" />
          <div class="w-24 h-0.5 bg-vintage-gold"></div>
        </div>
        <h2 class="font-serif text-4xl md:text-6xl font-bold text-vintage-brown vintage-heading">
          Naša história
        </h2>
        <p class="font-body text-lg text-sepia-light italic max-w-2xl mx-auto">
          Tradícia prešla generáciami
        </p>
      </div>

      <!-- Story Section -->
      <div class="max-w-4xl mx-auto mb-16 vintage-card p-8 md:p-12">
        <div class="space-y-6 font-body text-base md:text-lg text-vintage-brown/90 leading-relaxed">
          <p class="first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-vintage-gold">
            Naše kaderníctvo bolo založené v roku <strong class="font-semibold">1925</strong> mojím prastarým otcom Jánom. 
            V tých časoch bola práca holiča vážená a rešpektovaná. Každý strih bol umením, každý zákazník bol hosťom.
          </p>
          <p>
            Od tých čias prešli <strong class="font-semibold">štyri generácie</strong> našej rodiny týmto remeslom. 
            Dedko ma naučil, že najdôležitejšie nie sú len nožnice a hrebeň, ale najmä 
            <em class="italic">úcta k človeku</em> a <em class="italic">láska k remeslu</em>.
          </p>
          <p>
            Dnes vo svojom salóne uchovávam tie isté hodnoty. Používam kvalitné nástroje, 
            zachovávam staré techniky a pristupujem ku každému klientovi s osobnou pozornosťou. 
            Lebo tradícia nie je o tom, čo bolo – je o tom, čo ostáva.
          </p>
        </div>
        
        <!-- Signature -->
        <div class="mt-8 pt-6 border-t-2 border-vintage-gold/30">
          <p class="font-elegant text-2xl italic text-vintage-brown text-right">
            Váš majster holič, Peter
          </p>
        </div>
      </div>

      <!-- Gallery Grid - Real vintage photos -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="(item, index) in galleryItems" 
          :key="index"
          class="group relative aspect-square overflow-hidden vintage-border cursor-pointer scroll-fade-in"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <!-- Real vintage photo -->
          <img 
            :src="item.image"
            :alt="item.title"
            class="absolute inset-0 w-full h-full object-cover vintage-photo transition-all duration-700 group-hover:scale-110"
            :style="{
              filter: 'sepia(100%) contrast(110%) brightness(95%)',
              transition: 'all 0.7s ease'
            }"
            @mouseenter="$event.target.style.filter = 'sepia(70%) contrast(105%) brightness(100%)'"
            @mouseleave="$event.target.style.filter = 'sepia(100%) contrast(110%) brightness(95%)'"
          />
          
          <!-- Caption overlay -->
          <div class="absolute bottom-0 left-0 right-0 bg-vintage-brown/90 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <h3 class="font-serif text-lg font-semibold text-vintage-cream mb-1">
              {{ item.title }}
            </h3>
            <p class="font-body text-sm text-vintage-tan italic">
              {{ item.year }}
            </p>
          </div>
        </div>
      </div>

      <!-- Decorative bottom -->
      <div class="flex justify-center mt-16">
        <div class="w-32 h-1 bg-vintage-gold"></div>
        <div class="w-3 h-3 bg-vintage-gold transform rotate-45 -mt-1"></div>
        <div class="w-32 h-1 bg-vintage-gold"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
const galleryItems = [
  {
    title: 'Prvý salón',
    year: 'Rok 1925',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=600&fit=crop&auto=format&q=80'
  },
  {
    title: 'Tradičné nástroje',
    year: 'Naše dedičstvo',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&h=600&fit=crop&auto=format&q=80'
  },
  {
    title: 'Holenie britvou',
    year: 'Klasika',
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&h=600&fit=crop&auto=format&q=80'
  },
  {
    title: 'Majster pri práci',
    year: 'Rok 1950',
    image: 'https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=600&h=600&fit=crop&auto=format&q=80'
  },
  {
    title: 'Vintage interior',
    year: 'Pôvodný štýl',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&h=600&fit=crop&auto=format&q=80&sat=-100'
  },
  {
    title: 'Rodinná tradícia',
    year: '4 generácie',
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&h=600&fit=crop&auto=format&q=80'
  }
]
</script>
