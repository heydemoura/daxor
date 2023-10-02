import React, { useState } from "react";
import { getBlockTypes, getBlockContent } from "@wordpress/blocks";
import keyBy from "lodash/keyBy";
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

function Editor({ blocks, onSave, onQuitEditor, onUpdateBlocks }) {
  return (
    <div>
      <Button variant="primary" onClick={() => onSave()}>
        Save
      </Button>
      <Button variant="tertiary" onClick={() => onQuitEditor()}>
        Stop editing
      </Button>
      <BlockEditorProvider
        value={blocks}
        onInput={onUpdateBlocks}
        onChange={onUpdateBlocks}
      >
        <BlockTools>
          <BlockCanvas height="400px"></BlockCanvas>
        </BlockTools>
      </BlockEditorProvider>
    </div>
  );
}

function ViewRenderedContent({ blocks, blockTypes }) {
  const blockTypesByName = keyBy(blockTypes, "name");
  return (
    <div>
      {blocks.map((block, index) => {
        const blockContent = getBlockContent(block);
        console.log(blockContent);

        return (
          <div
            key={`${index}-${block.name}`}
            dangerouslySetInnerHTML={{ __html: blockContent }}
          />
        );
      })}
    </div>
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
      <main>
        {!editMode && (
          <ViewRenderedContent blocks={blocks} blockTypes={getBlockTypes()} />
        )}
      </main>
    </div>
  );
}

export default App;
