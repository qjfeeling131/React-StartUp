import React, { Component } from "react";
import { Layout, Form, Icon, Input, Button, Checkbox } from "antd";
import { LoginForm } from "./loginForm";
import styles from './login.less';
const { Header, Footer, Sider, Content } = Layout;
const FormItem = Form.Item;
const WrapperLoginForm = Form.create({
    //TODO:It need to bind the pros into ant.Form
    // mapPropsToFields(props) {
    //     console.log("test")
    //     return {
    //         userName: Form.createFormField(props.user.userName),
    //         password: Form.createFormField(props.user.password),
    //         remember: Form.createFormField(props.user.password)
    //     }
    // }
}
)(LoginForm);

export class Login extends Component {

    render() {
        return (
            <div className="form">
                <WrapperLoginForm />
            </div>
        )
    }
}