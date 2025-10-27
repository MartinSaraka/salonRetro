<template>
  <div class="vintage-card corner-decoration">
    <h3 class="font-serif text-2xl font-semibold text-vintage-brown mb-6 text-center">
      Zhrnutie rezervácie
    </h3>

    <div class="space-y-4">
      <!-- Service -->
      <div class="flex items-start space-x-3 pb-4 border-b border-vintage-gold/30">
        <Icon name="mdi:scissors-cutting" class="text-2xl text-vintage-brown mt-1" />
        <div>
          <div class="font-body text-xs text-sepia-light uppercase tracking-wider">
            Služba
          </div>
          <div class="font-serif text-lg font-semibold text-vintage-brown">
            {{ bookingData.service || '-' }}
          </div>
        </div>
      </div>

      <!-- Date & Time -->
      <div class="flex items-start space-x-3 pb-4 border-b border-vintage-gold/30">
        <Icon name="mdi:calendar-clock" class="text-2xl text-vintage-brown mt-1" />
        <div>
          <div class="font-body text-xs text-sepia-light uppercase tracking-wider">
            Dátum a čas
          </div>
          <div class="font-serif text-lg font-semibold text-vintage-brown">
            {{ formattedDate || '-' }}
          </div>
          <div class="font-body text-sm text-vintage-gold font-semibold">
            {{ bookingData.time || '-' }}
          </div>
        </div>
      </div>

      <!-- Name -->
      <div class="flex items-start space-x-3 pb-4 border-b border-vintage-gold/30">
        <Icon name="mdi:account" class="text-2xl text-vintage-brown mt-1" />
        <div>
          <div class="font-body text-xs text-sepia-light uppercase tracking-wider">
            Meno
          </div>
          <div class="font-serif text-lg font-semibold text-vintage-brown">
            {{ bookingData.name || '-' }}
          </div>
        </div>
      </div>

      <!-- Contact -->
      <div class="flex items-start space-x-3 pb-4 border-b border-vintage-gold/30">
        <Icon name="mdi:phone-message" class="text-2xl text-vintage-brown mt-1" />
        <div class="w-full">
          <div class="font-body text-xs text-sepia-light uppercase tracking-wider">
            Kontakt
          </div>
          <div class="font-body text-sm text-vintage-brown break-all">
            {{ bookingData.email || '-' }}
          </div>
          <div class="font-body text-sm text-vintage-brown">
            {{ bookingData.phone || '-' }}
          </div>
        </div>
      </div>

      <!-- Notes -->
      <div v-if="bookingData.notes" class="flex items-start space-x-3">
        <Icon name="mdi:note-text" class="text-2xl text-vintage-brown mt-1" />
        <div>
          <div class="font-body text-xs text-sepia-light uppercase tracking-wider">
            Poznámka
          </div>
          <div class="font-body text-sm text-vintage-brown/80 italic">
            {{ bookingData.notes }}
          </div>
        </div>
      </div>
    </div>

    <!-- Info Box -->
    <div class="mt-6 p-4 bg-vintage-tan/30 border-l-4 border-vintage-gold">
      <div class="flex items-start space-x-3">
        <Icon name="mdi:information" class="text-xl text-vintage-brown mt-1 flex-shrink-0" />
        <p class="font-body text-xs text-vintage-brown/80 leading-relaxed italic">
          Po odoslaní rezervácie vám príde potvrdzujúci email. Ak potrebujete zmeniť alebo zrušiť termín, 
          kontaktujte nás aspoň 24 hodín vopred.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  bookingData: {
    type: Object,
    required: true
  }
})

const formattedDate = computed(() => {
  if (!props.bookingData.date) return ''
  const date = new Date(props.bookingData.date)
  return date.toLocaleDateString('sk-SK', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
})
</script>
