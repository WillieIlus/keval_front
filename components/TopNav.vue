<template>
  <header
    class="relative bg-persian-green-50 text-persian-green-800 p-4 shadow-md dark:bg-persian-green-900 dark:text-persian-green-200"
  >
    <div class="container mx-auto flex justify-between items-center px-4">
      <Logo />

      <div class="hidden md:flex items-center flex-grow gap-2">
        <SearchInput class="mr-auto" />
        <nav class="flex items-center space-x-4 lg:space-x-6">
          <ul class="flex items-center space-x-3 lg:space-x-4">
            <BaseLink
              v-for="item in leftNavItems"
              :key="item.text + '-desktop-left'"
              :to="item.path || '#'"
              :external="!item.path"
              :icon="getIconComponent(item.iconName)"
              icon-position="left"
              @click="item.action && item.action()"
              class="px-2"
              :class="{
                'text-sm lg:text-base whitespace-nowrap': true,
                'bg-orange-500 hover:bg-orange-700 text-white py-3 px-5 rounded-full ml-4':
                  item.text === 'Get a quote',
              }"
            >
              {{ item.text }}
            </BaseLink>
          </ul>
          <ul
            class="flex items-center space-x-3 lg:space-x-4 ml-6"
            v-if="rightNavItems.length > 0"
          >
            <BaseLink
              v-for="item in rightNavItems"
              :key="item.text + '-desktop-right'"
              :to="item.path || '#'"
              :external="!item.path"
              :icon="getIconComponent(item.iconName)"
              icon-position="left"
              @click="item.action && item.action()"
              class="px-2 text-sm lg:text-base whitespace-nowrap"
            >
              {{ item.text }}
            </BaseLink>
          </ul>
        </nav>
      </div>

      <div class="flex items-center space-x-2">
        <DarkModeToggle icon="i-heroicons-sun-solid" />
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

    <Transition
      enter-active-class="transition ease-out duration-300 transform"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-200 transform"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="isMobileMenuOpen"
        class="absolute z-20 top-full left-0 right-0 md:hidden"
        id="mobile-menu"
      >
        <div
          class="mx-4 mt-2 p-4 space-y-4 bg-persian-green-100 dark:bg-persian-green-800 rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
        >
          <SearchInput class="w-full px-6 mx-auto" />
          <nav class="space-y-1">
            <!-- Main nav items (excluding login/signup) -->
            <BaseLink
              v-for="item in navItems.filter(
                (i) => i.text !== 'Login' && i.text !== 'Sign Up'
              )"
              :key="item.text + '-mobile-main'"
              :to="item.path || '#'"
              :external="!item.path"
              :icon="getIconComponent(item.iconName)"
              icon-position="left"
              @click="handleMobileLinkClick(item)"
              class="w-full block px-3 py-2 rounded-md text-base font-medium hover:bg-persian-green-200 dark:hover:bg-persian-green-700"
            >
              {{ item.text }}
            </BaseLink>

            <!-- Divider -->
            <hr
              class="border-t border-persian-green-300 dark:border-persian-green-600 my-3"
            />

            <!-- Auth items (Login/Sign Up) -->
            <BaseLink
              v-for="item in navItems.filter(
                (i) => i.text === 'Login' || i.text === 'Sign Up'
              )"
              :key="item.text + '-mobile-auth'"
              :to="item.path || '#'"
              :external="!item.path"
              :icon="getIconComponent(item.iconName)"
              icon-position="left"
              @click="handleMobileLinkClick(item)"
              class="w-full block px-3 py-2 rounded-md text-base font-medium hover:bg-persian-green-200 dark:hover:bg-persian-green-700"
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

// Computed property for all navigation items
const allNavItems = computed<NavItem[]>(() => {
  if (isAuthenticated.value) {
    return [
      {
        path: "/quote",
        text: "Get a quote",
        iconName: "i-heroicons-rectangle-stack-solid",
      },
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
      {
        path: "/quote",
        text: "Get a quote",
        iconName: "i-heroicons-rectangle-stack-solid",
      },
      { path: "/call", text: "Call", iconName: "i-heroicons-phone-solid" },
      { path: "/Cart", text: "Cart", iconName: "i-heroicons-shopping-cart-solid" },
      {
        path: "/login",
        text: "Login",
        iconName: "i-heroicons-arrow-right-on-rectangle-solid",
      },
      {
        path: "/register",
        text: "Sign Up",
        iconName: "i-heroicons-user-plus-solid",
      },
    ];
  }
});

// New computed properties for desktop layout separation
const leftNavItems = computed<NavItem[]>(() => {
  if (isAuthenticated.value) {
    return allNavItems.value; // All items go to left when authenticated
  } else {
    return allNavItems.value.filter(
      (item) => item.text !== "Login" && item.text !== "Sign Up"
    );
  }
});

const rightNavItems = computed<NavItem[]>(() => {
  if (isAuthenticated.value) {
    return []; // No items on the right when authenticated
  } else {
    return allNavItems.value.filter(
      (item) => item.text === "Login" || item.text === "Sign Up"
    );
  }
});

// navItems for mobile (all items combined)
const navItems = allNavItems;

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
