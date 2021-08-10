/*
 * @Description: Description
 * @Author: ZHANG ZHEN
 * @Date: 2021-07-02 23:04:10
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-10 23:46:06
 */
import { Redirect } from 'umi';

export default () => (
  <Redirect
    to={{
      pathname: '/dashboard',
      state: {},
    }}
  />
);
