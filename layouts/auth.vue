<!-- layouts/two-halves.vue -->
<template>
  <!-- Main container for the two-section layout -->
  <div class="flex min-h-screen bg-gray-100 dark:bg-gray-900">
    
    <!-- LEFT SECTION: Authentication Forms -->
    <div class="w-full lg:w-1/2 flex items-center justify-center p-6 bg-white dark:bg-gray-800">
      <div class="w-full max-w-md">
        <!-- Slot for login/signup forms -->
        <slot />
      </div>
    </div>

    <!-- RIGHT SECTION: Background Image with Overlay Content -->
    <div class="hidden lg:flex lg:w-1/2 relative bg-cover bg-center bg-no-repeat background-section">
      
      <!-- Dark overlay for better text readability -->
      <div class="absolute inset-0 "></div>
      
      <!-- Content overlay -->
      <div class="relative z-10 flex items-center justify-center p-8 text-white">
        <div class="text-center max-w-lg">
          <h2 class="text-4xl font-bold mb-6 animate-fade-in-down">
            Welcome Back
          </h2>
          <p class="text-xl leading-relaxed mb-8 opacity-90 animate-fade-in-up">
            Join thousands of users who trust our platform for secure and seamless experiences.
          </p>
          
          <!-- Feature highlights -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in-up delay-200">
            <div class="flex flex-col items-center p-4  rounded-lg backdrop-blur-sm">
              <LockClosedIcon class="w-12 h-12 mb-3 text-persian-green-300" />
              <span class="text-sm font-semibold">Secure Access</span>
            </div>
            
            <div class="flex flex-col items-center p-4  rounded-lg backdrop-blur-sm">
              <LifebuoyIcon class="w-12 h-12 mb-3 text-persian-green-300" />
              <span class="text-sm font-semibold">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Background image styling */
.background-section {
  background-image: url('/3d-rendering-chair-melting.jpg');
  background-color: #ef4444; /* Fallback red color */
}

/* Animations */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-down {
  animation: fadeInDown 0.8s ease-out forwards;
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

.delay-200 {
  animation-delay: 0.2s;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  /* On mobile, only show the left section */
  .hidden.lg\\:flex {
    display: none !important;
  }
}
</style>

<script setup lang="ts">
import { LockClosedIcon, LifebuoyIcon } from '@heroicons/vue/24/outline';
import { useHead } from '#imports';

// Preload the background image to improve perceived loading performance.
// For best results, also ensure the image is optimized (compressed and correctly sized).
useHead({
  link: [
    {
      rel: 'preload',
      href: '/3d-rendering-chair-melting.jpg',
      as: 'image'
    }
  ]
});
</script>