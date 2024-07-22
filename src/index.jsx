import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import View from "./view/view.jsx";
import "../src/services/i18next/i18next.js";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <View />
    </Router>
  </React.StrictMode>
);
