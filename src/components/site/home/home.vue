<template>
  <div class="home child-view" ref="myHome">
    <!-- 搜索栏 -->
    <div class="search-box" ref="searchBox">
        <div class="search fixed">
            <div class="content">
                <i class="icon-img-search"></i>
                <span class="des">请输入商铺或商圈名</span>
            </div>
        </div>
    </div>
    <div class="scroll-box">
      <!-- 轮播 -->
      <div v-if="optionBanner.length>0" class="banner-box">
        <swiper :options="swiperOptionBanner" ref="bannerSwiper">
          <swiper-slide v-for="(item, index) in optionBanner" :key="index"><router-link :to="item.url" tag="a"><img class="swiper-img" :src="item.imgSrc"></router-link></swiper-slide>
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
      <div v-if="optionNews.length>0" class="news-box">
        <div class="news">
          <i class="icon-img-news"></i>
          <div class="content">
             <swiper :options="swiperOptionNews" ref="newsSwiper">
              <swiper-slide v-for="(item, index) in optionNews" :key="index"><router-link :to="addUrl(['/newsDetail/',item.id])" tag="a"><i class="icon-news-tip"></i><span>{{item.title}}</span></router-link></swiper-slide>
            </swiper>
          </div>
          <i class="icon-img-more"></i>
        </div>
      </div>
      <!-- 占位 -->
      <div class="spliter"></div>
      <!-- 昨日消费 -->
      <div class="consume-box">
        <div class="consume">
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
              <div class="num">
                <span class="big">210.</span>17
              </div>
              <p>(万元)</p>
              <p>平台总赠出</p>
            </li>
            <li>
              <div class="num">
                <span class="big">2.</span>17
              </div>
              <p>(万元)</p>
              <p>今日可瓜分</p>
            </li>
            <li>
              <div class="num">
                <span class="big">23410.</span>17
              </div>
              <p>(元)</p>
              <p>总参与瓜分</p>
            </li>
            <li>
              <div class="num">
                <span class="big">22410.</span>17
              </div>
              <p>(元)</p>
              <p>剩余可瓜分</p>
            </li>
          </ul>
        </div>
      </div>
      <!-- 占位 -->
      <div class="spliter"></div>
      <!-- 优品热卖 -->
      <div v-if="hotGoods.length>0" class="hot-box">
        <div class="pub-tit">
          <h3><span class="tit">优品热卖</span><span>大集V商城</span></h3>
          <div class="hot-tips"></div>
          <div class="more">
            <span>更多</span>
            <i></i>
          </div>
        </div>
        <div class="hot-swiper">
          <swiper :options="swiperOptionHot" ref="hotSwiper">
            <swiper-slide v-for="(item, index) in hotGoods" :key="index">
              <a class="hot-item">
                <img :src="item.img">
                <div class="info">
                  <p class="tit">{{item.name}}</p>
                  <div class="price"><span class="tip">￥</span><span class="money">{{item.price}}</span></div>
                  <div class="sell-num">已售{{item.sellerNum}}</div>
                </div>
              </a>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <!-- 占位 -->
      <div class="spliter"></div>
      <!-- 优品精选 -->
      <div class="competitive-box">
        <div class="pub-tit">
          <h3><span class="tit">优品精选</span><span>大集V商城</span></h3>
        </div>
        <div class="goods-box">
          <goods-info v-for="(item, index) in recommendGoods" :key="index" :goodInfo="item" class="item"></goods-info>
        </div>
        <div class="look-more">
          查看更多
        </div>
      </div>
      <!-- 占位 -->
      <div class="spliter"></div>
      <!-- 附近商圈 -->
      <div v-if="nearBusiness.length>0" class="nearby-box">
        <div class="pub-tit">
          <h3><span class="tit">附近商圈</span></h3>
          <div class="hot-tips"></div>
          <div class="more">
            <span>更多</span>
            <i></i>
          </div>
        </div>
        <div class="nearby-swiper">
          <swiper :options="swiperOptionNearby" ref="nearbySwiper">
            <swiper-slide v-for="(item, index) in nearBusiness" :key="index">
              <router-link :to="addUrl(['nearBusinessDetail',item.id])" tag="a" class="Nearby-item">
                <img v-lazy="item.img">
                <div class="info">
                  <div class="tit">
                    {{item.name}}
                  </div>
                  <div class="locat">
                    {{item.address}}
                  </div>
                </div>
              </router-link>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <!-- 占位 -->
      <div class="spliter"></div>
      <!-- 附近商家 -->
      <div v-if="nearSeller.length>0" class="nearseller-box">
        <div class="pub-tit">
          <h3><span class="tit">附近商家</span></h3>
          <div class="more">
            <span>更多</span>
            <i></i>
          </div>
        </div>
        <div class="nearseller">
          <near-seller v-for="(item, index) in nearSeller" :key="index" :sellerInfo="item"></near-seller>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import GoodsInfo from 'base/goods-info/goods-info'
import NearSeller from 'base/near-seller/near-seller'
import { getHome, getHomeNearBy } from '@/api/api.js'
import { MP } from 'common/js/map.js'
import * as types from '../../../store/mutation-types'
import { ERR_OK } from '@/api/config.js'

export default {
  components: {
    GoodsInfo,
    NearSeller
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
      },
      swiperOptionHot: {
        slidesPerView: 'auto',
        spaceBetween: 10,
        freeMode: true
      },
      swiperOptionNearby: {
        slidesPerView: 'auto',
        spaceBetween: 20,
        freeMode: true
      },
      optionBanner: {},
      optionNews: {},
      hotGoods: {},
      recommendGoods: {},
      nearBusiness: {},
      nearSeller: {}
    }
  },
  cumputed: {
  },
  created () {
    this.loading.open({
      text: '数据加载...',
      spinnerType: 'triple-bounce'
    })
    getHome().then((res) => {
      if (res.code === ERR_OK) {
        this.optionBanner = res.data.banner
        this.optionNews = res.data.news
        this.hotGoods = res.data.hotGoods
        this.recommendGoods = res.data.recommendGoods
      }
      console.log(res)
    })
  },
  mounted () {
    this.$nextTick(() => {
      this.getCurLocat()
    })
  },
  methods: {
    addUrl (arr) {
      return arr.toString().replace(/,/g, '')
    },
    getCurLocat () { // 获取当前地址获取附近商家、商圈
      let _this = this
      MP().then(BMap => { // 地图完成
        let geolocation = new BMap.Geolocation()
        let latitude = null
        let longitude = null
        geolocation.getCurrentPosition((r) => {
          /* eslint-disable */
          if(geolocation.getStatus() === BMAP_STATUS_SUCCESS) {
          /* eslint-disable */
            // 请求数据
            latitude = r.latitude,
            longitude = r.longitude
            // 储存当前地址
            let curAdress = {
              adress: r.address,
              point: r.point
            }
            _this.$store.commit(types.SAVECURADDRESS, curAdress)
          } 
          getHomeNearBy(latitude, longitude).then((res) => {
            _this.nearBusiness = res.data.nearBusiness
            _this.nearSeller = res.data.nearSeller
            _this.loading.close()
          })
        }, (e) => {
          getHomeNearBy(latitude, longitude).then((res) => {
            _this.nearBusiness = res.data.nearBusiness
            _this.nearSeller = res.data.nearSeller
            _this.loading.close()
          })
        })
      })
    }
  },
  deactivated () {
    if (this.$refs.bannerSwiper) {
      this.$refs.bannerSwiper.swiper.stopAutoplay()
    }
    if (this.$refs.newsSwiper) {
      this.$refs.newsSwiper.swiper.stopAutoplay()
    }
  },
  activated () {
    if (this.$refs.bannerSwiper) {
      this.$refs.bannerSwiper.swiper.startAutoplay()
    }
    if (this.$refs.newsSwiper) {
      this.$refs.newsSwiper.swiper.startAutoplay()
    }
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
  padding-bottom: 59px
  .spliter
    width: 100%
    height: 10px
    background: RGB(242, 242, 242)
  .search-box
    width: 100%
    height: 46px
    .search
      position: relative
      width: 100%
      max-width: 750px
      z-index: 10
      background: RGB(235, 18, 18)
      height: 46px
      padding-top: 8px
      &.fixed
        position: fixed
        top: 0
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
      height: 3.66rem
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
    position: relative
    .consume
      padding: 16px 0
      .tit
        text-align: center
        position: relative
        color: RGB(153, 153, 153)
        font-size: 12px
      .consume-all
        font-size: 0
        text-align: center
        margin-top: 10px
        span
          color: RGB(17, 17, 17)
          font-size: 20px
        .tip
          font-size: 16px
        .last-money
          font-size: 16px
      .consume-details
        margin-top: 30px
        display: flex
        li
          flex: 1
          width: 0
          text-align: center
          .num
            color: RGB(235, 18, 18)
            margin-bottom: 13px
            .big
              font-size: 16px
          p
            font-size: 10px
            color: RGB(102, 102, 102)
            &:nth-of-type(1)
              margin-bottom: 2px
  .hot-box
    padding: 16px 0 11px
    position: relative
    .hot-swiper
      padding-left: 12px
      .swiper-slide
        width: 2.04rem
        &:last-child
          margin-right: 12px
    .hot-item
      display: block
      width: 2.04rem
      img
        width: 2.04rem
        height: 2.04rem
      .info
        position: relative
        .tit
          font-size: 10px
          margin-top: 5px
          text-align: center
          no-wrap()
        .price
          margin-top: 12px
          font-size: 12px
          color: RGB(235, 18, 18)
          .tip
            font-size: 10px
        .sell-num
          position: absolute
          right: 0
          bottom: 0
          font-size: 10px
          line-height: 12px
  .competitive-box
    position: relative
    padding: 16px 0 11px
    .goods-box
      padding: 0 12px
      overflow: hidden
      .item
        float: left
        width: 48.5%
        border: 0.5px solid RGB(246, 246, 246)
        margin-bottom: 3%
        &:nth-of-type(2n)
          margin-left: 3%
    .look-more
      margin: 5px auto 0
      color: RGB(235, 18, 18)
      border: 1px solid RGB(235, 18, 18)
      border-radius: 3px
      width: 106px
      line-height: 28px
      font-size: 14px
      text-align: center
  .nearby-box
    padding-top: 16px
    position: relative
    .nearby-swiper
      padding-left: 12px
      .swiper-slide
        width: 4.62rem
        &:last-child
          margin-right: 12px
      .Nearby-item
        width: 4.62rem
        overflow: hidden
        display: block
        padding-bottom: 14px
        img
          width: 4.62rem
          height: 3.58rem
          display: block
      .info
        .tit
          overflow: hidden
          font-size: 13px
          margin-top: 7px
          margin-bottom: 11px
          line-height: 15px
          color: RGB(102, 102, 102)
          no-wrap()
        .locat
          no-wrap()
          padding-left: 16px
          font-size: 12px
          height: 14px
          line-height: 14px
          background: 0 10%/10px 12px no-repeat
          bg-image("~common/image/local")
  .nearseller-box
    padding-top: 16px
    position: relative
    width: 100%
    .nearseller
      padding: 0 12px
      .near-seller:last-child
        border-bottom: none
  .more
    position: absolute
    right: 12px
    top: 0
    height: 12px
    font-size: 0
    span
      color: RGB(235, 18, 18)
      font-size: 12px
      vertical-align: middle
    i
      margin-left: 5px
      display: inline-block
      width: 6px
      height: 12px
      background: 50% 50%/100% no-repeat
      bg-image("~common/image/more")
      vertical-align: middle
  .pub-tit
    height: 16px
    position: relative
    padding: 0 12px
    margin-bottom: 13px
    .more
      top: 2px
    .hot-tips
      width: 25px
      height: 12px
      background: 50% 50%/100% no-repeat
      bg-image("~common/image/hot")
      position: absolute
      top: 2px
      right: 55px
    h3
      line-height: 16px
      font-size: 10px
      color: RGB(235, 18, 18)
      vertical-align: middle
      border-left: 2px solid RGB(235, 18, 18)
      padding-left: 10px
      span
        vertical-align: middle
      .tit
        font-size: 16px
        color: RGB(17, 17, 17)
        margin-right: 7px
.ios .home .competitive-box .goods-box .item
  border: 0.5px solid RGB(230, 230, 230)
</style>
