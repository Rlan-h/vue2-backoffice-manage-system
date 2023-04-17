import Mock from 'mockjs'
import homeApi from './mockServerData/home.js'
import userApi from './mockServerData/user.js'
import permission from './mockServerData/permission.js'


// 定义 mock 请求拦截
Mock.mock('/api/home/getData', homeApi.getStatisticalData)

// 定义用户数据
Mock.mock('/api/user/add', 'post', userApi.createUser)
Mock.mock('/api/user/edit', 'post', userApi.updateUser)
Mock.mock('/api/user/del', 'post', userApi.deleteUser)
Mock.mock(/api\/user\/getUser/, userApi.getUserList)

// 登录
Mock.mock(/api\/permission\/getMenu/,'post',permission.getMenu)