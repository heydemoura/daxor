import React from "react";
import { BlockTools, BlockList } from "@wordpress/block-editor";
import BlockEditorContainer from "./BlockEditorContainer";
import BlockInspectorWrapper from "./BlockInspectorWrapper";
import "./Editor.scss";

const Editor = () => {
  return (
    <div className="editor">
      <BlockEditorContainer>
        <BlockTools>
          <BlockList />
        </BlockTools>
      </BlockEditorContainer>
      <BlockInspectorWrapper />
    </div>
  );
};

export default Editor;
