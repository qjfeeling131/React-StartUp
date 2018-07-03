import React, { Component } from 'react';
// import './App.css';
import WSAPP from "./pages/wsApp";
import { Login } from "./pages/login/login";
import 'antd/dist/antd.css'

class App extends Component {
  render() {
    return (
      <Login />
      // <div>test</div>
    );
  }
}

export default App;
