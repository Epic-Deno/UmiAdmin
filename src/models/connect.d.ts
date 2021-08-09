/*
 * @Description: model的链接
 * @Author: Pony
 * @Date: 2021-08-09 22:04:31
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-09 22:33:21
 */
import { GlobalModelState } from './global';
import { LoginModelState } from './login';

export { LoginModelState, GlobalModelState };

export interface Loading {
  global: boolean;
  effects: { [key: string]: boolean | undefined };
  models: {
    global?: boolean;
    menu?: boolean;
    setting?: boolean;
    user?: boolean;
    login: boolean;
    queryTable: boolean;
    dashboard: boolean;
  };
}

export interface ConnectState {
  global: GlobalModelState;
  login: LoginModelState;
  loading: Loading;
}

export interface Route {
  routes?: Route[];
}
export interface MenusDate {
  title: string;
  link: string;
  key: string;
  icon: string;
  children: any;
}
export interface LoginUserInfoState {
  id: string;
  name: string;
  role?: string;
  [key: string]: any;
}






