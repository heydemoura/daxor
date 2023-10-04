import React, { useState, useEffect } from "react";
import { TodoistApi } from "@doist/todoist-api-typescript";
import TasksListItem from "./components/TasksListItem";

const api = new TodoistApi("c3b8038d02aa3ed7608e498931f8beb125a7eaf0");

const Edit = ({ attributes, setAttributes }) => {
  const [tasks, setTasks] = useState([]);

  const handleGetTasksRespose = React.useCallback(
    (t) => {
      console.log(t);
      setTasks(t);
      setAttributes({ tasks: t });
    },
    [setAttributes, setTasks],
  );

  useEffect(() => {
    const getTasks = async () =>
      await api
        .getTasks()
        .then(setTasks)
        .catch((error) => console.log(error));

    getTasks();
  }, []);

  return (
    <div>
      <h2>Todoist!</h2>
      <ul>
        {tasks.map((task) => (
          <TasksListItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default Edit;
