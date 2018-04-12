import Vue from 'vue'
import Router from 'vue-router'
import Home from 'site/home/home'
import RedPacket from 'site/red-packet/red-packet'
import store from '../store/index'
import Uindex from 'ucenter/uindex/uindex'
import Login from 'login/login'
import * as types from '../store/mutation-types'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/site/home'
    },
    { // 网站首页路由
      path: '/site/home',
      name: 'Home',
      component: Home,
      meta: {
        keepAlive: true
      }
    },
    { // 网站首页路由
      path: '/site/RedPacket',
      name: 'RedPacket',
      component: RedPacket,
      meta: {
        keepAlive: true
      }
    },
    { // 登录首页路由
      path: '/ucenter/uindex',
      name: 'Uindex',
      component: Uindex,
      meta: {
        requireAuth: true
      }
    },
    { // 登录注册
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

// 页面刷新时，重新赋值token
if (window.sessionStorage.getItem('token')) {
  store.commit(types.LOGIN, window.sessionStorage.getItem('token'))
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.token) {
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})

export default router
