<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
    <img
      v-if="props.imageUrl"
      :src="props.imageUrl"
      :alt="props.imageAlt"
      class="w-full h-48 object-cover"
    />
    <div class="p-6">
      <BaseHeading
        v-if="props.title"
        :level="props.titleLevel"
        :variant="props.titleVariant"
        :color="props.titleColor"
        class="mb-2"
      >
        {{ props.title }}
      </BaseHeading>

      <p v-if="props.description" class="text-gray-700 dark:text-gray-300 font-body text-base mb-4">
        {{ props.description }}
      </p>

      <!-- Slot for additional custom content inside the card body -->
      <slot name="content"></slot>

      <div v-if="props.ctaText || $slots.actions" class="mt-6">
        <!-- Slot for custom action buttons or links -->
        <slot name="actions">
          <a
            v-if="props.ctaText && props.ctaLink"
            :href="props.ctaLink"
            class="inline-block bg-persian-green-600 hover:bg-persian-green-700 text-white font-body font-semibold py-2 px-4 rounded transition duration-150 ease-in-out"
          >
            {{ props.ctaText }}
          </a>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseHeading from './BaseHeading.vue'; // Assumes BaseHeading.vue is in the same directory

interface Props {
  title?: string;
  titleLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  titleVariant?: 'display' | 'section' | 'subtitle' | 'paragraph';
  titleColor?: string; // e.g., 'text-persian-green-700'
  imageUrl?: string;
  imageAlt?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
}

const props = withDefaults(defineProps<Props>(), {
  titleLevel: 3, // Default to h3 for card titles
  titleVariant: 'section',
  imageAlt: 'Card image',
});
</script>