/*
 * @Description: 路由入口
 * @Author: Pony
 * @Date: 2021-08-08 21:59:07
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-08 22:52:13
 */
export default [
    { 
        path: '/', 
        title: '首页', 
        component: '@/pages/index',
        // menuRender: true,
        // menuHeaderRender: true,
    },
    { path: '/userManagement', title: '用户管理页面', component: '@/pages/userManagement' }
]