import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { App } from "App";
import { Banner } from "components/Banner";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Banner />
  </React.StrictMode>
);
