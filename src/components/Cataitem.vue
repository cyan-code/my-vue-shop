<template>
  <router-link class="cata-item" :to="`/detail?id=${id}`" tag="div">
    <div class="cata-item-img">
      <img :src="image" alt="">
    </div>
    <p class="cata-item-title">{{title}}</p>
    <p class="cata-item-intro">
      <span>￥{{price}}</span>
      <span>{{saleNum}}</span>
    </p>
  </router-link>
</template>

<script>
export default {
  name: 'Cataitem',
  props: ['id', 'title', 'image', 'price', 'saleNum']
}
</script>

<style lang="scss" scoped>
.cata-item {
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
