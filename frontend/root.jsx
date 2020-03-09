import React from "react";
import { Provider } from "react-redux";
import App from "./app";
import { HashRouter } from "react-router-dom";

const Root = () => (
  
    <HashRouter>
      <App />
    </HashRouter>
  
);

export default Root;
