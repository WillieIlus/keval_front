<template>
<AuthCard title="Create your Account">
  <template #body>
    <BaseForm @submit="handleRegister">
      <BaseHeading title="Register  "/>
      <BaseFormGroup id="email" label="Email Address" helpText="Enter your registered email address.">
        <BaseEmailInput v-model="formData.email" label="Email" required placeholder="you@example.com"/>
      </BaseFormGroup>
      <BaseFormGroup id="password" label="Password" >
        <BasePasswordInput v-model="formData.password" label="Password" required />
      </BaseFormGroup>
      <BaseFormGroup id="password2" label="Confirm Password">
        <BasePasswordInput v-model="formData.password2" label="Confirm Password" required />
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
      <BaseHeading :level="6" class="text-sm">
        Already have an account? <BaseLink to="/login">Login</BaseLink>
      </BaseHeading>
    </div>
  </template>
</AuthCard>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();
const router = useRouter();

const formData = ref({
  email: '',
  password: '',
  password2: '',
})

// --- Toast State ---
const showToast = ref(false);
const toastMessage = ref('');
const toastType = ref<'success' | 'error' | 'info'>('success'); // Default to 'success' for registration

const handleRegister = async () => {
  showToast.value = false; // Reset/hide any previous toast
  try {
    await authStore.register(formData.value);

    if (!authStore.error) { // Check if there was no error set by the store action
      toastMessage.value = 'Registration successful! Please log in.';
      toastType.value = 'success';
      showToast.value = true;
      // Delay navigation to allow the user to see the toast
      setTimeout(() => {
        router.push('/login');
      }, 2500); // Adjust delay as needed
    }

  } catch (e) {
    console.error('Registration failed:', e);

  }
}

</script>