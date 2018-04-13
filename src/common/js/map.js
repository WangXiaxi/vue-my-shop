import { AK } from '@/api/config'

// 百度地图添加
export function MP () {
  return new Promise(function (resolve, reject) {
    window.init = () => {
      /* eslint-disable */
      resolve(BMap)
      /* eslint-disable */
    }
    let script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = `http://api.map.baidu.com/api?v=2.0&ak=${AK}&callback=init`
    script.onerror = reject
    document.head.appendChild(script)
  })
}

// 方法
function getRad (d) {
  return d*PI/180.0
}

// 经纬度计算
export function getGreatCircleDistance (lat1, lng1, lat2, lng2) {
  let radLat1 = getRad(lat1)
  let radLat2 = getRad(lat2)
  let a = radLat1 - radLat2
  let b = getRad(lng1) - getRad(lng2)
  let s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)))
  s = s * EARTH_RADIUS;
  s = Math.round(s * 10000) / 10000.0
  return s
}