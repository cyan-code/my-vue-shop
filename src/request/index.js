import axios from 'axios'
import { Toast } from 'vant'

const ajax = axios.create({
  baseURL: '/api'
})
// 发送拦截
ajax.interceptors.request.use(config => {
  if (process.env.NODE_ENV !== 'production') {
    Toast.loading({
      message: '加载中...'
    })
    // console.log('请求发送成功')
  }
  return config
})
// 响应拦截
ajax.interceptors.response.use(resp => { // 这里形参直接写resp
  if (resp.status === 200) {
    if (resp.data.code === 200) {
      Toast.clear()
      return resp.data.data
    }
  }
  return console.log(`数据请求失败${resp.status}`)
})
export const getCatagory = (id, index) => ajax.get(`/tab/${id}?start=${index}`)
export const getTabs = () => ajax.get('/tabs')
export const getDetail = (id) => ajax.get(`/detail?id=${id}`)

// 模拟用户登录发送请求
export const sendLogin = (user, pwd) => {
  const loginPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user === 'cyan' && pwd === '123') {
        resolve({
          code: 200,
          data: {
            username: 'cyan',
            avatarUrl: 'http://localhost/favicon.ico',
            token: 'ACBCSDSDdsfDSD3r432fdsfdsafdsafdsfi4f23f32w'
          }
        })
      } else {
        reject(new Error('用户名密码错误'))
      }
    }, 1000)
  })
  return loginPromise
}
