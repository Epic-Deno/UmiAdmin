/*
 * @Description: 登录的外壳
 * @Author: Pony
 * @Date: 2021-08-12 23:22:49
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-13 22:35:13
 */
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import './index.less';
export default () => {
  return (
    <div className="login_form">
      <Form>
        <Form.Item>
          <Input size="large" placeholder="admin" prefix={<UserOutlined />}/>
        </Form.Item>
        <Form.Item>
          <Input.Password size="large" placeholder="Password: 123456" prefix={<LockOutlined />}/>
        </Form.Item>
        <Form.Item>
          <Button type="primary" block size="large" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
