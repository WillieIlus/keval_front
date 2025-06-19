<template>
  <div class="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
    <!-- Container: flex-col on mobile, md:flex-row on medium screens up. items-center for mobile, md:items-start for desktop. -->
    <div class="container mx-auto flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
      <!-- Left Column: Card -->
      <!-- w-full on mobile, md:w-1/2 on medium. mb-6 for spacing on mobile, md:mb-0. -->
      <div class="w-full md:w-1/2 mb-6 md:mb-0">
        <!-- Card: Made persian green, text white. -->
        <div class="bg-persian-green-600 text-white rounded-lg shadow-xl overflow-hidden">
          <!-- Card Header: Responsive padding, border for separation. Text centered on mobile. -->
          <div class="p-4 md:p-5 border-b border-persian-green-500">
            <h2 class="text-xl font-semibold text-center md:text-left">Get a Quick Quote</h2>
          </div>
          <!-- Card Body: Responsive padding. -->
          <div class="p-4 md:p-6">
            <form @submit.prevent="handleSubmit" class="space-y-4">
              <div>
                <label for="name" class="block text-persian-green-100 text-sm font-bold mb-1">Your Name:</label>
                <!-- BaseInput: Assuming it can be styled for dark backgrounds or has a dark variant.
                     Example classes for dark theme: -->
                <BaseInput
                  type="text"
                  id="name"
                  v-model="formData.name"
                  placeholder="Enter your name"
                  class="w-full bg-persian-green-500 placeholder-persian-green-300 text-white border-persian-green-400 focus:ring-persian-green-300 focus:border-persian-green-300 rounded-md py-2 px-3"
                />
              </div>
              <div>
                <label for="email" class="block text-persian-green-100 text-sm font-bold mb-1">Your Email:</label>
                <BaseInput
                  type="email"
                  id="email"
                  v-model="formData.email"
                  placeholder="Enter your email"
                  class="w-full bg-persian-green-500 placeholder-persian-green-300 text-white border-persian-green-400 focus:ring-persian-green-300 focus:border-persian-green-300 rounded-md py-2 px-3"
                />
              </div>
              <BaseButton
                type="submit"
                class="w-full bg-yellow-orange-500 hover:bg-yellow-orange-600 text-persian-green-900 font-bold py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-orange-400 transition duration-150 ease-in-out"
              >
                Submit
              </BaseButton>
            </form>
          </div>
        </div>
      </div>
      <!-- Right Column: Text -->
      <!-- w-full on mobile, md:w-1/2 on medium. Text centered on mobile, md:text-left. -->
      <div class="w-full md:w-1/2 text-center md:text-left">
        <!-- Responsive heading -->
        <h1 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
          We are the best
        </h1>
        <!-- Responsive paragraph -->
        <p class="text-base sm:text-lg text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ea cumque quos quis esse? Ipsum similique nobis labore voluptates eligendi id distinctio sapiente in accusantium minima repellat, tempora aspernatur temporibus.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import BaseInput from './BaseInput.vue';
import BaseButton from './BaseButton.vue'; // Import BaseButton

export default {
  components: {
    BaseInput,
    BaseButton // Register BaseButton
  },
  data() {
    return {
      formData: {
        name: '',
        email: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      // Handle form submission logic, e.g., send data to an API
      console.log('Form submitted:', this.formData);
      alert(`Form Submitted!\nName: ${this.formData.name}\nEmail: ${this.formData.email}`);
      // You might want to reset the form or navigate the user elsewhere
      // this.formData.name = '';
      // this.formData.email = '';
    }
  }
};
</script>

<style scoped>
/* All custom styles have been removed and replaced with Tailwind CSS classes. */
/* If BaseInput requires specific global styles, they should be handled outside this component or within BaseInput itself. */
</style>