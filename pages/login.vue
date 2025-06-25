<!-- pages/login.vue -->
<template>
  <AuthCard title="Login to your account">
    <template #body>
      <BaseForm @submit="handleLogin">
        <!-- Removed duplicate BaseHeading, AuthCard title handles this. -->
        <BaseFormGroup
          id="email"
          label="Email Address"
          helpText="Enter your registered email address."
        >
          <BaseEmailInput
            id="email"
            v-model="formData.email"
            placeholder="you@example.com"
            required
          />
          <BaseErrorMessage />
        </BaseFormGroup>

        <BaseFormGroup id="password" label="Password">
          <BasePasswordInput
            id="password"
            v-model="formData.password"
            placeholder="Enter your password"
            required
          />
          <BaseErrorMessage />
        </BaseFormGroup>

        <BaseFormGroup id="rememberMe" label="">
          <BaseCheckbox
            id="rememberMe"
            v-model="formData.rememberMe"
            label="Remember me"
          />
          <BaseErrorMessage />
        </BaseFormGroup>

        <BaseErrorMessage v-if="authStore.error && !showToast" class="mt-4">{{ authStore.error }}</BaseErrorMessage>

        <BaseButton
          type="submit"
          :loading="authStore.loading"
          :disabled="authStore.loading"
          class="w-full mt-6"
          >{{ authStore.loading ? 'Logging in...' : 'Login' }}</BaseButton
        >
        <BaseToast v-if="showToast" :message="toastMessage" :type="toastType" @close="showToast = false" class="mt-4" />
      </BaseForm>
    </template>
    <template #footer>
      <p class="text-sm text-center text-gray-500 dark:text-gray-400">
        <!-- Replaced BaseHeading with a simple p tag and BaseLink for semantic correctness -->
        Don't have an account? <BaseLink to="/register">Register</BaseLink>
      </p>
    </template>
  </AuthCard>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'; // reactive is explicitly imported for clarity
import { useAuthStore } from '~/stores/auth';
// useRouter and useRoute are auto-imported by Nuxt 3

// Define the page metadata to use the new 'two-halves' layout.
definePageMeta({
    layout: 'two-halves', // Use the new two-halves layout
    // middleware: 'guest', // Uncomment if you have a 'guest' middleware configured
});

const authStore = useAuthStore();
const router = useRouter();
const route = useRoute();

const formData = reactive({
  email: '',
  password: '',
  rememberMe: false,
});

// --- Toast State ---
const showToast = ref(false);
const toastMessage = ref('');
const toastType = ref<'success' | 'error' | 'info'>('success');

const handleLogin = async () => {
  showToast.value = false; // Reset toast
  authStore.clearError(); // Clear previous errors

  try {
    await authStore.login(formData.email, formData.password);

    if (!authStore.error && authStore.isAuthenticated) {
      toastMessage.value = 'Login successful! Redirecting...';
      toastType.value = 'success';
      showToast.value = true;

      // Determine redirect path from query parameter or default to '/'
      const redirectPath = typeof route.query.redirect === 'string' && route.query.redirect ? route.query.redirect : '/';

      setTimeout(async () => {
        await router.push(redirectPath);
      }, 1500); // Delay for toast visibility
    } else if (authStore.error) {
      // If authStore.error is set, BaseErrorMessage will display it.
      // You could also show a toast for errors here if desired:
      // toastMessage.value = authStore.error || 'Login failed. Please check your credentials.';
      // toastType.value = 'error';
      // showToast.value = true;
    }
  } catch (e) {
    console.error('Unexpected error during login:', e);
    toastMessage.value = 'An unexpected error occurred. Please try again.';
    toastType.value = 'error';
    showToast.value = true;
  }
};
</script>