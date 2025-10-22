import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetAsync } from "./components/helmetAsync/helmetAsync.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import View from "./view/view.jsx";
import "../src/services/i18n/i18n.js";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetAsync />
    <Router>
      <Toaster />
      <View />
    </Router>
  </React.StrictMode>
);
