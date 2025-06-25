<!-- pages/register.vue -->
<template>
<AuthCard title="Create your Account">
  <template #body>
    <BaseForm @submit="handleRegister">
      <!-- Removed duplicate BaseHeading, AuthCard title handles this. -->
      <BaseFormGroup id="email" label="Email Address" helpText="Enter your email address.">
        <BaseEmailInput v-model="formData.email" placeholder="you@example.com" required/>
      </BaseFormGroup>
      <BaseFormGroup id="password" label="Password" >
        <BasePasswordInput v-model="formData.password" placeholder="Enter your password" required />
      </BaseFormGroup>
      <BaseFormGroup id="password2" label="Confirm Password">
        <BasePasswordInput v-model="formData.password2" placeholder="Confirm your password" required />
      </BaseFormGroup>
      <BaseErrorMessage v-if="authStore.error" class="mt-4">{{ authStore.error }}</BaseErrorMessage>
      <BaseButton type="submit" :disabled="authStore.loading" class="w-full mt-6">
        {{ authStore.loading ? 'Registering...' : 'Register' }}
      </BaseButton>
      <BaseToast v-if="showToast" :message="toastMessage" :type="toastType" @close="showToast = false" class="mt-4" />
    </BaseForm>
  </template>

  <template #footer>
    <div class="text-center">
      <!-- Replaced BaseHeading with a simple p tag and BaseLink for semantic correctness -->
      <p class="text-sm text-gray-500 dark:text-gray-400">
        Already have an account? <BaseLink to="/login">Login</BaseLink>
      </p>
    </div>
  </template>
</AuthCard>

</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'; // reactive is explicitly imported for clarity
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

definePageMeta({
    layout: 'auth', 
    // middleware: 'guest', // To prevent access when logged in
});

const authStore = useAuthStore();
const router = useRouter();

const formData = reactive({ // Changed to reactive for consistency with login form
  email: '',
  password: '',
  password2: '',
})

// --- Toast State ---
const showToast = ref(false);
const toastMessage = ref('');
const toastType = ref<'success' | 'error' | 'info'>('success');

const handleRegister = async () => {
  showToast.value = false; // Reset/hide any previous toast
  authStore.clearError(); // Clear previous errors from the store

  try {
    // Ensure passwords match before attempting registration
    if (formData.password !== formData.password2) {
      const errorMsg = 'Passwords do not match.';
      authStore.error = errorMsg; // Manually set store error for BaseErrorMessage
      toastMessage.value = errorMsg;
      toastType.value = 'error';
      showToast.value = true;
      return; // Stop execution if passwords don't match
    }

    // The store's register action now expects the whole formData object
    await authStore.register(formData);

    if (!authStore.error) { // Check if there was no error set by the store action
      toastMessage.value = 'Registration successful! Please log in.';
      toastType.value = 'success';
      showToast.value = true;
      setTimeout(() => {
        router.push('/login');
      }, 2500);
    } else {
      // If authStore.error is set by the action, show it in a toast.
      // BaseErrorMessage will also display it.
      toastMessage.value = authStore.error;
      toastType.value = 'error';
      showToast.value = true;
    }

  } catch (e) {
    // The store action already sets the error, so this catch is for other issues.
    // The error message from the store is likely more user-friendly.
    console.error('Component-level error during registration:', e);
    toastMessage.value = authStore.error || 'An unexpected error occurred.';
    toastType.value = 'error';
    showToast.value = true;
  }
}
</script>
