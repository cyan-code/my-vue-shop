<template>
  <div class="login">
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
      v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
        提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions('user', ['loginAsync']),
    onSubmit (e) {
      this.loginAsync(e).then(res => {
        if (res.status === 200) {
          console.log('登陆成功')
          const { to = '/my' } = this.$route.params
          this.$router.push(to)
        } else {
          console.log('登录失败')
        }
      })
    }
  }
}
</script>

<style scoped lang='scss'>
.login {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
}
</style>
