/*
 * @Description: loading组件
 * @Author: Pony
 * @Date: 2021-08-14 22:19:55
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-14 22:30:41
 */
import './index.css'
export default () => {
  return (
    <div>
      <div id="loader-wrapper">
        <div id="loader"></div>
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
        <div className="load_title">Pony Design正在加载,请耐心等待</div>
      </div>
    </div>
  );
};
