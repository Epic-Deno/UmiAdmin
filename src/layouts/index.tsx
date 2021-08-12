/*
 * @Description: 主模板入口
 * @Author: Pony
 * @Date: 2021-08-08 23:17:13
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-12 22:34:13
 */
import BaseLayout from './baseLayout';
import CommonLayout from './commonLayout';
import LoginLayout from './loginLayout';

export default (props: any) => {
    const { location } = props
    console.log(location)
    if (!location.state) {
        return <CommonLayout>{props.children}</CommonLayout>
    }
    /*登录页面走单独的模板*/
    if (location['pathname'] === "/user/login") {
        return <LoginLayout>{props.children}</LoginLayout>
    }
    return <BaseLayout>{props.children}</BaseLayout>;
}