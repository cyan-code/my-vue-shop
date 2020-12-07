import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'
import Store from '@/store/index.js'
Vue.use(VueRouter)

const router = new VueRouter({ routes })

router.beforeEach((to, from, next) => {
  const { showBackBtn, title } = to.meta
  // console.log(showBackBtn)
  Store.commit('changeBackBtnandTitle', { showBackBtn, title })
  // console.log(Store.state.showBackBtn)
  next()
})

export default router
