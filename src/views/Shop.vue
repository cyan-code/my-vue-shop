<template>
  <div class="shop">
    <!-- 左侧导航栏 -->
    <div class="left-section">
      <div class="side-bar">
        <van-sidebar v-model="activeCatagory">
          <van-sidebar-item
            v-for="item in cataNameList"
            :key="`tab-${item.id}`"
            :title="item.name"
            :to="`/shop/${item.id}`"
          />
        </van-sidebar>
      </div>
    </div>
    <!-- 右侧动态路由列表区域 -->
    <div class="right-section" ref="rightSection">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeCatagory: 0,
      cataNameList: []
    }
  },
  created () {
    this.$http.getTabs().then(resp => {
      this.cataNameList = resp.list
      const { id } = this.$route.params
      if (id) {
        // 如果id已经存在，说明是刷新，不跳转，修改sidebar的index
        this.cataNameList.forEach((item, index) => {
          if (item.id === parseInt(id)) {
            this.activeCatagory = index
            // this.$refs.rightSection.scrollTop = 0
          }
        })
        // id不存在说明是从别的组件跳转，进行重定向
      } else {
        this.$router.push(`/shop/${this.cataNameList[0].id}`)
      }
    })
  },
  beforeRouteUpdate (to, from, next) {
    // 如果已经处于shop组件，再次点击shop组件会跳到没有id的path，造成数据不显示，
    // 因此这里做一个判断，非/shop路径才会跳转。
    if (to.fullPath !== '/shop') next()
  }
}
</script>

<style lang="scss" scoped>
  .shop {
    display: flex;
    height: 100%;
    .right-section {
      flex: 1;
    }
    .left-section {
      overflow-x: hidden;
    }
    .right-section {
      overflow-x: hidden;
    }
  }
</style>
