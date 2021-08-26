<template>
  <div class="head">
    <div class="wrap clearfix">
      <div class="menu">
        <router-link to="/todo">todo</router-link>
        <router-link to="/home">home</router-link>
        <router-link to="/assets">assets</router-link>
      </div>
      <audio controls title="想要你在身边-锦零, 王梓钰.mp3">
        <source src="@/assets/media/want_you_here.mp3" />
        您的浏览器不支持 audio 元素。
      </audio>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.head {
  height: 74px;
  line-height: 74px;
  background: #333;
  .menu {
    float: left;
    a {
      display: inline-block;
      padding: 0 30px;
      color: #ccc;
      text-decoration: none;
      &.active {
        color: #ffb100;
        background: #272727;
      }
    }
  }
  audio {
    float: right;
    margin-top: 10px;
    display: block;
    outline: none;
  }
}
</style>
