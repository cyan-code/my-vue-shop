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
        </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import routes from '@/router/routes.js'
export default {
  data () {
    return {
      tabIndex: 0
    }
  },
  computed: {
    navs () {
      return routes.filter((route) => route.meta.showNavBar)
    }
  },
  methods: {
    test () {
      console.log(routes)
      console.log(routes.filter((route) => route.meta.showNavBar))
    }
  }
}
</script>

<style>

</style>
