import React from "react";
import { Card, Flex, Heading, TextField, Button } from "@radix-ui/themes";
import { useBlockProps } from "@wordpress/block-editor";
import "./style.scss";

const Edit = (props) => {
  const blockProps = useBlockProps({
    className: `${props.className} daxor__block__edit-shortcut-badge`,
  });

  const [url, setUrl] = React.useState(props.attributes.value);
  const [label, setLabel] = React.useState(props.attributes.label);

  const handleURLChange = (event) => {
    props.setAttributes({ ...props.attributes, value: event.target.value });
    setUrl(event.target.value);
  };

  const handleLabelChange = (event) => {
    props.setAttributes({ ...props.attributes, label: event.target.value });
    setLabel(event.target.value);
  };

  return (
    <div {...blockProps}>
      <Card>
        <Flex direction="column" gap="3">
          <Heading as="h2">Shortcut Badge</Heading>
          <TextField.Input
            placeholder="Shortcut Label"
            onChange={handleLabelChange}
            value={label}
            className="daxor__block__edit-shortcut-badge__label-input"
          />
          <TextField.Input
            placeholder="URL"
            onChange={handleURLChange}
            value={url}
            className="daxor__block__edit-shortcut-badge__url-input"
          />
        </Flex>
      </Card>
    </div>
  );
};

export default Edit;
