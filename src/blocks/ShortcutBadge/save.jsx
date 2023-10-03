import React from "react";
import "./saveStyle.scss";

export default function save(props) {
  return (
    <div className="daxor__block__shortcut-badge">
      <a href={props.attributes.value} target="_blank" rel="noreferrer">
        <div className="daxor__block__shortcut-badge-content">
          <p>{props.attributes.label}</p>
        </div>
      </a>
    </div>
  );
}
