<template>
  <div>
    <Navigation />
    
    <main class="min-h-screen pt-32 pb-20">
      <div class="container mx-auto px-4">
        <!-- Header -->
        <div class="text-center mb-12 space-y-4">
          <div class="flex justify-center mb-4">
            <div class="w-24 h-0.5 bg-vintage-gold"></div>
            <Icon name="mdi:star" class="text-vintage-gold text-xl mx-2" />
            <div class="w-24 h-0.5 bg-vintage-gold"></div>
          </div>
          <h1 class="font-serif text-4xl md:text-6xl font-bold text-vintage-brown vintage-heading">
            Rezervácia
          </h1>
          <p class="font-body text-lg text-sepia-light italic max-w-2xl mx-auto">
            Objednajte sa na váš termín
          </p>
        </div>

        <!-- Progress Steps -->
        <div class="max-w-4xl mx-auto mb-12">
          <div class="flex items-center justify-center space-x-4">
            <div 
              v-for="(step, index) in steps" 
              :key="index"
              class="flex items-center"
            >
              <div 
                :class="[
                  'w-12 h-12 rounded-full flex items-center justify-center font-serif font-bold border-2 transition-all duration-300',
                  currentStep >= index + 1 
                    ? 'bg-vintage-brown border-vintage-gold text-vintage-cream shadow-vintage' 
                    : 'bg-vintage-cream border-vintage-brown/30 text-sepia-light'
                ]"
              >
                {{ index + 1 }}
              </div>
              <div 
                v-if="index < steps.length - 1"
                :class="[
                  'w-16 md:w-24 h-1 mx-2 transition-all duration-300',
                  currentStep > index + 1 ? 'bg-vintage-gold' : 'bg-vintage-brown/30'
                ]"
              ></div>
            </div>
          </div>
          <div class="flex items-center justify-center space-x-4 mt-4">
            <div 
              v-for="(step, index) in steps" 
              :key="index"
              class="flex items-center"
            >
              <div 
                :class="[
                  'font-body text-xs uppercase tracking-wider w-24 md:w-32 text-center',
                  currentStep >= index + 1 ? 'text-vintage-brown font-semibold' : 'text-sepia-light'
                ]"
              >
                {{ step }}
              </div>
              <div v-if="index < steps.length - 1" class="w-16 md:w-24"></div>
            </div>
          </div>
        </div>

        <!-- Booking Steps -->
        <div class="max-w-4xl mx-auto">
          <!-- Step 1: Calendar -->
          <div v-show="currentStep === 1">
            <BookingCalendar @date-selected="handleDateSelected" />
          </div>

          <!-- Step 2: Form -->
          <div v-show="currentStep === 2">
            <BookingForm ref="bookingForm" @submit="handleFormSubmit" />
            <div class="flex gap-4 mt-6">
              <button 
                @click="currentStep = 1"
                class="flex-1 px-8 py-3 font-serif font-semibold text-lg border-2 border-vintage-brown text-vintage-brown bg-transparent hover:bg-vintage-tan transition-all duration-300"
              >
                ← Späť
              </button>
            </div>
          </div>

          <!-- Step 3: Final summary only -->
          <div v-show="currentStep === 3">
            <BookingSummary :booking-data="bookingData" />
            <div class="flex flex-col sm:flex-row gap-4 mt-6">
              <button 
                @click="currentStep = 2"
                class="flex-1 px-8 py-3 font-serif font-semibold text-lg border-2 border-vintage-brown text-vintage-brown bg-transparent hover:bg-vintage-tan transition-all duration-300"
              >
                ← Späť
              </button>
              <button 
                @click="confirmBooking"
                class="flex-1 vintage-button"
              >
                Potvrdiť rezerváciu
              </button>
            </div>
          </div>
        </div>

        <!-- Success Modal -->
        <div 
          v-if="showSuccess"
          class="fixed inset-0 bg-sepia-dark/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          @click="showSuccess = false"
        >
          <div 
            class="vintage-card corner-decoration max-w-md w-full text-center space-y-6 animate-slide-up"
            @click.stop
          >
            <div class="w-24 h-24 mx-auto rounded-full bg-vintage-brown border-4 border-vintage-gold flex items-center justify-center shadow-vintage">
              <Icon name="mdi:check-circle" class="text-6xl text-vintage-cream" />
            </div>
            <h3 class="font-serif text-3xl font-bold text-vintage-brown">
              Rezervácia potvrdená!
            </h3>
            <p class="font-body text-lg text-vintage-brown/90">
              Vaša rezervácia bola úspešne odoslaná. Na email vám príde potvrdenie.
            </p>
            <p class="font-body text-sm text-sepia-light italic">
              Tešíme sa na vašu návštevu v našom tradičnom salóne.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <button 
                @click="showSuccess = false; resetBooking()"
                class="flex-1 px-6 py-3 font-serif border-2 border-vintage-brown text-vintage-brown hover:bg-vintage-tan transition-all duration-300"
              >
                Nová rezervácia
              </button>
              <NuxtLink 
                to="/"
                class="flex-1 px-6 py-3 font-serif text-center vintage-button"
              >
                Späť domov
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
useHead({
  title: 'Rezervácia - Vintage Barbershop',
  meta: [
    { name: 'description', content: 'Rezervujte si termín v našom tradičnom kaderníctve. Online rezervácie dostupné 24/7.' }
  ]
})

const currentStep = ref(1)
const showSuccess = ref(false)
const bookingForm = ref(null)

const steps = ['Termín', 'Údaje', 'Potvrdenie']

const bookingData = ref({
  date: null,
  time: null,
  service: '',
  name: '',
  email: '',
  phone: '',
  notes: ''
})

const handleDateSelected = (dateTime) => {
  bookingData.value.date = dateTime.date
  bookingData.value.time = dateTime.time
  if (dateTime.date && dateTime.time) {
    currentStep.value = 2
  }
}

const handleFormSubmit = (formData) => {
  bookingData.value = {
    ...bookingData.value,
    ...formData
  }
  currentStep.value = 3
}

const confirmBooking = () => {
  console.log('Booking confirmed:', bookingData.value)
  showSuccess.value = true
}

const resetBooking = () => {
  currentStep.value = 1
  bookingData.value = {
    date: null,
    time: null,
    service: '',
    name: '',
    email: '',
    phone: '',
    notes: ''
  }
  if (bookingForm.value) {
    bookingForm.value.reset()
  }
}
</script>
