/*
 * @Description: 主模板入口
 * @Author: Pony
 * @Date: 2021-08-08 23:17:13
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-13 23:52:43
 */
import { Redirect } from 'umi';
import BaseLayout from './baseLayout';
import CommonLayout from './commonLayout';
import LoginLayout from './loginLayout';

export default (props: any) => {
  const { pathname } = props.location;
  const userId = localStorage.getItem('userid');
  if (!userId && pathname !== '/login') {
    return <Redirect to={`/login?timestamp=${new Date().getTime()}`} />;
  }
  /*登录页面走单独的模板*/
  if (pathname === '/login') {
    return <LoginLayout>{props.children}</LoginLayout>;
  }
  if (!props.location.state) {
    return <CommonLayout>{props.children}</CommonLayout>;
  }

  return <BaseLayout>{props.children}</BaseLayout>;
};
