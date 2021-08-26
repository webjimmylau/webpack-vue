<template>
  <div class="todo-header">
    <p><b>Add</b></p>
    <input
      type="text"
      placeholder="Entry A Name"
      maxlength="20"
      v-model.trim="name"
      @keyup.enter="handleAdd"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      name: ''
    }
  },
  computed: {
    ...mapState(['status', 'todoList'])
  },
  methods: {
    handleAdd() {
      // 必填
      if (!this.name) {
        alert('Please entry a name!')
        return
      }
      const isRepeatName = this.todoList.some((item) => {
        return item.name === this.name
      })
      // 不能重复
      if (isRepeatName) {
        alert('This name is repeat!')
        return
      }
      this.$store.dispatch('data_add', this.name)
      this.name = ''
    }
  }
}
</script>

<style lang="less" scoped>
.todo-header {
  padding: 10px;
  input {
    padding: 0 10px;
    width: 558px;
    height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    outline: none;
  }
}
</style>
