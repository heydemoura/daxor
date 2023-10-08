import React from "react";
import { Flex, Button } from "@radix-ui/themes";
import { LuPanelRight } from "react-icons/lu";
import { BlockToolbar } from "@wordpress/block-editor";
import "./EditorToolBar.scss";

const EditorToolBar = ({ onInspectorToggleClick }) => {
  return (
    <Flex
      className="daxor__editor-toolbar"
      justify="space-between"
      align="center"
    >
      <Flex>
        <BlockToolbar />
      </Flex>
      <Button variant="outline" onClick={onInspectorToggleClick} size="4">
        <LuPanelRight />
      </Button>
    </Flex>
  );
};

export default EditorToolBar;
