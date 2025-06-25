<template>
  <section class="py-16 px-6 bg-gray-50">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-persian-green-700">Get in Touch</h1>
        <p class="mt-4 text-lg text-gray-600">
          We're here to help and answer any question you might have. We look forward to
          hearing from you!
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 items-start">
        <div class="bg-white p-8 rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold mb-6 text-gray-800">Send us a Message</h2>
          <BaseForm @submit.prevent="submitForm" class="space-y-6">
            <BaseFormGroup label="Your Name" id="name">
              <BaseInput
                id="name"
                name="name"
                type="text"
                placeholder="e.g. Jane Doe"
                required
                v-model="form.name"
              />
            </BaseFormGroup>

            <BaseFormGroup label="Email Address" id="email">
              <BaseEmailInput
                id="email"
                name="email"
                placeholder="you@example.com"
                required
                v-model="form.email"
              />
            </BaseFormGroup>

            <BaseFormGroup label="Your Message" id="message">
              <BaseInput
                id="message"
                name="message"
                as="textarea"
                placeholder="Let us know how we can help..."
                :rows="5"
                required
                v-model="form.message"
              />
            </BaseFormGroup>

            <BaseButton
              type="submit"
              label="Send Message"
              :loading="loading"
              :disabled="loading"
              >Send Message</BaseButton
            >
          </BaseForm>
        </div>

        <div class="bg-white p-8 rounded-lg shadow-md space-y-6">
          <h2 class="text-2xl font-semibold mb-6 text-gray-800">Contact Information</h2>
          <div class="flex items-start space-x-4">
            <div
              class="flex-shrink-0 h-12 w-12 bg-persian-green-100 text-persian-green-600 rounded-full flex items-center justify-center"
            >
              <PhoneIcon class="h-6 w-6" />
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-700">Phone</h3>
              <p class="text-gray-600">+254 712 345 678</p>
            </div>
          </div>
          <div class="flex items-start space-x-4">
            <div
              class="flex-shrink-0 h-12 w-12 bg-persian-green-100 text-persian-green-600 rounded-full flex items-center justify-center"
            >
              <EnvelopeIcon class="h-6 w-6" />
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-700">Email</h3>
              <p class="text-gray-600">hello@yourbrand.co.ke</p>
            </div>
          </div>
          <div class="flex items-start space-x-4">
            <div
              class="flex-shrink-0 h-12 w-12 bg-persian-green-100 text-persian-green-600 rounded-full flex items-center justify-center"
            >
              <MapPinIcon class="h-6 w-6" />
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-700">Location</h3>
              <p class="text-gray-600">Nairobi CBD, Kenya</p>
            </div>
          </div>

          <div class="mt-8">
            <BaseLocation />
          </div>
        </div>
      </div>
    </div>

    <BaseToast
      v-if="showToast"
      :message="toastMessage"
      :type="toastType"
      @close="showToast = false"
      class="mt-4"
    />
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
// Import Heroicons
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/vue/24/outline";
// Assuming useHead is from @vueuse/head or a similar composable

const form = ref({ name: "", email: "", message: "" });

// State for submission status and toast
const loading = ref(false);
const showToast = ref(false);
const toastMessage = ref("");
const toastType = ref<"success" | "error" | "info">("success"); // Define possible types for the toast

const submitForm = async () => {
  if (loading.value) return;

  loading.value = true;

  try {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Contact Message Sent:", form.value);

    // Set success message and type for toast
    toastMessage.value = "Message sent successfully. We'll respond shortly!";
    toastType.value = "success";
    showToast.value = true;

    // Reset form
    form.value = { name: "", email: "", message: "" };

    // Hide toast after 5 seconds
    setTimeout(() => {
      showToast.value = false;
    }, 5000);
  } catch (error) {
    console.error("Form submission error:", error);
    // Set error message and type for toast
    toastMessage.value = "Failed to send message. Please try again later.";
    toastType.value = "error";
    showToast.value = true; // Show toast for error as well
  } finally {
    loading.value = false;
  }
};

// Set the page head meta information
useHead({
  title: "Contact Us - We’d Love to Hear From You",
  meta: [
    {
      name: "description",
      content: "Get in touch with us for any questions or inquiries.",
    },
  ],
});
</script>
