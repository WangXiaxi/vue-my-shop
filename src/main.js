// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'common/js/http'
import 'common/js/reset' // rem
import 'common/stylus/index.styl'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 引入vuex
// import store from './store'

// import { Indicator, InfiniteScroll, Lazyload, MessageBox, Field } from 'mint-ui'
import 'mint-ui/lib/style.css'

// Vue.use(InfiniteScroll)
// Vue.use(Lazyload)

// 引入swiper
require('swiper/dist/css/swiper.min.css')
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
