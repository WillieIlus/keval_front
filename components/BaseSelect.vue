<template>
  <div class="base-select">
    <BaseLabel
      v-if="props.label"
      :for="props.id"
      class="block text-sm font-body text-gray-700 dark:text-gray-300 mb-1"
    >
      {{ props.label }}
    </BaseLabel>
    <div class="relative">
      <select
        :id="props.id"
        :name="props.name || props.id"
        v-model="computedValue"
        :disabled="props.disabled"
        class="appearance-none w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm pl-3 pr-10 py-2 text-left focus:outline-none focus:ring-1 focus:ring-persian-green-500 focus:border-persian-green-500 sm:text-sm font-body text-gray-900 dark:text-gray-100"
        :class="{ 'opacity-75 cursor-not-allowed': props.disabled }"
      >
        <option v-if="props.placeholder" value="" disabled :selected="!props.modelValue">
          {{ props.placeholder }}
        </option>
        <option
          v-for="option in props.options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.text }}
        </option>
      </select>
      <div
        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-400"
      >
        <ChevronDownIcon class="h-5 w-5" aria-hidden="true" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import BaseLabel from './BaseLabel.vue'; // Assuming BaseLabel.vue exists in the same directory
import { ChevronDownIcon } from '@heroicons/vue/24/solid';

interface Option {
  value: string | number;
  text: string;
}

interface Props {
  id: string;
  options: Option[];
  modelValue: string | number | undefined; // Value of the selected option
  name?: string;
  label?: string; // Optional label text for the select
  placeholder?: string; // Placeholder text for the default option
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  name: undefined,
  label: undefined,
  placeholder: 'Select an option', // Default placeholder
  disabled: false,
  modelValue: undefined, // Default modelValue to undefined to show placeholder
});

const emit = defineEmits(['update:modelValue']);

const computedValue = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:modelValue', value);
  },
});
</script>