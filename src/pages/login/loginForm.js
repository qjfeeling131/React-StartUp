import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

 export class LoginForm extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form className="login-form">
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a className="login-form-forgot" href="">Forgot password</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                    Log In
                    </Button>
                    Or <a href="">register now!</a>
                </FormItem>
            </Form>
        )
    }
}