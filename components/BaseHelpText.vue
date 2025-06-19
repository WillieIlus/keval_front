<template>
  <small v-if="props.helpText" class="form-text text-gray-600">{{ props.helpText }}</small>
</template>

<script setup lang="ts">
const props = defineProps<{
  helpText?: string;
}>();
</script>

<style scoped>
.form-text {
  display: block; /* Ensures it takes up its own line if desired */
  margin-top: 0.25rem; /* Adds a little space above the help text */
}
</style>