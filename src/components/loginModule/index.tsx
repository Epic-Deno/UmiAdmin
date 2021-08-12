/*
 * @Description: 登录的外壳
 * @Author: Pony
 * @Date: 2021-08-12 23:22:49
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-12 23:54:49
 */
import { Form, Input, Button } from 'antd';
import './index.less';
export default () => {
  return (
    <Form>
      <Form.Item>
        <Input size="large" placeholder="admin" />
      </Form.Item>
      <Form.Item>
        <Input.Password size="large" placeholder="Password: 123456" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" block size="large" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};
