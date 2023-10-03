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
  const [label, setLabel] = React.useState(props.attributes.label);

  const handleURLChange = (value) => {
    props.setAttributes({ ...props.attributes, value });
    setUrl(value);
  };

  const handleLabelChange = (value) => {
    props.setAttributes({ ...props.attributes, label: value });
    setLabel(value);
  };

  return (
    <div {...blockProps}>
      <TextControl
        label="Shortcut Label"
        onChange={handleLabelChange}
        value={label}
        className="daxor__block__edit-shortcut-badge__label-input"
      />
      <TextControl
        label="URL"
        onChange={handleURLChange}
        value={url}
        className="daxor__block__edit-shortcut-badge__url-input"
      />
    </div>
  );
};

export default Edit;
