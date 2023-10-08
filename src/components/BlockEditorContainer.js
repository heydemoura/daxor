import React from "react";
import { Box, ScrollArea } from "@radix-ui/themes";
import "./BlockEditorContainer.scss";

const BlockEditorContainer = ({ children }) => {
  return (
    <div className="daxor__block-editor-container">
      <ScrollArea
        scrollbars="vertical"
        radius="none"
        size="2"
        style={{ height: "80vh" }}
      >
        <Box>{children}</Box>
      </ScrollArea>
    </div>
  );
};

export default BlockEditorContainer;
