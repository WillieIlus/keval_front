<script setup lang="ts">
useHead({
  title: "About Us - Expert Design Services",
});
</script>

<template>
  <section class="space-y-12">

    <!-- Row 1 -->
    <div class="bg-[color:var(--color-persian-green-50)] py-12 px-6">
      <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 class="text-2xl font-bold mb-4">Who We Are</h2>
          <p class="text-gray-700 mb-4">
            We are a passionate team blending creativity with precision to craft impactful design and print solutions tailored to your brand.
          </p>
          <button class="bg-[color:var(--color-persian-green-500)] hover:bg-[color:var(--color-persian-green-600)] text-white px-4 py-2 rounded-xl">
            Learn More
          </button>
        </div>
        <img src="https://via.placeholder.com/500x300?text=Teamwork" alt="Team" class="w-full rounded-xl shadow-md" />
      </div>
    </div>

    <!-- Row 2 -->
    <div class="bg-[color:var(--color-gray-100)] py-12 px-6">
      <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <img src="https://via.placeholder.com/500x300?text=Design+Process" alt="Design Process" class="w-full rounded-xl shadow-md order-2 md:order-1" />
        <div class="order-1 md:order-2">
          <h2 class="text-2xl font-bold mb-4">What We Do</h2>
          <p class="text-gray-700 mb-4">
            From logo creation to full-scale branding kits, our goal is to ensure your message is communicated clearly and beautifully through every printed piece.
          </p>
          <button class="bg-[color:var(--color-gray-500)] hover:bg-[color:var(--color-gray-600)] text-white px-4 py-2 rounded-xl">
            Learn More
          </button>
        </div>
      </div>
    </div>

    <!-- Row 3 -->
    <div class="bg-[color:var(--color-yellow-orange-50)] py-12 px-6">
      <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 class="text-2xl font-bold mb-4">Why Choose Us</h2>
          <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Creative and professional designers</li>
            <li>Reliable turnaround times</li>
            <li>Affordable pricing</li>
            <li>Dedicated support</li>
          </ul>
          <button class="bg-[color:var(--color-yellow-orange-500)] hover:bg-[color:var(--color-yellow-orange-600)] text-white px-4 py-2 rounded-xl">
            Learn More
          </button>
        </div>
        <img src="https://via.placeholder.com/500x300?text=Why+Us" alt="Why Us" class="w-full rounded-xl shadow-md" />
      </div>
    </div>

  </section>
</template>
