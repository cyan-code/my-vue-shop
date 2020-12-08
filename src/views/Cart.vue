<template>
  <div class="cart">
    <div class="cart-main" v-if="cart.length === 0">
      <van-empty description="你的购物车空空如也" />
    </div>
    <div class="cart-main" v-else>
      <cartItem
      :id="item.id"
      :title="item.title"
      :price="item.price"
      :checked="item.checked"
      :count="item.count"
      :photo="item.photo"
      v-for="item in cart"
      :key="`cart-${item.id}`"
      />
    </div>
    <!-- 底部提交订单 -->
    <div class="cart-submitbar">
      <van-submit-bar :disabled="isSubmitDisabled" :price="sumPrice * 100" button-text="提交订单" @submit="onSubmit">
        <van-checkbox :value="isAllCheck" @click="toggleAllCheck()">全选</van-checkbox>
    </van-submit-bar>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import cartItem from '@/components/Cartitem.vue'
export default {
  components: { cartItem },
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['sumPrice', 'isAllCheck', 'isSubmitDisabled'])
  },
  methods: {
    ...mapMutations(['toggleAllCheck']),
    onSubmit () {
      this.$router.push('/confirm-order')
    }
  }
}
</script>

<style lang="scss" scoped>
.cart {
  background-color: #DFDFDF;
  height: 100%;
  display: flex;
  flex-direction: column;
  &-main {
    flex:1;
  }
}
.van-submit-bar {
  position: static;
}
</style>
