<template>
  <div class="my">
    <van-contact-card type="edit" :name="username" tel="avatarUrl" :editable="false" />
    <van-button type="primary" @click="logout" to='/home'>注销</van-button>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  computed: {
    ...mapState('user', ['username', 'token', 'avatarUrl'])
  },
  methods: {
    ...mapMutations('user', ['LOGOUT']),
    logout () {
      this.LOGOUT()
    }
  }
}
</script>

<style>

</style>
