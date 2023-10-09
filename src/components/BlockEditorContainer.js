import React from "react";
import { Box, Container, ScrollArea } from "@radix-ui/themes";
import "./BlockEditorContainer.scss";

const BlockEditorContainer = ({ children }) => {
  return (
    <div className="daxor__block-editor-container">
      <Container>
        <ScrollArea
          scrollbars="vertical"
          radius="none"
          size="2"
          style={{ height: "80vh" }}
        >
          <Box>{children}</Box>
        </ScrollArea>
      </Container>
    </div>
  );
};

export default BlockEditorContainer;
