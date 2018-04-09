<template>
  <div class="home child-view">
    <!-- 搜索栏 -->
    <div class="search-box">
        <div class="search">
            <div class="content">
                <i class="icon-img-search"></i>
                <span class="des">请输入商铺或商圈名</span>
            </div>
        </div>
    </div>
    <!-- 轮播 -->
    <div class="banner-box">
      <swiper :options="swiperOptionBanner" ref="bannerSwiper">
        <swiper-slide><a><img class="swiper-img" src="../../../../z_simulated_data/images/banner1.png"></a></swiper-slide>
        <swiper-slide><a><img class="swiper-img" src="../../../../z_simulated_data/images/banner1.png"></a></swiper-slide>
        <swiper-slide><a><img class="swiper-img" src="../../../../z_simulated_data/images/banner1.png"></a></swiper-slide>
        <div class="home-swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <!-- 导航栏 -->
    <div class="nav-box">
      <ul class="nav">
        <li>
          <i class="icon-img-nav1"></i>
          <span>大集网</span>
        </li>
        <li>
          <i class="icon-img-nav2"></i>
          <span>商家推荐</span>
        </li>
        <li>
          <i class="icon-img-nav3"></i>
          <span>大集超市</span>
        </li>
        <li>
          <i class="icon-img-nav4"></i>
          <span>钱包</span>
        </li>
        <li>
          <i class="icon-img-nav5"></i>
          <span>订单记录</span>
        </li>
        <li>
          <i class="icon-img-nav6"></i>
          <span>在线客服</span>
        </li>
        <li>
          <i class="icon-img-nav7"></i>
          <span>帮助中心</span>
        </li>
        <li>
          <i class="icon-img-nav8"></i>
          <span>敬请期待</span>
        </li>
      </ul>
    </div>
    <!-- 新闻公告 -->
    <div class="news-box">
      <div class="news">
        <i class="icon-img-news"></i>
        <div class="content">
           <swiper :options="swiperOptionNews" ref="newsSwiper">
            <swiper-slide><a><i class="icon-news-tip"></i><span>最新公告</span></a></swiper-slide>
            <swiper-slide><a><i class="icon-news-tip"></i><span>关于当天未拆红包处理方法公告</span></a></swiper-slide>
          </swiper>
        </div>
        <i class="icon-img-more"></i>
      </div>
    </div>
    <!-- 占位 -->
    <div class="spliter"></div>
    <!-- 昨日消费 -->
    <div class="consume-box">
      <div class="consume-box">
        <div class="tit">
          消费金额(昨日)
          <div class="more">
            <span>更多</span>
            <i></i>
          </div>
        </div>
        <div class="consume-all">
          <span class="tip">￥</span>
          <span class="first-money">36,788.</span>
          <span class="last-money">0</span>
        </div>
        <ul class="consume-details">
          <li>
            <div>
              
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 占位 -->
    <div class="spliter"></div>
    <!-- 优品热卖 -->
    <div class="hot-box">
    </div>
    <!-- 优品精选 -->
    <div class="competitive-box">
    </div>
    <!-- 附近商圈 -->
    <div class="nearby-box">
    </div>
    <!-- 附近商家 -->
    <div class="nearseller-box">
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOptionBanner: {
        loop: true,
        speed: 600,
        pagination: '.home-swiper-pagination',
        slidesPerView: 'auto',
        centeredSlides: true,
        paginationClickable: true,
        autoplay: 3000,
        autoHeight: true,
        autoplayDisableOnInteraction: false
      },
      swiperOptionNews: {
        direction: 'vertical',
        speed: 300,
        autoplay: 3000,
        height: 30
      }
    }
  },
  mounted () {

  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.swiper-container-horizontal
  .home-swiper-pagination
    position: absolute
    z-index: 1
    text-align: center
    bottom: 6px
    .swiper-pagination-bullet
      margin: 0 3px
      opacity: 1
      background: RGB(204, 204, 204)
      &.swiper-pagination-bullet-active
        background: RGB(255, 255, 255)
        width: 18px
        border-radius: 5px
</style>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/mixin"
.home
  .spliter
    width: 100%
    height: 10px
    background: RGB(242, 242, 242)
  .search-box
    width: 100%
    height: 46px
    .search
      position: relative
      z-index: 100
      background: RGB(235, 18, 18)
      height: 46px
      padding-top: 8px
      .content
        height: 30px
        width: 6.44rem
        background: RGB(255, 255, 255)
        margin: 0 auto
        border-radius: 15px
        font-size: 0
        line-height: 30px
        .icon-img-search
          display: inline-block
          margin-left: 16px
          width: 15px
          height: 16px
          background-size: 100%
          background-repeat: no-repeat
          background-position: 50%
          vertical-align: middle
          bg-image("~common/image/search")
        .des
          font-family: 'Microsoft YaHei'
          margin-left: 6px
          vertical-align: middle
          font-size: 12px
          color: RGB(87, 87, 87)
  .banner-box
    width: 100%
    .swiper-img
      width: 100%
  .nav-box
    background: RGB(255, 255, 255)
    ul.nav
      overflow: hidden
      margin-bottom: 13px
      li
        padding-top: 13px
        float: left
        width: 25%
        text-align: center
        i
          display: block
          margin: 0 auto 7px
          width: 49px
          height: 49px
          background-size: 100%
          background-repeat: no-repeat
          background-position: 50% 50%
          &.icon-img-nav1
            bg-image("~common/image/home_nav1")
          &.icon-img-nav2
            bg-image("~common/image/home_nav2")
          &.icon-img-nav3
            bg-image("~common/image/home_nav3")
          &.icon-img-nav4
            bg-image("~common/image/home_nav4")
          &.icon-img-nav5
            bg-image("~common/image/home_nav5")
          &.icon-img-nav6
            bg-image("~common/image/home_nav6")
          &.icon-img-nav7
            bg-image("~common/image/home_nav7")
          &.icon-img-nav8
            bg-image("~common/image/home_nav8")
        span
          font-size: 11px
          color: RGB(102, 102, 102)
  .news-box
    height: 35px
    padding-bottom: 15px
    .news
      padding: 0 12px
      height: 19px
      display: flex
      .icon-img-news
        display: block
        width: 85px
        height: 19px
        background: 50% 50%/100% no-repeat
        bg-image("~common/image/home_news")
      .content
        flex: 1
        width: 0
        height: 30px
        margin-top: -5px
        margin-left: 7px
        overflow: hidden
        a
          display: flex
          justify-content: center
          align-items: center
          .icon-news-tip
            display: block
            width: 30px
            height: 16px
            background: 50% 50%/100% no-repeat
            bg-image("~common/image/news_tip")
            margin-right: 5px
          span
            flex: 1
            width: 0
            line-height: 30px
            font-size: 12px
            display: inline-block
            no-wrap()
      .icon-img-more
        display: block
        width: 6px
        height: 19px
        background: 50% 50%/100% no-repeat
        bg-image("~common/image/more")
  .consume-box
    .consume
      .more
        span
          color: RGB(235, 18, 18)
          font-size: 13px
        i
          display: inline-block
          width: 8px
          height: 13px
</style>
