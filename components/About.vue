<script setup lang="ts">
import BaseButton from "@/components/BaseButton.vue";
</script>

<template>
  <section class="bg-gray-100 py-24 sm:py-32 border-b-0 border-persian-green-600 overflow-hidden">
    <div class="container mx-auto px-4 sm:px-10 lg:px-32 flex flex-col lg:flex-row items-center gap-16">
      <!-- Image Column -->
      <div class="relative w-full lg:w-1/2 flex justify-center items-center aspect-[4/3]">
        <div class="relative w-[96%] h-[96%] max-w-lg">
          <!-- Decorative background box -->
          <div
            class="absolute -top-4 -left-4 w-full h-full bg-persian-green-300 rounded-xl transform -rotate-3 transition-transform duration-500 hover:rotate-0"
          ></div>
          <!-- Actual Image -->
          <img
            src="/3d-rendering-chair-melting.jpg"
            alt="Keval Investments Team at work"
            class="relative w-full h-full object-contain rounded-xl shadow-2xl z-10"
          />
        </div>
      </div>

      <!-- Text Column -->
      <div class="w-full lg:w-1/2 text-center lg:text-left">
        <h2 class="text-xl sm:text-lg md:text-xl mb-4 text-gray-700 uppercase font-semibold tracking-wide">
          Who We Are
        </h2>
        <p class="mb-4 text-3xl sm:text-4xl md:text-5xl font-medium text-yellow-orange-500 leading-tight">
          Your Partner in Design, Print & Branding
        </p>
        <p class="mb-8 text-base sm:text-lg md:text-xl lg:text-xl text-gray-900 leading-relaxed">
          Keval Investments Limited is a leading company dedicated to transforming ideas
          into visually stunning and impactful experiences. With a focus on creativity,
          quality, and customer satisfaction, we deliver exceptional results every time.
        </p>
        <BaseButton
          to="/about"
                  rounded

          class="bg-yellow-orange-500 hover:bg-yellow-orange-700 text-white text-base sm:text-lg font-medium rounded-full py-2 px-6 sm:py-3 sm:px-8 transition-transform transform hover:scale-105"
        >
          Discover Our Story
        </BaseButton>
      </div>
    </div>
  </section>
</template>
