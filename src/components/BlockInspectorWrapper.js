import React from "react";
import { BlockInspector } from "@wordpress/block-editor";
import "./BlockInspectorWrapper.css";

const BlockInspectorWrapper = () => {
  return (
    <div className="block-inspector-wrapper">
      <BlockInspector />
    </div>
  );
};

export default BlockInspectorWrapper;
