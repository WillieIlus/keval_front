<template>
  <div>
    <NuxtLayout :name="isNavLoading ? 'loading' : 'default'">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const isNavLoading = useNavLoading();

// Set a timeout to turn off the loading state after 30 seconds
let loadingTimeout: ReturnType<typeof setTimeout> | null = null;
const LOADING_TIMEOUT_MS = 10000; // 30 seconds

onMounted(() => {
  loadingTimeout = setTimeout(() => {
    if (isNavLoading.value) {
      console.warn('App.vue: Navigation loading state timed out. Forcing loading state off.');
      isNavLoading.value = false;
    }
  }, LOADING_TIMEOUT_MS);
});
</script>
