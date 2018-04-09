import axios from 'axios'
import {URL} from './config'

/** 首页数据 **/
export function getHome () {
	const url = URL + '/api/getHome'
	const data = Object.assign({}, {
	})
	return axios.get(url, {
		params: data
	}).then((res) => {
		return Promise.resolve(res.data)
	})
}