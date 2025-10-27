<template>
  <div class="vintage-card corner-decoration">
    <h3 class="font-serif text-2xl font-semibold text-vintage-brown mb-6 text-center">
      Vaše údaje
    </h3>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <!-- Service Selection -->
      <div>
        <label class="font-body text-sm text-vintage-brown font-semibold mb-2 block">
          Služba
        </label>
        <select 
          v-model="form.service"
          required
          class="vintage-input"
        >
          <option value="">Vyberte službu</option>
          <option v-for="service in services" :key="service" :value="service">
            {{ service }}
          </option>
        </select>
      </div>

      <!-- Name -->
      <div>
        <label class="font-body text-sm text-vintage-brown font-semibold mb-2 block">
          Meno a priezvisko
        </label>
        <input 
          v-model="form.name"
          type="text" 
          required
          class="vintage-input"
          placeholder="Vaše celé meno"
        />
      </div>

      <!-- Email -->
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

      <!-- Phone -->
      <div>
        <label class="font-body text-sm text-vintage-brown font-semibold mb-2 block">
          Telefón
        </label>
        <input 
          v-model="form.phone"
          type="tel" 
          required
          class="vintage-input"
          placeholder="+421 XXX XXX XXX"
        />
      </div>

      <!-- Notes -->
      <div>
        <label class="font-body text-sm text-vintage-brown font-semibold mb-2 block">
          Poznámka (nepovinné)
        </label>
        <textarea 
          v-model="form.notes"
          rows="3"
          class="vintage-input resize-none"
          placeholder="Máte nejaké špeciálne požiadavky?"
        ></textarea>
      </div>

      <!-- Submit Button -->
      <button 
        type="submit" 
        :disabled="!isFormValid"
        class="vintage-button w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Pokračovať
      </button>
    </form>
  </div>
</template>

<script setup>
const emit = defineEmits(['submit'])

const form = ref({
  service: '',
  name: '',
  email: '',
  phone: '',
  notes: ''
})

const services = [
  'Klasický strih',
  'Holenie britvou',
  'Strih + fúzy',
  'Úprava brady',
  'Detský strih',
  'Styling vlasov'
]

const isFormValid = computed(() => {
  return form.value.service && 
         form.value.name && 
         form.value.email && 
         form.value.phone
})

const handleSubmit = () => {
  if (isFormValid.value) {
    emit('submit', { ...form.value })
  }
}

const reset = () => {
  form.value = {
    service: '',
    name: '',
    email: '',
    phone: '',
    notes: ''
  }
}

defineExpose({ reset })
</script>
