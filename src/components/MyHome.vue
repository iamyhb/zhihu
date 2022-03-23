<template>
  <global-header :user="currentUser"></global-header>
  <column-list :list="testData"></column-list>
</template>

<script setup lang="ts">
import ColumnList, { ColumnProps } from './ColumnList.vue'
import GlobalHeader, { UserProps } from './GlobalHeader.vue'
const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    description: '这是test1专栏的介绍',
    avatar:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F13413021139%2F641&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650519017&t=34fefba5a4d898d96989afeaa8852ce4'
  },
  {
    id: 2,
    title: 'test2的专栏',
    description: '这是test2专栏的介绍',
    avatar:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F13413021139%2F641&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650519017&t=34fefba5a4d898d96989afeaa8852ce4'
  },
  {
    id: 3,
    title: 'test3的专栏',
    description: '这是test2专栏的介绍'
  },
  {
    id: 4,
    title: 'test4的专栏',
    description: '这是test4专栏的介绍',
    avatar:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F13413021139%2F641&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650519017&t=34fefba5a4d898d96989afeaa8852ce4'
  }
]

const currentUser: UserProps = {
  isLogin: true,
  name: 'vikin '
}
</script>

<style scoped lang="scss"></style>
