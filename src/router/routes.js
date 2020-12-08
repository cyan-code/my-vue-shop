import Navbar from '@/components/Navbar.vue'
import Catalist from '@/components/Catalist.vue'

import Home from '@/views/Home.vue'
import Shop from '@/views/Shop.vue'
import Cart from '@/views/Cart.vue'
import Login from '@/views/Login.vue'
const My = () => import('@/views/My.vue')
const Detail = () => import('@/views/Detail.vue')
const confirmOrder = () => import('@/views/confirm-order.vue')
const routes = [{
  path: '/',
  redirect: '/home',
  meta: {
    showNavBar: false,
    showBackBtn: false,
    title: '首页',
    isLoginRequired: false
  }
}, {
  path: '/home',
  name: 'Home',
  components: {
    default: Home,
    'nav-bar': Navbar
  },
  meta: {
    showNavBar: true,
    showBackBtn: false,
    title: '首页',
    icon: 'home-o',
    to: '/home',
    isLoginRequired: false

  }
}, {
  path: '/shop',
  name: 'Shop',
  components: {
    default: Shop,
    'nav-bar': Navbar
  },
  children: [
    {
      path: ':id',
      component: Catalist,
      meta: {
        showBackBtn: false,
        title: '商城',
        isLoginRequired: false

      }
    }
  ],
  meta: {
    showNavBar: true,
    showBackBtn: false,
    title: '商城',
    icon: 'shop-o',
    to: '/shop',
    isLoginRequired: false
  }
}, {
  path: '/cart',
  name: 'Cart',
  components: {
    default: Cart,
    'nav-bar': Navbar
  },
  meta: {
    showNavBar: true,
    showBackBtn: false,
    title: '购物车',
    icon: 'shopping-cart-o',
    to: '/cart',
    isLoginRequired: false
  }
}, {
  path: '/my',
  name: 'My',
  components: {
    default: My,
    'nav-bar': Navbar
  },
  meta: {
    showNavBar: true,
    showBackBtn: false,
    title: '我的',
    icon: 'friends-o',
    to: '/my',
    isLoginRequired: true
  }
},
{
  path: '/detail',
  name: 'Detail',
  component: Detail,
  meta: {
    showBackBtn: true,
    showNavBar: false,
    title: '商品详情',
    isLoginRequired: false
  }
},
{
  path: '/login',
  name: 'Login',
  components: {
    default: Login,
    'nav-bar': Navbar
  },
  meta: {
    showBackBtn: true,
    showNavBar: false,
    title: '登录',
    isLoginRequired: false
  }
},
{
  path: '/confirm-order',
  name: 'confirmOrder',
  components: {
    default: confirmOrder,
    'nav-bar': Navbar
  },
  meta: {
    showBackBtn: true,
    showNavBar: false,
    title: '确认订单',
    isLoginRequired: true
  }
}
]

export default routes
