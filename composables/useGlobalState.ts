import { ref } from 'vue'

const isNavLoading = ref(true)

export const useNavLoading = () => {
  return isNavLoading
}