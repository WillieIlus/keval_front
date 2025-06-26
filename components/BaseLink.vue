<template>
  <component :is="componentType" :[hrefAttr]="props.to" :class="linkClasses" v-bind="linkAttrs">
    <template v-if="props.icon && props.iconPosition === 'left'">
      <component :is="props.icon" :class="iconClasses" aria-hidden="true" class="mr-1 align-middle" />
    </template>
    <slot />
    <template v-if="props.icon && props.iconPosition === 'right'">
      <component :is="props.icon" :class="iconClasses" aria-hidden="true" />
    </template>
  </component>
</template>

<script setup lang="ts">
import { computed, resolveComponent, type FunctionalComponent, type HTMLAttributes, type VNodeProps } from 'vue';
import type { Component } from 'vue';

interface Props {
  to: string | object;
  external?: boolean;
  icon?: Component;
  iconPosition?: 'left' | 'right';
  variant?: 'default' | 'primary' | 'inverse';
  target?: '_self' | '_blank' | '_parent' | '_top';
  rel?: string;
}

const props = withDefaults(defineProps<Props>(), {
  external: false,
  iconPosition: 'left',
  variant: 'default',
});

const componentType = computed(() => {
  if (props.external) {
    return 'a';
  }
  return resolveComponent('NuxtLink');
});

const hrefAttr = computed(() => (props.external ? 'href' : 'to'));

const linkAttrs = computed(() => {
  const attrs: Record<string, any> = {};
  if (props.external) {
    attrs.target = props.target || '_blank';
    attrs.rel = props.rel || 'noopener noreferrer';
  } else if (props.target) {
    attrs.target = props.target;
  }
  return attrs;
});

const linkClasses = computed(() => {
  const base = [
    'inline-flex items-center gap-x-1.5 font-sans transition-colors duration-150 ease-in-out',
    'focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-persian-green-500 rounded',
    'hover:underline whitespace-nowrap',
  ];

  switch (props.variant) {
    case 'primary':
      base.push('text-persian-green-600 hover:text-persian-green-700 dark:text-persian-green-400 dark:hover:text-persian-green-300 font-medium');
      break;
    case 'inverse':
      base.push('text-gray-50 hover:text-persian-green-400');
      break;
    case 'default':
    default:
      base.push('text-gray-700 hover:text-persian-green-600 dark:text-gray-300 dark:hover:text-persian-green-400');
      break;
  }
  return base;
});

const iconClasses = computed(() => ['h-5 w-5']);
</script>