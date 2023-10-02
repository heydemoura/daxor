import React, { useState } from "react";
import {
  BlockEditorProvider,
  BlockList,
  BlockTools,
  BlockCanvas,
  WritingFlow,
} from "@wordpress/block-editor";
import { Button } from "@wordpress/components";

import MyEditorComponent from "./components/Editor";
import logo from "./logo.svg";
import "./App.css";

function Editor({ blocks: persistentBlocks, onQuitEditor }) {
  const [blocks, updateBlocks] = useState(persistentBlocks || []);

  const onBlockEditorInput = (blocks) => {
    console.log("onBlockEditorInput", blocks);
    localStorage.setItem("blocks", JSON.stringify(blocks));
    updateBlocks(blocks);
  };

  const onBlockEditorChange = (blocks) => {
    console.log("onBlockEditorChange", blocks);
    localStorage.setItem("blocks", JSON.stringify(blocks));
    updateBlocks(blocks);
  };

  const handleSave = () => {
    localStorage.setItem("blocks", JSON.stringify(blocks));
    updateBlocks(blocks);
    onQuitEditor();
  };

  return (
    <div>
      <Button variant="primary" onClick={handleSave}>
        Save
      </Button>
      <BlockEditorProvider
        value={blocks}
        onInput={(blocks) => onBlockEditorInput(blocks)}
        onChange={(blocks) => onBlockEditorChange(blocks)}
      >
        <BlockTools>
          <BlockCanvas height="400px"></BlockCanvas>
        </BlockTools>
      </BlockEditorProvider>
    </div>
  );
}

function App({ persistentBlocks }) {
  const [editMode, setEditMode] = React.useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {editMode && (
          <Editor
            blocks={persistentBlocks}
            onQuitEditor={() => setEditMode(false)}
          />
        )}
        {!editMode && (
          <Button variant="secondary" onClick={() => setEditMode(!editMode)}>
            Edit Mode
          </Button>
        )}
      </header>
    </div>
  );
}

export default App;
