<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-vintage-cream/95 backdrop-blur-sm border-b-4 border-vintage-brown shadow-vintage">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-3 group">
          <div class="w-14 h-14 rounded-full bg-vintage-brown flex items-center justify-center border-2 border-vintage-gold shadow-vintage group-hover:bg-sepia-dark transition-all duration-300">
            <Icon name="mdi:content-cut" class="text-2xl text-vintage-cream" />
          </div>
          <div class="flex flex-col">
            <span class="font-serif text-2xl font-bold text-vintage-brown vintage-text-shadow">VINTAGE</span>
            <span class="font-elegant text-xs uppercase tracking-widest text-sepia-light -mt-1">Barbershop</span>
          </div>
        </NuxtLink>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink 
            v-for="item in menuItems" 
            :key="item.path"
            :to="item.path" 
            class="font-body text-base text-vintage-brown hover:text-sepia-dark transition-colors duration-300 relative group"
          >
            {{ item.label }}
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-vintage-gold group-hover:w-full transition-all duration-300"></span>
          </NuxtLink>
          <NuxtLink 
            to="/rezervacia" 
            class="vintage-button"
          >
            Rezervovať
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 text-vintage-brown hover:text-sepia-dark transition-colors"
        >
          <Icon :name="mobileMenuOpen ? 'mdi:close' : 'mdi:menu'" class="text-3xl" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div 
      v-if="mobileMenuOpen"
      class="md:hidden border-t-2 border-vintage-brown/30 bg-vintage-cream/98 backdrop-blur-md"
    >
      <div class="container mx-auto px-4 py-6 space-y-4">
        <NuxtLink 
          v-for="item in menuItems" 
          :key="item.path"
          :to="item.path"
          @click="mobileMenuOpen = false"
          class="block font-body text-lg text-vintage-brown hover:text-vintage-gold transition-colors duration-300 py-2 border-b border-vintage-tan"
        >
          {{ item.label }}
        </NuxtLink>
        <NuxtLink 
          to="/rezervacia"
          @click="mobileMenuOpen = false"
          class="block text-center vintage-button w-full"
        >
          Rezervovať
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
const mobileMenuOpen = ref(false)

const menuItems = [
  { label: 'Domov', path: '/' },
  { label: 'Cenník služieb', path: '/#sluzby' },
  { label: 'O nás', path: '/#o-nas' },
  { label: 'Recenzie', path: '/#recenzie' },
  { label: 'Kontakt', path: '/#kontakt' },
]
</script>
