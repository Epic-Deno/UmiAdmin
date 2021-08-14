/*
 * @Description: 菜单
 * @Author: Pony
 * @Date: 2021-08-09 21:32:29
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-15 00:27:18
 */
export default [
  {
    title: '首页',
    link: '/dashboard',
    key: 'dashboard',
    icon: 'dashboard',
    children: [],
  },
  {
    title: '用户管理',
    link: '/userManagement',
    key: 'userManagement',
    icon: 'team',
    children: [
      {
        title: '用户列表',
        link: '/userManagement/list',
        key: 'list',
        icon: 'user',
        children: [],
      },
      {
        title: '用户权限',
        link: '/userManagement/userPermission',
        key: 'userPermission',
        icon: 'UserGroup',
        children: [],
      },

    ],
  },
  {
    title: '系统管理',
    link: '/settings',
    key: 'settings',
    icon: 'setting',
    children: [],
  },
];
