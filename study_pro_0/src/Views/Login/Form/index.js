import React from 'react';
import './index.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const NormalLoginForm = (props) => {
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={(values)=>props.submit(values)}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: '请输入你的用户名!',
          },
        ]}
      >
        <Input autoComplete="off" bordered={false} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: '请输入你的密码!',
          },
        ]}
      >
        <Input.Password
          bordered={false}
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox className="login-form-forgot">记住我</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="#/">
          忘记密码
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          登录
        </Button>
        <a className="login-form-forgot" href="#/">现在注册!</a>
      </Form.Item>
    </Form>
  );
};

export default NormalLoginForm;
