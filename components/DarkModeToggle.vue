<template>
  <ClientOnly>
    <BaseButton
      aria-label="Theme"
      @click="togglePreference"
    >
      <SunIcon v-if="colorMode.preference === 'light'" />
      <MoonIcon v-else-if="colorMode.preference === 'dark'" />
      <ComputerDesktopIcon v-else /> 
    </BaseButton>
    <template #fallback>
      <div class="w-8 h-8" />
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
import { SunIcon } from '@heroicons/vue/24/solid'
import { MoonIcon } from '@heroicons/vue/24/solid'
import { ComputerDesktopIcon } from '@heroicons/vue/24/solid'



const colorMode = useColorMode();


const togglePreference = () => {
  if (colorMode.preference === 'light') {
    colorMode.preference = 'dark';
  } else if (colorMode.preference === 'dark') {
    colorMode.preference = 'system';
  } else { // Covers 'system' or any other state, cycles to 'light'
    colorMode.preference = 'light';
  }
}
</script>