<template>
  <div class="dropdownItem" :class="{ 'dropdownItem--isDisabled': disabled }" pa10 @click="click"><slot></slot></div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    disabled: boolean
  }>(),
  { disabled: false }
)
const click = () => {}
</script>

<style scoped lang="scss">
@include b(dropdownItem) {
  align-self: start;
  width: 150px;
  user-select: none;
  &:hover {
    cursor: pointer;
  }
  @include m(isDisabled) {
    color: $color-text-secondary;
    pointer-events: none;
    background: transparent;
  }
}
</style>
