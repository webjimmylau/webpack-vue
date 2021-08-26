import * as types from './mutations-types'

const mutations = {
  // 添加数据
  [types.DATA_ADD](state, name) {
    const obj = {
      id: Math.random()
        .toString()
        .substr(3),
      name,
      status: '1'
    }
    state.todoList.unshift(obj)
  },
  // 修改数据状态
  [types.DATA_CHANGE_STATUS](state, data) {
    state.todoList.forEach((item) => {
      const status = data.status === '1' ? '2' : '1'
      if (item.id === data.id) item.status = status
    })
  },
  // 删除数据
  [types.DATS_DELETE](state, data) {
    let list = JSON.parse(JSON.stringify(state.todoList))
    state.todoList = list.filter((item) => {
      return item.id !== data.id
    })
  },
  // 当前状态
  [types.CHANGE_STATUS](state, status) {
    state.status = status
  }
}

export default mutations
