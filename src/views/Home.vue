<template>
  <div class="home">
    <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide"
        v-for="banner in banners"
        :key="banner.id"
        ><img :src="banner.imageUrl" alt=""></div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
</div>
  </div>
</template>

<script>
// 引入轮播图组件Swiper
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

export default {
  name: 'Home',
  data () {
    return {
      banners: []
    }
  },
  methods: {
    // 初始化Swiper，在methods当中调用
    initSwiper () {
      // eslint-disable-next-line
      new Swiper('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination'
        }
      })
    }
  },
  created () {
    this.$http.getCatagory(1).then((resp) => {
      this.banners = resp.banners
      // 需要写到nextTick当中
      this.$nextTick(() => {
        this.initSwiper()
      })
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
