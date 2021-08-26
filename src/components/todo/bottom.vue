<template>
  <div class="todo-bottom">
    <p><b>View Status</b></p>
    <div>
      <button
        :class="status === '' ? 'active' : ''"
        @click="handleChangeStatus('')"
      >
        view all
      </button>
      <button
        :class="status === '1' ? 'active' : ''"
        @click="handleChangeStatus('1')"
      >
        view unfinished
      </button>
      <button
        :class="status === '2' ? 'active' : ''"
        @click="handleChangeStatus('2')"
      >
        view completed
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapState(['status'])
  },
  methods: {
    handleChangeStatus(status) {
      this.$store.dispatch('change_status', status)
    }
  }
}
</script>

<style lang="less" scoped>
.todo-bottom {
  padding: 10px;
  button {
    height: 40px;
    line-height: 40px;
    padding: 0 15px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 2px;
    cursor: pointer;
    outline: none;
    &.active {
      color: #fff;
      background: #09f;
      border-color: #09f;
    }
  }
}
</style>
