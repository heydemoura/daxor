import React from "react";
import { useBlockProps, RichText } from "@wordpress/block-editor";

const Edit = ({ attributes, setAttributes }) => {
  const blockProps = useBlockProps();

  return (
    <RichText
      {...blockProps}
      tagName="p" // The tag here is the element output and editable in the admin
      value={attributes.content} // Any existing content, either from the database or an attribute default
      //      allowedFormats={["core/bold", "core/italic"]} // Allow the content to be made bold or italic, but do not allow other formatting options
      onChange={(content) => setAttributes({ content })} // Store updated content as a block attribute
      placeholder={"Place your text"} // Display this text before any content has been added by the user
    />
  );
};

export default Edit;
