<template>
  <div class="near-seller">
    <div class="img-box">
      <img src="https://www.ehanone.com/pic/thumb/img/upload@_@2018@_@02@_@26@_@20180226084350408.jpg">
    </div>
    <div class="info-box">
      <h3>e兑商城自营店e兑商城自营店e兑商城自营店</h3>
      <div class="distance">388m</div>
      <div class="eval">
        <div class="star-content">
          <star :score="4.7"></star>
        </div>
        <span class="score">4.7</span>
        <span class="eval-num">23评价</span>
      </div>
      <div class="locat">浙江省杭州市萧山区东方文化园</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import star from 'base/star/star'
export default {
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
