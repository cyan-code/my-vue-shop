import { sendLogin } from '@/request'
// 从localStorage读取之前存的信息，防止页面刷新后vuex数据清空跳重新登录
const username = localStorage.getItem('username')
const token = localStorage.getItem('token')
const avatarUrl = localStorage.getItem('avatarUrl')
export default {
  namespaced: true,
  state: {
    username,
    token,
    avatarUrl
  },
  getters: {},
  mutations: {
    LOGIN_SUCCESS (state, { username, avatarUrl, token }) {
      state.username = username
      state.avatarUrl = avatarUrl
      state.token = token
    }
  },
  actions: {
    loginAsync (context, { username, password }) {
      return sendLogin(username, password).then(res => {
        const { username, avatarUrl, token } = res.data
        context.commit('LOGIN_SUCCESS', { username, avatarUrl, token })
        return { status: 200 }
      }).catch(err => {
        console.log(err)
        return { status: 404 }
      })
    }
  }
}
