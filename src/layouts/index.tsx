/*
 * @Description: 主模板入口
 * @Author: Pony
 * @Date: 2021-08-08 23:17:13
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-11 10:22:21
 */
import { Redirect } from 'umi';
import BaseLayout from './baseLayout';
import CommonLayout from './commonLayout';

export default (props: any) => {
    const { location } = props
    if (!location.state) {
        return <CommonLayout>{props.children}</CommonLayout>
    }
    return <BaseLayout>{props.children}</BaseLayout>;
}