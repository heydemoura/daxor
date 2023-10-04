import React from "react";
import "./TasksListItem.scss";

const TasksListItem = ({ task }) => {
  return (
    <li className="daxor__todoist-block__tasks-list-item">
      <div className="daxor__todoist-block__tasks-list-item__checkbox">
        <input type="checkbox" />
        <span className="daxor__todoist-block__tasks-list-item__checkbox-container"></span>
      </div>
      <div className="daxor__todoist-block__tasks-list-item__text">
        <span>{task.content}</span>
      </div>
    </li>
  );
};

export default TasksListItem;
