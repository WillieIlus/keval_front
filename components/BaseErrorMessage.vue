<template>
  <div
    v-if="message"
    class="bg-yellow-orange-100 border border-yellow-orange-400 text-yellow-orange-700 px-4 py-3 rounded relative"
    role="alert"
  >
    <strong class="font-bold">Alert:</strong> 
    <span class="block sm:inline">{{ message }}</span>
    <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
      <svg
        @click="$emit('close')"
        class="fill-current h-6 w-6 text-yellow-orange-500"
        role="button"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <title>Close</title>
        <path
          d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15L6.306 6.053a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
        />
      </svg>
    </span>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

defineProps({
  message: {
    type: String,
    default: '',
  },
});

defineEmits(['close']);
</script>

<style