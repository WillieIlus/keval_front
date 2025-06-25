<template>
  <div>
    <NuxtLayout :name="layoutName">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const isNavLoading = useNavLoading();
const route = useRoute();

const layoutName = computed(() => {
  if (isNavLoading.value) {
    return 'loading';
  }
  // When not loading, we let Nuxt handle the layout.
  // `route.meta.layout` will be the name of the layout file (e.g., 'auth')
  // or undefined, in which case NuxtLayout falls back to the 'default' layout.
  return route.meta.layout as string | undefined;
});

// Set a timeout to turn off the loading state after 5 seconds
let loadingTimeout: ReturnType<typeof setTimeout> | null = null;
const LOADING_TIMEOUT_MS = 5000;

onMounted(() => {
  loadingTimeout = setTimeout(() => {
    if (isNavLoading.value) {
      console.warn('App.vue: Navigation loading state timed out. Forcing loading state off.');
      isNavLoading.value = false;
    }
  }, LOADING_TIMEOUT_MS);
});

onUnmounted(() => {
  if (loadingTimeout) {
    clearTimeout(loadingTimeout);
  }
});
</script>
