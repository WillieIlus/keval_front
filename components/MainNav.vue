<template>
  <header class="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-4 py-4 relative z-50">
    <div class="container mx-auto flex justify-between items-center">
      <div class="flex-shrink-0">
        <BaseLink to="/">
           <Logo />
        </BaseLink>
      </div>

      <nav class="hidden md:flex flex-grow justify-center">
        <ul class="flex space-x-1 items-center">
          <li>
            <BaseLink
              class="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors duration-200"
              to="/"
            >
              Home
            </BaseLink>
          </li>

          <li class="relative group">
            <button
              @click="toggleDropdown('products')"
              class="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors duration-200 flex items-center"
            >
              Products
              <ChevronDownIcon class="ml-1 h-4 w-4 transition-transform duration-200" :class="{ 'rotate-180': activeDropdown === 'products' }" />
            </button>
            <div
              v-show="activeDropdown === 'products'"
              class="absolute left-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
              @click="closeDropdowns"
            >
              <div class="py-1">
                <div class="px-4 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Categories</div>
                <BaseLink to="/products/business-cards" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Business Cards</BaseLink>
                <BaseLink to="/products/banners" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Banners</BaseLink>
                <BaseLink to="/products/flyers-brochures" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Flyers & Brochures</BaseLink>
                <div class="border-t border-gray-200 dark:border-gray-600 my-1"></div>
                <BaseLink to="/products" class="block px-4 py-2 text-sm font-medium text-persian-green-600 dark:text-persian-green-400 hover:bg-gray-100 dark:hover:bg-gray-700">View All Products</BaseLink>
              </div>
            </div>
          </li>

          <li class="relative group">
            <button
              @click="toggleDropdown('design')"
              class="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors duration-200 flex items-center"
            >
              Design Services
              <ChevronDownIcon class="ml-1 h-4 w-4 transition-transform duration-200" :class="{ 'rotate-180': activeDropdown === 'design' }" />
            </button>
            <div
              v-show="activeDropdown === 'design'"
              class="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
              @click="closeDropdowns"
            >
              <div class="py-1">
                <BaseLink to="/design/packages" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Design Packages</BaseLink>
                <BaseLink to="/design/custom" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Custom Design</BaseLink>
                <BaseLink to="/portfolio" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">View Portfolio</BaseLink>
              </div>
            </div>
          </li>

          <li class="relative group">
            <button
              @click="toggleDropdown('company')"
              class="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors duration-200 flex items-center"
            >
              Company
              <ChevronDownIcon class="ml-1 h-4 w-4 transition-transform duration-200" :class="{ 'rotate-180': activeDropdown === 'company' }" />
            </button>
            <div
              v-show="activeDropdown === 'company'"
              class="absolute left-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
              @click="closeDropdowns"
            >
              <div class="py-1">
                <BaseLink to="/about" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">About Us</BaseLink>
                <BaseLink to="/faq" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">FAQ</BaseLink>
              </div>
            </div>
          </li>

          <li>
            <BaseLink
              class="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors duration-200"
              to="/contact"
            >
              Contact Us
            </BaseLink>
          </li>
        </ul>
      </nav>

      <div class="flex items-center space-x-4">
        <div class="hidden md:flex items-center space-x-2">
            <BaseLink
                v-for="item in rightNavItems"
                :key="item.text + '-desktop'"
                :to="item.path"
                @click="item.action && item.action()"
                class="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors duration-200"
            >
                {{ item.text }}
            </BaseLink>
        </div>

        <div class="md:hidden">
          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            type="button"
            class="p-1.5 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-persian-green-500"
            aria-controls="mobile-main-menu"
            :aria-expanded="isMobileMenuOpen.toString()"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!isMobileMenuOpen" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  </header>

  <Transition
    enter-active-class="transition ease-out duration-200"
    enter-from-class="opacity-0 -translate-y-1"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition ease-in duration-150"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-1"
  >
    <nav v-if="isMobileMenuOpen" class="md:hidden bg-white dark:bg-gray-800 shadow-lg w-full" id="mobile-main-menu">
      <div class="flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <BaseLink to="/" @click="closeMobileMenu" class="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700">Home</BaseLink>
        
        <div class="border-t border-gray-200 dark:border-gray-700 pt-2 my-2">
            <div class="px-3 py-1 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Products</div>
            <BaseLink to="/products/business-cards" @click="closeMobileMenu" class="block w-full text-left px-3 py-2 rounded-md text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 pl-6">Business Cards</BaseLink>
            <BaseLink to="/products" @click="closeMobileMenu" class="block w-full text-left px-3 py-2 rounded-md text-sm font-medium text-persian-green-600 dark:text-persian-green-400 hover:bg-gray-100 dark:hover:bg-gray-700 pl-6">View All</BaseLink>
        </div>
        
        <div class="border-t border-gray-200 dark:border-gray-700 pt-2 my-2">
            <BaseLink
                v-for="item in rightNavItems"
                :key="item.text + '-mobile'"
                :to="item.path"
                @click="handleMobileLinkClick(item)"
                class="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
                {{ item.text }}
            </BaseLink>
        </div>
      </div>
    </nav>
  </Transition>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";
import BaseLink from "@/components/BaseLink.vue";
import Logo from "@/components/Logo.vue"; // Added
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/vue/24/outline";

// --- Menu State ---
const isMobileMenuOpen = ref(false);
const activeDropdown = ref<string | null>(null);

// --- Auth State ---
interface NavItem {
  path?: string;
  text: string;
  action?: () => void;
}
const router = useRouter();
const authStore = useAuthStore();
const { isAuthenticated } = storeToRefs(authStore);


// --- Dropdown Management ---
const toggleDropdown = (dropdownName: string) => {
  activeDropdown.value = activeDropdown.value === dropdownName ? null : dropdownName;
};

const closeDropdowns = () => {
  activeDropdown.value = null;
};

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  if (!target.closest('.relative.group')) {
    closeDropdowns();
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});


// --- Mobile Menu Management ---
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const handleMobileLinkClick = (item: NavItem) => {
  if (item.action) {
    item.action();
  }
  closeMobileMenu();
};

// --- Auth Logic ---
const handleLogout = async () => {
  await authStore.logout();
  router.push("/login");
};

const rightNavItems = computed<NavItem[]>(() => {
  if (isAuthenticated.value) {
    return [
      { path: "/profile", text: "Profile" },
      { text: "Logout", action: handleLogout },
    ];
  } else {
    return [
      { path: "/login", text: "Login" },
      { path: "/register", text: "Sign Up" },
    ];
  }
});
</script>