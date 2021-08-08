/*
 * @Description: Description
 * @Author: ZHANG ZHEN
 * @Date: 2021-07-02 23:04:10
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-08 21:12:08
 */
import { defineConfig } from 'umi';

export default defineConfig({
  mfsu: {},
  layout: {},
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
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
