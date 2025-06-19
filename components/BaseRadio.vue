<template>
  <div class="flex items-center">
    <input
      :id="id"
      :name="name"
      :value="value"
      :checked="isChecked"
      type="radio"
      class="h-4 w-4 border-gray-300 dark:border-gray-600 text-persian-green-600 focus:ring-persian-green-500 dark:bg-gray-700 dark:focus:ring-persian-green-600 dark:focus:ring-offset-gray-800"
      @change="$emit('update:modelValue', value)"
    />
    <label :for="id" class="ml-3 block text-sm font-body text-gray-700 dark:text-gray-300">
      {{ label }}
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

// Define props with TypeScript for better type safety, aligning with your other components
interface Props {
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  value: {
    type: [String, Number, Boolean],
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  modelValue: {
    type: [String, Number, Boolean],
    default: null,
  }
}

const props = defineProps<Props>();

const isChecked = computed(() => props.modelValue === props.value);

defineEmits(['update:modelValue']);
</script>
