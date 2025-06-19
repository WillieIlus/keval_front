<template>
  <section class="container mx-auto py-12">
    <h2 class="text-3xl font-bold text-gray-800 text-center mb-8">Frequently Asked Questions</h2>
    <div class="space-y-4">
      <div v-for="item in localItems" :key="item.id" class="border-b border-gray-300 last:border-b-0">
        <div
          class="flex justify-between items-center p-6 cursor-pointer"
          @click="toggleAnswer(item.id)"
          role="button"
          :aria-expanded="item.isOpen.toString()"
          :aria-controls="'faq-answer-' + item.id"
        >
          <h3 class="text-xl font-semibold text-gray-700">{{ item.question }}</h3>
          <span
            class="transform transition-transform duration-200 ease-in-out"
            :class="{ 'rotate-180': item.isOpen }"
          >
            <ChevronDownIcon class="w-6 h-6" aria-hidden="true" />
          </span>
        </div>
        <div
          v-if="item.isOpen"
          :id="'faq-answer-' + item.id"
          class="p-6 pt-0 text-gray-600"
          role="region"
        >
          <p>{{ item.answer }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from 'vue';
import { ChevronDownIcon } from '@heroicons/vue/24/solid';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
  is_active?: boolean; // Optional, based on your API response
  order?: number; // Optional, based on your API response
  isOpen?: boolean; // Will be added locally
}

const props = defineProps({
  faqItems: {
    type: Array as () => FaqItem[], // Correct way to type array props
    required: true
  }
});

const emit = defineEmits(['toggle']);

const localItems = ref<FaqItem[]>([]); // Initialize with an empty array of FaqItem

watch(
  () => props.faqItems,
  (newItems) => {

    if (Array.isArray(newItems)) {
      localItems.value = newItems.map((item: FaqItem) => ({
        ...item,
        isOpen: false // Initialize all FAQ items as closed
      }));
    } else {
      localItems.value = []; // Default to an empty array if newItems is not an array
    }
  },
  { immediate: true } // Run the watcher immediately on component mount
);

function toggleAnswer(id: number) {
  const item = localItems.value.find((i: FaqItem) => i.id === id);
  if (item) {
    item.isOpen = !item.isOpen;
  }
  emit('toggle', id);
}
</script>