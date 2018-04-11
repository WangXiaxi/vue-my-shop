<template>
  <div class="login child-view">
    <div class="login-tit">
      账号登录
    </div>
    <div class="form-box">
      <div class="form-group">
        <input class="pub-input" type="input" v-model="username" placeholder="请输入用户名">
      </div>
      <div class="form-group">
        <input class="pub-input" type="password" v-model="password" placeholder="请输入密码">
      </div>
      <div @click="formSubmit">登录<br>登录登录登录登录登录</div>
      <div>忘记密码？</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { actLogin } from '@/api/api.js'
import { ERR_OK } from '@/api/config.js'
import * as types from '../../store/mutation-types'

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  mounted () {
  },
  methods: {
    formSubmit () {
      actLogin(this.username, this.password).then((res) => {
        if (res.code === ERR_OK) {
          console.log(res)
          this.$store.commit(types.LOGIN, res.token)
          let redirect = decodeURIComponent(this.$route.query.redirect || '/')
          console.log(redirect)
          this.$router.push({
            path: redirect
          })
        }
      })
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.login
  .login-tit
    padding: 0 12px
  .form-box
    padding: 0 12px
    .form-group
      .pub-input
        height: 44px
        padding: 10px
        line-height: 24px
        display: block
        width: 100%
        border-bottom: 1px solid RGB(230, 230, 230)
        outline: none
</style>
