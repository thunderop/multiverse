import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { allReducers } from "./redux/reducer";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = configureStore({
  reducer: allReducers,
});
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
