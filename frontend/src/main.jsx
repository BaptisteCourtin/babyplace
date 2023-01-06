import React from "react";
import ReactDOM from "react-dom/client";
import "./components/index.scss";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Toaster />
    <App />
  </BrowserRouter>
  // </React.StrictMode>
);
