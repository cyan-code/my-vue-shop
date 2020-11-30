<template>
  <div class="cata">
    <van-list
      v-model="isLoading"
      :finished="isEnd"
      finished-text="没有更多了"
      @load="getData"
    >
      <van-cell v-for="item in cataList" :key="`item-${item.id}`">
        <template #title>
          <CataItem
            :id="item.id"
            :title="item.title"
            :image="item.image"
            :price="item.price"
            :saleNum="item.saleNum"
          />
        </template>
</van-cell>
    </van-list>
    <!-- <CataItem
    v-for="item in cataList"
    :key="`item-${item.id}`"
    :id="item.id"
    :title="item.title"
    :image="item.image"
    :price="item.price"
    :saleNum="item.saleNum"
    /> -->
    <!-- <van-button round type="info" @click="loadMore">加载更多</van-button> -->
  </div>
</template>

<script>
import CataItem from './Cataitem.vue'
export default {
  name: 'cataList',
  data () {
    return {
      id: '',
      cataList: [],
      nextIndex: 0, // 下一次请求的分页索引
      isEnd: false,
      isLoading: false
    }
  },
  components: { CataItem },
  methods: {
    getData () {
      this.$http.getCatagory(this.id, this.nextIndex).then(resp => {
        const { list, nextIndex, isEnd } = resp.items
        this.cataList = this.cataList.concat(list.filter((item) => item.type === 1))
        this.nextIndex = nextIndex
        this.isEnd = isEnd
        this.isLoading = false
      })
    }
  },
  created () {
    this.id = this.$route.params.id
    console.log('created')
    // this.getData() vant的scroll插件上来调用了getdata方法
  },
  beforeRouteUpdate (to, from, next) {
    this.id = to.params.id
    next()
    this.cataList = []
    this.nextIndex = 0
    console.log('beforeRouteUpdate')
    this.getData()
  }
}
</script>

<style lang="scss" scoped>
.cata {
  .van-list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .van-cell {
  width: 48%;
  box-sizing: border-box;
  padding:5px;
  margin:2px;
  border-radius: 5px;
  font-size: 12px;
  line-height: 2;
  color: #666;
  background-color: rgb(238, 235, 235);
  }
  .van-cell__title {
    width: 100%;
  }
}
</style>
