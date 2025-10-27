<template>
  <div class="vintage-card corner-decoration">
    <h3 class="font-serif text-2xl font-semibold text-vintage-brown mb-6 text-center">
      Vyberte termín
    </h3>

    <!-- Loading skeleton -->
    <div v-if="isLoading" class="space-y-4">
      <div class="flex items-center justify-between mb-6">
        <div class="w-8 h-8 bg-vintage-tan/30 animate-pulse rounded"></div>
        <div class="w-32 h-6 bg-vintage-tan/30 animate-pulse rounded"></div>
        <div class="w-8 h-8 bg-vintage-tan/30 animate-pulse rounded"></div>
      </div>
      <div class="grid grid-cols-7 gap-2">
        <div v-for="i in 35" :key="i" class="aspect-square bg-vintage-tan/20 animate-pulse rounded"></div>
      </div>
    </div>

    <!-- Actual calendar content -->
    <div v-else>

      <!-- Month Navigation -->
      <div class="flex items-center justify-between mb-6 border-b-2 border-vintage-gold/30 pb-4">
      <button 
        @click="previousMonth"
        class="p-2 text-vintage-brown hover:text-vintage-gold transition-colors"
      >
        <Icon name="mdi:chevron-left" class="text-3xl" />
      </button>
      <div class="font-serif text-xl font-semibold text-vintage-brown">
        {{ monthName }} {{ currentYear }}
      </div>
      <button 
        @click="nextMonth"
        class="p-2 text-vintage-brown hover:text-vintage-gold transition-colors"
      >
        <Icon name="mdi:chevron-right" class="text-3xl" />
      </button>
    </div>

    <!-- Days of week -->
    <div class="grid grid-cols-7 gap-2 mb-4">
      <div 
        v-for="day in daysOfWeek" 
        :key="day"
        class="font-serif text-xs text-vintage-brown font-semibold text-center py-2"
      >
        {{ day }}
      </div>
    </div>

    <!-- Calendar days -->
    <div class="grid grid-cols-7 gap-2">
      <button
        v-for="day in calendarDays"
        :key="day.date"
        @click="selectDate(day)"
        :disabled="!day.available"
        :class="[
          'aspect-square font-body text-sm transition-all duration-300',
          day.available 
            ? 'bg-vintage-cream hover:bg-vintage-tan text-vintage-brown border-2 border-vintage-brown/30 hover:border-vintage-gold' 
            : 'bg-vintage-tan/30 text-sepia-light/30 cursor-not-allowed border-2 border-transparent',
          selectedDate === day.date && 'bg-vintage-brown text-vintage-cream border-2 border-vintage-gold shadow-vintage'
        ]"
      >
        {{ day.day }}
      </button>
    </div>

    <!-- Time slots -->
    <div v-if="selectedDate" class="mt-8 pt-6 border-t-2 border-vintage-gold/30">
      <h4 class="font-serif text-lg font-semibold text-vintage-brown mb-4 text-center">
        Dostupné časy
      </h4>
      <div class="grid grid-cols-3 md:grid-cols-4 gap-3">
        <button
          v-for="time in availableTimes"
          :key="time"
          @click="selectTime(time)"
          :class="[
            'font-body text-sm py-3 border-2 transition-all duration-300',
            selectedTime === time
              ? 'bg-vintage-brown border-vintage-gold text-vintage-cream shadow-vintage'
              : 'bg-vintage-cream border-vintage-brown/30 text-vintage-brown hover:border-vintage-gold hover:bg-vintage-tan'
          ]"
        >
          {{ time }}
        </button>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['dateSelected'])

const isLoading = ref(true)
const currentMonth = ref(new Date().getMonth())
const currentYear = ref(new Date().getFullYear())
const selectedDate = ref(null)
const selectedTime = ref(null)

// Simulate loading
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 800)
})

const daysOfWeek = ['Po', 'Ut', 'St', 'Št', 'Pi', 'So', 'Ne']

const monthNames = [
  'Január', 'Február', 'Marec', 'Apríl', 'Máj', 'Jún',
  'Júl', 'August', 'September', 'Október', 'November', 'December'
]

const availableTimes = [
  '8:00', '9:00', '10:00', '11:00', 
  '12:00', '13:00', '14:00', '15:00', 
  '16:00', '17:00'
]

const monthName = computed(() => monthNames[currentMonth.value])

const calendarDays = computed(() => {
  const days = []
  const firstDay = new Date(currentYear.value, currentMonth.value, 1)
  const lastDay = new Date(currentYear.value, currentMonth.value + 1, 0)
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const firstDayOfWeek = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1
  for (let i = 0; i < firstDayOfWeek; i++) {
    days.push({ day: '', available: false })
  }

  for (let day = 1; day <= lastDay.getDate(); day++) {
    const date = new Date(currentYear.value, currentMonth.value, day)
    const dateString = date.toISOString().split('T')[0]
    const dayOfWeek = date.getDay()
    
    days.push({
      day,
      date: dateString,
      available: date >= today && dayOfWeek !== 0
    })
  }

  return days
})

const previousMonth = () => {
  if (currentMonth.value === 0) {
    currentMonth.value = 11
    currentYear.value--
  } else {
    currentMonth.value--
  }
  selectedDate.value = null
  selectedTime.value = null
}

const nextMonth = () => {
  if (currentMonth.value === 11) {
    currentMonth.value = 0
    currentYear.value++
  } else {
    currentMonth.value++
  }
  selectedDate.value = null
  selectedTime.value = null
}

const selectDate = (day) => {
  if (!day.available) return
  selectedDate.value = day.date
  selectedTime.value = null
}

const selectTime = (time) => {
  selectedTime.value = time
  emit('dateSelected', {
    date: selectedDate.value,
    time: selectedTime.value
  })
}
</script>
