import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './api/mock.js'
import Cookie from 'js-cookie'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Cookies from 'js-cookie'

Vue.config.productionTip = false

Vue.use(ElementUI)

// 添加全局前置守卫
router.beforeEach((to, from, next) => {
  // 判断 token 是否存在
  const token = Cookie.get('token')
  if (!token && to.name !== 'login') {
    // token 不存在,跳转到登录页
    next({name: 'login'})
  } else if(token && to.name === 'login') {
    // token 存在，跳转至首页
    next({name: 'home'})
  } else {
    next()
  }
})

new Vue({
  render: h => h(App),
  router,
  store,
  created() {
    store.commit('addMenu', router)
  }
}).$mount('#app')
