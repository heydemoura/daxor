import React from "react";
import { createHigherOrderComponent } from "@wordpress/compose";
import { Card, Inset } from "@radix-ui/themes";

const excludeBlocks = [
  "core/column",
  "core/columns",
  "core/paragraph",
  "daxor/radix-columns",
];

const DaxorBlockListBlock = createHigherOrderComponent(
  (BlockListBlock) => (props) => {
    if (excludeBlocks.indexOf(props.name) > -1) {
      return <BlockListBlock {...props}></BlockListBlock>;
    }
    return (
      <Card className="daxor-block-list__block-wrapper">
        <Inset clip="padding-box" side="all">
          <BlockListBlock {...props}></BlockListBlock>
        </Inset>
      </Card>
    );
  },
  "DaxorBlockListBlock",
);

export default DaxorBlockListBlock;
