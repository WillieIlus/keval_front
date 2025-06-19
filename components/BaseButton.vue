<template>
  <button
    class="px-4 py-2 rounded-md text-white font-medium transition-colors duration-300
           bg-persian-green-600 hover:bg-persian-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
    :disabled="props.disabled || props.loading"
  >
    <span v-if="props.loading" class="flex items-center gap-2">
      <svg class="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
           viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10"
                stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
      </svg>
      Loading...
    </span>
    <span v-else>
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  disabled?: boolean;
  loading?: boolean;
}>(), {
  disabled: false,
  loading: false,
});
</script>
