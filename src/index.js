import React from "react";
import ReactDOM from "react-dom";
//import {Provider} from "react-redux";
import Provider from './store/store'

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider>
    <App/>
  </Provider>,
  rootElement
);