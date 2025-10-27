<template>
  <section class="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
    <!-- Decorative vintage border frame -->
    <div class="absolute inset-8 border-4 border-vintage-gold/20 pointer-events-none hidden lg:block"></div>
    <div class="absolute inset-16 border-2 border-vintage-brown/10 pointer-events-none hidden lg:block"></div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-4xl mx-auto text-center space-y-8">
        <!-- Decorative top ornament -->
        <div class="flex justify-center mb-8">
          <div class="w-32 h-1 bg-vintage-gold"></div>
          <div class="w-3 h-3 bg-vintage-gold transform rotate-45 -mt-1"></div>
          <div class="w-32 h-1 bg-vintage-gold"></div>
        </div>

        <!-- Main heading -->
        <div class="space-y-6 animate-fade-in">
          <div class="font-elegant text-xl md:text-2xl text-sepia-light italic tracking-wide">
            Od roku 1925
          </div>
          <h1 class="font-serif text-6xl md:text-8xl lg:text-9xl leading-tight font-bold text-vintage-brown vintage-text-shadow">
            VINTAGE<br/>
            <span class="text-vintage-gold">Barbershop</span>
          </h1>
          <div class="font-body text-xl md:text-2xl text-vintage-brown/80 italic">
            Tradičné kaderníctvo s dušou minulosti
          </div>
        </div>

        <!-- Decorative divider -->
        <div class="flex items-center justify-center space-x-4 py-6">
          <div class="w-16 h-0.5 bg-vintage-gold"></div>
          <Icon name="mdi:star" class="text-vintage-gold text-2xl" />
          <div class="w-16 h-0.5 bg-vintage-gold"></div>
        </div>

        <!-- Description -->
        <p class="font-body text-lg md:text-xl text-vintage-brown/90 max-w-2xl mx-auto leading-relaxed scroll-fade-in" style="animation-delay: 0.2s">
          Vítame vás v našom tradičnom kaderníctve, kde sa stretáva remeselná zručnosť 
          s úctou k minulosti. <strong class="font-semibold">Kvalitné strihy a starostlivosť o vzhľad</strong> 
          už takmer storočie.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 scroll-fade-in" style="animation-delay: 0.3s">
          <NuxtLink to="/rezervacia" class="vintage-button">
            Objednať sa
          </NuxtLink>
          <a 
            href="#sluzby" 
            class="px-8 py-3 font-serif font-semibold text-lg border-2 border-vintage-brown text-vintage-brown bg-transparent hover:bg-vintage-brown hover:text-vintage-cream transition-all duration-300"
          >
            Naše služby
          </a>
        </div>

        <!-- Features -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16">
          <div class="vintage-card corner-decoration">
            <Icon name="mdi:clock-outline" class="text-5xl text-vintage-gold mb-4 mx-auto" />
            <h3 class="font-serif text-xl font-semibold text-vintage-brown mb-2">Tradícia</h3>
            <p class="font-body text-sm text-sepia-light">Takmer 100 rokov skúseností</p>
          </div>
          <div class="vintage-card corner-decoration">
            <Icon name="mdi:hand-heart" class="text-5xl text-vintage-gold mb-4 mx-auto" />
            <h3 class="font-serif text-xl font-semibold text-vintage-brown mb-2">Remeslo</h3>
            <p class="font-body text-sm text-sepia-light">Majstrovská práca s dušou</p>
          </div>
          <div class="vintage-card corner-decoration">
            <Icon name="mdi:shield-star" class="text-5xl text-vintage-gold mb-4 mx-auto" />
            <h3 class="font-serif text-xl font-semibold text-vintage-brown mb-2">Kvalita</h3>
            <p class="font-body text-sm text-sepia-light">Len tie najlepšie produkty</p>
          </div>
        </div>

        <!-- Decorative bottom ornament -->
        <div class="flex justify-center mt-12">
          <div class="w-24 h-1 bg-vintage-gold"></div>
          <div class="w-2 h-2 bg-vintage-gold rounded-full -mt-0.5 mx-2"></div>
          <div class="w-24 h-1 bg-vintage-gold"></div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
      <Icon name="mdi:chevron-down" class="text-4xl text-vintage-brown/50 animate-bounce" />
    </div>
  </section>
</template>

<script setup>
</script>
