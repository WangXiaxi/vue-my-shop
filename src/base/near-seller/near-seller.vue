<template>
  <div class="near-seller">
    <div class="img-box">
      <img v-lazy="sellerInfo.img">
    </div>
    <div class="info-box">
      <h3>{{sellerInfo.name}}</h3>
      <!-- <div class="distance">388m</div> -->
      <div class="eval">
        <div class="star-content">
          <star :score="sellerInfo.score"></star>
        </div>
        <span class="score">{{sellerInfo.score}}</span>
        <span class="eval-num">{{sellerInfo.eval}}评价</span>
      </div>
      <div class="locat">{{sellerInfo.address}}</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import star from 'base/star/star'
export default {
  props: {
    sellerInfo: {
      type: Object,
      dafault: {}
    }
  },
  components: {
    star
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/mixin"
.near-seller
  position: relative
  overflow: hidden
  width: 100%
  display: flex
  padding: 14px 0
  border-bottom: 0.5px solid RGB(242,242,242)
  .img-box
    width: 1.92rem
    height: 1.32rem
    img
      width: 100%
      height: 100%
  .info-box
    flex: 1
    width: 0
    margin-left: 10px
    position: relative
    h3
      font-size: 13px
      line-height: 15px
      padding-right: 40px
      no-wrap()
      color: RGB(102, 102, 102)
    .distance
      position: absolute
      right: 0
      top: 0
      line-height: 15px
      font-size: 10px
      color: RGB(153, 153, 153)
    .eval
      font-size: 0
      margin-top: 4px
      .star-content
        display: inline-block
      .score
        font-size: 11px
        color: RGB(235, 18, 18)
        margin: 0 9px 0 8px
      .eval-num
        font-size: 11px
        color: RGB(153, 153, 153)
    .locat
      position: absolute
      bottom: 0
      line-height: 13px
      font-size: 11px
      color: RGB(153, 153, 153)
      background: 0 0%/10px 12px no-repeat
      padding-left: 16px
      no-wrap()
      bg-image("~common/image/local")
.ios .near-seller
  border-bottom: 0.5px solid RGB(230, 230, 230)
</style>
