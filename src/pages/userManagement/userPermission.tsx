/*
 * @Description: 用户权限
 * @Author: Pony
 * @Date: 2021-08-08 23:14:28
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-08 23:28:15
 */
import { Descriptions } from 'antd';

export default () => {
  return (
    <>
      <Descriptions title="User Info" layout="vertical">
        <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
        <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
        <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
        <Descriptions.Item label="Address" span={2}>
          No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
        </Descriptions.Item>
        <Descriptions.Item label="Remark">empty</Descriptions.Item>
      </Descriptions>
    </>
  );
};
