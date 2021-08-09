/*
 * @Description: 头部组件
 * @Author: Pony
 * @Date: 2021-08-09 21:53:03
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-09 22:54:19
 */
import UserSetting from './userSetting';

export default () => {
    return (
        <>
            <div style={{ fontSize: 18, color: '#fff' }}>博客管理台</div>
            <UserSetting />
        </>
    )
}