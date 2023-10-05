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
import "./Editor.scss";

const Editor = ({ showInspector = true }) => {
  return (
    <div className="editor">
      <BlockEditorContainer>
        <Flex direction="row" gap="2">
          <Flex gap="3" width="100%">
            <BlockTools className="editor__block-tools-wrapper">
              <BlockSelectionClearer>
                <WritingFlow>
                  <BlockList className="editor__block-list-wrapper" />
                </WritingFlow>
              </BlockSelectionClearer>
            </BlockTools>
          </Flex>
          <Flex>{showInspector && <BlockInspectorWrapper />}</Flex>
        </Flex>
      </BlockEditorContainer>
    </div>
  );
};

export default Editor;
