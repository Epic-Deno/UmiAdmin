/*
 * @Description: 主模板入口
 * @Author: Pony
 * @Date: 2021-08-08 23:17:13
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-12 23:59:17
 */
import { history } from 'umi';
import BaseLayout from './baseLayout';
import CommonLayout from './commonLayout';
import LoginLayout from './loginLayout';

export default (props: any) => {
  const { location } = props;
  const userId = localStorage.getItem('userid');
  if (!userId) {
    history.replace({
      pathname: '/user/login',
      search: `timestamp=${new Date().getTime()}`,
    });
  }
  /*登录页面走单独的模板*/
  if (location['pathname'] === '/user/login') {
    return <LoginLayout>{props.children}</LoginLayout>;
  }
  if (!location.state) {
    return <CommonLayout>{props.children}</CommonLayout>;
  }

  return <BaseLayout>{props.children}</BaseLayout>;
};
