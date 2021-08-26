import * as types from './mutations-types'

const actions = {
  // 添加数据
  data_add: ({ commit }, name) => {
    return new Promise((resolve, reject) => {
      commit(types.DATA_ADD, name)
      resolve(name)
    })
  },
  // 修改数据状态
  data_change_status: ({ commit }, data) => {
    return new Promise((resolve, reject) => {
      commit(types.DATA_CHANGE_STATUS, data)
      resolve(data)
    })
  },
  // 删除数据
  data_delete: ({ commit }, data) => {
    return new Promise((resolve, reject) => {
      commit(types.DATS_DELETE, data)
      resolve()
    })
  },
  // 当前状态
  change_status: ({ commit }, status) => {
    return new Promise((resolve, reject) => {
      commit(types.CHANGE_STATUS, status)
      resolve()
    })
  }
}

export default actions
