<template>
  <div class="goods-info">
    <div class="img-box">
      <img v-lazy="goodInfo.img">
    </div>
    <div class="info">
      <p class="tit">{{goodInfo.name}}</p>
      <div class="price"><span class="tip">￥</span><span class="money">{{goodInfo.price}}</span></div>
      <div class="sell-num">已售{{goodInfo.sellerNum}}</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    goodInfo: {
      type: Object,
      dafault: {}
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.goods-info
  .img-box
    width: 100%
    padding-top: 100%
    position: relative
    img
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
  .info
    position: relative
    padding: 3px 6px 6px 6px
    .tit
      height: 30px
      position: relative
      overflow: hidden
      color: RGB(102, 102, 102)
      font-size: 11px
      line-height: 15px
      text-overflow: ellipsis
      display: -webkit-box
      -webkit-line-clamp: 2
      -webkit-box-orient: vertical
    .price
      color: RGB(235, 18, 18)
      padding-top: 10px
      .tip
        font-size: 10px
      .money
        font-size: 13px
    .sell-num
      position: absolute
      right: 6px
      bottom: 6px
      color: RGB(153, 153, 153)
      font-size: 10px
      line-height: 13px
</style>
