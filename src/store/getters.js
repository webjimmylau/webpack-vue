const getters = {
  // 获取当前状态数据
  todoFilter: (state) => {
    let list = []
    const status = state.status
    const todoList = state.todoList
    if (status === '') {
      list = todoList
    } else {
      list = todoList.filter((item) => {
        return item.status === status
      })
    }
    return list
  }
}

export default getters
