import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";
import Save from "./save";

export default function registerRichTextBlock() {
  registerBlockType("daxor/rich-text-editor", {
    title: "Rich Text Editor",
    icon: "editor-textcolor",
    category: "common",
    attributes: {
      content: {
        type: "array",
        source: "children",
        selector: "p",
      },
    },
    edit: Edit,
    save: Save,
  });
}
