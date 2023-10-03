import React from "react";
import "./saveStyle.scss";

export default function save(props) {
  return (
    <a href={props.attributes.value} target="_blank" rel="noreferrer">
      <div className="daxor__block__shortcut-badge">
        <p>{props.attributes.label}</p>
      </div>
    </a>
  );
}
