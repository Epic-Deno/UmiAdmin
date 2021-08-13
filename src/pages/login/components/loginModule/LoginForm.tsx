/*
 * @Description: 登录的表单
 * @Author: Pony
 * @Date: 2021-08-12 23:22:49
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-14 00:07:28
 */
import React, { FC } from 'react';
import { connect, Dispatch } from 'umi';
import { LoginModelState, Loading } from '@/models/connect';

import { SubmitValueProps } from '../../index';

import { Form, Input, Button, Row, Col, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import './index.less';

interface LoginFormProps {
  dispatch: Dispatch;
  login: LoginModelState;
  loading: boolean;
}


interface ParentProps {
  onSubmit: (key: SubmitValueProps) => void
}

const LoginForm: FC<LoginFormProps & ParentProps> = ({
  login,
  dispatch,
  onSubmit,
  loading
}) => {
  const { isError } = login;

  const onFinish = (values: any) => {
    console.warn('get values of form:', values)
    onSubmit(values);
  };

  const handleChange = () => {
    if (isError) {
      dispatch({
        type: 'login/save',
        payload: {
          isError: false
        }
      })
    }
  }
  return (
    <div className="login_form">
      <Form onFinish={onFinish}>
      <div style={{ color: '#f5222d', marginBottom: 8, height: 26 }}>
        {isError && (
          <span>
            <ExclamationCircleOutlined style={{ marginRight: 4 }} />
            用户名或密码错误，请核对后重新输入
          </span>
        )}
      </div>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: '请输入用户名'
            }
          ]}
        >
          <Input 
            size="large" 
            placeholder="admin" 
            prefix={<UserOutlined />} 
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            { required: true, message: '请输入密码' },
            { min: 6, message: '密码最少6位数' },
            { max: 18, message: '密码最多18位数' },
            {
              pattern: new RegExp('^\\w+$', 'g'),
              message: '账号必须字母或数字',
            },
          ]}
        >
          <Input.Password 
            size="large" 
            placeholder="Password: 123456" 
            prefix={<LockOutlined />}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item>
          <Row justify="space-between" align="middle">
            <Col span={8}>
                <Checkbox style={{ marginRight: '6px' }}/>记住密码
            </Col>
            <Col span={6} style={{ textAlign: 'right' }}>
                <a href="">忘记密码</a>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item>
          <Button 
            type="primary" 
            block 
            size="large" 
            htmlType="submit"
            loading={loading}
          >
            {loading ? '登录中' : '登录'}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default connect(
  ({ login, loading }: { login: LoginModelState, loading: Loading }) => ({
    login,
    loading: loading.models.login
  })
)(LoginForm);