<!-- layouts/two-halves.vue -->
<template>
  <!-- Main container for the two-half layout.
       Uses flexbox to arrange content horizontally.
       min-h-screen ensures it takes at least the full viewport height.
       bg-gray-200 provides a light background for the whole page. -->
  <div class="flex min-h-screen bg-gray-200 dark:bg-gray-900 font-sans">
    <!-- Left Half: Contains the authentication forms (Login/Register) -->
    <!-- It takes full width on small screens and half width on large screens (lg:w-1/2).
         flex, items-center, justify-center are used to center the content vertically and horizontally within this half.
         p-4 adds padding around the content. -->
    <div class="w-full lg:w-1/2 flex items-center justify-center p-4">
      <!-- This 'main' element wraps your existing AuthCard.
           It applies the styles you had in your original auth layout (bg-primary, rounded-lg, shadow-lg).
           w-full ensures it takes the available width within its parent flex item.
           max-w-sm and mx-auto constrain its maximum width and center it horizontally
           within the left half, making it look good even on very large screens. -->
      <main class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-sm mx-auto">
        <!-- The <slot /> renders the content from your login.vue or register.vue pages -->
        <slot />
      </main>
    </div>

    <!-- Right Half: A decorative section with marketing content or an image -->
    <!-- hidden on small screens and only shown on large screens (lg:flex).
         Takes half width on large screens (lg:w-1/2).
         Applies a pleasant gradient background.
         Uses flexbox to center its internal content. -->
    <div class="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 to-purple-700 items-center justify-center p-8 rounded-l-3xl shadow-inner">
      <div class="text-white text-center p-4">
        <h2 class="text-4xl font-extrabold mb-4 animate-fade-in-down">Welcome to Our Platform!</h2>
        <p class="text-lg leading-relaxed mb-8 opacity-90 animate-fade-in-up">
          Seamlessly manage your accounts, discover new possibilities, and stay connected.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in-up delay-200">
          <div class="flex flex-col items-center">
            <!-- Icon for Easy Setup -->
            <svg class="w-16 h-16 mb-3 text-white transform hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 15.5l-5-5 1.41-1.41L11 14.6l7.09-7.09L19.5 8.5l-8.5 8.5z"/></svg>
            <span class="text-sm font-semibold opacity-90">Easy Setup</span>
          </div>
          <div class="flex flex-col items-center">
            <!-- Icon for Secure & Reliable -->
            <svg class="w-16 h-16 mb-3 text-white transform hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-1-13h2v6h-2v-6zm0 8h2v2h-2v-2z"/></svg>
            <span class="text-sm font-semibold opacity-90">Secure & Reliable</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
/* Basic animations for the right panel content to make it more engaging */
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
</style>


