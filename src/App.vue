<template>
  <div class="app">
    <main-head />
    <div class="main wrap">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import mainHead from '@/components/head/index'

export default {
  components: {
    mainHead
  },
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.main {
  margin-top: 20px;
  background: #fff;
}
</style>
