<template>
  <div class="cata">
    <CataItem
    v-for="item in cataList"
    :key="`item-${item.id}`"
    :id="item.id"
    :title="item.title"
    :image="item.image"
    :price="item.price"
    :saleNum="item.saleNum"
    />
  </div>
</template>

<script>
import CataItem from './Cataitem.vue'
export default {
  name: 'cataList',
  data () {
    return {
      id: '',
      cataList: []
    }
  },
  components: { CataItem },
  methods: {
    getData () {
      this.$http.getCatagory(this.id).then(resp => {
        this.cataList = resp.items.list.filter((item) => item.type === 1)
      })
    }
  },
  created () {
    this.id = this.$route.params.id
    this.getData()
  },
  beforeRouteUpdate (to, from, next) {
    this.id = to.params.id
    next()
    this.getData()
  }
}
</script>

<style lang="scss" scoped>
.cata {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
