<template>
  <div class="c-single-center" :class="{ 'c-single-center--horizontal': vertical }">
    <slot></slot>
  </div>
</template>
<script lang="ts">
export default {
  name: 'CSingleCenter'
}
</script>
<script lang="ts" setup>
interface Props {
  vertical: boolean
}

withDefaults(defineProps<Props>(), {
  vertical: false
})
</script>

<style scoped lang="scss">
@include b(c-single-center) {
  @include grid($align-items: center);
  @include m(horizontal) {
    flex-direction: column;
  }
}
</style>
