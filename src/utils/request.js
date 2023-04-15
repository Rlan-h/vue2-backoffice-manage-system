import axios from "axios"


const http = axios.create({
  // 通用请求的地址前缀
  baseURL: '/api',
  timeout: 10000       // 超时时间
})

// 请求拦截器
http.interceptors.request.use(function (config) {
  // 在请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 响应拦截器
http.interceptors.request.use(function (response) {
  // 在响应之前做些什么
  return response
}, function (error) {
  // 对响应错误做些什么
  return Promise.reject(error)
})


export default http