<template>
  <div class="flex items-center rounded-full bg-gray-100 w-full px-4
   mx-4 dark:bg-gray-700">
  <BaseInput
    v-model="searchQuery"
    placeholder="Search..."
    type="text"
    variant="transparent"
    class="flex-grow py-4"
  />
  <MagnifyingGlassIcon
    class="h-5 w-5 text-gray-500 dark:text-gray-400 mx-3 flex-shrink-0"
    aria-hidden="true"
  />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'

const searchQuery = ref('')
</script>
