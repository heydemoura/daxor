import React from "react";
import { useBlockProps, RichText } from "@wordpress/block-editor";

const EditorComponent = ({ content, onChange }) => {
  return (
    <div {...useBlockProps()}>
      <RichText
        placeholder="Enter your content here..."
        value={content}
        onChange={onChange}
      />
    </div>
  );
};

export default EditorComponent;
