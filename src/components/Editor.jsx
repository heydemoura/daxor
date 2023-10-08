import React from "react";
import {
  BlockTools,
  BlockCanvas,
  BlockList,
  WritingFlow,
  BlockSelectionClearer,
} from "@wordpress/block-editor";
import { Flex, Box } from "@radix-ui/themes";
import BlockEditorContainer from "./BlockEditorContainer";
import BlockInspectorWrapper from "./BlockInspectorWrapper";
import DaxorBlockList from "./DaxorBlockList";
import "./Editor.scss";

const Editor = ({ showInspector = true }) => {
  return (
    <div className="editor">
      <BlockEditorContainer>
        <BlockTools className="editor__block-tools-wrapper">
          <BlockSelectionClearer>
            <DaxorBlockList />
          </BlockSelectionClearer>
        </BlockTools>
      </BlockEditorContainer>
      <Flex>{showInspector && <BlockInspectorWrapper />}</Flex>
    </div>
  );
};

export default Editor;
