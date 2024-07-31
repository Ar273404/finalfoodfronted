import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./Context/StoreContext";
import { Provider } from "react-redux";
import Store from "./Redux/Store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={Store}>
      <StoreContextProvider>
        <App />
      </StoreContextProvider>
    </Provider>
  </BrowserRouter>
);
