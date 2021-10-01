/*
 * @Description: Description
 * @Author: ZHANG ZHEN
 * @Date: 2021-07-02 23:04:10
 * @LastEditors: Pony
 * @LastEditTime: 2021-10-01 13:34:19
 */
import { defineConfig } from 'umi';
import routes from './src/routes';
export default defineConfig({
  title: '博客管理台',
  mfsu: {},
  // layout: {
  //   name: 'Pony design',
  //   locale: true,
  //   layout: 'side',
  //   logo: 'https://sf1-ttcdn-tos.pstatp.com/img/user-avatar/ad7186da163aaf25f3a2d719603c37d0~300x300.image',
  // },
  base: '/UmiAdmin/',
  dynamicImport: {
    loading: '@/components/loading',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  404: true,
  // locale: {
  //   // default zh-CN
  //   default: 'zh-CN',
  //   // default true, when it is true, will use `navigator.language` overwrite default
  //   antd: true,
  //   baseNavigator: true,
  // },
  // routes: routes,
  fastRefresh: {},
  theme: {
    '@primary-color': '#1890ff',
  },
  antd: {
    dark: false,
    compact: true,
  },
  dva: {
    immer: true,
    hmr: false,
  }

});
