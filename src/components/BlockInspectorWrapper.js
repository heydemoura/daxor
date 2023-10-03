import React from "react";
import classnames from "classnames";
import { BlockInspector } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";
import { MdMenu } from "react-icons/md";
import "./BlockInspectorWrapper.scss";

const BlockInspectorWrapper = () => {
  const [inspectorHidden, setInspectorHidden] = React.useState(true);

  const classList = classnames({
    "block-inspector-wrapper": true,
    "block-inspector-wrapper--hidden": inspectorHidden,
  });
  return (
    <div className={classList}>
      <Button
        variant="secondary"
        onClick={() => setInspectorHidden(!inspectorHidden)}
      >
        <MdMenu /> &nbsp; Toggle Inspector
      </Button>
      <BlockInspector />
    </div>
  );
};

export default BlockInspectorWrapper;
