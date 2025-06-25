<template>
  <Banner />
  <Services />
  <Stats/>
  <FaqSection :faq-items="productsStore.getAllFaqs" @toggle="handleToggle" />
  <Quote />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useProductsStore } from '~/stores/products'; // Adjust path if necessary

definePageMeta({
  layout: 'default',
  // middleware: 'auth'
});

const productsStore = useProductsStore();

onMounted(async () => {
  // Fetch all product data, including FAQs, when the component mounts
  if (productsStore.getAllFaqs.length === 0 && !productsStore.loading) {
    await productsStore.fetchAllProductData();
  }
});

function handleToggle(id: number) {
  console.log('Toggled FAQ ID:', id);
  // You could add logic here to track which FAQs are opened/closed,
  // or emit events further up if needed for analytics, etc.
}
</script>