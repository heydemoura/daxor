import React, { useState } from "react";
import { BlockEditorProvider } from "@wordpress/block-editor";
import { Card, Flex, Button, Text } from "@radix-ui/themes";

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

  const handleClearEditor = React.useCallback(() => {
    localStorage.removeItem("blocks");
    updateBlocks([]);
  }, [updateBlocks]);

  return (
    <div className="App">
      <header className="App-header">
        {editMode && (
          <Flex gap="2">
            <Button
              size="3"
              variant="solid"
              onClick={() => handleOnEditorSave()}
            >
              Save
            </Button>
            <Button size="3" variant="soft" onClick={() => onEditorQuit()}>
              Stop editing
            </Button>{" "}
            <Button
              size="3"
              variant="outline"
              onClick={() => handleClearEditor()}
            >
              Clear
            </Button>
          </Flex>
        )}
        {!editMode && (
          <Button
            size="3"
            variant="soft"
            onClick={() => setEditMode(!editMode)}
          >
            Edit Mode
          </Button>
        )}
      </header>
      <BlockEditorProvider
        value={blocks}
        onChange={onUpdateBlocks}
        onInput={onUpdateBlocks}
      >
        <main className="App--main">
          {!editMode && <BlockContentView blocks={blocks} />}

          {editMode && <Editor />}
        </main>
      </BlockEditorProvider>
    </div>
  );
}

export default App;
