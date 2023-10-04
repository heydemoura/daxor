import React from "react";
import { useBlockProps } from "@wordpress/block-editor";
import TasksListItem from "./components/TasksListItem";

const Save = ({ attributes }) => {
  const { tasks } = attributes;
  return (
    <div {...useBlockProps.save()}>
      <h2>Todoist!</h2>
      <ul>
        {tasks.length
          ? tasks.map((task) => (
              <TasksListItem task={task} key={`${task.projectId}-${task.id}`} />
            ))
          : null}
      </ul>
    </div>
  );
};

export default Save;
