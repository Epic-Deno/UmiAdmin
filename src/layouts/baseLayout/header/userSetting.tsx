/*
 * @Description: 用户菜单
 * @Author: Pony
 * @Date: 2021-08-09 21:53:38
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-10 23:36:18
 */

import React, { FC } from 'react';
import { connect, Dispatch } from 'umi';
import { Dropdown, Menu, Avatar } from 'antd';
import {
  SettingOutlined,
  LogoutOutlined,
  DownOutlined,
} from '@ant-design/icons';
import { LoginModelState, GlobalModelState } from '@/models/connect';

export interface HeaderLayoutProps {
  dispatch: Dispatch;
  global: GlobalModelState;
}

export interface ClickParam {
  key: string;
  [key: string]: any;
}

const UserSettingLayout: FC<HeaderLayoutProps> = ({ global, dispatch }) => {
  function handleSubmit(event: ClickParam) {
    const { key } = event;
    key === 'logout' &&
      dispatch({
        type: 'login/logout',
      });
  }

  const { userInfo } = global;

  const menu = (
    <Menu>
      <Menu.Item key="setPwd">
        <SettingOutlined style={{ marginRight: '4px' }}/>
        设置密码
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout">
        <LogoutOutlined style={{ marginRight: '4px' }}/>
        退出登录
      </Menu.Item>
    </Menu>
  );
  return (
    <div
      style={{
        width: 200,
        textAlign: 'right',
      }}
    >
      <Avatar src="https://avatars.githubusercontent.com/u/74635349?s=64&v=4" style={{ marginRight: '8px' }}/>
      <Dropdown overlay={menu} placement="bottomRight">
        <span style={{ cursor: 'pointer', color: '#fff', fontSize: 14 }}>
          {userInfo.username} <DownOutlined />
        </span>
      </Dropdown>
    </div>
  );
};

export default connect(
  ({
    login,
    global,
  }: {
    login: LoginModelState;
    global: GlobalModelState;
  }) => ({ login, global }),
)(UserSettingLayout);
