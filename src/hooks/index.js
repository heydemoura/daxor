/**
 * Apply Block Editor hooks to customize the behavior of the editor.
 */
import { addFilter } from "@wordpress/hooks";
import DaxorBlockListBlock from "../components/DaxorBlockListBlock";
// import DaxorInspectorControls from "../components/DaxorInspectorControls";

const withDefaultClassName = (className, blockName) => {
  const sanitizedClassName = blockName.replace("/", "-");
  return `${className} daxor-block__${sanitizedClassName} daxor-block`;
};

export default function registerEditorHooks() {
  addFilter(
    "editor.BlockListBlock",
    "daxor/block-list-block",
    DaxorBlockListBlock,
  );

  // addFilter(
  //   "editor.BlockEdit",
  //   "daxor/inspector-controls",
  //   DaxorInspectorControls,
  // );
  //

  addFilter(
    "blocks.getBlockDefaultClassName",
    "daxor/block-default-class-name",
    withDefaultClassName,
  );
}
