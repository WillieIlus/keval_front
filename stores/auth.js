// stores/auth.js
import { defineStore } from 'pinia';
import { BASE_URL } from './base';
import { ref, computed } from 'vue'; 
import { useRuntimeConfig } from '#app'; 

export const useAuthStore = defineStore('auth', () => {
  // State
  const user = ref(null);
  const token = ref(null);
  const isAuthenticated = ref(false);
  const loading = ref(false);
  const error = ref(null);

  // Getters
  const isLoggedIn = computed(() => isAuthenticated.value && !!token.value);
  const userEmail = computed(() => user.value?.email || 'Guest');

  // Actions
  async function register(userData) {
    loading.value = true;
    error.value = null;
    try {
      const config = useRuntimeConfig();
      const response = await fetch(`${BASE_URL}/auth/jwt/create?/`, {
        method: 'POST',
        body: userData,
      });
      user.value = response.user;
      token.value = response.token; // Or however your API returns the token
      isAuthenticated.value = true;
      return response;
    } catch (e) {
      error.value = e.data?.detail || 'Registration failed.';
      console.error('Registration error:', e);
      throw e;
    } finally {
      loading.value = false;
    }
  }

  async function login(credentials) {
    loading.value = true;
    error.value = null;
    try {
      const config = useRuntimeConfig();
      const response = await fetch(`${BASE_URL}/auth/jwt/create?/`, {
        method: 'POST',
        body: credentials,
      });
      token.value = response.access;
      await fetchUserProfile();
      isAuthenticated.value = true;
      return response;
    } catch (e) {
      error.value = e.data?.detail || 'Login failed. Invalid credentials.';
      console.error('Login error:', e);
      throw e;
    } finally {
      loading.value = false;
    }
  }

  async function fetchUserProfile() {
    if (!token.value) {
      user.value = null;
      isAuthenticated.value = false;
      return;
    }
    loading.value = true;
    error.value = null;
    try {
      const config = useRuntimeConfig();
      const response = await fetch(`${BASE_URL}/auth/jwt/create?/`, {
        headers: {
          'Authorization': `Bearer ${token.value}`
        }
      });
      user.value = response;
      isAuthenticated.value = true;
    } catch (e) {
      error.value = e.data?.detail || 'Failed to fetch user profile.';
      console.error('Fetch profile error:', e);
      logout(); // Logout if token is invalid or expired
      throw e;
    } finally {
      loading.value = false;
    }
  }

  function logout() {
    user.value = null;
    token.value = null;
    isAuthenticated.value = false;
    // Optionally, invalidate token on backend if your API supports it
  }

  return {
    user,
    token,
    isAuthenticated,
    loading,
    error,
    isLoggedIn,
    userEmail,
    register,
    login,
    fetchUserProfile,
    logout,
  };
}, {
  // Enable persistent state for this store
  persist: true,
});