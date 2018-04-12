<template>
  <!-- 加个随机参数防止VUE报红色错误 -->
  <div class="star-box">
    <div v-for="item in starOn" :key="item + Math.random()" class="star"></div>
    <div v-for="item in starHarf" :key="item + Math.random()" class="star harf"></div>
    <div v-for="item in starOff" :key="item + Math.random()" class="star off"></div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    score: {
      type: Number,
      dafault: 0
    }
  },
  data () {
    return {
      starOff: 5,
      starHarf: 0,
      starOn: 0
    }
  },
  created () {
    this.createStar()
  },
  methods: {
    createStar () {
      this.starOn = Math.floor(this.score)
      this.starOff = this.score > this.starOn ? (4 - this.starOn) : (5 - this.starOn)
      this.starHarf = this.starOn < 5 && (this.score > this.starOn) ? 1 : 0
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/mixin"
.star-box
  display: flex
  width: 65px
  height: 11px
  .star
    width: 12px
    height: 11px
    margin-left: 1px
    background-size: auto 11px
    bg-image("~common/image/star")
    &.off
      background-size: 12px auto
      bg-image("~common/image/star-off")
    &.harf
      background-size: 12px auto
      bg-image("~common/image/star-harf")
</style>
