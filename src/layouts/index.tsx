/*
 * @Description: 主模板
 * @Author: Pony
 * @Date: 2021-08-08 23:17:13
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-09 23:15:02
 */
import { Redirect } from 'umi';
import BaseLayout from './baseLayout';

export default (props: any) => {
    // return <div style={{ padding: 20 }}>{ props.children }</div>;
    return <BaseLayout>{props.children}</BaseLayout>;
}