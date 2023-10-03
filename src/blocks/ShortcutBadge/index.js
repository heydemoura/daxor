import { registerBlockType } from "@wordpress/blocks";
import { MdBookmarkAdd } from "react-icons/md";
import Edit from "./edit";
import Save from "./save";

export default function ShortcutBadgeInit() {
  return registerBlockType("daxor/shortcut-badge", {
    className: "daxor__block__shortcut-badge",
    title: "Shortcut Badge",
    icon: <MdBookmarkAdd />,
    category: "common",
    edit: Edit,
    save: Save,
  });
}
