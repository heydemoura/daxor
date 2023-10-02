import React from "react";
import "./saveStyle.scss";

export default function save(props) {
  return (
    <div className="daxor__block__shortcut-badge">
      <p>{props.attributes.value}</p>
    </div>
  );
}
