<template>
  <div class="home">
    home
  </div>
</template>

<script>
// 引入轮播图组件Swiper
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

export default {
  name: 'Home',
  methods: {
    // 初始化Swiper，在methods当中调用
    initSwiper () {
      // eslint-disable-next-line
      new Swiper('.swiper-container', {
        direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination'
        },
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        // 如果需要滚动条
        scrollbar: {
          el: '.swiper-scrollbar'
        }
      })
    }
  },
  created () {
    this.$http.getCatagory(1).then((resp) => {
      console.log(resp)
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
