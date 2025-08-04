<template>
  <section class="bg-gray-100 py-24 sm:py-32 px-4 sm:px-10 lg:px-32">
    <div class="container mx-auto flex flex-col md:flex-row gap-12 items-center md:items-start">
      <!-- Quote Form Card -->
      <div class="w-full md:w-1/2">
        <div class="bg-persian-green-600 text-white rounded-xl shadow-2xl overflow-hidden">
          <div class="px-6 py-5 border-b border-persian-green-500">
            <h2 class="text-xl font-semibold text-center md:text-left">Get a Quick Quote</h2>
          </div>
          <div class="px-6 py-6">
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div>
                <label for="name" class="block text-persian-green-100 text-sm font-semibold mb-1">Your Name:</label>
                <BaseInput
                  type="text"
                  id="name"
                  v-model="formData.name"
                  placeholder="Enter your name"
                  class="w-full bg-persian-green-500 placeholder-persian-green-300 text-white border border-persian-green-400 focus:ring-2 focus:ring-persian-green-300 focus:border-persian-green-300 rounded-lg py-3 px-4"
                />
              </div>
              <div>
                <label for="email" class="block text-persian-green-100 text-sm font-semibold mb-1">Your Email:</label>
                <BaseInput
                  type="email"
                  id="email"
                  v-model="formData.email"
                  placeholder="Enter your email"
                  class="w-full bg-persian-green-500 placeholder-persian-green-300 text-white border border-persian-green-400 focus:ring-2 focus:ring-persian-green-300 focus:border-persian-green-300 rounded-lg py-3 px-4"
                />
              </div>
              <BaseButton
                type="submit"
                class="w-full bg-yellow-orange-500 hover:bg-yellow-orange-700 text-white text-base font-semibold py-3 px-6 rounded-full transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-orange-400"
              >
                Submit
              </BaseButton>
            </form>
          </div>
        </div>
      </div>

      <!-- Text Content -->
      <div class="w-full md:w-1/2 text-center md:text-left">
        <h2 class="text-3xl sm:text-4xl font-bold text-yellow-orange-500 mb-4">
          We are the best
        </h2>
        <p class="text-gray-800 text-base sm:text-lg leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ea cumque quos quis esse? Ipsum similique nobis labore voluptates eligendi id distinctio sapiente in accusantium minima repellat, tempora aspernatur temporibus.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import BaseInput from './BaseInput.vue';
import BaseButton from './BaseButton.vue';

export default {
  components: {
    BaseInput,
    BaseButton
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
      console.log('Form submitted:', this.formData);
      alert(`Form Submitted!\nName: ${this.formData.name}\nEmail: ${this.formData.email}`);
    }
  }
};
</script>

<style scoped>
/* All styling handled via Tailwind CSS */
</style>
