<template>
  <div class="flex min-h-screen flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
    <!-- Spinning Loader -->
    <div
      :class="spinnerColorClass"
      class="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status"
    >
      <span
        class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Loading...</span
      >
    </div>
    <p class="mt-4 text-lg font-semibold text-gray-800 dark:text-gray-200 text-center">
      Loading Application...
    </p>
    <p class="mt-1 text-gray-600 dark:text-gray-400 text-center">
      {{ currentSlogan }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';

const slogans = [
  "Building something awesome for you...",
  "Almost there, hang tight!",
  "Your experience is our priority...",
  "Just a few more moments!",
];

const spinnerColors = [
  "text-persian-green-500",
  "text-yellow-orange-500",
];

const currentSloganIndex = ref(0);
const currentColorIndex = ref(0);
let sloganInterval: ReturnType<typeof setInterval> | null = null;

const currentSlogan = computed(() => slogans[currentSloganIndex.value]);
const spinnerColorClass = computed(() => spinnerColors[currentColorIndex.value]);

onMounted(() => {
  sloganInterval = setInterval(() => {
    currentSloganIndex.value = (currentSloganIndex.value + 1) % slogans.length;
    currentColorIndex.value = (currentColorIndex.value + 1) % spinnerColors.length;
  }, 2000); // Change slogan every 2 seconds
});

onBeforeUnmount(() => {
  if (sloganInterval) {
    clearInterval(sloganInterval);
  }
});
</script>