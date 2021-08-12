/*
 * @Description: 登录页面
 * @Author: Pony
 * @Date: 2021-08-12 22:08:27
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-12 23:53:01
 */
import LoginModule from '@/components/loginModule';
import './index.less';
import logo from '@/assets/logo.png'

export default () => {
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
          <LoginModule />
        </div>
      </div>
    </div>
  );
};
