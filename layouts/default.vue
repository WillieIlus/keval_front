<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
const authStore = useAuthStore();
</script>

<template>
  <div class="sticky top-0 z-50">
    <TopNav />
    <MainNav />
  </div>
  <slot />
  <BaseFooter/>
</template>