<template>
  <header
    class="bg-persian-green-50 text-persian-green-800 p-4 shadow-md dark:bg-persian-green-900 dark:text-persian-green-200"
  >
    <div class="container mx-auto flex justify-between items-center">
      <Logo />

      <!-- Desktop Search and Navigation -->
      <div class="hidden md:flex items-center space-x-4 lg:space-x-6">
        <SearchInput />
        <nav>
          <ul class="flex items-center space-x-3 lg:space-x-4">
            <!-- Desktop nav items will use the same source, styling will adapt -->
            <BaseLink
              v-for="item in navItems"
              :key="item.text + '-desktop'"
              :to="item.path || '#'"
              :external="!item.path"
              :icon="getIconComponent(item.iconName)"
              icon-position="left"
              @click="item.action && item.action()"
              class="text-sm lg:text-base whitespace-nowrap"
            >
              {{ item.text }}
            </BaseLink>
          </ul>
        </nav>
      </div>

      <!-- Right-aligned items: DarkModeToggle and Mobile Menu Button -->
      <div class="flex items-center space-x-2">
        <DarkModeToggle icon="i-heroicons-sun-solid"/>
        <!-- Mobile menu button -->
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          type="button"
          class="md:hidden p-1.5 rounded-md text-persian-green-700 dark:text-persian-green-300 hover:bg-persian-green-100 dark:hover:bg-persian-green-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-persian-green-500"
          aria-controls="mobile-menu"
          :aria-expanded="isMobileMenuOpen.toString()"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon v-if="!isMobileMenuOpen" class="block h-6 w-6" aria-hidden="true" />
          <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 -translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <div v-if="isMobileMenuOpen" class="md:hidden" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-3 sm:px-3 mt-3 bg-persian-green-100 dark:bg-persian-green-800 rounded-lg shadow-lg">
          <SearchInput class="w-full" />
          <nav class="space-y-1">
            <BaseLink
              v-for="item in navItems"
              :key="item.text + '-mobile'"
              :to="item.path || '#'"
              :external="!item.path"
              :icon="getIconComponent(item.iconName)"
              icon-position="left"
              @click="handleMobileLinkClick(item)"
              class="block px-3 py-2 rounded-md text-base font-medium hover:bg-persian-green-200 dark:hover:bg-persian-green-700"
            >
              {{ item.text }}
            </BaseLink>
          </nav>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";
import * as HeroIconsSolid from "@heroicons/vue/24/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline"; // Using outline for menu icons

import Logo from "@/components/Logo.vue";
import SearchInput from "@/components/SearchInput.vue";
import BaseLink from "@/components/BaseLink.vue";
import DarkModeToggle from "@/components/DarkModeToggle.vue";

interface NavItem {
  path?: string;
  text: string;
  iconName?: string;
  action?: () => void;
}

const router = useRouter();
const authStore = useAuthStore();
const { isAuthenticated } = storeToRefs(authStore);

// Placeholder for modal function
const openmodel = (type: string) => {
  console.warn(`openmodel('${type}') called, but not implemented.`);
  // Close mobile menu if a modal is opened from a menu item
  isMobileMenuOpen.value = false;
};

const getIconComponent = (iconString: string | undefined) => {
  if (!iconString) {
    return null;
  }

  const baseNameMatch = iconString.match(/i-heroicons-(.*?)$/);
  if (!baseNameMatch || !baseNameMatch[1]) {
    console.warn(`Invalid icon name format: ${iconString}`);
    return null;
  }
  let iconBaseName = baseNameMatch[1];

  if (iconBaseName.endsWith("-solid")) {
    iconBaseName = iconBaseName.replace("-solid", "");
  }

  const pascalCaseName = iconBaseName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

  const fullComponentName = `${pascalCaseName}Icon`;
  const iconComponent = HeroIconsSolid[fullComponentName as keyof typeof HeroIconsSolid];
  if (!iconComponent) {
    console.warn(
      `Icon component not found for: "${iconString}" (looked for "${fullComponentName}")`
    );
  }
  return iconComponent || null;
};

const isMobileMenuOpen = ref(false);

// Computed property for navigation items based on authentication status
const navItems = computed<NavItem[]>(() => {
  if (isAuthenticated.value) {
    return [
      { path: "/quote", text: "Get a quote", iconName: "i-heroicons-squares-2x2-solid" },
      { path: "/call", text: "+254 711 635104", iconName: "i-heroicons-phone-solid" },
      { path: "/Cart", text: "Cart", iconName: "i-heroicons-shopping-cart-solid" },
      { path: "/profile", text: "Profile", iconName: "i-heroicons-user-circle-solid" },
      { path: "/settings", text: "Settings", iconName: "i-heroicons-cog-solid" },
      {
        text: "Logout",
        iconName: "i-heroicons-arrow-left-on-rectangle-solid",
        action: handleLogout,
      },
    ];
  } else {
    return [
      { path: "/quote", text: "Get a quote", iconName: "i-heroicons-squares-2x2-solid" },
      { path: "/call", text: "Call", iconName: "i-heroicons-phone-solid" },
      { path: "/Cart", text: "Cart", iconName: "i-heroicons-shopping-cart-solid" },
      {
        text: "Login",
        iconName: "i-heroicons-arrow-right-on-rectangle-solid",
        action: () => openmodel("login"),
      },
      {
        text: "Sign Up",
        iconName: "i-heroicons-user-plus-solid",
        action: () => openmodel("signup"),
      },
    ];
  }
});

const handleLogout = async () => {
  await authStore.logout();
  router.push("/login");
};

const handleMobileLinkClick = (item: NavItem) => {
  if (item.action) {
    item.action(); // Perform the action if defined (e.g., open modal, logout)
  }
  // If it's a navigation link (item.path exists), the router will handle navigation.
  isMobileMenuOpen.value = false; // Close menu after action or navigation attempt
};

onMounted(() => {});
</script>
