import React, { Component } from "react";
import { Layout, Form, Icon, Input, Button, Checkbox } from "antd";
import  WrapperLoginForm from "./loginForm";
import { connect } from "react-redux";
import styles from "./login.less";
import { authUser } from "../../actions/actionCreator";
// import authUser from "../../actions/actionCreator";
const { Header, Footer, Sider, Content } = Layout;
const FormItem = Form.Item;

export class Login extends Component {
  constructor(props) {
    super(props)
    this.testChanged = this.testChanged.bind(this);
  }

  testChanged() {
    this.props.authApp({ accountName: "test1111", password: "123" })
  }
  render() {
    return (
      <div className="form">
        <button onClick={this.testChanged} />
        <span>{this.props.authUser.accountName}</span>
        <WrapperLoginForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authUser: state.get('authUser').get('authUser').toObject(),
    order: state.get('order').toObject()
  }
};

const mapDispatchToProps = (dispatch) => ({
  authApp: (user) => dispatch(authUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
