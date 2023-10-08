/**
 * Apply Block Editor hooks to customize the behavior of the editor.
 */
import { addFilter } from "@wordpress/hooks";
import DaxorBlockListBlock from "../components/DaxorBlockListBlock";

export default function registerEditorHooks() {
  addFilter(
    "editor.BlockListBlock",
    "daxor/block-list-block",
    DaxorBlockListBlock,
  );
}
