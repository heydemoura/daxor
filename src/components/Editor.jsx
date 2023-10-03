import React from "react";
import { BlockTools, BlockList } from "@wordpress/block-editor";

import BlockEditorContainer from "./BlockEditorContainer";
const Editor = () => {
  return (
    <BlockEditorContainer>
      <BlockTools>
        <BlockList />
      </BlockTools>
    </BlockEditorContainer>
  );
};

export default Editor;
