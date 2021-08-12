/*
 * @Description: 登录页面
 * @Author: Pony
 * @Date: 2021-08-12 22:08:27
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-12 23:25:46
 */
import './index.less';
export default () => {
  return (
    <div className="userLayOut-cover">
      <div className="login-form-wrap">
        <div className="login-form__content">
          <div className="top">
            <div className="header">
              <a href="/">
                <img src="../../assets/logo.png" className="logo" alt="" />
              </a>
            </div>
            <div className="desc">
              Powered By Fantastic Artwork Vue.js @ Evan You.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
