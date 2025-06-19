<template>
  <div class="flex items-center rounded-full border bg-gray-100 w-full
  border-gray-300 dark:border-gray-600 mx-4 dark:bg-gray-700">
  <BaseInput
  v-model="searchQuery"
  placeholder="Search..."
  type="text"
  class="flex-grow bg-transparent px-4 py-2 text-gray-700 placeholder-gray-500 focus:outline-none dark:text-gray-300 dark:placeholder-gray-400"
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
