import React from "react";
import ReactDOM from "react-dom";
import App from "./client/src/App";
import { BrowserRouter } from "react-router-dom";
//import contexts
import { UserProvider } from "./client/src/contexts/user.context";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
      <App />
      </UserProvider>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById("root")
);