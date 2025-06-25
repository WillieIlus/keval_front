<template>
  <div class="w-full">
    <textarea
      v-if="as === 'textarea'"
      v-bind="attrs"
      v-model="value"
      :id="id"
      :placeholder="placeholder"
      :disabled="computedDisabled"
      :readonly="readonly"
      :rows="rows"
      :class="[...inputClasses, 'resize-y']"
    ></textarea>
    <input
      v-else
      v-bind="attrs"
      v-model="value"
      :id="id"  :type="type"
      :placeholder="placeholder"
      :disabled="computedDisabled"
      :readonly="readonly"
      :class="inputClasses"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, useAttrs, inject } from 'vue';

defineOptions({
  inheritAttrs: false
})

interface Props {
  modelValue: string | number | boolean | object; // Required for v-model
  id: string; // STILL REQUIRED: Used by an external BaseLabel for accessibility
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  variant?: 'default' | 'transparent';
  as?: string; // Added to support rendering as textarea
  rows?: number; // Added for textarea
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  disabled: false,
  readonly: false,
  variant: 'default',
  as: 'input', // Default to input
  rows: 3, // Default rows for textarea
});

const emit = defineEmits(['update:modelValue']);
const attrs = useAttrs();

const value = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit('update:modelValue', val);
  },
});

// Inject the formDisabled state provided by BaseForm
const formDisabled = inject<boolean>('formDisabled', false);

// Combine component's own disabled prop with the form's disabled state
const computedDisabled = computed(() => props.disabled || formDisabled);

const inputClasses = computed(() => {
  const base = [
    'w-full', 'font-sans', 'text-sm',
    'disabled:cursor-not-allowed', 'read-only:cursor-default'
  ];

  if (props.variant === 'transparent') {
    return [
      ...base,
      'bg-transparent', 'focus:outline-none',
      'text-gray-700', 'placeholder-gray-500',
      'dark:text-gray-300', 'dark:placeholder-gray-400'
    ];
  }

  // default variant
  return [
    ...base,
    'px-3 py-2', 'border', 'rounded-md', 'shadow-sm',
    'text-gray-700', 'placeholder-gray-400',
    'focus:outline-none', 'focus:ring-2', 'focus:ring-persian-green-500', 'focus:border-persian-green-500',
    'disabled:bg-gray-100', 'read-only:bg-gray-50',
    'border-gray-300'
  ];
});
</script>