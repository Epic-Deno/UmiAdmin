/*
 * @Description: 主模板
 * @Author: Pony
 * @Date: 2021-08-08 23:17:13
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-10 23:58:52
 */
import { Redirect } from 'umi';
import BaseLayout from './baseLayout';
import CommonLayout from './commonLayout';

export default (props: any) => {
    const { location } = props
    // return <div style={{ padding: 20 }}>{ props.children }</div>;
    if (!location.state) {
        return <CommonLayout>{props.children}</CommonLayout>
    }
    return <BaseLayout>{props.children}</BaseLayout>;
}