<template>
  <!-- Loading State -->
  <div v-if="isLoading">
    <header
      class="bg-persian-green-600 dark:bg-persian-green-800 flex justify-center items-center text-white dark:text-gray-100 p-4 shadow-md"
    >
      <div class="container mx-auto flex justify-center items-center">
        <p class="text-white font-bold">Loading Navigation...</p>
      </div>
    </header>
    <!-- Gray bar is implicitly hidden during loading as it's in the v-else -->
  </div>

  <!-- Loaded State -->
  <template v-else>
    <header
      class="bg-persian-green-600 dark:bg-persian-green-800 text-white dark:text-gray-100 p-4 shadow-md"
    >
      <div class="container mx-auto flex justify-between md:justify-center items-center">
        <!-- Optional: Mobile Title / Placeholder for Logo (if you add one later) -->
        <div class="md:hidden">
          <!-- Example: <span class="text-lg font-semibold">Menu</span> -->
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex">
          <ul class="flex space-x-4 items-center">
            <BaseLink
              class="px-3 py-2 text-sm font-medium text-white dark:text-gray-100 hover:bg-persian-green-700 dark:hover:bg-persian-green-600 rounded-md"
              v-for="item in navitems"
              :key="item.path + '-desktop'"
              :to="item.path"
            >
              {{ item.text }}
            </BaseLink>
          </ul>
        </nav>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            type="button"
            class="p-1.5 rounded-md text-persian-green-100 dark:text-persian-green-200 hover:bg-persian-green-700 dark:hover:bg-persian-green-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-main-menu"
            :aria-expanded="isMobileMenuOpen.toString()"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!isMobileMenuOpen" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 -translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <div v-if="isMobileMenuOpen" class="md:hidden bg-persian-green-500 dark:bg-persian-green-700" id="mobile-main-menu">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <BaseLink
            v-for="item in navitems"
            :key="item.path + '-mobile'"
            :to="item.path"
            @click="closeMobileMenu"
            class="block px-3 py-2 rounded-md text-base font-medium text-white dark:text-gray-100 hover:bg-persian-green-700 dark:hover:bg-persian-green-600 hover:text-white dark:hover:text-gray-50"
          >
            {{ item.text }}
          </BaseLink>
        </div>
      </div>
    </Transition>

    <!-- Gray Bar: Hidden on mobile, shown on md and up. Responsive margin. -->
    <div class="hidden md:block bg-gray-500 dark:bg-gray-700 p-1 mb-8 md:mb-12"></div>
  </template>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useAuthStore } from "@/stores/auth";
import BaseLink from "@/components/BaseLink.vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const authStore = useAuthStore();
const isLoading = ref(true); // Initialize with loading state active
const isMobileMenuOpen = ref(false);

const navitems = computed(() => {
  return [
    { path: "/about", text: "About" },
    { path: "/business-card", text: "Business Cards" },
    { path: "/signs-banners", text: "Signs, Banners" },
    { path: "/gifts-stationery", text: "Gifts & Stationery" },
    { path: "/design", text: "Design" },
  ];
});

onMounted(async () => {
  try {
    // Assuming authStore.user might be an async function to initialize or fetch user state
    if (authStore.user && typeof authStore.user === 'function') {
      await authStore.user();
    }
  } catch (error) {
    console.error("Error during main navigation setup:", error);
    // Optionally, you could set an error state here to inform the user
  } finally {
    isLoading.value = false; // Deactivate loading state
  }
});

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>
