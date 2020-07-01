import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
//import { BrowserRouter } from "react-router-dom";
import Routes from "./pages";
const element = (
  <div>
    <h1>this is h1</h1>
  </div>
);
ReactDOM.render(<Routes />, document.getElementById("root"));

serviceWorker.unregister();
