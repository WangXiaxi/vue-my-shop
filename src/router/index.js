import Vue from 'vue'
import Router from 'vue-router'
import Home from 'site/home/home'
import Uindex from 'ucenter/uindex/uindex'
import Login from 'login/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/site/home'
    },
    { // 网站首页路由
      path: '/site/home',
      name: 'Home',
      component: Home
    },
    { // 登录首页路由
      path: '/ucenter/uindex',
      name: 'Uindex',
      component: Uindex
    },
    { // 登录注册
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
