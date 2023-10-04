import React from "react";
import { useBlockProps, RichText } from "@wordpress/block-editor";

const Save = ({ attributes }) => {
  const blockProps = useBlockProps.save();
  return (
    <RichText.Content {...blockProps} tagName="p" value={attributes.content} />
  ); // Saves <h2>Content added in the editor...</h2> to the database for frontend display
};

export default Save;
