import http from '../utils/request.js'

// 请求首页数据
export const getData = () => {
  // 返回一个 Promise 对象
  return http.get('/home/getData')
}