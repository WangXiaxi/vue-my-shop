<template>
  <div class="near-seller">
    <div class="img-box">
    	<img src="../../../z_simulated_data/images/banner1.png">
    </div>
    <div class="info-box">
    	<h3>e兑商城自营店e兑商城自营店e兑商城自营店</h3>
    	<div class="distance">388m</div>
    	<div class="eval">
    		<star></star>
    		<span>4.7</span>
    		<span>23评价</span>
    	</div>
    	<!-- <star></star> -->
    	<div class="locat">浙江省杭州市萧山区东方文化园</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
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
		width: 96px
		height: 66px
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
			padding-right: 30px
			no-wrap()
			color: RGB(102, 102, 102)
		.distance
			position: absolute
			right: 0
			top: 0
			line-height: 15px
			font-size: 10px
			color: RGB(153, 153, 153)
.ios .near-seller
	border-bottom: 0.5px solid RGB(230, 230, 230)
</style>
