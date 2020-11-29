<template>
  <div class="cata">
    <div class="cata-item">
      <div class="cata-item-img">
        <img src="http://img.alicdn.com/bao/uploaded/i1/2201431375329/O1CN01piuh5F1pEjFHG3prT_!!0-item_pic.jpg" alt="">
      </div>
      <p class="cata-item-title">东北冬季雪地靴男士高帮加绒棉鞋加厚中筒户外防水防滑保暖短靴子</p>
      <p class="cata-item-intro">
        <span>$9.9</span>
        <span>销量：999</span>
      </p>
    </div>
    <div class="cata-item">
      <div class="cata-item-img">
        <img src="http://img.alicdn.com/bao/uploaded/i1/2201431375329/O1CN01piuh5F1pEjFHG3prT_!!0-item_pic.jpg" alt="">
      </div>
      <p class="cata-item-title">东北冬季雪地靴男士高帮加绒棉鞋加厚中筒户外防水防滑保暖短靴子</p>
      <p class="cata-item-intro">
        <span>$9.9</span>
        <span>销量：999</span>
      </p>
    </div>
    <div class="cata-item">
      <div class="cata-item-img">
        <img src="http://img.alicdn.com/bao/uploaded/i1/2201431375329/O1CN01piuh5F1pEjFHG3prT_!!0-item_pic.jpg" alt="">
      </div>
      <p class="cata-item-title">东北冬季雪地靴男士高帮加绒棉鞋加厚中筒户外防水防滑保暖短靴子</p>
      <p class="cata-item-intro">
        <span>$9.9</span>
        <span>销量：999</span>
      </p>
    </div>
    <div class="cata-item">
      <div class="cata-item-img">
        <img src="http://img.alicdn.com/bao/uploaded/i1/2201431375329/O1CN01piuh5F1pEjFHG3prT_!!0-item_pic.jpg" alt="">
      </div>
      <p class="cata-item-title">东北冬季雪地靴男士高帮加绒棉鞋加厚中筒户外防水防滑保暖短靴子</p>
      <p class="cata-item-intro">
        <span>$9.9</span>
        <span>销量：999</span>
      </p>
    </div>
    <div class="cata-item">
      <div class="cata-item-img">
        <img src="http://img.alicdn.com/bao/uploaded/i1/2201431375329/O1CN01piuh5F1pEjFHG3prT_!!0-item_pic.jpg" alt="">
      </div>
      <p class="cata-item-title">东北冬季雪地靴男士高帮加绒棉鞋加厚中筒户外防水防滑保暖短靴子</p>
      <p class="cata-item-intro">
        <span>$9.9</span>
        <span>销量：999</span>
      </p>
    </div>
    <div class="cata-item">
      <div class="cata-item-img">
        <img src="http://img.alicdn.com/bao/uploaded/i1/2201431375329/O1CN01piuh5F1pEjFHG3prT_!!0-item_pic.jpg" alt="">
      </div>
      <p class="cata-item-title">东北冬季雪地靴男士高帮加绒棉鞋加厚中筒户外防水防滑保暖短靴子</p>
      <p class="cata-item-intro">
        <span>$9.9</span>
        <span>销量：999</span>
      </p>
    </div>
    <div class="cata-item">
      <div class="cata-item-img">
        <img src="http://img.alicdn.com/bao/uploaded/i1/2201431375329/O1CN01piuh5F1pEjFHG3prT_!!0-item_pic.jpg" alt="">
      </div>
      <p class="cata-item-title">东北冬季雪地靴男士高帮加绒棉鞋加厚中筒户外防水防滑保暖短靴子</p>
      <p class="cata-item-intro">
        <span>$9.9</span>
        <span>销量：999</span>
      </p>
    </div>
    <div class="cata-item">
      <div class="cata-item-img">
        <img src="http://img.alicdn.com/bao/uploaded/i1/2201431375329/O1CN01piuh5F1pEjFHG3prT_!!0-item_pic.jpg" alt="">
      </div>
      <p class="cata-item-title">东北冬季雪地靴男士高帮加绒棉鞋加厚中筒户外防水防滑保暖短靴子</p>
      <p class="cata-item-intro">
        <span>$9.9</span>
        <span>销量：999</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cataList',
  data () {
    return {
      id: ''
    }
  },
  created () {
    console.log(this.id)
    this.id = this.$route.params.id
  },
  beforeRouteUpdate (to, from, next) {
    this.id = this.$route.params.id
    next()
  }
}
</script>

<style lang="scss" scoped>
.cata {
  display: flex;
  flex-wrap: wrap;
  &-item {
    width: 50%;
    box-sizing: border-box;
    padding:5px;
    font-size: 12px;
    line-height: 2;
    color: #666;
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
}
</style>
