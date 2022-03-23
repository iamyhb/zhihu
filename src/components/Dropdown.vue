<template>
  <c-single-center ref="dropdownRef" class="dropdown">
    <c-box-center class="dropdown__toggle" ma10 pa10 font-tertiary radius5 @click.prevent="toggleOpen">{{ title }}&nbsp;&nbsp;</c-box-center>
    <c-box-center class="dropdown__caret"></c-box-center>
    <c-single-center v-if="isOpen" class="dropdown__menu" vertical bg-primary radius5>
      <slot></slot>
    </c-single-center>
  </c-single-center>
</template>

<script setup lang="ts">
import CSingleCenter from './layout/MySingleCenter.vue'
import CBoxCenter from './layout/MyBoxCenter.vue'
import { ref, watch } from 'vue'
import useClickOutside from '@/hooks/useClickOutside'

defineProps<{
  title: string
}>()

const isOpen = ref<boolean>(false)

const toggleOpen = () => {
  isOpen.value = !isOpen.value
}
const dropdownRef = ref<null | HTMLElement>(null)
const isClickOutside = useClickOutside(dropdownRef)

watch(isClickOutside, () => {
  if (isOpen.value && isClickOutside.value) {
    isOpen.value = false
  }
})
</script>

<style scoped lang="scss">
@include b(dropdown) {
  position: relative;
  @include e(toggle) {
    border: $border-base;
    cursor: pointer;
    z-index: 10000;
    user-select: none;
  }
  @include e(caret) {
    @include caret(absolute, 5px, 0px, bottom, transparent, $color-white);
    @include position(absolute, top 50% right 25px);
  }
  @include e(menu) {
    @include position(absolute, top 60px left 10px);
    border: $border-base;
  }
}
</style>
