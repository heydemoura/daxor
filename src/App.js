import React, { useState } from "react";

import { Button } from "@wordpress/components";

import BlockContentView from "./components/BlockContentView";
import Editor from "./components/Editor";
import "./App.css";
import "@wordpress/components/build-style/style.css";
import "@wordpress/block-editor/build-style/style.css";

function App({ persistentBlocks }) {
  const [editMode, setEditMode] = React.useState(false);
  const [blocks, updateBlocks] = useState(persistentBlocks || []);

  const handleOnEditorSave = React.useCallback(() => {
    localStorage.setItem("blocks", JSON.stringify(blocks));
    updateBlocks(blocks);
  }, [blocks, updateBlocks]);

  const onEditorQuit = React.useCallback(() => {
    handleOnEditorSave(blocks);
    setEditMode(false);
  }, [blocks, handleOnEditorSave, setEditMode]);

  const onUpdateBlocks = React.useCallback(
    (b) => {
      updateBlocks(b);
    },
    [updateBlocks],
  );

  return (
    <div className="App">
      <header className="App-header">
        {editMode && (
          <>
            <Button variant="primary" onClick={() => handleOnEditorSave()}>
              Save
            </Button>
            <Button variant="tertiary" onClick={() => onEditorQuit()}>
              Stop editing
            </Button>{" "}
          </>
        )}
        {!editMode && (
          <Button variant="secondary" onClick={() => setEditMode(!editMode)}>
            Edit Mode
          </Button>
        )}
      </header>
      <main>
        {!editMode && <BlockContentView blocks={blocks} />}

        {editMode && (
          <Editor
            blocks={blocks}
            onChange={onUpdateBlocks}
            onInput={onUpdateBlocks}
          />
        )}
      </main>
    </div>
  );
}

export default App;
