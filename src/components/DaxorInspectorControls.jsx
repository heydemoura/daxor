import React from "react";
import { createHigherOrderComponent } from "@wordpress/compose";
import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";

const withInspectorControls = createHigherOrderComponent((BlockEdit) => {
  return (props) => {
    return (
      <>
        <BlockEdit {...props} />
        <InspectorControls>
          <h1>Inspector Controls</h1>
        </InspectorControls>
      </>
    );
  };
}, "withInspectorControl");

export default withInspectorControls;
