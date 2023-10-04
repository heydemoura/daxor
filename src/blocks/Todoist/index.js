import React from "react";
import { registerBlockType } from "@wordpress/blocks";
import { MdTaskAlt } from "react-icons/md";
import Edit from "./edit";
import Save from "./save";

export default function registerTodoist() {
  return registerBlockType("todoist/todoist", {
    title: "Todoist",
    icon: <MdTaskAlt />,
    category: "common",
    edit: Edit,
    save: Save,
  });
}
