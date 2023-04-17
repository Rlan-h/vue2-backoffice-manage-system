import Cookie from 'js-cookie'
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
    ],            // 面包屑数据  
    menu:[]
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
    },
    // 删除指定 tag 数据
    closeTag(state,item) {
      const index = state.tabList.findIndex(val => val.name === item.name)
      state.tabList.splice(index,1)
    },
    // 设置 Menu 数据
    setMenu(state, val) {
      state.menu = val
      Cookie.set('menu',JSON.stringify(val))
    },
    // 动态注册路由
    addMenu(state, router) {
      // console.log(router,'router')
      // 判断缓存中是否有数据
      if (!Cookie.get('menu')) return
      const menu = JSON.parse(Cookie.get('menu'))
      state.menu = menu
      // 组装动态路由的数据
      const menuArray = []
      // console.log(menu)
      // console.log(menuArray,'menuArray')
      menu.forEach(item => {
        if (item.children) {
          console.log(item.children)
          item.children = item.children.map(item => {
            // console.log(item)
            item.component = () => import(`../views/${item.url}`)
            return item
          })
          menuArray.push(...item.children)
          // console.log(menuArray, 'menuArray')
        } else {
          item.component = () => import(`../views/${item.url}`)
          menuArray.push(item)
        }
      })
      console.log(menuArray, 'menuArray')
      // 路由的动态添加
      menuArray.forEach(item => {
        // console.log(item)
        router.addRoute('Main', item)
      })
      // console.log(router,'router')
    }
  }
}