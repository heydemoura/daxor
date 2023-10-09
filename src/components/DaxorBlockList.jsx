import React from "react";
import { BlockCanvas, BlockList, WritingFlow } from "@wordpress/block-editor";
import { Flex } from "@radix-ui/themes";
import DaxorAppender from "./DaxorBlockInserter";
import "./DaxorBlockList.scss";

const DaxorBlockList = () => {
  return (
    <div className="daxor-block-list">
      <Flex direction="column">
        <WritingFlow>
          <BlockList
            className="daxor-block-list"
            renderAppender={DaxorAppender}
          />
        </WritingFlow>
      </Flex>
    </div>
  );
};

export default DaxorBlockList;
