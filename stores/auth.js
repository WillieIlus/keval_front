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

  // Helper to clear errors
  function clearError() {
    error.value = null;
  }

  // Actions
  async function register(userData) {
    loading.value = true;
    clearError();
    try {
      // Djoser expects 're_password' for password confirmation
      const payload = {
        email: userData.email,
        password: userData.password,
        re_password: userData.password2,
      };

      const response = await fetch(`${BASE_URL}/auth/users/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        // Djoser often returns errors with field names as keys
        const errorMessages = Object.entries(data).map(([key, value]) => `${key}: ${Array.isArray(value) ? value.join(', ') : value}`).join(' ');
        throw new Error(errorMessages || 'Registration failed.');
      }
      
      // Registration is successful, but user is not logged in.
      // The component will redirect to the login page.
      return data;
    } catch (e) {
      error.value = e.message || 'An unknown error occurred during registration.';
      console.error('Registration error:', e);
      throw e;
    } finally {
      loading.value = false;
    }
  }

  async function login(credentials) {
    loading.value = true;
    clearError();
    try {
      const response = await fetch(`${BASE_URL}/auth/jwt/create/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || 'Login failed. Invalid credentials.');
      }

      token.value = data.access;
      await fetchUserProfile();
      return data;
    } catch (e) {
      error.value = e.message || 'Login failed. Invalid credentials.';
      console.error('Login error:', e);
      throw e;
    } finally {
      loading.value = false;
    }
  }

  async function fetchUserProfile() {
    if (!token.value) {
      logout();
      return;
    }
    loading.value = true;
    clearError();
    try {
      const response = await fetch(`${BASE_URL}/auth/users/me/`, {
        headers: {
          'Authorization': `Bearer ${token.value}`,
          'Content-Type': 'application/json',
        }
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || 'Failed to fetch user profile.');
      }

      user.value = data;
      isAuthenticated.value = true;
    } catch (e) {
      error.value = e.message || 'Failed to fetch user profile.';
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
    clearError,
  };
}, {
  // Enable persistent state for this store
  persist: true,
});