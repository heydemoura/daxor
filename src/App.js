import React, { useState } from "react";
import {
  BlockEditorProvider,
  BlockTools,
  BlockList,
  BlockCanvas,
  BlockInspector,
} from "@wordpress/block-editor";
import { Button } from "@wordpress/components";

import BlockContentView from "./components/BlockContentView";
import BlockEditorContainer from "./components/BlockEditorContainer";
import "./App.css";
import "@wordpress/components/build-style/style.css";
import "@wordpress/block-editor/build-style/style.css";

function Editor({ blocks, onSave, onQuitEditor, onUpdateBlocks }) {
  return (
    <>
      <Button variant="primary" onClick={() => onSave()}>
        Save
      </Button>
      <Button variant="tertiary" onClick={() => onQuitEditor()}>
        Stop editing
      </Button>
      <BlockEditorContainer>
        <BlockEditorProvider
          value={blocks}
          onInput={onUpdateBlocks}
          onChange={onUpdateBlocks}
        >
          <BlockTools>
            <BlockList />
            <BlockInspector />
          </BlockTools>
        </BlockEditorProvider>
      </BlockEditorContainer>
    </>
  );
}

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
          <Editor
            blocks={blocks}
            onQuitEditor={(b) => onEditorQuit(b)}
            onSave={(b) => handleOnEditorSave(b)}
            onUpdateBlocks={onUpdateBlocks}
          />
        )}
        {!editMode && (
          <Button variant="secondary" onClick={() => setEditMode(!editMode)}>
            Edit Mode
          </Button>
        )}
      </header>
      <main>{!editMode && <BlockContentView blocks={blocks} />}</main>
    </div>
  );
}

export default App;
