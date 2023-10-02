import React, { useState } from "react";
import {
  BlockEditorProvider,
  BlockList,
  BlockTools,
  BlockCanvas,
  WritingFlow,
} from "@wordpress/block-editor";
import { registerCoreBlocks } from "@wordpress/block-library";
// Make sure to load the block editor stylesheets too
import "@wordpress/components/build-style/style.css";
import "@wordpress/block-editor/build-style/style.css";

import MyEditorComponent from "./components/Editor";
import logo from "./logo.svg";
import "./App.css";

function Editor() {
  const [blocks, updateBlocks] = useState([]);
  registerCoreBlocks();

  return (
    <BlockEditorProvider
      value={blocks}
      onInput={(blocks) => updateBlocks(blocks)}
      onChange={(blocks) => updateBlocks(blocks)}
    >
      <BlockTools>
        <BlockCanvas height="400px">
          <BlockList></BlockList>
        </BlockCanvas>
      </BlockTools>
    </BlockEditorProvider>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Editor />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
