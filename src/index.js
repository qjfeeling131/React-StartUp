import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import WSAppContainer from "./containers/wsAppContainer";
import { Provider } from "react-redux";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
    <WSAppContainer />,
  document.getElementById("root")
);
registerServiceWorker();
