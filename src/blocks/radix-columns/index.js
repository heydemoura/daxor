import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";
import Save from "./save";
import variations from "./variations";

export default function registerRadixColumns() {
  return registerBlockType("daxor/radix-columns", {
    category: "common",
    title: "Radix Columns",
    icon: "columns",
    variations,
    edit: Edit,
    save: Save,
  });
}
