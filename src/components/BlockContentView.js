import React from "react";
import { getBlockContent } from "@wordpress/blocks";
import { Box, Flex, Card, Container, ScrollArea } from "@radix-ui/themes";
import "./BlockContentView.scss";

const BlockContentView = ({ blocks }) => {
  return (
    <div className="daxor__block-content-view">
      <Container>
        <Flex direction="column" gap="2">
          {blocks.map((block, index) => {
            const blockContent = getBlockContent(block);

            return (
              <div
                className={`daxor__block-content-view__block daxor__block-content-view__block--${block.name}`}
                key={`${index}-${block.name}`}
                dangerouslySetInnerHTML={{ __html: blockContent }}
              />
            );
          })}
        </Flex>
      </Container>
    </div>
  );
};

export default BlockContentView;
