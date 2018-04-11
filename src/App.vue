<template>
  <div id="app">
    <transition name="slide">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
    <transition name="slide">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <footer-nav v-show="true"></footer-nav>
  </div>
</template>

<script>
import FooterNav from 'footer-nav/footer-nav'
export default {
  name: 'App',
  components: {
    FooterNav
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .slide-enter-active,.slide-leave-active
    transition: all 0.3s
  .slide-enter,.slide-leave-to
    opacity: 0
  #app
    width: 100%
    height: 100%
    position: relative
    -webkit-overflow-scrolling: touch
</style>
