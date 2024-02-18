import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { HelmetProvider } from "react-helmet-async";
// import { Provider } from "react-redux";
// import store from "./store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
      {/* <Provider store={store}></Provider> */}
    </HelmetProvider>
  </React.StrictMode>
);
