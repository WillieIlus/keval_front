<template>
  <div class="bg-gray-50">

    <section class="container py-16 px-6 max-w-5xl mx-auto">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-800 mb-3">Terms & Conditions</h1>
        <p class="text-lg text-gray-600">Please review our terms before using our services.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <!-- Term 1: Turnaround -->
        <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 class="text-2xl font-semibold text-persian-green-700 mb-4">Printing Turnaround</h2>
          <p class="text-gray-700 leading-relaxed">Most print jobs require 2–3 working days. Rush orders may incur additional charges.</p>
        </div>

        <!-- Term 2: Payment -->
        <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 class="text-2xl font-semibold text-persian-green-700 mb-4">Payment</h2>
          <p class="text-gray-700 leading-relaxed">Full payment is required before production begins unless otherwise agreed in writing.</p>
        </div>

        <!-- Term 3: Revisions -->
        <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 class="text-2xl font-semibold text-persian-green-700 mb-4">Revisions</h2>
          <p class="text-gray-700 leading-relaxed">Design packages include 2 free revisions. Additional changes may be billed separately.</p>
        </div>

        <!-- Term 4: Refunds -->
        <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 class="text-2xl font-semibold text-persian-green-700 mb-4">Refunds</h2>
          <p class="text-gray-700 leading-relaxed">Due to the custom nature of our services, we do not offer refunds once printing has begun.</p>
        </div>

        <!-- Term 5: Delivery -->
        <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 class="text-2xl font-semibold text-persian-green-700 mb-4">Delivery</h2>
          <p class="text-gray-700 leading-relaxed">We deliver nationwide via courier. Delivery fees vary by location.</p>
        </div>

        <!-- Term 6: Intellectual Property -->
        <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 class="text-2xl font-semibold text-persian-green-700 mb-4">Intellectual Property</h2>
          <p class="text-gray-700 leading-relaxed">Final designs remain the property of the client once payment is completed.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Terms and Conditions - Please Read Carefully' })
</script>
