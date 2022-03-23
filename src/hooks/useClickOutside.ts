import { ref, onMounted, onUnmounted, Ref } from 'vue'
const useClickOutside = (elementRef: Ref<null | HTMLElement>) => {
  const isClickOutside: Ref<boolean> = ref<boolean>(false)
  const handler = (e: MouseEvent): Ref<boolean> => {
    if (elementRef.value.$el) {
      if (elementRef.value.$el.contains(e.target as HTMLElement)) {
        isClickOutside.value = false
      } else {
        isClickOutside.value = true
      }
    }
  }

  onMounted(() => {
    document.addEventListener('click', handler)
  })
  onUnmounted(() => {
    document.removeEventListener('click', handler)
  })
  return isClickOutside
}

export default useClickOutside
