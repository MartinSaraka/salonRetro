<template>
  <section id="kontakt" class="py-20 relative bg-vintage-tan/30">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16 space-y-4">
        <div class="flex justify-center mb-4">
          <div class="w-24 h-0.5 bg-vintage-gold"></div>
          <Icon name="mdi:star" class="text-vintage-gold text-xl mx-2" />
          <div class="w-24 h-0.5 bg-vintage-gold"></div>
        </div>
        <h2 class="font-serif text-4xl md:text-6xl font-bold text-vintage-brown vintage-heading">
          Kontakt
        </h2>
        <p class="font-body text-lg text-sepia-light italic max-w-2xl mx-auto">
          Tešíme sa na vašu návštevu
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <!-- Contact Info -->
        <div class="space-y-8">
          <div 
            v-for="(info, index) in contactInfo" 
            :key="index"
            class="vintage-card flex items-start space-x-4"
          >
            <div class="w-14 h-14 rounded-full bg-vintage-brown flex items-center justify-center flex-shrink-0 border-2 border-vintage-gold shadow-vintage">
              <Icon :name="info.icon" class="text-2xl text-vintage-cream" />
            </div>
            <div class="flex-1">
              <h3 class="font-serif text-lg font-semibold text-vintage-brown mb-2">
                {{ info.title }}
              </h3>
              <p class="font-body text-vintage-brown/90">
                {{ info.value }}
              </p>
            </div>
          </div>

          <!-- Quote Box -->
          <div class="vintage-card border-l-4 border-vintage-gold">
            <p class="font-elegant text-xl italic text-vintage-brown leading-relaxed mb-4">
              "Dobrý holič vie, kedy hovoriť a kedy mlčať. Ale najdôležitejšie je, 
              aby vždy vedel, ako strihať."
            </p>
            <p class="font-body text-sm text-sepia-light text-right">
              - Ján, zakladateľ (1925)
            </p>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="vintage-card corner-decoration">
          <h3 class="font-serif text-2xl font-semibold text-vintage-brown mb-6 text-center">
            Napíšte nám
          </h3>
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div>
              <label class="font-body text-sm text-vintage-brown font-semibold mb-2 block">
                Meno
              </label>
              <input 
                v-model="form.name"
                type="text" 
                required
                class="vintage-input"
                placeholder="Vaše meno"
              />
            </div>
            <div>
              <label class="font-body text-sm text-vintage-brown font-semibold mb-2 block">
                Email
              </label>
              <input 
                v-model="form.email"
                type="email" 
                required
                class="vintage-input"
                placeholder="vas@email.sk"
              />
            </div>
            <div>
              <label class="font-body text-sm text-vintage-brown font-semibold mb-2 block">
                Telefón
              </label>
              <input 
                v-model="form.phone"
                type="tel" 
                class="vintage-input"
                placeholder="+421 XXX XXX XXX"
              />
            </div>
            <div>
              <label class="font-body text-sm text-vintage-brown font-semibold mb-2 block">
                Správa
              </label>
              <textarea 
                v-model="form.message"
                required
                rows="4"
                class="vintage-input resize-none"
                placeholder="Vaša správa..."
              ></textarea>
            </div>
            <button type="submit" class="vintage-button w-full">
              Odoslať správu
            </button>
          </form>
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
const form = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const contactInfo = [
  {
    icon: 'mdi:map-marker',
    title: 'Adresa',
    value: 'Staromestská 15, 811 03 Bratislava'
  },
  {
    icon: 'mdi:phone-classic',
    title: 'Telefón',
    value: '+421 2 5555 1234'
  },
  {
    icon: 'mdi:email-outline',
    title: 'Email',
    value: 'info@vintagebarbershop.sk'
  },
  {
    icon: 'mdi:clock-outline',
    title: 'Otváracie hodiny',
    value: 'Pondelok - Piatok: 8:00 - 18:00, Sobota: 8:00 - 14:00'
  }
]

const handleSubmit = () => {
  alert('Ďakujeme za správu! Ozveme sa vám čoskoro.')
  form.value = { name: '', email: '', phone: '', message: '' }
}
</script>
