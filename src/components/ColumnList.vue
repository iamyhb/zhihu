<template>
  <c-row class="c-row">
    <c-col v-for="column in columnList" :key="column.id" span="8">
      <c-single-center class="c-single-center" vertical radius5 ma15>
        <img class="c-single-center__img" :src="column.avatar" :alt="column.title" circle mt30 mb10 />
        <p class="c-single-center__title" fz22 mv5>{{ column.title }}</p>
        <p class="c-single-center__description" font-secondary mh10>{{ column.description }}</p>
        <c-box-center class="c-single-center__enter" href="#" mt30 radius5>进入专栏</c-box-center>
      </c-single-center>
    </c-col>
  </c-row>
  <div class="abc"></div>
</template>

<script setup lang="ts">
import CSingleCenter from './layout/MySingleCenter.vue'
import CBoxCenter from './layout/MyBoxCenter.vue'
import columnImgUrl from '@/assets/column.png'
import { computed } from 'vue'

export interface ColumnProps {
  id: number
  title: string
  avatar?: string
  description: string
}
const props = defineProps<{
  list: Array<ColumnProps>
}>()

const columnList = computed(() => {
  return props.list.map((column) => {
    if (!column.avatar) {
      column.avatar = columnImgUrl
    }
    return column
  })
})
</script>

<style scoped lang="scss">
@include b(c-single-center) {
  height: 260px;
  border: $border-base;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.075);
  @include e(img) {
    @include dimensions(50px, 50px);
  }
  @include e(title) {
  }
  @include e(description) {
    align-self: start;
  }
  @include e(enter) {
    @include dimensions(90px, 35px);
    border: $border-base;
    border-color: $color-primary;
    color: $color-primary;
  }
}
@include b(c-row) {
  padding-left: 300px;
  padding-right: 300px;
}
@include b(abc) {
}
</style>
