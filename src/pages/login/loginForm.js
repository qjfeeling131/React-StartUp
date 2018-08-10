import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { connect } from "react-redux";
const FormItem = Form.Item;

 class LoginForm extends Component {
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

const mapStateToProps = state => {
    console.log('mapState',state.toObject())
    return {
      authUser: state.get('authUser').get('authUser').toObject(),
      order: state.get('order').toObject()
    }
  };
const mapDispatchToProps = (dispatch) => ({
    authApp: (user) => dispatch(authUser(user))
  });
  
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
})(LoginForm);
export default connect(mapStateToProps,mapDispatchToProps)(Form.create({})(WrapperLoginForm))
