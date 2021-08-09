/*
 * @Description: 路由入口
 * @Author: Pony
 * @Date: 2021-08-08 21:59:07
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-09 21:13:41
 */
export default [
    { 
        path: '/', 
        title: '首页', 
        name: '首页',
        component: '@/pages/index',
    },
    { 
        path: '/userManagement',
        name: '用户管理', 
        title: '用户管理', 
        component: '@/layouts/index',
        routes: [
            { path: '/userManagement/list', name: '用户列表', component: '@/pages/userManagement' },
            { path: '/userManagement/userPermission', name: '用户权限', component: '@/pages/userManagement/userPermission' },
        ],
    },
    { 
        path: '/settings', 
        name: '系统管理',
        component: '@/layouts/index',
    },
    { component: '@/pages/404' },
]