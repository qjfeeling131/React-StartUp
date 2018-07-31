import React, { Component } from "react";
import { Provider } from "react-redux";

import WSStore from "../store/wsStore";
import Login  from "../pages/login/login";
import "antd/dist/antd.css";

class WSAppContainer extends Component {
  render() {
    return (
      <Provider store={WSStore}>
        <Login />
      </Provider>
    );
  }
}

export default WSAppContainer;
