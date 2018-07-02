import React, { Component } from "react";
import { Layout, Form, Icon, Input, Button, Checkbox } from "antd";
import { LoginForm } from "./loginForm";
const { Header, Footer, Sider, Content } = Layout;
const FormItem = Form.Item;
const wrapperLoginForm = Form.create({
    mapPropsToFields(props) {
        console.log("test")
        return {
            userName: Form.createFormField(props.user.userName),
            password: Form.createFormField(props.user.password),
            remember: Form.createFormField(props.user.password)
        }
    }
}
)(LoginForm);

export class Login extends Component {

    render() {
        return (
            <Layout>
                <Content>
                    <wrapperLoginForm user={{userName: "",password:"",remember:false}} />
                </Content>
            </Layout>
        )
    }
}