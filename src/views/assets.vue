<template>
  <div class="assets">
    <p><b>webpack assets</b></p>
    <p>images</p>
    <img :src="imgUrl" />
    <p>fonts</p>
    <span class="iconfont icon-dizhiaddress"></span>
    <span class="iconfont icon-dianhuaphone"></span>
    <span class="iconfont icon-youjianmail"></span>
  </div>
</template>

<script>
import imgUrl from '@/assets/images/01.jpg'
export default {
  data() {
    return {
      imgUrl
    }
  }
}
</script>

<style lang="less" scoped>
.assets {
  height: 598px;
  padding: 10px;
  background: url(~@/assets/images/02.jpg) center no-repeat;
}
</style>
