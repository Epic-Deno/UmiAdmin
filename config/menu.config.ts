/*
 * @Description: Created By Pony
 * @Author: Pony
 * @Date: 2021-08-09 21:00:23
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-09 21:04:26
 */
export default [
    {
      title: 'Dashboard',
      link: '/dashboard',
      key: 'dashboard',
      icon: '',
      children: [],
    },
    {
      title: '列表页',
      link: '/list',
      key: 'list',
      icon: '',
      children: [
        {
          title: '查询列表',
          link: '/list/queryTable',
          key: 'queryTable',
          icon: '',
          children: [],
        },
      ],
    },
    {
      title: '功能页',
      link: '/func',
      key: 'func',
      icon: '',
      children: [
        {
          title: '拖拽排序',
          link: '/func/draggable',
          key: 'draggable',
          icon: '',
          children: [],
        },
        {
          title: 'gg-editor',
          link: '/func/ggEditor',
          key: 'ggEditor',
          icon: '',
          children: [],
        },
        {
          title: 'antvX6',
          link: '/func/antvX6',
          key: 'antvX6',
          icon: '',
          children: [],
        },
      ],
    },
  ];