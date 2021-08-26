<template>
  <div class="todo">
    <todo-header />
    <todo-main />
    <todo-bottom />
  </div>
</template>

<script>
import todoHeader from '@/components/todo/header'
import todoMain from '@/components/todo/main'
import todoBottom from '@/components/todo/bottom'

export default {
  components: {
    todoHeader,
    todoMain,
    todoBottom
  }
}
</script>

<style lang="less" scoped>
.todo {
}
</style>
