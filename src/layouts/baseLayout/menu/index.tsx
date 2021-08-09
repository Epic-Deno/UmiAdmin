/*
 * @Description: 头部
 * @Author: Pony
 * @Date: 2021-08-09 22:55:38
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-09 23:13:01
 */
import React, { FC } from 'react';
import { Link, connect, useLocation, Loading } from 'umi';
import { Menu } from 'antd';
import { GlobalModelState } from '@/models/connect';
import { queryKeysByPath } from '@/utils/utils';

const { SubMenu, Item } = Menu;

export interface BasicLayoutProps {
  global: GlobalModelState;
  loading: boolean;
}

const MenuContent: FC<BasicLayoutProps> = ({ global }) => {
  const { menusData } = global;
  const location = useLocation();

  function renderMenu(data: any = []) {
    const rows = Array.isArray(data) ? data : [];
    return rows.map((row) => {
      if (!row) return false;
      const { title, link = '', key, children, ...restState } = row;
      if (children && children.length > 0) {
        const subMenu = renderMenu(children); // 递归
        return (
          <SubMenu key={key} title={<span>{title}</span>}>
            {subMenu}
          </SubMenu>
        );
      }
      return (
        <Item key={key} title={title}>
          <Link to={{ pathname: link, state: { ...restState, key } }}>
            {/* <Icon type={icon} /> */}
            <span>{title}</span>
          </Link>
        </Item>
      );
    });
  }
  const { openKey, selectKey } = queryKeysByPath(location.pathname);

  return (
      <Menu
        selectedKeys={[selectKey || '']}
        defaultOpenKeys={[openKey]}
        mode="inline"
        theme="light"
        className="progressbar"
      >
          {renderMenu(menusData)}
      </Menu>
  )
};
export default connect(
    ({ global, loading }: { global: GlobalModelState, loading: Loading }) => ({
        global,
        loading: loading.models.index
    }),
)(MenuContent);