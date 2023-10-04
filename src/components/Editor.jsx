import React from "react";
import { BlockTools, BlockList } from "@wordpress/block-editor";
import { Flex, Box } from "@radix-ui/themes";
import BlockEditorContainer from "./BlockEditorContainer";
import BlockInspectorWrapper from "./BlockInspectorWrapper";
import "./Editor.scss";

const Editor = () => {
  return (
    <div className="editor">
      <BlockEditorContainer>
        <Flex gap="3" width="100%">
          <BlockTools className="editor__block-tools-wrapper">
            <BlockList className="editor__block-list-wrapper" />
          </BlockTools>
          <BlockInspectorWrapper />
        </Flex>
      </BlockEditorContainer>
    </div>
  );
};

export default Editor;
