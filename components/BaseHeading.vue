<template>
  <component :is="tag" :class="titleClasses">
    <!-- Basic icon handling, assumes you might use an icon font or pass SVG directly -->
    <span v-if="props.icon" class="mr-2" v-html="props.icon"></span>
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  level: 1 | 2 | 3 | 4 | 5 | 6; // Enforces h1-h6 semantic tags
  variant?: 'display' | 'section' | 'subtitle' | 'paragraph'; // Semantic variants for styling
  icon?: string; // Optional icon (e.g., SVG string or icon class name)
  align?: 'left' | 'center' | 'right';
  color?: string; // Optional custom text color class e.g., 'text-persian-green-600'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'section', 
  align: 'left',      
});

const tag = computed(() => `h${props.level}`);

const titleClasses = computed(() => {
  const classes = ['font-heading']; // Default to heading font

  
  switch (props.variant) {
    case 'display':
      classes.push('text-4xl md:text-5xl font-bold text-gray-800');
      break;
    case 'section':
      classes.push('text-2xl md:text-3xl font-semibold text-gray-800');
      break;
    case 'subtitle':
      classes.push('text-xl font-medium text-gray-700 font-sans'); // Subtitles might use body font
      break;
    case 'paragraph': // If a title needs to look like a paragraph
      classes.push('text-base font-normal text-gray-600 font-sans');
      break;
    default: // Default to section styling if variant is unknown
      classes.push('text-2xl md:text-3xl font-semibold text-gray-800');
  }

  // Alignment
  if (props.align === 'center') {
    classes.push('text-center');
  } else if (props.align === 'right') {
    classes.push('text-right');
  } else {
    classes.push('text-left');
  }

  // Custom color override
  if (props.color) {
    classes.push(props.color);
  }

  return classes.join(' ');
});
</script>
