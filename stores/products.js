// stores/products.js
import { defineStore } from 'pinia';
import { ref, computed } from 'vue'; // Import ref and computed for reactivity
import { BASE_URL } from './base';

export const useProductsStore = defineStore('products', () => {
  // State
  const productCategories = ref([]);
  const productTypes = ref([]);
  const paperSizes = ref([]);
  const paperWeights = ref([]);
  const finishingOptions = ref([]);
  const printingOptions = ref([]);
  const laminationTypes = ref([]);
  const productConfigurations = ref([]);
  const designPackages = ref([]);
  const portfolioItems = ref([]);
  const testimonials = ref([]);
  const faqs = ref([]); // This will hold your FAQ data
  const loading = ref(false);
  const error = ref(null);

  // Actions
  async function fetchAllProductData() {
    loading.value = true;
    error.value = null;
    // const config = useRuntimeConfig(); // Removed as BASE_URL is used directly
    try {
      // Use Promise.all to fetch multiple resources concurrently
      const [
        categories, types, sizes, weights, finishes, prints, laminations,
        configs, designs, portfolio, testimonialsData, faqsData
      ] = await Promise.all([
        // $fetch(`${BASE_URL}/api/products/product-categories/`),
        // $fetch(`${BASE_URL}/api/products/product-types/`),
        // $fetch(`${BASE_URL}/api/products/paper-sizes/`),
        // $fetch(`${BASE_URL}/api/products/paper-weights/`),
        // $fetch(`${BASE_URL}/api/products/finishing-options/`),
        // $fetch(`${BASE_URL}/api/products/printing-options/`),
        // $fetch(`${BASE_URL}/api/products/lamination-types/`),
        // $fetch(`${BASE_URL}/api/products/product-configurations/`),
        // $fetch(`${BASE_URL}/api/products/design-packages/`),
        // $fetch(`${BASE_URL}/api/products/portfolio/`),
        // $fetch(`${BASE_URL}/api/products/testimonials/`),
        $fetch(`${BASE_URL}/api/products/faq/`), // Ensure FAQ data is fetched here
      ]);

      // When only the FAQ fetch is active, 'categories' (the first destructured variable)
      // will receive the FAQ data. Other variables like 'types', ..., 'faqsData' will be undefined.
      // We need to assign values carefully, defaulting to empty arrays.

      // 'categories' currently holds the FAQ data. So, productCategories should be empty.
      productCategories.value = []; // No actual product category data fetched
      productTypes.value = Array.isArray(types) ? types : [];
      paperSizes.value = Array.isArray(sizes) ? sizes : [];
      paperWeights.value = Array.isArray(weights) ? weights : [];
      finishingOptions.value = Array.isArray(finishes) ? finishes : [];
      printingOptions.value = Array.isArray(prints) ? prints : [];
      laminationTypes.value = Array.isArray(laminations) ? laminations : [];
      productConfigurations.value = Array.isArray(configs) ? configs : [];
      designPackages.value = Array.isArray(designs) ? designs : [];
      portfolioItems.value = Array.isArray(portfolio) ? portfolio : [];
      testimonials.value = Array.isArray(testimonialsData) ? testimonialsData : [];
      
      // Assign the fetched FAQ data (which is in 'categories' variable) to faqs.value.
      // Ensure faqs.value is an array. 'faqsData' variable is currently undefined.
      faqs.value = Array.isArray(categories) ? categories : [];

      // If you intend to filter/sort, do it on the populated faqs.value:
      // if (Array.isArray(faqs.value)) {
        // .filter(item => item.is_active)
        // .sort((a, b) => a.order - b.order);
      // }
    } catch (e) {
      error.value = e.data?.detail || 'Failed to fetch product data.';
      console.error('Product data fetch error:', e);
      throw e;
    } finally {
      loading.value = false;
    }
  }

  async function fetchProductConfigurationById(id) {
    loading.value = true;
    error.value = null;
    // const config = useRuntimeConfig(); // Removed as BASE_URL is used directly
    try {
      const productConfig = await $fetch(`${BASE_URL}/api/products/product-configurations/${id}/`); // BASE_URL is already in use
      return productConfig;
    } catch (e) {
      error.value = e.data?.detail || `Failed to fetch product configuration ${id}.`;
      console.error(`Product configuration ${id} fetch error:`, e);
      throw e;
    } finally {
      loading.value = false;
    }
  }

  // Getters
  const getBanners = computed(() => productTypes.value.filter(pt => pt.category?.name === 'Banners'));
  const getBusinessCards = computed(() => productTypes.value.filter(pt => pt.category?.name === 'Business Cards'));
  // ... add more getters for other categories as needed

  const getAllDesignPackages = computed(() => designPackages.value);
  const getAllPortfolioItems = computed(() => portfolioItems.value);
  const getAllTestimonials = computed(() => testimonials.value);
  const getAllFaqs = computed(() => faqs.value); // Getter for FAQs

  return {
    productCategories,
    productTypes,
    paperSizes,
    paperWeights,
    finishingOptions,
    printingOptions,
    laminationTypes,
    productConfigurations,
    designPackages,
    portfolioItems,
    testimonials,
    faqs, // Expose faqs state
    loading,
    error,
    fetchAllProductData,
    fetchProductConfigurationById,
    getBanners,
    getBusinessCards,
    getAllDesignPackages,
    getAllPortfolioItems,
    getAllTestimonials,
    getAllFaqs,
  };
}, {
  persist: false,
});