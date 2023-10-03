import React from "react";
import { getBlockContent } from "@wordpress/blocks";
import "./BlockContentView.scss";

const BlockContentView = ({ blocks }) => {
  return (
    <div className="daxor__block-content-view">
      {blocks.map((block, index) => {
        const blockContent = getBlockContent(block);

        return (
          <div
            key={`${index}-${block.name}`}
            dangerouslySetInnerHTML={{ __html: blockContent }}
          />
        );
      })}
    </div>
  );
};

export default BlockContentView;
