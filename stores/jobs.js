// stores/jobs.js
import { defineStore } from 'pinia';
import { ref, computed } from 'vue'; // Import ref and computed for reactivity
import { useRuntimeConfig } from '#app';
import { useAuthStore } from './auth'; // Import auth store for token

export const useJobsStore = defineStore('jobs', () => {
  // State
  const userJobs = ref([]);
  const savedConfigurations = ref([]);
  const loading = ref(false);
  const error = ref(null);

  // Getters
  const getUserJobs = computed(() => userJobs.value);
  const getSavedConfigurations = computed(() => savedConfigurations.value);

  // Actions
  async function fetchUserJobs() {
    const authStore = useAuthStore();
    if (!authStore.isLoggedIn) {
      error.value = 'User not authenticated.';
      return;
    }
    loading.value = true;
    error.value = null;
    const config = useRuntimeConfig();
    try {
      const response = await fetch(`${BASE_URL}/auth/jwt/create?/`, {
        headers: {
          'Authorization': `Bearer ${authStore.token}`
        }
      });
      userJobs.value = response;
    } catch (e) {
      error.value = e.data?.detail || 'Failed to fetch user jobs.';
      console.error('Fetch user jobs error:', e);
      throw e;
    } finally {
      loading.value = false;
    }
  }

  async function createJob(jobData, file) {
    const authStore = useAuthStore();
    if (!authStore.isLoggedIn) {
      throw new Error('User not authenticated. Please log in to create a job.');
    }
    loading.value = true;
    error.value = null;
    const config = useRuntimeConfig();

    const formData = new FormData();
    formData.append('product_config_id', jobData.product_config_id);
    formData.append('quantity', jobData.quantity);
    formData.append('notes', jobData.notes || '');
    formData.append('delivery_method', jobData.delivery_method);
    if (jobData.delivery_address) {
      formData.append('delivery_address', jobData.delivery_address);
    }
    if (file) {
      formData.append('upload_file', file);
    }

    try {
      const response = await fetch(`${BASE_URL}/auth/jwt/create?/`, {
        method: 'POST',
        body: formData,
        headers: {
          'Authorization': `Bearer ${authStore.token}`,
          // 'Content-Type': 'multipart/form-data' is typically set automatically by $fetch for FormData
        },
      });
      userJobs.value.push(response); // Optionally, add the new job to the userJobs list
      return response;
    } catch (e) {
      error.value = e.data?.detail || 'Failed to create job.';
      console.error('Create job error:', e.response?._data || e);
      throw e;
    } finally {
      loading.value = false;
    }
  }

  async function fetchSavedConfigurations() {
    const authStore = useAuthStore();
    if (!authStore.isLoggedIn) {
      error.value = 'User not authenticated.';
      return;
    }
    loading.value = true;
    error.value = null;
    const config = useRuntimeConfig();
    try {
      const response = await fetch(`${BASE_URL}/auth/jwt/create?/`, {
        headers: {
          'Authorization': `Bearer ${authStore.token}`
        }
      });
      savedConfigurations.value = response;
    } catch (e) {
      error.value = e.data?.detail || 'Failed to fetch saved configurations.';
      console.error('Fetch saved configurations error:', e);
      throw e;
    } finally {
      loading.value = false;
    }
  }

  async function createSavedConfiguration(configData) {
    const authStore = useAuthStore();
    if (!authStore.isLoggedIn) {
      throw new Error('User not authenticated. Please log in to save a configuration.');
    }
    loading.value = true;
    error.value = null;
    const config = useRuntimeConfig();
    try {
      const response = await fetch(`${BASE_URL}/auth/jwt/create?/`, {
        method: 'POST',
        body: configData,
        headers: {
          'Authorization': `Bearer ${authStore.token}`
        }
      });
      savedConfigurations.value.push(response); // Add to local state
      return response;
    } catch (e) {
      error.value = e.data?.detail || 'Failed to save configuration.';
      console.error('Create saved configuration error:', e);
      throw e;
    } finally {
      loading.value = false;
    }
  }

  return {
    userJobs,
    savedConfigurations,
    loading,
    error,
    getUserJobs,
    getSavedConfigurations,
    fetchUserJobs,
    createJob,
    fetchSavedConfigurations,
    createSavedConfiguration,
  };
}, {
  // No persist for this store unless you want to cache user jobs/configs
  // For most use cases, job data and saved configurations are fetched on demand
  // and might not need to be persisted in local storage.
  persist: false, // Explicitly set to false if not needed
});