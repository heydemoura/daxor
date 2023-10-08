import React from "react";
import ReactDOM from "react-dom/client";
import { Theme } from "@radix-ui/themes";
import "@wordpress/block-library/build-style/style.css";
import "@radix-ui/themes/styles.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import registerDashboardBlocks from "./blocks";
import registerEditorHooks from "./hooks";

registerEditorHooks();
registerDashboardBlocks();

const persistentBlocks = JSON.parse(localStorage.getItem("blocks"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Theme>
      <App persistentBlocks={persistentBlocks} />
    </Theme>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
