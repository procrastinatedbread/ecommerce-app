import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import { AuthContext } from "./context/AuthContext";

// Call make Server
makeServer();
export { AuthContext };
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        {" "}
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
