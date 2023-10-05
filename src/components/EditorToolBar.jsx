import React from "react";
import { Flex, Button } from "@radix-ui/themes";
import { LuPanelRight } from "react-icons/lu";
import "./EditorToolBar.scss";

const EditorToolBar = ({ onInspectorToggleClick }) => {
  return (
    <Flex className="daxor__editor-toolbar" justify="end">
      <Button variant="outline" onClick={onInspectorToggleClick}>
        <LuPanelRight />
      </Button>
    </Flex>
  );
};

export default EditorToolBar;
