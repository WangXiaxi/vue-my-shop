<template>
  <!-- 加个随机参数防止VUE报红色错误 -->
  <div class="header-box" :class="{'red-header':bgRed}">
    <div class="go-back">返回</div>
    <div class="tit">{{headerTitle}}</div>
    <div class="right-btn">
      <slot></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    headerTitle: {
      type: String,
      dafault: ''
    },
    bgRed: {
      type: Boolean,
      dafault: false
    }
  },
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/mixin"
.header-box
  height: 42px
  background: RGB(255, 255, 255)
  position: fixed
  top: 0
  width: 100%
  max-width: 750px
  z-index: 10
  &:after
    line-scale()
  .tit
    text-align: center
    width: 100%
    line-height: 42px
    font-size: 18px
  .go-back
    font-size: 14px
    line-height: 42px
    position: absolute
    left: 12px
    top: 0
    color: RGB(255, 93, 93)
    padding-left: 14px
    background: 0 50%/10px 18px no-repeat
    bg-image("~common/image/go-back-red")
  .right-btn
    position: absolute
    right: 12px
    top: 0
    height: 42px
.red-header
  background: RGB(235, 18, 18)
  .tit
    color: RGB(255, 255, 255)
  .go-back
    color: RGB(255, 255, 255)
    bg-image("~common/image/go-back")
  &:after
    content: none
</style>
