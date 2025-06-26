<script setup lang="ts">
// BaseButton is likely auto-imported by Nuxt, but we can be explicit
import BaseButton from "@/components/BaseButton.vue";
</script>

<template>
  <section class="bg-gray-50 dark:bg-gray-900 py-20 sm:py-24">
    <div class="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
      <!-- Image Column with decorative elements -->
      <div class="relative flex justify-center lg:justify-start">
        <div class="relative w-full max-w-sm">
          <div
            class="absolute -top-4 -left-4 w-full h-full bg-persian-green-300 dark:bg-persian-green-800 rounded-xl transform -rotate-3 transition-transform duration-500 hover:rotate-0"
          ></div>
          <img
            src="/3d-rendering-chair-melting.jpg"
            alt="Keval Investments Team at work"
            class="relative w-full rounded-xl shadow-2xl z-10"
          />
        </div>
      </div>

      <!-- Text Content Column -->
      <div class="text-center lg:text-left">
        <h2
          class="text-base font-semibold uppercase tracking-wider text-persian-green-600 dark:text-persian-green-400 mb-2"
        >
          Who We Are
        </h2>
        <h3
          class="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight"
        >
          Your Partner in Design, Print & Branding
        </h3>
        <p class="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
          Keval Investments Limited is a leading company dedicated to transforming ideas
          into visually stunning and impactful experiences. With a focus on creativity,
          quality, and customer satisfaction, we deliver exceptional results every time.
        </p>
        <BaseButton
          to="/about"
          text="Discover Our Story"
          class="bg-persian-green-600 hover:bg-persian-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105"
          >Discover Our Story</BaseButton
        >
      </div>
    </div>
  </section>
</template>
