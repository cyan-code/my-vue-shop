<template>
  <div class="cata-item">
    <div class="cata-item-img">
      <img :src="image" alt="">
    </div>
    <p class="cata-item-title">{{title}}</p>
    <p class="cata-item-intro">
      <span>￥{{price}}</span>
      <span>{{saleNum}}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Cataitem',
  props: ['id', 'title', 'image', 'price', 'saleNum']
}
</script>

<style lang="scss" scoped>
.cata-item {
  width: 48%;
  box-sizing: border-box;
  padding:5px;
  margin:2px;
  border-radius: 5px;
  font-size: 12px;
  line-height: 2;
  color: #666;
  background-color: rgb(238, 235, 235);
  &-img {
    width: 100%;
    img {
      width: 100%;
    }
  }
  &-title {
    text-overflow: ellipsis;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
  }
  &-intro {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span:first-child {
      color: red;
      font-size: 14px;
    }
  }
}
</style>
