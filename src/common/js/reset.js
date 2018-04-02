/**
 * rem计算方式：设计图尺寸px / 100 = 实际rem  例: 100px = 1rem
 */
(function (window) {
  /* 设计图文档宽度 */
  let doc = window.document
  let docEl = doc.documentElement
  let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  let recalc = (function refreshRem () {
    let clientWidth = docEl.getBoundingClientRect().width
    let curFont = clientWidth / 7.5
    docEl.style.fontSize = curFont + 'px'
    return refreshRem
  })()
  /* 添加倍屏标识，安卓倍屏为1 */
  docEl.setAttribute('data-dpr', window.navigator.appVersion.match(/iphone/gi) ? window.devicePixelRatio : 1)
  if (/iP(hone|od|ad)/.test(window.navigator.userAgent)) {
    /* 添加IOS标识 */
    doc.documentElement.classList.add('ios')
  }
  if (!doc.addEventListener) return
  window.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(window)
