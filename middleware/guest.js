// middleware/guest.js
import { useAuthStore } from '~/stores/auth';

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();

  // If user is authenticated and tries to access a guest page (e.g., login, register)
  if (authStore.isAuthenticated) {
    // console.log('Guest middleware: Authenticated user trying to access guest page. Redirecting to home.');
    return navigateTo('/'); // Or your desired redirect path for authenticated users
  }
  // console.log('Guest middleware: User is not authenticated. Allowing access.');
});