<template>
  <section class="services-section container mx-auto py-8 md:py-12">
    <h2 class="text-gray-800 font-bold text-2xl sm:text-3xl mb-6 md:mb-8 text-center">Our Services</h2>
    <div class="relative">
      <!-- On mobile, this will be a scrollable container. On md+, it's the viewport for the JS carousel. -->
      <div
        class="carousel-viewport overflow-x-auto md:overflow-hidden scroll-smooth scroll-snap-type-x-mandatory"
        ref="carouselViewport"
      >
        <div
          class="carousel-track flex"
          :class="{ 'md:transition-transform md:duration-500 md:ease-in-out': isDesktopView }"
          :style="isDesktopView ? { transform: `translateX(${translateX}px)` } : {}"
          role="listbox"
          aria-label="Services Carousel"
        >
          <!-- Responsive item widths -->
          <div v-for="(service) in services" :key="service.name"
               class="service-item-wrapper flex-shrink-0 px-2 scroll-snap-align-start
                      w-4/5 sm:w-2/5 md:w-1/3 lg:w-1/4 xl:w-1/5"
               ref="serviceItems">
            <div class="service-content bg-gray-50 rounded-lg shadow-md p-4 text-center h-full flex flex-col" role="option" :aria-label="service.name">
              <img :src="service.image" :alt="`${service.name} service`" class="w-full h-32 sm:h-36 md:h-40 object-cover rounded-md mb-4" />
              <h3 class="font-semibold text-gray-700 text-base sm:text-lg mt-auto">{{ service.name }}</h3>
            </div>
          </div>
        </div>
      </div>
      <!-- Left Arrow: Visible on md and up -->
      <button @click="scrollLeft"
              :disabled="!isDesktopView || services.length <= currentVisibleCount"
              aria-label="Previous service"
              class="arrow hidden md:flex absolute top-1/2 transform -translate-y-1/2 left-0 sm:left-2 z-20
                     bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-full shadow-lg w-10 h-10 flex items-center justify-center
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-persian-green-500
                     disabled:opacity-50 disabled:cursor-not-allowed">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <!-- Right Arrow: Visible on md and up -->
      <button @click="scrollRight"
              :disabled="!isDesktopView || services.length <= currentVisibleCount"
              aria-label="Next service"
              class="arrow hidden md:flex absolute top-1/2 transform -translate-y-1/2 right-0 sm:right-2 z-20
                     bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-full shadow-lg w-10 h-10 flex items-center justify-center
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-persian-green-500
                     disabled:opacity-50 disabled:cursor-not-allowed">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      services: [
        { name: "Business Cards", image: "/bcards.png" },
        { name: "Flyers & Brochures", image: "/flyer.png" }, // Assuming flyers.jpg exists
        { name: "Posters", image: "/poster.png" },
        { name: "Banners", image: "/backdrop.png" },
        { name: "Stickers", image: "/bottle.png" },
        { name: "Apparel Printing", image: "/print.png" },
        { name: "Signage", image: "/roll.png" },
        { name: "Booklets & Books", image: "/diary.png" },
      ],
      currentIndex: 0,
      currentVisibleCount: 1, // Number of items visible for desktop carousel logic
      translateX: 0,
      itemWidth: 0,
      isDesktopView: false, // Controls JS carousel behavior
    };
  },
  computed: {
    // Max starting index for the carousel to show a full "page" of items
    maxStartIndex() {
      if (!this.isDesktopView || this.services.length <= this.currentVisibleCount) {
        return 0;
      }
      return this.services.length - this.currentVisibleCount;
    }
  },
  methods: {
    scrollLeft() {
      if (!this.isDesktopView || this.services.length <= this.currentVisibleCount) return;

      this.currentIndex--;
      if (this.currentIndex < 0) {
        this.currentIndex = this.maxStartIndex; // Loop to the end
      }
      this.updateTranslateX();
    },
    scrollRight() {
      if (!this.isDesktopView || this.services.length <= this.currentVisibleCount) return;

      this.currentIndex++;
      if (this.currentIndex > this.maxStartIndex) {
        this.currentIndex = 0; // Loop to the beginning
      }
      this.updateTranslateX();
    },
    updateTranslateX() {
      if (this.isDesktopView) {
        this.translateX = -this.itemWidth * this.currentIndex;
      } else {
        this.translateX = 0; // No translation for mobile native scroll
      }
    },
    handleResize() {
      // Check for window before accessing to prevent SSR errors
      if (typeof window === 'undefined') return;

      this.isDesktopView = window.innerWidth >= 768; // md breakpoint

      if (this.isDesktopView) {
        if (window.innerWidth >= 1280) { // xl
          this.currentVisibleCount = 5;
        } else if (window.innerWidth >= 1024) { // lg
          this.currentVisibleCount = 4;
        } else { // md
          this.currentVisibleCount = 3;
        }
      } else {
        // For mobile, visibleCount isn't strictly for display but can be 1 for logic if needed
        // However, with native scroll, it's less critical for display.
        // Let's set it to a value that makes sense if we were to paginate mobile, e.g. 1 or 2.
        // Or, just ensure currentIndex is reset if view changes.
        this.currentVisibleCount = 1; // Or adjust based on sm breakpoint if desired
      }

      this.$nextTick(() => {
        const items = this.$refs.serviceItems;
        if (items && items.length > 0) {
          const firstItem = items[0];
          // offsetWidth includes element's padding and border, but not margin.
          // Since .service-item-wrapper is w-1/5 and has px-2 (padding),
          // its offsetWidth is the correct width for one "slot".
          this.itemWidth = firstItem.offsetWidth;
          // Ensure currentIndex is valid after resize
          if (this.isDesktopView && this.currentIndex > this.maxStartIndex) {
            this.currentIndex = this.maxStartIndex;
          } else if (!this.isDesktopView) {
            this.currentIndex = 0; // Reset for mobile
          }
          this.updateTranslateX();
        }
      });
    },
  },
  mounted() {
    this.handleResize(); // Initial calculation
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>

<style scoped>
/* Styles are primarily handled by Tailwind CSS classes in the template. */
/* Keeping this block for any future highly specific scoped styles if necessary. */
.carousel-viewport {
  /* Tailwind classes handle overflow now: overflow-x-auto md:overflow-hidden */
  /* scroll-snap-type-x-mandatory is added via Tailwind for mobile */
}

.carousel-track {
  display: flex;
  /* Transition is now conditional via Tailwind: md:transition-transform ... */
}
/* Hide scrollbar for a cleaner look on mobile, if desired */
.carousel-viewport::-webkit-scrollbar { display: none; } /* Chrome, Safari, Opera */
.carousel-viewport { -ms-overflow-style: none; scrollbar-width: none; } /* IE, Edge, Firefox */
</style>
