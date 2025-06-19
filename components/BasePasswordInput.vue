<template>
  <div class="relative w-full">
    <BaseInput
      v-bind="$attrs"
      :id="props.id"
      :modelValue="props.modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
      :error="props.error ? 'true' : undefined"
      :readonly="props.readonly ? 'true' : undefined"
      :type="showPassword ? 'text' : 'password'"
    />
    <button
      v-if="!props.disabled && !props.readonly"
      type="button"
      @click="togglePasswordVisibility"
      class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5
             text-gray-500 hover:text-persian-green-500 focus:outline-none focus:text-persian-green-600 z-10"
      :aria-label="showPassword ? 'Hide password' : 'Show password'"
    >
      <EyeIcon v-if="showPassword" class="w-5 h-5" />
      <EyeSlashIcon v-else class="w-5 h-5" />
    </button>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { EyeIcon, EyeSlashIcon } from '@heroicons/vue/24/solid';

interface Props{
  modelValue: string;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  readonly?: boolean;
  id?: string;
}

const props = withDefaults(defineProps<Props>(),{
  modelValue: '',
  placeholder: 'Enter your password',
  disabled: false,
  error: false,
  readonly: false,
  id: 'password' // Default ID, ideally overridden by parent
})

const emit = defineEmits(['update:modelValue'])

const showPassword = ref(false);

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
}


</script>
