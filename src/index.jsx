import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./stores/store";
import { Provider } from "react-redux";

// As of React 18
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
