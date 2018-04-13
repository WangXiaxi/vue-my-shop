import * as types from './mutation-types'

const mutations = {
  [types.LOGIN]: (state, data) => {
    sessionStorage.token = data
    state.token = data
  },
  [types.LOGOUT]: (state) => {
    localStorage.removeItem('token')
    state.token = null
  },
  [types.SAVECURADDRESS]: (state, data) => {
    state.curAddress = JSON.parse(JSON.stringify(data))
  }
}

export default mutations
