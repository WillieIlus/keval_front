<template>
  <div class="flex items-center base-checkbox-wrapper">
    <input
      v-bind="attrs"
      :id="id"
      type="checkbox"
      v-model="value"
      :disabled="disabled"
      :readonly="readonly"
      class="form-checkbox h-4 w-4 text-persian-green-600 border-gray-300 rounded focus:ring-persian-green-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
    />
    <label v-if="label" :for="id" class="ml-2 block text-sm text-gray-700 font-sans select-none">
      {{ label }}
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed, useAttrs } from 'vue'

interface Props {
  modelValue: boolean // For v-model, typically boolean for a checkbox
  id: string // Required for label association and accessibility
  label?: string
  disabled?: boolean
  readonly?: boolean
  // 'required' could be added if needed for forms
}

const props = withDefaults(defineProps<Props>(), {
  // modelValue: false, // Default for modelValue if not provided (usually handled by parent)
  // id: undefined, // id is required, so no default here. Consider generating one if it could be optional.
  label: '',
  disabled: false,
  readonly: false,
})

const emit = defineEmits(['update:modelValue'])
const attrs = useAttrs()

// This computed property correctly handles v-model for the checkbox
const value = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit('update:modelValue', val)
  },
})
</script>
