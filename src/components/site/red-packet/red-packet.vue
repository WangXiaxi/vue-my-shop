<template>
  <div class="red-packet child-view">
    <header-pub headerTitle="红包" :bgRed=true>
      <div class="explain">
        详细说明
      </div>
    </header-pub>
    <div class="red-part-box">
      <div class='des'>每日10点~20点开红包随机瓜分总金额</div>
      <div class="allNum">
        <span class="add-tip">+</span><span class="big-num">2688.</span><span class="small-num">88</span>
      </div>
      <div class="bot">
        <div class="item">
          <p>1</p>
          <p>总参与瓜分</p>
        </div>
        <div class="item">
          <p>1</p>
          <p>今天剩余可开次数</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import HeaderPub from 'base/header/header-pub'
export default {
  components: {
    HeaderPub
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
.red-packet
  padding-bottom: 59px
  .header-box
    .explain
      color: RGB(255, 255, 255)
      line-height: 42px
      font-size: 12px
      padding-left: 20px
      background: 0 50%/14px 14px no-repeat
      bg-image("~common/image/prompt")
  .red-part-box
    height: 4.34rem
    padding-top: 42px
    background: RGB(235, 18, 18)
    position: relative
    .des
      font-size: 0.2rem
      line-height: 1
      padding-top: 0.32rem
      color: RGB(245, 245, 245)
      text-align: center
    .allNum
      text-align: center
      font-size: 0.48rem
      color: RGB(255, 255, 255)
      margin-top: 0.5rem
      .add-tip
        font-size: 0.68rem
      .big-num
        font-size: 0.88rem
      .small-num
        font-size: 0.68rem
    .bot
      position: absolute
      width: 5.68rem
      bottom: 0
      left: 50%
      margin-left: -2.84rem
      border-radius: 3px 3px 0 0
      background: RGB(255, 93, 93)
      height: 0.92rem
      color: #fff
      display: flex
      .item
        display: flex
        flex-direction: column
        flex: 1
        width: 0
        text-align: center
        justify-content: center
        align-items: center
        p
          line-height: 0.34rem
          font-size: 0.24rem
</style>
