import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import { Provider } from "react-redux"; //required for using REDUX, now App and all its child components will have access to the store
import store from "./store/redux-store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
