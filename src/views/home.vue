<template>
  <div class="home">
    <p><b>vuex data</b></p>
    <div>
      <p>state.status：{{ $store.state.status }}</p>
      <p>state.todoList：{{ $store.state.todoList }}</p>
      <p>getters.todoFilter：{{ $store.getters.todoFilter }}</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.home {
  height: 598px;
  padding: 10px;
}
</style>
