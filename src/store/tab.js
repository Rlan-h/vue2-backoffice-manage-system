export default {
  state: {
    isCollapse: false,    // 控制侧边导航栏折叠或展开
    tabList: [
      {
        path: '/',
        name: 'home',
        label: '首页',
        icon: 's-home',
        url: 'Home/Home'
      }
    ]            // 面包屑数据  
  },
  mutations: {
    // 修改侧边导航栏折叠或收起的方法
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse
    },
    // 更新面包屑数据
    selectMenu(state,val) {
      console.log(val)
      // 判断是否添加数据
      if (val.name !== 'home') {
        const index = state.tabList.findIndex(item => item.name === val.name)
        // 如果不存在
        if (index === -1) {
          state.tabList.push(val)
        }
      }
    }
  }
}