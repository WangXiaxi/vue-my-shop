<template>
  <div class="footer-nav">
    <ul>
      <router-link to="/site/home" tag="li" class="nav-1"><i class="nav-1"></i><span>首页</span></router-link>
      <router-link to="/ucenter/1" tag="li" class="nav-2"><i class="nav-2"></i><span>派对</span></router-link>
      <router-link to="/ucenter/2" tag="li" class="nav-cen">
        <div class="gardern-box">
          <div class="bg"></div>
          <div class="gar">
          </div>
        </div>
        <span>扫一扫</span>
      </router-link>
      <router-link to="/ucenter/3" tag="li" class="nav-3"><i class="nav-3"></i><span>红包</span></router-link>
      <router-link to="/ucenter/uindex" tag="li" class="nav-4"><i class="nav-4"></i><span>我的</span></router-link>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  .footer-nav
    height: 49px
    ul
      box-shadow: 0 0 2px rgba(0, 0, 0, .15)
      position: fixed
      bottom: 0
      background: RGB(255, 255, 255)
      z-index: 1000
      height: 49px
      width: 100%
      max-width: 750px
      display: flex
      li
        width: 19%
        text-align: center
        padding-top: 6px
        i
          display: block
          width: 100%
          height: 22px
          background-size: auto 22px
          background-repeat: no-repeat
          background-position: 50%
          transition: all 0.3s
          &.nav-1
            bg-image("./images/nav1")
          &.nav-2
            bg-image("./images/nav2")
          &.nav-3
            bg-image("./images/nav3")
          &.nav-4
            bg-image("./images/nav4")
        span
          display: block
          margin-top: 6px
          font-size: 10px
          color: #666666
          transition: all 0.3s
        &.router-link-active
          span
            color: #eb1212
          i
            &.nav-1
              bg-image("./images/nav1c")
            &.nav-2
              bg-image("./images/nav2c")
            &.nav-3
              bg-image("./images/nav3c")
            &.nav-4
              bg-image("./images/nav4c")
      .nav-cen
        flex: 1
        width: 0
        position: relative
        .gardern-box
          width: 46px
          height: 46px
          border-radius: 50%
          position: absolute
          background: #fff
          top: -12px
          left: 50%
          margin-left: -23px
          box-shadow: 0 0 2px rgba(0, 0, 0, .15)
          padding: 5px
          .gar
            width: 36px
            height: 36px
            background: #eb1212 50%/16px 16px no-repeat
            bg-image("./images/nav-cen")
            border-radius: 50%
            position: relative
            z-index: 1
          .bg
            background: #fff
            width: 50px
            height: 36px
            position: absolute
            left: -2px
            bottom: -2px
        span
          position: relative
          z-index: 2
          margin-top: 0
          padding-top: 28px
</style>
