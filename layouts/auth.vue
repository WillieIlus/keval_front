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
    <div class="hidden lg:flex lg:w-1/2 relative bg-cover bg-center bg-no-repeat bg-persian-green-600" 
         style="background-image: url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80');">
      
      <!-- Dark overlay for better text readability -->
      <div class="absolute inset-0 bg-black bg-opacity-40"></div>
      
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
            <div class="flex flex-col items-center p-4 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
              <svg class="w-12 h-12 mb-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1M12 7C13.11 7 14 7.89 14 9C14 10.11 13.11 11 12 11C10.89 11 10 10.11 10 9C10 7.89 10.89 7 12 7M12 14.5C14.38 14.5 16.5 15.56 16.5 17V18.5H7.5V17C7.5 15.56 9.62 14.5 12 14.5Z"/>
              </svg>
              <span class="text-sm font-semibold">Secure Access</span>
            </div>
            
            <div class="flex flex-col items-center p-4 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
              <svg class="w-12 h-12 mb-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
              </svg>
              <span class="text-sm font-semibold">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<style scoped>
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