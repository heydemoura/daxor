import React, { useState } from "react";
import { BlockEditorProvider } from "@wordpress/block-editor";
import { Card, Flex, Button, Text } from "@radix-ui/themes";

import BlockContentView from "./components/BlockContentView";
import Editor from "./components/Editor";
import Header from "./components/Header";
import EditorToolBar from "./components/EditorToolBar";
import "./App.css";
import "@wordpress/components/build-style/style.css";
import "@wordpress/block-editor/build-style/style.css";

function App({ persistentBlocks }) {
  const [editMode, setEditMode] = React.useState(false);
  const [blocks, updateBlocks] = useState(persistentBlocks || []);
  const [showInspector, setShowInspector] = useState(false);

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

  const handleClearEditor = React.useCallback(() => {
    localStorage.removeItem("blocks");
    updateBlocks([]);
  }, [updateBlocks]);

  const handleToggleInspector = React.useCallback(() => {
    setShowInspector(!showInspector);
  }, [showInspector, setShowInspector]);

  return (
    <div className="App">
      <Header
        editMode={editMode}
        onEditModeClick={() => setEditMode(true)}
        onEditorClearClick={handleClearEditor}
        onEditorSaveClick={onEditorQuit}
      />
      <BlockEditorProvider
        value={blocks}
        onChange={onUpdateBlocks}
        onInput={onUpdateBlocks}
      >
        <main className="App--main">
          {editMode && (
            <EditorToolBar onInspectorToggleClick={handleToggleInspector} />
          )}

          {!editMode && <BlockContentView blocks={blocks} />}

          {editMode && <Editor showInspector={showInspector} />}
        </main>
      </BlockEditorProvider>
    </div>
  );
}

export default App;
