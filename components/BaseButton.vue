<template>
  <button
    :type="type"
    :disabled="computedDisabled"
    :class="buttonClasses"
    v-bind="$attrs"
  >
    <template v-if="loading">
      <component :is="loadingIcon" class="animate-spin h-5 w-5" :class="{ 'mr-2': label || slots.default }" aria-hidden="true" />
      <span class="sr-only">Loading...</span>
    </template>
    <span v-if="label && !loading">{{ label }}</span>
    <span v-else-if="!loading"><slot /></span>
  </button>
</template>

<script setup lang="ts">
import { computed, inject, useSlots } from 'vue';

defineOptions({

  inheritAttrs: false
});

interface Props {
  label?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  variant?: 'primary' | 'secondary' | 'ghost' | 'transparent';
  loadingIcon?: any;
  rounded?: 'md' | 'full';
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
  variant: 'primary',
  rounded: 'md',
  loadingIcon: 'ArrowPathIcon'
});

const slots = useSlots();

const formDisabled = inject<boolean>('formDisabled', false);
const computedDisabled = computed(() => props.disabled || props.loading || formDisabled);

const buttonClasses = computed(() => {
  const base = [
    'inline-flex', 'items-center', 'justify-center',
    'font-medium', 'border',
    'focus:outline-none', 'focus:ring-2', 'focus:ring-offset-2',
    'transition-colors', 'duration-200',
    'disabled:opacity-50', 'disabled:cursor-not-allowed'
  ];

  const roundedClasses = {
    md: 'rounded-md',
    full: 'rounded-full',
  };

  const variantClasses = {
    primary: 'bg-persian-green-600 hover:bg-persian-green-700 border-transparent text-white focus:ring-persian-green-500 shadow-sm',
    secondary: 'bg-persian-green-100 hover:bg-persian-green-200 border-transparent text-persian-green-700 focus:ring-persian-green-500 shadow-sm',
    ghost: 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 border-transparent text-gray-600 dark:text-gray-300 focus:ring-persian-green-500',
    transparent: 'bg-transparent border-transparent shadow-none'
  };
  
  const hasContent = !!(props.label || slots.default);
  const sizeClasses = (props.rounded === 'full' && !hasContent) 
    ? 'p-2' 
    : 'px-4 py-2 text-sm';

  return [
    ...base,
    sizeClasses,
    roundedClasses[props.rounded],
    variantClasses[props.variant],
  ];
});

import { ArrowPathIcon } from '@heroicons/vue/24/solid';


</script>