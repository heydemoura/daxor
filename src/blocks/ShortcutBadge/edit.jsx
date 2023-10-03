import React from "react";
import { TextControl } from "@wordpress/components";
import { useBlockProps } from "@wordpress/block-editor";
import "@wordpress/components/build-style/style.css";
import "./style.scss";

const Edit = (props) => {
  const blockProps = useBlockProps({
    className: "daxor__block__edit-shortcut-badge",
  });

  const [url, setUrl] = React.useState(props.attributes.value);

  const handleURLChange = (value) => {
    props.setAttributes({ ...props.attributes, value });
    setUrl(value);
  };

  return (
    <div {...blockProps}>
      <TextControl onChange={handleURLChange} value={url} />
    </div>
  );
};

export default Edit;
