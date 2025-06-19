<template>
  <form @submit.prevent="handleSubmit" :class="['base-form', { 'base-form--disabled': props.disabled }]">
    <slot/>
    </form>
    </template>

    <script setup lang="ts">
interface Props {
  disabled?: boolean;
}
    const props = withDefaults(defineProps<Props>(), {
      disabled: false,
    });
    
    const emit = defineEmits<{
      (e: 'submit'): void;
    }>();

    const handleSubmit = () => {
      if (!props.disabled) {
              emit('submit');
    }};
    </script>
    