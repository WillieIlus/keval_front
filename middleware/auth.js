// // middleware/auth.js
// import { useAuthStore } from '~/stores/auth';

// export default defineNuxtRouteMiddleware(async (to, from) => {
//   const authStore = useAuthStore();

//   // If Pinia Persist has rehydrated the token but not the user object,
//   // and we are trying to access an authenticated route.
//   if (authStore.token && !authStore.user) {
//     // console.log('Auth middleware: Token exists, user data missing. Fetching profile...');
//     await authStore.userProfile();
//   }

//   if (!authStore.isAuthenticated) {
//     // console.log('Auth middleware: Not authenticated. Redirecting to login.');
//     return navigateTo({
//       path: '/login',
//       query: {
//         redirect: to.fullPath !== '/' ? to.fullPath : undefined, // Avoid redirecting to '/' if already there
//       },
//     });
//   }
//   // console.log('Auth middleware: Authenticated. Proceeding.');
// });
