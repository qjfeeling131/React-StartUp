import React, { Component } from "react";
import { Layout, Form, Icon, Input, Button, Checkbox } from "antd";
import { LoginForm } from "./loginForm";
import { connect } from "react-redux";
import styles from "./login.less";
import authUser from "../../actions/actionCreator";
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
})(LoginForm);

export class Login extends Component {
    constructor(props){
        super(props)
        console.log(props.autuUser);
    }
  render() {
    return (
      <div className="form">
        <WrapperLoginForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    autuUser: state.LoginReducer
  };
};

const mapDispatchToProps = (dispatc, ownPropsh) => ({
  authApp: () => dispatch(authUser(ownPropsh.authUser))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
