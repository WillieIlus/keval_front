<template>
  <!-- Outer container: Adjusted padding and margin for mobile-first -->
  <div
    class="bg-gray-100 px-4 sm:px-6 md:px-8 lg:px-12 py-4 mb-8 md:mb-12 border-b-8 border-persian-green-600 overflow-hidden"
  >
    <!-- Flex container: Stacks vertically on mobile, row layout on medium screens and up -->
    <div
      class="container mx-auto flex flex-col md:flex-row md:justify-between items-center p-4"
    >
      <!-- Text content: Full width on mobile, 2/3 on medium screens. Text centered on mobile, left-aligned on medium+ -->
      <div class="w-full md:w-2/3 md:pr-8 text-center md:text-left mb-8 md:mb-0">
        <Transition name="slide-fade-text" mode="out-in">
          <div :key="currentCtaIndex">
            <!-- Heading: Responsive text size -->
            <h2 class="cta-topic text-xl sm:text-2xl md:text-3xl mb-4 text-persian-green-700">
              {{ currentCta.CtaTopic }}
            </h2>
            <!-- Main CTA Title: Responsive text size -->
            <p
              class="cta-title mb-4 text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-orange-500 leading-tight"
            >
              {{ currentCta.CtaTitle }}
            </p>
            <!-- CTA Text: Responsive text size -->
            <p
              class="cta-text mb-8 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-900"
            >
              {{ currentCta.CtaText }}
            </p>
          </div>
        </Transition>
        <BaseButton
          rounded
          class="bg-yellow-orange-500 hover:bg-yellow-orange-700 text-white text-base sm:text-lg font-semibold rounded-full py-2 px-6 sm:py-3 sm:px-8"
        >
          Get Started
        </BaseButton>
      </div>
      <!-- Image container: Given a fixed aspect ratio to prevent height changes. -->
      <div
        class="w-full md:w-1/3 flex justify-center items-center mt-6 md:mt-0 aspect-square md:aspect-[4/3]"
      >
        <Transition name="slide-fade-image" mode="out-in">
          <!-- Image: Fills the container, maintaining aspect ratio with object-cover. -->
          <img
            :key="currentImageIndex"
            :src="currentImageSrc"
            alt="Design Services Showcase"
            class="w-full h-full object-contain"
          />
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const images = ["/bag.png", "/babywalker.png", "/phone.png", "/print.png", "/mac.png"];

const callToAction = [
  {
    CtaTitle: "You focus on your business, we’ll perfect the design.",
    CtaTopic: "Expert Design Services",
    CtaText:
      "Collaborate with our professional, talented designers to bring your brand to life – from handcrafted logos to custom marketing materials and beyond.",
  },
  {
    CtaTitle: "Premium Prints, Delivered Fast.",
    CtaTopic: "Quality Printing Solutions",
    CtaText:
      "From vibrant flyers to durable banners and elegant business cards, get high-quality prints that make an impact. Fast turnaround, exceptional results.",
  },
  {
    CtaTitle: "Your Vision, Our Expertise.",
    CtaTopic: "Custom Print & Design",
    CtaText:
      "Need something unique? We specialize in custom projects, turning your creative ideas into tangible, beautifully printed realities. Let's create together!",
  },
  {
    CtaTitle: "Make Every Impression Count.",
    CtaTopic: "Branding & Marketing Materials",
    CtaText:
      "Elevate your brand with cohesive marketing materials. We design and print everything from brochures and posters to promotional products.",
  },
  {
    CtaTitle: "Seamless Experience, Stunning Results.",
    CtaTopic: "Your One-Stop Print Shop",
    CtaText:
      "Enjoy a hassle-free process from design consultation to final print. We're committed to quality and customer satisfaction every step of the way.",
  },
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
  }, 9000); // Change image and CTA every 9 seconds
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>

<style scoped>
/* Staggered text animation */
.slide-fade-text-enter-active,
.slide-fade-text-leave-active {
  /* Parent transition for class toggling. Duration doesn't matter much here. */
  transition: opacity 0.6s ease;
}

/* Define transitions for children */
.slide-fade-text-enter-active .cta-title,
.slide-fade-text-enter-active .cta-topic,
.slide-fade-text-enter-active .cta-text {
  transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
}

.slide-fade-text-leave-active .cta-title,
.slide-fade-text-leave-active .cta-topic,
.slide-fade-text-leave-active .cta-text {
  transition: opacity 0.2s ease-in;
}

/* ENTER state for children */
.slide-fade-text-enter-from .cta-topic {
  opacity: 0;
  transform: translateY(-30px);
}
.slide-fade-text-enter-from .cta-title {
  opacity: 0;
  transform: translateX(-40px); /* From the side */
}
.slide-fade-text-enter-from .cta-text {
  opacity: 0;
  transform: translateY(30px);
}

/* Stagger the enter animation with delays */
.slide-fade-text-enter-active .cta-title {
  transition-delay: 0s; /* Title is first */
}
.slide-fade-text-enter-active .cta-topic {
  transition-delay: 0.15s; /* Topic is second */
}
.slide-fade-text-enter-active .cta-text {
  transition-delay: 0.25s; /* Text is third */
}

/* LEAVE state for children (simple fade) */
.slide-fade-text-leave-to .cta-topic,
.slide-fade-text-leave-to .cta-title,
.slide-fade-text-leave-to .cta-text {
  opacity: 0;
}

/* Image animation: slide in from right, fade in */
.slide-fade-image-enter-active {
  transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
}
.slide-fade-image-leave-active {
  transition: all 0.4s cubic-bezier(0.5, 0, 0.75, 0);
}
.slide-fade-image-enter-from {
  opacity: 0;
  transform: translateX(50px) scale(0.95);
}
.slide-fade-image-leave-to {
  opacity: 0;
  transform: translateX(-50px) scale(0.95);
}
</style>
