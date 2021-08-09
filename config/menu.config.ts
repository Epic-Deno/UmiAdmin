/*
 * @Description: Created By Pony
 * @Author: Pony
 * @Date: 2021-08-09 21:32:29
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-09 23:25:13
 */
export default [
  {
    title: 'Dashboard',
    link: '/',
    key: 'dashboard',
    icon: 'home',
    children: [],
  },
  {
    title: '用户管理',
    link: '/userManagement',
    key: 'userManagement',
    icon: '',
    children: [
      {
        title: '用户列表',
        link: '/userManagement/list',
        key: 'list',
        icon: '',
        children: [],
      },
      {
        title: '用户权限',
        link: '/userManagement/userPermission',
        key: 'userPermission',
        icon: '',
        children: [],
      },
    ],
  },
  {
    title: '系统管理',
    link: '/settings',
    key: 'settings',
    icon: '',
    children: [],
  },
];
