<template>
  <div
    class="bg-gray-100 px-4 sm:px-12 lg:px-24 py-24 border-b border-persian-green-600 overflow-hidden"
  >
    <div
      class="container mx-auto flex flex-col md:flex-row md:justify-between items-center gap-12"
    >
      <!-- Text Section -->
      <div class="w-full md:w-2/3 text-center md:text-left space-y-6">
        <Transition name="slide-fade-text" mode="out-in">
          <div :key="currentCtaIndex">
            <h2 class="cta-topic text-base sm:text-lg md:text-xl text-gray-700">
              {{ currentCta.CtaTopic }}
            </h2>
            <p
              class="cta-title text-3xl sm:text-4xl md:text-5xl font-medium text-yellow-orange-500 leading-tight"
            >
              {{ currentCta.CtaTitle }}
            </p>
            <p class="cta-text text-base sm:text-lg md:text-xl text-gray-900">
              {{ currentCta.CtaText }}
            </p>
          </div>
        </Transition>
        <BaseButton
          rounded
          class="bg-yellow-orange-500 hover:bg-yellow-orange-700 text-white text-base sm:text-lg font-medium rounded-full py-2 px-6 sm:py-3 sm:px-8"
        >
          Get Started
        </BaseButton>
      </div>

      <!-- Image Section -->
      <div
        class="w-full md:w-1/3 flex justify-center items-center aspect-square md:aspect-[4/3]"
      >
        <Transition name="slide-fade-image" mode="out-in">
          <img
            :key="currentImageIndex"
            :src="currentImageSrc"
            alt="Design Services Showcase"
            class="w-auto h-[96%] object-contain"
          />
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
let intervalId: ReturnType<typeof setInterval> | null = null;

const currentImageSrc = computed(() => images[currentImageIndex.value]);
const currentCta = computed(() => callToAction[currentCtaIndex.value]);

onMounted(() => {
  intervalId = setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
    currentCtaIndex.value = (currentCtaIndex.value + 1) % callToAction.length;
  }, 9000);
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>

<style scoped>
/* Text Transition Animations */
.slide-fade-text-enter-active,
.slide-fade-text-leave-active {
  transition: opacity 0.6s ease;
}

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

.slide-fade-text-enter-from .cta-topic {
  opacity: 0;
  transform: translateY(-30px);
}
.slide-fade-text-enter-from .cta-title {
  opacity: 0;
  transform: translateX(-40px);
}
.slide-fade-text-enter-from .cta-text {
  opacity: 0;
  transform: translateY(30px);
}

.slide-fade-text-enter-active .cta-title {
  transition-delay: 0s;
}
.slide-fade-text-enter-active .cta-topic {
  transition-delay: 0.15s;
}
.slide-fade-text-enter-active .cta-text {
  transition-delay: 0.25s;
}

.slide-fade-text-leave-to .cta-topic,
.slide-fade-text-leave-to .cta-title,
.slide-fade-text-leave-to .cta-text {
  opacity: 0;
}

/* Image Transition Animations */
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
