/*
 * @Description: 登录的模板
 * @Author: Pony
 * @Date: 2021-08-12 22:11:44
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-13 22:14:09
 */
import Footer from '@/components/footer';
import './index.css';

export default (props: any) => {
  return (
    <div className="userLayout">
      <div className="loginContainer">{props.children}</div>
      <Footer/>
    </div>
  );
};
