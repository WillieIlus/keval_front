<template>
  <div class="p-4 w-full">
    <div class="rounded-lg w-full overflow-hidden shadow-lg bg-white dark:bg-gray-800">
      <BaseHeading
        v-if="title"
        :title="title"
        :level="2"
        class="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700"
      />
      <div class="p-4 sm:p-6 text-gray-700 dark:text-gray-300">
        <slot name="body"></slot>
      </div>
      <div
        v-if="$slots.footer"
        class="p-4 sm:p-6 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300"
      >
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    title: {
      type: String,
      default: '',
    },
  });
</script>
