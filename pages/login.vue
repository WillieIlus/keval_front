<template>
  <AuthCard title="Login to your account">
    <template #body>
      <BaseForm @submit="handleLogin">
        <BaseHeading title="Login to your account" class="text-center mb-6" />
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
      <p class="text-sm text-center text-gray-300 dark:text-gray-500">
        <BaseHeading :level="6" class="text-sm font-normal"> <!-- Added font-normal to match typical p tag -->
          Don't have an account? <BaseLink to="/register">Register</BaseLink>
        </BaseHeading>
      </p>
    </template>
  </AuthCard>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '~/stores/auth';
// useRouter and useRoute are auto-imported by Nuxt 3
// reactive is auto-imported by Vue 3 Composition API

definePageMeta({
    layout: 'auth',
    middleware: 'guest',
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
    await authStore.login(formData.email, formData.password); // Pass formData directly or individual fields

    if (!authStore.error && authStore.isAuthenticated) {
      toastMessage.value = 'Login successful! Redirecting...';
      toastType.value = 'success';
      showToast.value = true;

      // Determine redirect path
      const redirectPath = typeof route.query.redirect === 'string' && route.query.redirect ? route.query.redirect : '/';

      setTimeout(async () => {
        await router.push(redirectPath);
      }, 1500); // Delay for toast visibility
    } else if (authStore.error) {
      // Error is already set in the store, BaseErrorMessage will display it
      // Or, if you want a toast for errors too:
      // toastMessage.value = authStore.error || 'Login failed. Please check your credentials.';
      // toastType.value = 'error';
      // showToast.value = true;
    }
  } catch (e) {
    // This catch block might be redundant if authStore.login handles its own errors
    // and sets authStore.error. But good for unexpected issues.
    console.error('Unexpected error during login:', e);
    toastMessage.value = 'An unexpected error occurred. Please try again.';
    toastType.value = 'error';
    showToast.value = true;
  }
};
</script>
