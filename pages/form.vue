<template>
  <BaseForm @submit="handleSubmit">
    
    <BaseFormGroup 
      id="singleSelectExample" 
      label="Select an Option" 
      help-text="Choose one from the list."
    >
      <BaseSelect
        id="singleSelectExample" 
        v-model="selectedSingleValue"
        :options="singleOptions"
        placeholder="Please select..."
      />
    </BaseFormGroup>

    <BaseFormGroup 
      id="multiSelectExample" 
      label="Select Multiple Options" 
      help-text="You can choose more than one."
    >
      <BaseMultiSelect
        id="multiSelectExample" 
        v-model="selectedMultiValues"
        :options="multiOptions"
        placeholder="Select your favorite colors"
      />
    </BaseFormGroup>

    <BaseButton type="submit">Submit</BaseButton>

    <pre class="mt-4">Single Value: {{ selectedSingleValue }}</pre>
    <pre>Multi Values: {{ selectedMultiValues }}</pre>

  </BaseForm>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const selectedSingleValue = ref<string | number | null>(null);
const singleOptions = ref([
  { value: 'apple', text: 'Apple' },
  { value: 'banana', text: 'Banana' },
  { value: 'orange', text: 'Orange' },
]);

const selectedMultiValues = ref<(string | number)[]>([]);
const multiOptions = ref([
  { value: 'red', text: 'Red' },
  { value: 'blue', text: 'Blue' },
  { value: 'green', text: 'Green' },
  { value: 'yellow', text: 'Yellow' },
]);

const handleSubmit = () => {
  console.log('Form Submitted!');
  console.log('Single Select:', selectedSingleValue.value);
  console.log('Multi Select:', selectedMultiValues.value);
  alert(`Single: ${selectedSingleValue.value}, Multi: ${selectedMultiValues.value.join(', ')}`);
};
</script>