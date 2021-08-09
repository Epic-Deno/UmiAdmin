/*
 * @Description: Created By Pony
 * @Author: Pony
 * @Date: 2021-08-09 21:07:23
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-09 21:07:36
 */
import { Button, Result } from 'antd';
import React from 'react';
import { history } from 'umi';

const NoFoundPage: React.FC<{}> = () => (
  <Result
    status="404"
    title="404"
    style={{ width: '100%' }}
    subTitle="此页面未找到"
    extra={
      <Button type="primary" onClick={() => history.push('/')}>
        返回主页
      </Button>
    }
  />
);

export default NoFoundPage;