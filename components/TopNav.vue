<template>
  <header
    class="bg-persian-green-50 text-persian-green-800 p-4 shadow-md dark:bg-persian-green-900 dark:text-persian-green-200 flex items-center justify-between"
  >
    <div class="container mx-auto flex justify-between items-center">
      <Logo />
      <SearchInput />

      <nav>
        <ul class="flex items-center space-x-4">
          <BaseLink
            v-for="item in navItems"
            :key="item.text"
            :to="item.path || '#'"
            :external="!item.path"
            :icon="getIconComponent(item.iconName)"
            icon-position="left"
            @click="item.action && item.action()"
          >
            {{ item.text }}
          </BaseLink>
        </ul>
      </nav>

      <DarkModeToggle icon="i-heroicons-sun-solid"/>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";
import * as HeroIconsSolid from "@heroicons/vue/24/solid";

import Logo from "@/components/Logo.vue";
import SearchInput from "@/components/SearchInput.vue";
import BaseLink from "@/components/BaseLink.vue";
import DarkModeToggle from "@/components/DarkModeToggle.vue";

const router = useRouter();
const authStore = useAuthStore();
const { isAuthenticated } = storeToRefs(authStore);

// Placeholder for modal function
const openmodel = (type: string) => {
  console.warn(`openmodel('${type}') called, but not implemented.`);
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

// Computed property for navigation items based on authentication status
const navItems = computed(() => {
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

onMounted(() => {});
</script>
