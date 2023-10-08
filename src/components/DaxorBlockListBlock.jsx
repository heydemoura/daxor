import React from "react";
import { createHigherOrderComponent } from "@wordpress/compose";
import { Card, Inset } from "@radix-ui/themes";

const DaxorBlockListBlock = createHigherOrderComponent(
  (BlockListBlock) => (props) => {
    if (["core/column", "core/columns"].indexOf(props.name) > -1) {
      return <BlockListBlock {...props}></BlockListBlock>;
    }
    return (
      <Card className="daxor-block-list__block-wrapper" inset>
        <Inset clip="padding-box" side="all">
          <BlockListBlock {...props}></BlockListBlock>
        </Inset>
      </Card>
    );
  },
  "DaxorBlockListBlock",
);

export default DaxorBlockListBlock;
