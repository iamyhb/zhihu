<template>
  <c-single-center class="globalHeader" bg-tertiary>
    <c-box-center class="globalHeader__left" fz20 font-tertiary>帅气专栏</c-box-center>
    <c-single-center v-if="!user.isLogin" class="globalHeader__right">
      <c-box-center class="globalHeader__right-login" ma10 pa10 font-tertiary radius5>登录</c-box-center>
      <c-box-center class="globalHeader__right-register" ma10 pa10 font-tertiary radius5>注册</c-box-center>
    </c-single-center>
    <dropdown v-else class="globalHeader__right" :title="`你好，${user.name}`">
      <dropdown-item>新建文章</dropdown-item>
      <dropdown-item disabled>编辑资料</dropdown-item>
      <dropdown-item>退出登录</dropdown-item>
    </dropdown>
    <!--    <c-single-center v-else class="globalHeader__right">-->
    <!--      <c-box-center class="globalHeader__right-tips" ma10 pa10 font-tertiary radius5>你好, {{ user.name }}</c-box-center>-->
    <!--    </c-single-center>-->
  </c-single-center>
</template>

<script setup lang="ts">
import CSingleCenter from './layout/MySingleCenter.vue'
import CBoxCenter from './layout/MyBoxCenter.vue'
import Dropdown from './Dropdown.vue'
import DropdownItem from './DropdownItem.vue'

export interface UserProps {
  isLogin: boolean
  name?: string
  id?: number
}
defineProps<{
  user: UserProps
}>()
</script>

<style scoped lang="scss">
@include b(globalHeader) {
  height: 70px;
  @include e(left) {
    margin-left: 250px;
    margin-right: auto;
  }
  @include e(right) {
    margin-right: 250px;
    &-login {
      border: $border-base;
    }
    &-register {
      border: $border-base;
    }
  }
}
</style>
