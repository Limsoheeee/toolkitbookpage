import React from "react";
import ReactDOM from "react-dom/client";
import store from "./store/store";
import { Provider } from "react-redux";
import Router from "./shared/Router";
import GlobalStyle from "./components/GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <GlobalStyle />
    <Router/>
    {/* <App /> */}
  </Provider>
);
