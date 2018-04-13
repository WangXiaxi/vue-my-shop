import axios from 'common/js/http'
import { URL } from './config'
import qs from 'qs'

/** 首页数据 **/
export function getHome () {
  const url = URL + '/api/getHome'
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}
/** 首页附近商家数据 **/
export function getHomeNearBy (latitude, longitude) {
  const url = URL + '/api/getHomeNearBy'
  const data = {
    latitude: latitude,
    longitude: longitude
  }
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

/** 账号密码登录 **/
export const actLogin = (username, password) => {
  const url = URL + '/api/login'
  const data = {
    username: username,
    password: password
  }
  return axios.post(url, qs.stringify(data)).then((res) => {
    return Promise.resolve(res.data)
  })
}
