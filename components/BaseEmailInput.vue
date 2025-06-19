<template>
  <BaseInput v-bind="$attrs" :id="id" :modelValue="modelValue" @update:modelValue="emit('update:modelValue', $event)"
    type="email" :placeholder="placeholder || 'Enter your email'" :disabled="disabled" :readonly="readonly"
    :required="required" :autofocus="autofocus" />
</template>

<script setup lang="ts">
import BaseInput from './BaseInput.vue'; 

interface Props {
  modelValue: string;
  id: string; 
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  autofocus?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  placeholder: 'Email Address',
  disabled: false,
  readonly: false,
  required: false,
  autofocus: false,
});

const emit = defineEmits(['update:modelValue']);

</script>