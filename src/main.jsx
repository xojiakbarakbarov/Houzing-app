import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./root/index.jsx";
import "./index.css";
import RootContext from "./context/index.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RootContext>
    <Root />
    </RootContext>
    
  </React.StrictMode>
);
