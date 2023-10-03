import { registerBlockType } from "@wordpress/blocks";
import { MdAccessTimeFilled } from "react-icons/md";
import Edit from "./edit";
import Save from "./save";

export default function ShortcutBadgeInit() {
  return registerBlockType("daxor/clock", {
    className: "daxor__block__clock",
    title: "Clock",
    icon: <MdAccessTimeFilled />,
    category: "common",
    edit: Edit,
    save: Save,
  });
}
