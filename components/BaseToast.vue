<template>
  <div
    v-if="show"
    class="fixed bottom-4 right-4 p-4 rounded-md shadow-lg text-white flex items-center"
    :class="toastClass"
  >
    <!-- Success Icon -->
    <svg
      v-if="type === 'success'"
      class="w-5 h-5 mr-3 flex-shrink-0"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
    </svg>
    <!-- Error Icon -->
    <svg
      v-if="type === 'error'"
      class="w-5 h-5 mr-3 flex-shrink-0"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
    </svg>
    <span class="font-body text-sm">{{ message }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

type ToastType = 'info' | 'success' | 'error';

const show = ref<boolean>(false)
const message = ref<string>('')
const type = ref<ToastType>('info')

const toastClass = computed(() => {
  switch (type.value) {
    case 'success':
      return 'bg-green-500'
    case 'error':
      return 'bg-red-500'
    case 'success':
      return 'bg-persian-green-500' // Using your theme color
    case 'error':
      return 'bg-red-500' // Standard red for errors
    case 'info': // Default info
    default: // Fallback
      return 'bg-blue-500' // Standard blue for info
  }
})

const showToast = (msg: string, toastType: ToastType = 'info', duration: number = 3000) => {
  message.value = msg
  type.value = toastType
  show.value = true

  setTimeout(() => {
    show.value = false
  }, duration)
}

defineExpose({
  showToast
})
</script>
