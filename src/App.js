import React, { useState } from "react";
import {
  BlockEditorProvider,
  BlockList,
  BlockTools,
  BlockCanvas,
  WritingFlow,
} from "@wordpress/block-editor";

import MyEditorComponent from "./components/Editor";
import logo from "./logo.svg";
import "./App.css";

function Editor({ blocks: persistentBlocks }) {
  const [blocks, updateBlocks] = useState(persistentBlocks || []);

  const onBlockEditorInput = (blocks) => {
    console.log("onBlockEditorInput", blocks);
    updateBlocks(blocks);
  };

  const onBlockEditorChange = (blocks) => {
    console.log("onBlockEditorChange", blocks);
    localStorage.setItem("blocks", JSON.stringify(blocks));
    updateBlocks(blocks);
  };

  return (
    <BlockEditorProvider
      value={blocks}
      onInput={(blocks) => onBlockEditorInput(blocks)}
      onChange={(blocks) => onBlockEditorChange(blocks)}
    >
      <BlockTools>
        <BlockCanvas height="400px">
          <BlockList></BlockList>
        </BlockCanvas>
      </BlockTools>
    </BlockEditorProvider>
  );
}

function App({ persistentBlocks }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Editor blocks={persistentBlocks} />
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
