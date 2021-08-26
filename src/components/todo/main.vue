<template>
  <div class="todo-main">
    <p><b>Todo-List</b></p>
    <div class="todo-list">
      <div
        class="todo-item"
        :class="item.status === '2' ? 'completed' : ''"
        v-for="(item, index) in todoFilter"
        :key="index"
      >
        <span class="status" @click="handleChangeStatus(item)"></span>
        <span class="name">{{ item.name }}</span>
        <span class="btn" @click="handleDelete(item)" v-if="!status">
          delete
        </span>
      </div>
      <div class="empty" v-if="!todoFilter.length">empty</div>
    </div>
    <p>count：{{ todoFilter.length }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState(['status']),
    ...mapGetters(['todoFilter'])
  },
  methods: {
    handleChangeStatus(item) {
      this.$store.dispatch('data_change_status', item)
    },
    handleDelete(item) {
      this.$store.dispatch('data_delete', item)
    }
  }
}
</script>

<style lang="less" scoped>
.todo-main {
  padding: 10px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  .todo-list {
    height: 240px;
    padding: 10px;
    line-height: 40px;
    overflow-y: auto;
    border: 1px solid #ddd;
    border-radius: 2px;
    .todo-item {
      height: 40px;
      .status {
        display: inline-block;
        width: 12px;
        height: 12px;
        margin-top: 10px;
        background: #09f;
        border: 4px solid #ddd;
        border-radius: 10px;
        vertical-align: top;
        cursor: pointer;
      }
      .name {
        display: inline-block;
        width: 460px;
        // white-space: nowrap;
        // overflow: hidden;
        // text-overflow: ellipsis;
      }
      .btn {
        display: inline-block;
        color: #09f;
        cursor: pointer;
      }
      &.completed {
        .status {
          background: #aaa;
        }
        .name {
          color: #999;
        }
      }
    }
    .empty {
      color: #999;
    }
  }
}
</style>
