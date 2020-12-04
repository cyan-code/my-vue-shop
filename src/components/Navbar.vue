<template>
  <div class="navbar">
    <van-tabbar route v-model="tabIndex">
      <van-tabbar-item
        :icon="nav.meta.icon"
        :to="nav.meta.to"
        v-for="nav in navs"
        :key="nav.name"
        >
          {{nav.meta.title}}
        <span class="notifyNum" v-if="nav.name === 'Cart'">{{cartNotifyNum | greatThan99}}</span>
        </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import routes from '@/router/routes.js'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      tabIndex: 0
    }
  },
  computed: {
    ...mapGetters(['cartNotifyNum']),
    navs () {
      return routes.filter((route) => route.meta.showNavBar)
    }
  }
}
</script>

<style lang='scss' scoped>
.van-tabbar-item {
  position: relative;
}
.notifyNum {
  position: absolute;
  top: 3px;
  left: 56px;
  background-color: #ee0a24;
  color:#fff;
  border-radius: 4px;
  padding: 2px 4px;
  font-size: 14px;
}
</style>
