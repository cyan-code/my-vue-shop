<template>
  <div>
    <van-swipe-cell>
        <div class="cart-item">
          <div class="cart-item-left">
            <!-- 通过v-model属性绑定 -->
            <van-checkbox :value="checked" @click="toggleCheck({id})"></van-checkbox>
            <img :src="photo[0].url" alt="">
          </div>
          <div class="cart-item-right">
            <div class="cart-item-right-title">{{title}}</div>
            <div class="cart-item-right-bottom">
              <div class="price">￥{{price | toFixed2}}</div>
              <!-- 步进器 -->
              <van-stepper  integer :default-value="count" @change="changeItemCount" />
            </div>
          </div>
        </div>
        <template #right>
          <van-button square type="danger" text="删除" class="delete-button" @click="delCartItem({ id })"/>
        </template>
      </van-swipe-cell>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'cartItem',
  props: ['id', 'title', 'price', 'checked', 'count', 'photo'],
  methods: {
    ...mapMutations(['toggleCheck', 'delCartItem']),
    changeItemCount (count) {
      const id = this.id
      this.$store.commit('changeItemCount', { id, count })
    }
  }
}
</script>

<style lang="scss" scoped>
.cart-item {
    padding: 10px;
    background-color: #fff;
    margin:5px 10px;
    border-radius: 5px;
    height: 100px;
    display: flex;
    &-left {
      // border: 1px solid red;
      display: flex;
      justify-items: center;
      align-items: center;
      margin-right: 10px;
      img {
        margin-left: 5px;
        width: 80px;
        border-radius: 5px;
      }
    }
    &-right {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      &-title {
        margin-top: 10px;
        font-size: 12px;
        // border: 1px solid red;
      }
      &-bottom {
        // border: 1px solid red;
        display: flex;
        justify-content: space-between;
        .price{
          color: #ff0000;
        }
      }
    }
  }
  .delete-button {
  height: 100%;
  border-radius: 5px;
  }
</style>
