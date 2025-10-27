<template>
  <footer class="relative border-t-4 border-vintage-brown bg-sepia-dark text-vintage-cream py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <!-- Brand -->
        <div class="space-y-4">
          <div class="flex items-center space-x-3">
            <div class="w-12 h-12 rounded-full bg-vintage-gold flex items-center justify-center border-2 border-vintage-cream shadow-vintage">
              <Icon name="mdi:content-cut" class="text-2xl text-vintage-brown" />
            </div>
            <div class="flex flex-col">
              <span class="font-serif text-xl font-bold text-vintage-cream">VINTAGE</span>
              <span class="font-elegant text-xs uppercase tracking-widest text-vintage-tan -mt-1">Barbershop</span>
            </div>
          </div>
          <p class="font-body text-sm text-vintage-tan/80">
            Tradičné kaderníctvo s dušou minulosti. Od roku 1925.
          </p>
          <p class="font-body text-xs text-vintage-tan/60 mt-3 italic">
            Ide o fiktívny salon pre demonstráciu možnosti webu na mieru pre kaderníctvo/barber shop od firmy 
            <a href="https://www.appinara.sk" target="_blank" rel="noopener noreferrer" class="text-vintage-gold hover:text-vintage-cream underline transition-colors duration-300">Appinara</a>.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="font-serif text-lg font-semibold text-vintage-gold mb-4">Rýchle odkazy</h3>
          <ul class="space-y-2 font-body text-sm">
            <li>
              <NuxtLink to="/" class="text-vintage-tan hover:text-vintage-gold transition-colors">
                Domov
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#sluzby" class="text-vintage-tan hover:text-vintage-gold transition-colors">
                Cenník služieb
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#o-nas" class="text-vintage-tan hover:text-vintage-gold transition-colors">
                O nás
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#recenzie" class="text-vintage-tan hover:text-vintage-gold transition-colors">
                Recenzie
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/rezervacia" class="text-vintage-tan hover:text-vintage-gold transition-colors">
                Rezervácia
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Legal -->
        <div>
          <h3 class="font-serif text-lg font-semibold text-vintage-gold mb-4">Právne informácie</h3>
          <ul class="space-y-2 font-body text-sm">
            <li>
              <NuxtLink to="/obchodne-podmienky" class="text-vintage-tan hover:text-vintage-gold transition-colors">
                Obchodné podmienky
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/ochrana-udajov" class="text-vintage-tan hover:text-vintage-gold transition-colors">
                Ochrana osobných údajov
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom -->
      <div class="border-t-2 border-vintage-gold/30 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="font-body text-sm text-vintage-tan/70">
            © {{ currentYear }} Vintage Barbershop. Všetky práva vyhradené.
          </p>
          <div class="flex items-center space-x-2">
            <Icon name="mdi:heart" class="text-vintage-gold text-sm" />
            <p class="font-elegant text-sm text-vintage-tan/70 italic">
              Vyrobené s úctou k tradícii
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>
