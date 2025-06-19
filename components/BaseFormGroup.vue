<template>
  <div class="form-group">
    <BaseLabel :id="props.id" :label="props.label" />
    <slot></slot>
    <BaseHelpText :help-text="props.helpText" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  id: string;
  label?: string;
  helpText?: string;
}>();
</script>

<style scoped>
.form-group {
  margin-bottom: 1rem;
}
</style>
