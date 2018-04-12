import { AK } from '@/api/config'

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
