import React from "react";
import { BlockTools, BlockList } from "@wordpress/block-editor";
import BlockEditorContainer from "./BlockEditorContainer";
import BlockInspectorWrapper from "./BlockInspectorWrapper";
import "./Editor.scss";

const Editor = () => {
  return (
    <div className="editor">
      <BlockEditorContainer>
        <BlockTools className="editor__block-tools-wrapper">
          <BlockList className="editor__block-list-wrapper" />
        </BlockTools>
      </BlockEditorContainer>
      <BlockInspectorWrapper />
    </div>
  );
};

export default Editor;
