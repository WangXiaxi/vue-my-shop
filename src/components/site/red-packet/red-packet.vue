<template>
  <div class="red-packet child-view">
    <header-pub headerTitle="红包" :bgRed=true>
      <div class="explain">
        详细说明
      </div>
    </header-pub>
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
  .header-box
    .explain
      color: RGB(255, 255, 255)
      line-height: 46px
      font-size: 12px
      padding-left: 20px
      background: 0 50%/14px 14px no-repeat
      bg-image("~common/image/prompt")
</style>
