import React from "react";
import ReactDOM from "react-dom/client";
import "@wordpress/components/build-style/style.css";
import "@wordpress/block-editor/build-style/style.css";
import "@wordpress/block-library/build-style/style.css";
import "@wordpress/block-library/build-style/editor.css";
import "@wordpress/block-library/build-style/theme.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import registerShortcutBadge from "./blocks/ShortcutBadge";
import registerClock from "./blocks/Clock";

const persistentBlocks = JSON.parse(localStorage.getItem("blocks"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App persistentBlocks={persistentBlocks} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

registerShortcutBadge();
registerClock();
