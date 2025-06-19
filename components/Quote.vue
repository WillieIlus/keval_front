<template>
  <div class="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8"> 
    <div class="container mx-auto flex flex-row gap-8 items-start">
      <!-- Left Column: Card -->
      <div class="w-1/2">
        <div class="bg-white rounded-lg shadow-xl overflow-hidden border border-persian-green-600">
          <div class="bg-persian-green-600 text-white p-5">
            <h2 class="text-xl font-semibold">Get a Quick Quote</h2> 
          </div>
          <div class="p-6">
            <form @submit.prevent="handleSubmit">
              <div class="mb-4">
                <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Your Name:</label>
                <BaseInput type="text" id="name" v-model="formData.name" placeholder="Enter your name" class="w-full"/>
              </div>
              <div class="mb-6">
                <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Your Email:</label>
                <BaseInput type="email" id="email" v-model="formData.email" placeholder="Enter your email" class="w-full"/>
              </div>
              <BaseButton
                type="submit"
                class="w-full bg-persian-green-600 hover:bg-persian-green-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-persian-green-500 transition duration-150 ease-in-out"
              >
                Submit
              </BaseButton>
            </form>
          </div>
        </div>
      </div>
      <!-- Right Column: Text -->
      <div class="w-1/2 pt-5">
        <h1 class="text-4xl font-bold text-gray-800 mb-6">
          We are the best
        </h1>
        <p class="text-lg text-gray-700 leading-relaxed">
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