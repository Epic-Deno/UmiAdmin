/*
 * @Description: Description
 * @Author: ZHANG ZHEN
 * @Date: 2021-07-02 23:04:10
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-08 23:03:03
 */
import { defineConfig } from 'umi';
import routes from './src/routes';
export default defineConfig({
  title: 'Pony design',
  mfsu: {},
  layout: {
    name: 'Pony design',
    locale: true,
    layout: 'side',
    logo: 'https://sf1-ttcdn-tos.pstatp.com/img/user-avatar/ad7186da163aaf25f3a2d719603c37d0~300x300.image',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routes,
  fastRefresh: {},
  antd: {
    dark: false,
    compact: true,
  },
  dva: {
    immer: true,
    hmr: false,
  }

});
