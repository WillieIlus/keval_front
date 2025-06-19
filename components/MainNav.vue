<template>
  <div v-if="isLoading">
    <header
      class="bg-persian-green-600 flex justify-center items-center text-white p-4 shadow-md"
    >
      <div class="container mx-auto flex justify-center items-center">
        <p class="text-white font-bold">Loading Navigation...</p>
      </div>
    </header>
    <!-- The gray bar is omitted during loading for simplicity -->
  </div>
  <template v-else>
    <header
      class="bg-persian-green-600 flex justify-center items-center text-white p-4 shadow-md"
    >
      <div class="container mx-auto flex justify-center items-center">
        <nav>
          <ul class="flex space-x-4 items-center">
            <BaseLink
              class="px-4 text-white font-bold"
              v-for="item in navitems"
              :key="item.path"
              :to="item.path"
              :text="item.text"
            />
          </ul>
        </nav>
      </div>
    </header>
    <div class="bg-gray-500 p-1 mb-12"></div>
  </template>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();

const isLoading = ref(true); // Initialize with loading state active

const navitems = computed(() => {
  return [
    { path: "/about", text: "About", iconName: "i-heroicons-user-circle-solid" },
    {
      path: "/business-card",
      text: "Business Cards",
      iconName: "i-heroicons-shopping-cart-solid",
    },
    {
      path: "/signs-banners",
      text: "Signs, Banners",
      iconName: "i-heroicons-shopping-cart-solid",
    },
    {
      path: "/gifts-stationery",
      text: "Gifts & Stationery",
      iconName: "i-heroicons-user-circle-solid",
    },
    { path: "/design", text: "Design", iconName: "i-heroicons-user-circle-solid" },
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
</script>
