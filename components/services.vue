<template>
  <section class="services-section container mx-auto py-12">
    <h2 class="text-gray-800 font-bold text-3xl mb-8 text-center">Our Services</h2>
    <div class="relative">
      <div class="carousel-viewport overflow-hidden">
        <div class="carousel-track flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(${translateX}px)` }" role="listbox" aria-label="Services Carousel">
          <div v-for="(service) in services" :key="service.name" class="service-item-wrapper w-1/5 flex-shrink-0 px-2" ref="serviceItems">
            <div class="service-content bg-gray-50 rounded-lg shadow-md p-4 text-center h-full flex flex-col" role="option" :aria-label="service.name">
              <img :src="service.image" :alt="`${service.name} service`" class="w-full h-40 object-cover rounded-md mb-4" />
              <h3 class="font-semibold text-gray-700 text-lg mt-auto">{{ service.name }}</h3>
            </div>
          </div>
        </div>
      </div>
      <!-- Left Arrow -->
      <button @click="scrollLeft"
              :disabled="services.length <= visibleCount"
              aria-label="Previous service"
              class="arrow absolute top-1/2 transform -translate-y-1/2 left-2 z-20
                     bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-full shadow-lg w-10 h-10 flex items-center justify-center
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-persian-green-500
                     disabled:opacity-50 disabled:cursor-not-allowed">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <!-- Right Arrow -->
      <button @click="scrollRight"
              :disabled="services.length <= visibleCount"
              aria-label="Next service"
              class="arrow absolute top-1/2 transform -translate-y-1/2 right-2 z-20
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
      visibleCount: 5,
      translateX: 0,
      itemWidth: 0, // Renamed from boxWidth, will be calculated
    };
  },
  methods: {
    scrollLeft() {
      if (this.services.length <= this.visibleCount) return; // Should not be callable if button is disabled

      this.currentIndex--;
      if (this.currentIndex < 0) {
        // Was at the first item (index 0), loop to the last possible starting index
        this.currentIndex = this.services.length - this.visibleCount;
      }
      this.updateTranslateX();
    },
    scrollRight() {
      if (this.services.length <= this.visibleCount) return; // Should not be callable if button is disabled

      this.currentIndex++;
      // If currentIndex exceeds the last possible starting index for a full view
      if (this.currentIndex > this.services.length - this.visibleCount) {
        // Loop back to the beginning
        this.currentIndex = 0;
      } else if (this.services.length > this.visibleCount && this.currentIndex === this.services.length - this.visibleCount) {
        // This condition ensures that if we are exactly at the last page, it's a valid state.
        // The next click would loop due to the condition above.
        // If we are already at the last possible starting index, a normal increment would make it loop.
        // This part of the 'else if' might be redundant if the > condition handles it,
        // but it's kept for clarity that this.currentIndex can indeed be services.length - visibleCount.
        // The primary looping is handled by `this.currentIndex > this.services.length - this.visibleCount`
      }
      this.updateTranslateX();
    },
    updateTranslateX() {
      this.translateX = -this.itemWidth * this.currentIndex;
    },
    calculateItemWidth() { // Renamed for clarity
      this.$nextTick(() => { 
        const items = this.$refs.serviceItems;
        if (items && items.length > 0) {
          const firstItem = items[0];
          // offsetWidth includes element's padding and border, but not margin.
          // Since .service-item-wrapper is w-1/5 and has px-2 (padding),
          // its offsetWidth is the correct width for one "slot".
          this.itemWidth = firstItem.offsetWidth;
          this.updateTranslateX(); // Recalculate position based on new itemWidth
        }
      });
    },
  },
  mounted() {
    this.calculateItemWidth();
    window.addEventListener('resize', this.calculateItemWidth);
  },
  beforeUnmount() { 
    window.removeEventListener('resize', this.calculateItemWidth);
  },
};
</script>

<style scoped>
/* Styles are primarily handled by Tailwind CSS classes in the template. */
/* Keeping this block for any future highly specific scoped styles if necessary. */

.carousel-viewport {
  overflow: hidden;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}
</style>
