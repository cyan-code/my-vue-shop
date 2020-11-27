import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import * as ajax from './request'

Vue.config.productionTip = false

Vue.use(Vant)

Vue.prototype.$http = ajax // 把request里的方法挂载到全局

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
