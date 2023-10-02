import React from "react";
import { useBlockProps } from "@wordpress/block-editor";

const Edit = () => {
  const blockProps = useBlockProps();
  console.log(blockProps);
  const handleURLChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div {...blockProps}>
      <input type="text" onChange={handleURLChange} />
    </div>
  );
};

export default Edit;
