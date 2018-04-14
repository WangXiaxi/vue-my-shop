<template>
  <div class="red-packet child-view">
    <header-pub headerTitle="红包" :bgRed=true>
      <div class="explain">
        详细说明
      </div>
    </header-pub>
    <div class="red-info-box">
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
    <div class="red-act-box">
      <div class="red-swiper">
        <swiper :options="swiperOptionRed" ref="redSwiper">
          <swiper-slide><div class="red-item"><span>第1天</span></div></swiper-slide>
          <swiper-slide><div class="red-item"><span>第2天</span></div></swiper-slide>
          <swiper-slide><div class="red-item"><span>第3天</span></div></swiper-slide>
          <swiper-slide><div class="red-item"><span>第4天</span></div></swiper-slide>
          <swiper-slide><div class="red-item grey"><span>第5天</span></div></swiper-slide>
          <swiper-slide><div class="red-item grey"><span>第6天</span></div></swiper-slide>
          <swiper-slide><div class="red-item grey"><span>第7天</span></div></swiper-slide>
          <swiper-slide><div class="red-item grey"><span>第8天</span></div></swiper-slide>
          <swiper-slide><div class="red-item grey"><span>第9天</span></div></swiper-slide>
          <swiper-slide><div class="red-item grey"><span>第10天</span></div></swiper-slide>
        </swiper>
      </div>
      <div class="red-des">
        再消费￥300.0，就能获得下一个红包啦
      </div>
      <div class="red-btn">
        立即开启
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import HeaderPub from 'base/header/header-pub'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    HeaderPub,
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOptionRed: {
        slidesPerView: 'auto',
        speed: 300,
        freeMode: true
      }
    }
  },
  created () {
  },
  methods: {
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@keyframes animations-in
  0%
    transform: translateX(0)
  100%
    transform: translateX(-30%)
.red-packet .red-swiper .swiper-wrapper
  animation: animations-in 1.5s cubic-bezier(.42,.1,.58,1) .6s
</style>
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
  .red-info-box
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
  .red-act-box
    position: relative
    width: 100%
    height: 4.44rem
    background: RGB(242, 242, 242) 0 0.04rem no-repeat
    background-size: 100% auto
    bg-image("~common/image/red-packet-bg")
    .red-swiper
      position: absolute
      width: 6.6rem
      height: 1.4rem
      left: 50%
      margin-left: -3.3rem
      top: 0.4rem
      .swiper-container
        height: 100%
      .swiper-slide
        width: 0.8rem
        margin-left: 0.16666667rem
        &:first-child
          margin-left: 0
        &:last-child
          margin-right: 2px
      .red-item
        width: 0.8rem
        height: 1rem
        background: 50% 50%/100% 100% no-repeat
        position: relative
        bg-image("~common/image/red-packet-small-red")
        &.grey
         bg-image("~common/image/red-packet-small-grey")
        span
          width: 100%
          text-align: center
          position: absolute
          font-size: 0.2rem
          bottom: -0.28rem
          color: RGB(102, 102, 102)
    .red-btn
      position: absolute
      left: 50%
      margin-left: -1.36rem
      width: 2.72rem
      height: 0.68rem
      line-height: 0.68rem
      top: 3.2rem
      font-size: 0.28rem
      text-align: center
      color: #aa4905
      background: linear-gradient(#fdf46b, #ffd833)
      border-radius: 0.06rem
    .red-des
      position: absolute
      width: 100%
      top: 2.4rem
      font-size: 0.24rem
      text-align: center
      color: RGB(255, 255, 255)
</style>
