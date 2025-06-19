<template>
  <div class="relative" ref="multiselectRef">
    <BaseButton
      type="button"
      :id="props.id"
      :name="props.name"
      class="relative w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-persian-green-500 focus:border-persian-green-500 sm:text-sm font-body text-gray-900 dark:text-gray-100"
      aria-haspopup="listbox"
      :aria-expanded="isOpen"
      :aria-labelledby="`${props.id}-label`"
      :disabled="props.disabled"
      @click="toggleDropdown"
    >
      <span class="block truncate" :class="{ 'text-gray-500 dark:text-gray-400': selectedOptions.length === 0 }">
        {{ selectedOptionsText }}
      </span>
      <span
        class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
      >
        <ChevronUpDownIcon
          class="h-5 w-5 text-gray-400 dark:text-gray-500"
          aria-hidden="true"
        />
      </span>
    </BaseButton>

    <transition
      leave-active-class="transition ease-in duration-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <ul
        v-if="isOpen"
        class="absolute z-10 mt-1 w-full bg-white dark:bg-gray-700 shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm font-body"
        tabindex="-1"
        role="listbox"
        :aria-labelledby="`${props.id}-label`" >
        <li
          v-for="option in options"
          :key="option.value"
          @click="toggleOption(option)"
          class="text-gray-900 dark:text-gray-100 cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-persian-green-100 dark:hover:bg-persian-green-700"
          role="option"
          :aria-selected="isSelected(option)"
        >
          <span :class="[isSelected(option) ? 'font-semibold' : 'font-normal', 'block truncate']">
            {{ option.text }}
          </span>
          <span
            v-if="isSelected(option)"
            class="text-persian-green-600 dark:text-persian-green-400 absolute inset-y-0 right-0 flex items-center pr-4"
          >
            <CheckIcon class="h-5 w-5" aria-hidden="true" />
          </span>
        </li>
      </ul>
    </transition>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import BaseButton from './BaseButton.vue'; // Adjust path if BaseButton is located elsewhere
import { ChevronUpDownIcon, CheckIcon } from '@heroicons/vue/24/solid';

interface Option {
  value: string | number;
  text: string;
}

interface Props {
  id: string; // ID is crucial for BaseLabel association and aria-labelledby
  options: Option[];
  modelValue: (string | number)[]; // Array of selected values
  name?: string;
  placeholder?: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  name: undefined,
  placeholder: 'Select options',
  disabled: false,
});

const emit = defineEmits(['update:modelValue']);

const isOpen = ref(false);
const multiselectRef = ref<HTMLElement | null>(null);

const selectedOptions = computed({
  get: () => props.modelValue,
  set: (values) => {
    emit('update:modelValue', values);
  },
});

const isSelected = (option: Option): boolean => {
  return selectedOptions.value.includes(option.value);
};

const toggleDropdown = () => {
  if (props.disabled) {
    return;
  }
  isOpen.value = !isOpen.value;
};

const toggleOption = (option: Option) => {
  const newSelectedValues = [...selectedOptions.value];
  const index = newSelectedValues.indexOf(option.value);

  if (index > -1) {
    newSelectedValues.splice(index, 1); // Deselect
  } else {
    newSelectedValues.push(option.value); // Select
  }
  selectedOptions.value = newSelectedValues;
  // For multi-select, typically you keep the dropdown open
  // isOpen.value = false; // Only uncomment if you want it to close on each selection
};

const selectedOptionsText = computed(() => {
  if (selectedOptions.value.length === 0) {
    return props.placeholder;
  }
  return props.options
    .filter(opt => selectedOptions.value.includes(opt.value))
    .map(opt => opt.text)
    .join(', ');
});

// Close dropdown when clicking outside
const handleClickOutside = (event: MouseEvent) => {
  if (isOpen.value && multiselectRef.value && !multiselectRef.value.contains(event.target as Node)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});

</script>