/*
 * @Description: 登录的外壳
 * @Author: Pony
 * @Date: 2021-08-12 23:22:49
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-12 23:23:59
 */
import './index.less'
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
  