import React from "react";
import { useBlockProps } from "@wordpress/block-editor";
import "./style.scss";

const Edit = (props) => {
  const blockProps = useBlockProps({
    className: "daxor__block__edit-shortcut-badge",
  });

  const [url, setUrl] = React.useState(props.attributes.value);

  const handleURLChange = (event) => {
    console.log(event.target.value);
    props.setAttributes({ ...props.attributes, value: event.target.value });
    setUrl(event.target.value);
  };

  return (
    <div {...blockProps}>
      <input type="text" onChange={handleURLChange} value={url} />
    </div>
  );
};

export default Edit;
