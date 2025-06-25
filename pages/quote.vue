<template>
  <section class="py-12 px-6 max-w-3xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">Request a Custom Quote</h1>
    <form @submit.prevent="submitForm" class="bg-white p-6 rounded-lg shadow space-y-4">
      <div>
        <label class="block font-medium mb-1">Your Name</label>
        <input v-model="form.name" type="text" class="w-full border p-2 rounded" required />
      </div>

      <div>
        <label class="block font-medium mb-1">Email</label>
        <input v-model="form.email" type="email" class="w-full border p-2 rounded" required />
      </div>

      <div>
        <label class="block font-medium mb-1">Product / Service</label>
        <input v-model="form.service" type="text" class="w-full border p-2 rounded" />
      </div>

      <div>
        <label class="block font-medium mb-1">Quantity</label>
        <input v-model="form.quantity" type="number" class="w-full border p-2 rounded" />
      </div>

      <div>
        <label class="block font-medium mb-1">Description</label>
        <textarea v-model="form.description" class="w-full border p-2 rounded" rows="4" />
      </div>

      <button type="submit" class="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
        Submit Quote Request
      </button>
    </form>

    <p v-if="submitted" class="text-green-600 mt-4">Thank you! We’ll get back to you shortly.</p>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  service: '',
  quantity: '',
  description: ''
})

const submitted = ref(false)

const submitForm = () => {
  // Example: send to API endpoint
  console.log('Quote submitted:', form.value)
  submitted.value = true
  form.value = { name: '', email: '', service: '', quantity: '', description: '' }
}

useHead({
  title: 'Get a Quote - Design & Print Services'
})
</script>
