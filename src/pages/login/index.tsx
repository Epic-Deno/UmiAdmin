/*
 * @Description: 登录页面
 * @Author: Pony
 * @Date: 2021-08-12 22:08:27
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-14 22:09:43
 */
import React, { FC } from 'react';
import { connect, Dispatch } from 'umi';
import { ConnectState } from '@/models/connect';
import LoginForm from './components/loginModule/LoginForm';
import './index.less';
import logo from '@/assets/logo.png'

export interface LoginLayoutProps {
  dispatch: Dispatch;
  login: ConnectState;
  loading: boolean;
}
export interface SubmitValueProps {
  username: string,
  password: string
}

const Login: FC<LoginLayoutProps> = ({ dispatch }) => {
  const handleSubmit = (values: SubmitValueProps) => {
    dispatch({
      type: 'login/queryLogin',
      payload: {
        ...values
      }
    })
  }
  return (
    <div className="userLayOut-cover">
      <div className="login-form-wrap">
        <div className="login-form__content">
          <div className="top">
            <div className="header">
              <a href="/">
                <img src={logo} className="logo" alt="" />
              </a>
            </div>
            <div className="desc">
              Powered By Fantastic Artwork Umi.js.
            </div>
          </div>
          {/* form */}
          <LoginForm onSubmit={handleSubmit}/>
        </div>
      </div>
    </div>
  );
};

export default connect(
  ({ login }: { login: ConnectState }) => ({ login })
)(
  Login,
);