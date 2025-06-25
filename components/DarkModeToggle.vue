<template>
  <ClientOnly>
    <BaseButton
      aria-label="Theme" 
      @click="togglePreference"
      variant="primary"
      rounded="full"
      size="icon"
      class="px-1 py-4"
    >
      <SunIcon v-if="colorMode.preference === 'light'" class="w-6 h-6 text-white " />
      <MoonIcon v-else-if="colorMode.preference === 'dark'" class="w-6 h-6 text-white " />
      <ComputerDesktopIcon v-else class="w-6 h-6 text-white" /> 
    </BaseButton>
    <template #fallback>
      <div class="w-8 h-8" />
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
// Current imports (24/solid) - these are already correct for solid icons
import { SunIcon } from '@heroicons/vue/24/solid'
import { MoonIcon } from '@heroicons/vue/24/solid'
import { ComputerDesktopIcon } from '@heroicons/vue/24/solid'

// If you wanted to use the 'outline' set, you would change the imports like this:
// import { SunIcon } from '@heroicons/vue/24/outline'
// import { MoonIcon } from '@heroicons/vue/24/outline'
// import { ComputerDesktopIcon } from '@heroicons/vue/24/outline'


const colorMode = useColorMode();


const togglePreference = () => {
  if (colorMode.preference === 'light') {
    colorMode.preference = 'dark';
  } else if (colorMode.preference === 'dark') {
    colorMode.preference = 'system';
  } else {
    colorMode.preference = 'light';
  }
}
</script>