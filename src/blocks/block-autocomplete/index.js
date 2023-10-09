import { registerBlockType } from "@wordpress/blocks";
import { LuTextCursorInput } from "react-icons/lu";
import Edit from "./edit";
import Save from "./save";

export default function register() {
  return registerBlockType("daxor/block-autocomplete", {
    title: "Autocomplete",
    icon: <LuTextCursorInput />,
    category: "common",
    edit: Edit,
    save: Save,
  });
}
