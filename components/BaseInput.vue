<template>
  <div class="w-full"> 
    <input
      v-bind="attrs"
      v-model="value"
      :id="id"  :type="type"
      :placeholder="placeholder"
      :disabled="computedDisabled" 
      :readonly="readonly"
      class="w-full px-3 py-2 border rounded-md shadow-sm font-sans
             text-sm text-gray-700 placeholder-gray-400
             focus:outline-none focus:ring-2 focus:ring-persian-green-500 focus:border-persian-green-500
             disabled:bg-gray-100 disabled:cursor-not-allowed
             read-only:bg-gray-50 read-only:cursor-default
             border-gray-300"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, useAttrs, inject } from 'vue';

interface Props {
  modelValue: string | number | boolean | object; // Required for v-model
  id: string; // STILL REQUIRED: Used by an external BaseLabel for accessibility
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  // REMOVE THESE PROPS: 'label' and 'error' will be handled externally
  // label?: string;
  // error?: string; 
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  disabled: false,
  readonly: false,
});

const emit = defineEmits(['update:modelValue']);
const attrs = useAttrs();

const value = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit('update:modelValue', val);
  },
});

// Inject the formDisabled state provided by BaseForm
const formDisabled = inject<boolean>('formDisabled', false);

// Combine component's own disabled prop with the form's disabled state
const computedDisabled = computed(() => props.disabled || formDisabled);
</script>