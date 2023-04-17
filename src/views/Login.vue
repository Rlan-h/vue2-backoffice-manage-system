<template>
  <el-form ref="form" label-width="70px" :inline="true" class="login-container" :model="form" :rules="rules">
    <h3 class="login_title">系统登录</h3>
    <el-form-item prop="username" label="账号">
      <el-input v-model="form.username" placeholder="请输入账号"></el-input>
    </el-form-item>
    <el-form-item prop="password" label="密码">
      <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button @click="submit" style="margin-left: calc(50% + 50px);" type="primary">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import Cookie from 'js-cookie'
import { getMenu } from '../api'
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ required: true, trigger: 'blur', message: '请输入用户名' }],
        password: [{ required: true, trigger: 'blur', message: '请输入密码' }]
      }
    }
  },
  methods: {
    // 登录
    submit() {
      // // token 信息
      // const token = Mock.Random.guid()
      // // 将 token 信息存入 cookie 用于不同页面间的通信
      // Cookie.set('token', token)

      // 校验
      this.$refs.form.validate(valid => {
        if (valid) {
          getMenu(this.form).then(({ data }) => {
            console.log(data)
            if (data.code === 20000) {
              // 将 token 信息存入 cookie 用于不同页面间的通信
              Cookie.set('token', data.data.token)
              // 获取菜单数据，存入 store
              this.$store.commit('setMenu', data.data.menu)
              // 注册路由
              this.$store.commit('addMenu', this.$router)
              // 跳转到首页
              this.$router.push('/home')
            } else {
              this.$message.error('没账号就滚')
            }
          })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  width: 350px;
  border: 1px solid #eaeaea;
  margin: 180px auto;
  padding: 35px 35px 15px 35px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 25px #cac6c6;
  box-sizing: border-box;
  .login_title {
    text-align: center;
    margin-bottom: 40px;
    color: #505458;
  }
  .el-input {
    width: 198px;
  }
}
</style>