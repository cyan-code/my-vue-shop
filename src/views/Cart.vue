<template>
  <div class="cart">
    <div class="cart-main">
      <van-swipe-cell>
      <div class="cart-item">
        <div class="cart-item-left">
          <label for="">
          <input type="checkbox">
          <span></span>
          </label>
          <img src="https://img.alicdn.com/bao/uploaded/i4/2206377854761/O1CN01AnmL0R1l2aJ38mP0N_!!0-item_pic.jpg" alt="">
        </div>
        <div class="cart-item-right">
          <div class="cart-item-right-title">fdsfdsafdsafdsaf</div>
          <div class="cart-item-right-bottom">
            <div class="price">￥999.00</div>
            <van-stepper  integer />
          </div>
        </div>
      </div>
      <template #right>
        <van-button square type="danger" text="删除" class="delete-button" />
      </template>
    </van-swipe-cell>
      <van-swipe-cell>
      <div class="cart-item">
        <div class="cart-item-left">
          <label for="">
          <input type="checkbox">
          <span></span>
          </label>
          <img src="https://img.alicdn.com/bao/uploaded/i4/2206377854761/O1CN01AnmL0R1l2aJ38mP0N_!!0-item_pic.jpg" alt="">
        </div>
        <div class="cart-item-right">
          <div class="cart-item-right-title">fdsfdsafdsafdsaf</div>
          <div class="cart-item-right-bottom">
            <div class="price">￥999.00</div>
            <van-stepper  integer />
          </div>
        </div>
      </div>
      <template #right>
        <van-button square type="danger" text="删除" class="delete-button" />
      </template>
    </van-swipe-cell>
      <van-swipe-cell>
      <div class="cart-item">
        <div class="cart-item-left">
          <label for="">
          <input type="checkbox">
          <span></span>
          </label>
          <img src="https://img.alicdn.com/bao/uploaded/i4/2206377854761/O1CN01AnmL0R1l2aJ38mP0N_!!0-item_pic.jpg" alt="">
        </div>
        <div class="cart-item-right">
          <div class="cart-item-right-title">fdsfdsafdsafdsaf</div>
          <div class="cart-item-right-bottom">
            <div class="price">￥999.00</div>
            <van-stepper  integer />
          </div>
        </div>
      </div>
      <template #right>
        <van-button square type="danger" text="删除" class="delete-button" />
      </template>
    </van-swipe-cell>
      <van-swipe-cell>
      <div class="cart-item">
        <div class="cart-item-left">
          <label for="">
          <input type="checkbox">
          <span></span>
          </label>
          <img src="https://img.alicdn.com/bao/uploaded/i4/2206377854761/O1CN01AnmL0R1l2aJ38mP0N_!!0-item_pic.jpg" alt="">
        </div>
        <div class="cart-item-right">
          <div class="cart-item-right-title">fdsfdsafdsafdsaf</div>
          <div class="cart-item-right-bottom">
            <div class="price">￥999.00</div>
            <van-stepper  integer />
          </div>
        </div>
      </div>
      <template #right>
        <van-button square type="danger" text="删除" class="delete-button" />
      </template>
    </van-swipe-cell>
    </div>
    <!-- 底部提交订单 -->
    <div class="cart-submitbar">
      <van-submit-bar :price="3050" button-text="提交订单">
      <van-checkbox >全选</van-checkbox>
      <template #tip>
        你的收货地址不支持同城送, <span>修改地址</span>
      </template>
    </van-submit-bar>
    </div>
  </div>
</template>

<script>
export default {

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
  &-item {
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
}
.delete-button {
  height: 100%;
  border-radius: 5px;
  }
.van-submit-bar {
  position: static;
}
</style>
