import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";
import Save from "./save";
import "./style.scss";

export default function ShortcutBadgeInit() {
  return registerBlockType("daxor/shortcut-badge", {
    className: "daxor__block__shortcut-badge",
    title: "Shortcut Badge",
    icon: "smiley",
    category: "common",
    edit: Edit,
    save: Save,
  });
}
