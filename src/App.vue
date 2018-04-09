<template>
  <div id="app">
    <div class="router-box">
      <router-view/>
    </div>
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
  #app
    width: 100%
    height: 100%
    position: relative
    display: flex
    flex-direction: column
    .router-box
      position: relative
      flex: 1
      height: 0
      overflow-x: hidden
      overflow-y: scroll
      -webkit-overflow-scrolling: touch
</style>
