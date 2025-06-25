<template>
  <form @submit.prevent="$emit('submit')" class="bg-white p-6 rounded-lg shadow space-y-4">
    <BaseForm label="Your Name" type="text" v-model="form.name" :required="true" />
    <BaseForm label="Email" type="email" v-model="form.email" :required="true" />
    <BaseForm label="Product / Service" type="text" v-model="form.service" />
    <BaseForm label="Quantity" type="number" v-model="form.quantity" />
    <BaseForm label="Description" type="textarea" v-model="form.description" :rows="4" />

    <BaseButton type="submit" class="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
      Submit Quote Request
    </BaseButton>
  </form>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

defineProps({
  form: {
    type: Object,
    required: true
  }
});

defineEmits(['submit']);
</script>