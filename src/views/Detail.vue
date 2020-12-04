<template>
  <div class="detail">
    <!-- 商品预览图swiper -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#1989fa">
      <van-swipe-item
      v-for="pic in detail.photo"
      :key="pic.id"
      >
      <img :src="pic.url">
      </van-swipe-item>
    </van-swipe>
    <!-- 商品详细信息 -->
    <div class="detail-info">
      <van-card
        :price="detail.price"
        :origin-price="detail.originPrice"
        :title="detail.title"
      >
        <template #tags>
          <van-tag plain type="danger" size="medium">{{detail.couponValue}}</van-tag>
        </template>
        <!-- <template #footer>
          <van-button size="mini">按钮</van-button>
          <van-button size="mini">按钮</van-button>
      </template> -->
    </van-card>
    </div>
    <!-- 底部导航条 -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" to='/cart' :badge="cartNotifyNum | greatThan99" />
      <van-goods-action-button type="warning" text="加入购物车" @click="addToCart({ detail })" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
    <!-- 详细介绍部分 -->
  </div>

</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  name: 'Detail',
  data () {
    return {
      id: '',
      detail: {}
    }
  },
  computed: {
    ...mapGetters(['cartNotifyNum'])
  },
  methods: {
    ...mapMutations(['addToCart'])
  },
  created () {
    this.id = this.$route.query.id
    this.$http.getDetail(this.id).then(resp => {
      const {
        id,
        title,
        photo,
        price,
        originPrice,
        couponValue,
        descContentList
      } = resp.detail
      this.detail = {
        id,
        title,
        photo,
        price,
        originPrice,
        couponValue,
        descContentList
      }
    })
  }
}
</script>

<style lang='scss' scoped>
.van-card__title {
  font-size: 16px;
}
.van-card__price, .van-card__price-integer{
  color: #fa585a;
  font-size: 32px
}
.van-card__origin-price{
  font-size: 16px;
}
</style>
