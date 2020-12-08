import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'
import Store from '@/store/index.js'
Vue.use(VueRouter)

const router = new VueRouter({ routes })

router.beforeEach((to, from, next) => {
  const { showBackBtn, title, isLoginRequired } = to.meta
  Store.commit('changeBackBtnandTitle', { showBackBtn, title })
  if (to.meta && isLoginRequired) {
    if (Store.state.user.token) {
      next()
    } else {
      next({ name: 'Login', params: { to } })
    }
  } else {
    next()
  }
})
// 解决导航守卫报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

export default router
