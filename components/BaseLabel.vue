<template>
  <label v-if="props.label" :for="props.id" class="block text-sm font-medium text-gray-700 mb-1">
    {{ props.label }}
  </label>
</template>

<script setup lang="ts">
const props = defineProps<{
  id: string;      // Corresponds to the input field's id for accessibility
  label?: string;  // The text content of the label
}>();
</script>