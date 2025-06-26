<template>
  <footer class="bg-gray-900 dark:bg-gray-950 text-white">
    <!-- Main Footer Content -->
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <!-- Company Info Column -->
        <div class="lg:col-span-1">
          <div class="mb-6">
            <!-- Logo/Company Name -->
            <h3 class="text-xl font-bold text-white mb-4">Keval Investment Limited</h3>
            <p class="text-gray-100 text-sm leading-relaxed mb-4">
              Your trusted partner for professional printing and design services. Quality printing solutions for businesses and individuals.
            </p>
            
            <!-- Contact Info -->
            <div class="space-y-2 text-sm text-gray-100">
              <div class="flex items-center">
                <PhoneIcon class="h-4 w-4 mr-2 text-persian-green-400" />
                <span>0720 335 863 | 0711 635 104</span>
              </div>
              <div class="flex items-center">
                <EnvelopeIcon class="h-4 w-4 mr-2 text-persian-green-400" />
                <span>kevalinvestmentsltd@gmail.com</span>
              </div>
              <div class="flex items-start">
                <MapPinIcon class="h-4 w-4 mr-2 text-persian-green-400 mt-0.5" />
                <span>Print Hub Building, GroundFloor, Room No: B06<br>Kweria Road, Nairobi</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Quick Links Column -->
        <div>
          <h4 class="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <nav class="space-y-2">
            <BaseLink 
              to="/"
              variant="inverse"
              class="block w-full text-sm">
              Home
            </BaseLink>
            <BaseLink 
              to="/products"
              variant="inverse"
              class="block w-full text-sm">
              Products
            </BaseLink>
            <BaseLink 
              to="/design/packages"
              variant="inverse"
              class="block w-full text-sm">
              Design Services
            </BaseLink>
            <BaseLink 
              to="/portfolio"
              variant="inverse"
              class="block w-full text-sm">
              Portfolio
            </BaseLink>
            <BaseLink 
              to="/contact"
              variant="inverse"
              class="block w-full text-sm">
              Contact
            </BaseLink>
          </nav>
        </div>

        <!-- Services Column -->
        <div>
          <h4 class="text-lg font-semibold text-white mb-4">Services</h4>
          <nav class="space-y-2">
            <BaseLink 
              to="/products/business-cards"
              variant="inverse"
              class="block w-full text-sm">
              Business Cards
            </BaseLink>
            <BaseLink 
              to="/products/banners"
              variant="inverse"
              class="block w-full text-sm">
              Banners & Signs
            </BaseLink>
            <BaseLink 
              to="/products/flyers-brochures"
              variant="inverse"
              class="block w-full text-sm">
              Flyers & Brochures
            </BaseLink>
            <BaseLink 
              to="/design/packages"
              variant="inverse"
              class="block w-full text-sm">
              Design Packages
            </BaseLink>
            <BaseLink 
              to="/products/custom-printing"
              variant="inverse"
              class="block w-full text-sm">
              Custom Printing
            </BaseLink>
            <BaseLink 
              to="/quote"
              variant="inverse"
              class="block w-full text-sm">
              Bulk Orders
            </BaseLink>
          </nav>
        </div>

        <!-- Support & Info Column -->
        <div>
          <h4 class="text-lg font-semibold text-white mb-4">Support</h4>
          <nav class="space-y-2 mb-6">
            <BaseLink 
              to="/faq"
              variant="inverse"
              class="block w-full text-sm">
              FAQ
            </BaseLink>
            <BaseLink 
              to="/testimonials"
              variant="inverse"
              class="block w-full text-sm">
              Testimonials
            </BaseLink>
            <BaseLink 
              to="/order-tracking"
              variant="inverse"
              class="block w-full text-sm">
              Order Tracking
            </BaseLink>
            <BaseLink 
              to="/about"
              variant="inverse"
              class="block w-full text-sm">
              About Us
            </BaseLink>
          </nav>

          <!-- Social Media Links -->
          <div>
            <h5 class="text-sm font-semibold text-white mb-2">Follow Us</h5>
            <div class="flex space-x-3">
              <a 
                href="https://facebook.com/kevalinvestments" 
                class="text-gray-50 hover:text-persian-green-400 hover:underline transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com/kevalinvestments" 
                class="text-gray-50 hover:text-persian-green-400 hover:underline transition-colors duration-200"
                aria-label="Twitter"
              >
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com/kevalinvestments" 
                class="text-gray-50 hover:text-persian-green-400 hover:underline transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.34-1.297C4.198 14.895 3.5 13.559 3.5 12.017c0-1.542.698-2.878 1.609-3.674.892-.807 2.043-1.297 3.34-1.297s2.448.49 3.34 1.297c.911.796 1.609 2.132 1.609 3.674 0 1.542-.698 2.878-1.609 3.674-.892.807-2.043 1.297-3.34 1.297zm7.598 0c-1.297 0-2.448-.49-3.34-1.297-.911-.796-1.609-2.132-1.609-3.674 0-1.542.698-2.878 1.609-3.674.892-.807 2.043-1.297 3.34-1.297s2.448.49 3.34 1.297c.911.796 1.609 2.132 1.609 3.674 0 1.542-.698 2.878-1.609 3.674-.892.807-2.043 1.297-3.34 1.297z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com/kevalinvestments" 
                class="text-gray-50 hover:text-persian-green-400 hover:underline transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Newsletter Signup Section -->
    <div class="border-t border-gray-800 dark:border-gray-700">
      <div class="container mx-auto px-4 py-8">
        <div class="max-w-2xl mx-auto text-center">
          <h4 class="text-lg font-semibold text-white mb-2">Stay Updated</h4>
          <p class="text-gray-200 text-sm mb-4">Get the latest printing tips, design trends, and special offers delivered to your inbox.</p>
          
          <form class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              class="flex-1 px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-persian-green-500 focus:border-transparent"
            >
            <button 
              type="submit"
              class="px-6 py-2 bg-persian-green-600 hover:bg-persian-green-700 text-white font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-persian-green-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Bottom Footer -->
    <div class="border-t border-gray-800 dark:border-gray-700">
      <div class="container mx-auto px-4 py-6">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          <!-- Copyright -->
          <div class="text-sm text-gray-200 text-center md:text-left">
            © {{ currentYear }} Keval Investment Limited. All rights reserved.
          </div>

          <!-- Legal Links -->
          <nav class="space-y-2 text-sm text-center md:text-right">
            <BaseLink 
              to="/privacy-policy"
              variant="inverse"
              class="block w-full">
              Privacy Policy
            </BaseLink>
            <BaseLink 
              to="/terms-of-service"
              variant="inverse"
              class="block w-full">
              Terms of Service
            </BaseLink>
            <BaseLink 
              to="/cookie-policy"
              variant="inverse"
              class="block w-full">
              Cookie Policy
            </BaseLink>
            <BaseLink 
              to="/sitemap"
              variant="inverse"
              class="block w-full">
              Sitemap
            </BaseLink>
          </nav>
        </div>
      </div>
    </div>

    <!-- Back to Top Button -->
    <button
      v-show="showBackToTop"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 bg-persian-green-600 hover:bg-persian-green-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-persian-green-500 focus:ring-offset-2 z-40"
      aria-label="Back to top"
    >
      <ChevronUpIcon class="h-5 w-5" />
    </button>
  </footer>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import BaseLink from '@/components/BaseLink.vue';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon, 
  ChevronUpIcon 
} from '@heroicons/vue/24/outline';

const showBackToTop = ref(false);

const currentYear = computed(() => new Date().getFullYear());

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

</script>
