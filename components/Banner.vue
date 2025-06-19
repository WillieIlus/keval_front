<template>
  <div class="bg-neutral-100 px-12 py-4 mb-12 border-b-8 border-persian-green-600">
    <div class="container mx-auto flex justify-between items-center p-4">
      <div class="w-2/3 pr-8">
        <h2 class="text-3xl mb-4 text-neutral-700">{{ currentCta.CtaTopic }}</h2>
        <p class="mb-4 text-5xl font-bold text-neutral-800 leading-tight">
          {{ currentCta.CtaTitle }}
        </p>
        <p class="mb-8 text-2xl text-neutral-900">
          {{ currentCta.CtaText }}
        </p>
        <BaseButton
          class="bg-persian-green-600 hover:bg-persian-green-700 text-white text-lg font-semibold rounded-full py-3 px-8"
        >
          <!--
            Consider if 'amber-700' was an intentional accent. If so,
            you might have an outlined button style like:
            class="border-accent-500 text-accent-500 hover:bg-accent-100 text-lg font-semibold rounded-full py-3 px-8 border-2"
            Assuming 'accent-500' and 'accent-100' are defined in your theme.
            For a primary CTA, a filled button with the brand color is common.
          -->
          Get Started
        </BaseButton>
      </div>
      <div class="w-1/3 flex justify-center items-center">
        <!-- Image will now be dynamic -->
        <img :src="currentImageSrc" alt="Design Services Showcase" class="max-w-full h-auto -my-14">
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const images = [
  '/bag.png',     
  '/babywalker.png',
  '/phone.png',
  '/print.png',
  '/mac.png' 
];


const callToAction = [
  {
    CtaTitle: "You focus on your business, we’ll perfect the design.",
    CtaTopic: "Expert Design Services",
    CtaText: "Collaborate with our professional, talented designers to bring your brand to life – from handcrafted logos to custom marketing materials and beyond.",
  },
  {
    CtaTitle: "Premium Prints, Delivered Fast.",
    CtaTopic: "Quality Printing Solutions",
    CtaText: "From vibrant flyers to durable banners and elegant business cards, get high-quality prints that make an impact. Fast turnaround, exceptional results.",
  },
  {
    CtaTitle: "Your Vision, Our Expertise.",
    CtaTopic: "Custom Print & Design",
    CtaText: "Need something unique? We specialize in custom projects, turning your creative ideas into tangible, beautifully printed realities. Let's create together!",
  },
  {
    CtaTitle: "Make Every Impression Count.",
    CtaTopic: "Branding & Marketing Materials",
    CtaText: "Elevate your brand with cohesive marketing materials. We design and print everything from brochures and posters to promotional products.",
  },
  {
    CtaTitle: "Seamless Experience, Stunning Results.",
    CtaTopic: "Your One-Stop Print Shop",
    CtaText: "Enjoy a hassle-free process from design consultation to final print. We're committed to quality and customer satisfaction every step of the way.",
  }
];

const currentImageIndex = ref(0);
const currentCtaIndex = ref(0);
let intervalId = null;

const currentImageSrc = computed(() => images[currentImageIndex.value]);
const currentCta = computed(() => callToAction[currentCtaIndex.value]);

onMounted(() => {
  intervalId = setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
    currentCtaIndex.value = (currentCtaIndex.value + 1) % callToAction.length;
  }, 30000); // Change image every 3 seconds
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>
