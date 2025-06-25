<template>
  <!-- Loading State -->
  <div v-if="isNavLoading">
    <header
      class="bg-persian-green-600 dark:bg-persian-green-800 flex justify-center items-center text-white dark:text-gray-100 p-4 shadow-md"
    >
      <div class="container mx-auto flex justify-center items-center">
        <p class="text-white font-bold">Loading Navigation... </p>
      </div>
    </header>
  </div>

  <!-- Loaded State -->
  <template v-else>
    <header
      class="bg-persian-green-600 dark:bg-persian-green-800 text-white dark:text-gray-100 p-4 shadow-md relative z-50"
    >
      <div class="container mx-auto flex justify-between md:justify-center items-center">
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
            <Bars3Icon
              v-if="!isMobileMenuOpen"
              class="block h-6 w-6"
              aria-hidden="true"
            />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex">
          <ul class="flex space-x-1 items-center">
            <!-- Home Link -->
            <li>
              <BaseLink
                class="px-4 py-2 text-sm font-medium text-white dark:text-gray-100 hover:bg-persian-green-700 dark:hover:bg-persian-green-600 rounded-md transition-colors duration-200"
                to="/"
              >
                Home
              </BaseLink>
            </li>

            <!-- Products Dropdown -->
            <li class="relative group">
              <button
                @click="toggleDropdown('products')"
                class="px-4 py-2 text-sm font-medium text-white dark:text-gray-100 hover:bg-persian-green-700 dark:hover:bg-persian-green-600 rounded-md transition-colors duration-200 flex items-center"
              >
                Products
                <ChevronDownIcon class="ml-1 h-4 w-4 transition-transform duration-200" :class="{ 'rotate-180': activeDropdown === 'products' }" />
              </button>
              
              <!-- Products Dropdown Menu -->
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
                  <BaseLink to="/products/marketing-materials" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Marketing Materials</BaseLink>
                  <div class="border-t border-gray-200 dark:border-gray-600 my-1"></div>
                  <BaseLink to="/products/custom-printing" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Custom Printing</BaseLink>
                  <BaseLink to="/products" class="block px-4 py-2 text-sm font-medium text-persian-green-600 dark:text-persian-green-400 hover:bg-gray-100 dark:hover:bg-gray-700">View All Products</BaseLink>
                </div>
              </div>
            </li>

            <!-- Design Services Dropdown -->
            <li class="relative group">
              <button
                @click="toggleDropdown('design')"
                class="px-4 py-2 text-sm font-medium text-white dark:text-gray-100 hover:bg-persian-green-700 dark:hover:bg-persian-green-600 rounded-md transition-colors duration-200 flex items-center"
              >
                Design Services
                <ChevronDownIcon class="ml-1 h-4 w-4 transition-transform duration-200" :class="{ 'rotate-180': activeDropdown === 'design' }" />
              </button>
              
              <!-- Design Services Dropdown Menu -->
              <div
                v-show="activeDropdown === 'design'"
                class="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                @click="closeDropdowns"
              >
                <div class="py-1">
                  <BaseLink to="/design/packages" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Design Packages</BaseLink>
                  <BaseLink to="/design/custom" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Custom Design</BaseLink>
                  <BaseLink to="/design/consultation" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Design Consultation</BaseLink>
                  <div class="border-t border-gray-200 dark:border-gray-600 my-1"></div>
                  <BaseLink to="/portfolio" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">View Portfolio</BaseLink>
                </div>
              </div>
            </li>

            <!-- Company Dropdown -->
            <li class="relative group">
              <button
                @click="toggleDropdown('company')"
                class="px-4 py-2 text-sm font-medium text-white dark:text-gray-100 hover:bg-persian-green-700 dark:hover:bg-persian-green-600 rounded-md transition-colors duration-200 flex items-center"
              >
                Company
                <ChevronDownIcon class="ml-1 h-4 w-4 transition-transform duration-200" :class="{ 'rotate-180': activeDropdown === 'company' }" />
              </button>
              
              <!-- Company Dropdown Menu -->
              <div
                v-show="activeDropdown === 'company'"
                class="absolute left-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                @click="closeDropdowns"
              >
                <div class="py-1">
                  <BaseLink to="/about" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">About Us</BaseLink>
                  <BaseLink to="/portfolio" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Portfolio</BaseLink>
                  <BaseLink to="/testimonials" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Testimonials</BaseLink>
                  <BaseLink to="/faq" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">FAQ</BaseLink>
                </div>
              </div>
            </li>

            <!-- Support/Contact -->
            <li>
              <BaseLink
                class="px-4 py-2 text-sm font-medium text-white dark:text-gray-100 hover:bg-persian-green-700 dark:hover:bg-persian-green-600 rounded-md transition-colors duration-200"
                to="/contact"
              >
                Contact Us
              </BaseLink>
            </li>

            <!-- Get Quote CTA -->
            <!-- <li>
              <BaseLink
                class="px-4 py-2 text-sm font-medium bg-white text-persian-green-600 hover:bg-gray-100 rounded-md transition-colors duration-200 ml-2"
                to="/quote"
              >
                Get Quote
              </BaseLink>
            </li> -->
          </ul>
        </nav>
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
      <nav
        v-if="isMobileMenuOpen"
        class="md:hidden bg-persian-green-500 dark:bg-persian-green-700 w-full"
        id="mobile-main-menu"
      >
        <div class="flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <!-- Mobile Home -->
          <BaseLink
            to="/"
            @click="closeMobileMenu"
            class="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white dark:text-gray-100 hover:bg-persian-green-700 dark:hover:bg-persian-green-600"
          >
            Home
          </BaseLink>

          <!-- Mobile Products Section -->
          <div class="border-t border-persian-green-400 dark:border-persian-green-600 pt-2 my-2">
            <div class="px-3 py-1 text-xs font-semibold text-persian-green-100 dark:text-persian-green-200 uppercase tracking-wider">Products</div>
            <BaseLink to="/products/business-cards" @click="closeMobileMenu" class="block w-full text-left px-3 py-2 rounded-md text-sm text-white dark:text-gray-100 hover:bg-persian-green-700 dark:hover:bg-persian-green-600 pl-6">Business Cards</BaseLink>
            <BaseLink to="/products/banners" @click="closeMobileMenu" class="block w-full text-left px-3 py-2 rounded-md text-sm text-white dark:text-gray-100 hover:bg-persian-green-700 dark:hover:bg-persian-green-600 pl-6">Banners</BaseLink>
            <BaseLink to="/products/flyers-brochures" @click="closeMobileMenu" class="block w-full text-left px-3 py-2 rounded-md text-sm text-white dark:text-gray-100 hover:bg-persian-green-700 dark:hover:bg-persian-green-600 pl-6">Flyers & Brochures</BaseLink>
            <BaseLink to="/products/custom-printing" @click="closeMobileMenu" class="block w-full text-left px-3 py-2 rounded-md text-sm text-white dark:text-gray-100 hover:bg-persian-green-700 dark:hover:bg-persian-green-600 pl-6">Custom Printing</BaseLink>
            <BaseLink to="/products" @click="closeMobileMenu" class="block w-full text-left px-3 py-2 rounded-md text-sm font-medium text-white dark:text-gray-100 hover:bg-persian-green-700 dark:hover:bg-persian-green-600 pl-6">View All Products</BaseLink>
          </div>

          <!-- Mobile Design Services Section -->
          <div class="border-t border-persian-green-400 dark:border-persian-green-600 pt-2 my-2">
            <div class="px-3 py-1 text-xs font-semibold text-persian-green-100 dark:text-persian-green-200 uppercase tracking-wider">Design Services</div>
            <BaseLink to="/design/packages" @click="closeMobileMenu" class="block w-full text-left px-3 py-2 rounded-md text-sm text-white dark:text-gray-100 hover:bg-persian-green-700 dark:hover:bg-persian-green-600 pl-6">Design Packages</BaseLink>
            <BaseLink to="/design/custom" @click="closeMobileMenu" class="block w-full text-left px-3 py-2 rounded-md text-sm text-white dark:text-gray-100 hover:bg-persian-green-700 dark:hover:bg-persian-green-600 pl-6">Custom Design</BaseLink>
            <BaseLink to="/portfolio" @click="closeMobileMenu" class="block w-full text-left px-3 py-2 rounded-md text-sm text-white dark:text-gray-100 hover:bg-persian-green-700 dark:hover:bg-persian-green-600 pl-6">Portfolio</BaseLink>
          </div>

          <!-- Mobile Company Section -->
          <div class="border-t border-persian-green-400 dark:border-persian-green-600 pt-2 my-2">
            <div class="px-3 py-1 text-xs font-semibold text-persian-green-100 dark:text-persian-green-200 uppercase tracking-wider">Company</div>
            <BaseLink to="/about" @click="closeMobileMenu" class="block w-full text-left px-3 py-2 rounded-md text-sm text-white dark:text-gray-100 hover:bg-persian-green-700 dark:hover:bg-persian-green-600 pl-6">About Us</BaseLink>
            <BaseLink to="/testimonials" @click="closeMobileMenu" class="block w-full text-left px-3 py-2 rounded-md text-sm text-white dark:text-gray-100 hover:bg-persian-green-700 dark:hover:bg-persian-green-600 pl-6">Testimonials</BaseLink>
            <BaseLink to="/faq" @click="closeMobileMenu" class="block w-full text-left px-3 py-2 rounded-md text-sm text-white dark:text-gray-100 hover:bg-persian-green-700 dark:hover:bg-persian-green-600 pl-6">FAQ</BaseLink>
          </div>

          <!-- Mobile Contact & CTA -->
          <div class="border-t border-persian-green-400 dark:border-persian-green-600 pt-2 my-2">
            <BaseLink to="/contact" @click="closeMobileMenu" class="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white dark:text-gray-100 hover:bg-persian-green-700 dark:hover:bg-persian-green-600">Contact Us</BaseLink>
            <!-- <BaseLink to="/quote" @click="closeMobileMenu" class="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-white text-persian-green-600 hover:bg-gray-100 mx-3 mt-2">Get Quote</BaseLink> -->
          </div>
        </div>
      </nav>
    </Transition>

    <!-- Gray Bar: Hidden on mobile, shown on md and up. Responsive margin. -->
    <div class="hidden md:block bg-gray-500 dark:bg-gray-700 p-1 mb-8 md:mb-12"></div>
  </template>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, onBeforeUnmount } from "vue";
import { useAuthStore } from "@/stores/auth";
import BaseLink from "@/components/BaseLink.vue";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/vue/24/outline";

const authStore = useAuthStore();
const isNavLoading = useNavLoading();
const isMobileMenuOpen = ref(false);
const activeDropdown = ref<string | null>(null);

let loadingTimeout: ReturnType<typeof setTimeout> | null = null;
const LOADING_TIMEOUT_MS = 5000; // 5 seconds

// Dropdown management
const toggleDropdown = (dropdownName: string) => {
  if (activeDropdown.value === dropdownName) {
    activeDropdown.value = null;
  } else {
    activeDropdown.value = dropdownName;
  }
};

const closeDropdowns = () => {
  activeDropdown.value = null;
};

// Close dropdowns when clicking outside
const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  if (!target.closest('.relative.group')) {
    closeDropdowns();
  }
};

onMounted(async () => {
  // Add click outside listener for dropdowns
  document.addEventListener('click', handleClickOutside);
  
  // Start a timeout to force loading off if it takes too long
  loadingTimeout = setTimeout(() => {
    if (isNavLoading.value) {
      console.warn('MainNav: Navigation setup timed out. Forcing loading state off.');
      isNavLoading.value = false;
    }
  }, LOADING_TIMEOUT_MS);

  try {
    // Assuming authStore.user might be an async function to initialize or fetch user state
    if (authStore.user && typeof authStore.user === "function") {
      await authStore.user();
    }
  } catch (error) {
    console.error("MainNav: Error during main navigation setup:", error);
  } finally {
    // Ensure loading state is deactivated and clear the timeout
    isNavLoading.value = false;
    if (loadingTimeout) {
      clearTimeout(loadingTimeout);
      loadingTimeout = null;
    }
  }
});

onBeforeUnmount(() => {
  // Remove click outside listener
  document.removeEventListener('click', handleClickOutside);
  
  // Clear timeout if component is unmounted before it fires
  if (loadingTimeout) {
    clearTimeout(loadingTimeout);
    loadingTimeout = null;
  }
});

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>