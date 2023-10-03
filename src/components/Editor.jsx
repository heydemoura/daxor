import React from "react";
import {
  BlockEditorProvider,
  BlockTools,
  BlockList,
  BlockInspector,
} from "@wordpress/block-editor";

import BlockEditorContainer from "./BlockEditorContainer";
const Editor = ({ blocks, onChange, onInput }) => {
  return (
    <BlockEditorProvider value={blocks} onInput={onInput} onChange={onChange}>
      <BlockEditorContainer>
        <BlockTools>
          <BlockList />
          <BlockInspector />
        </BlockTools>
      </BlockEditorContainer>
    </BlockEditorProvider>
  );
};

export default Editor;
