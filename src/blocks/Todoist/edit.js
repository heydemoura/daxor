import React, { useState, useEffect } from "react";
import { Button } from "@wordpress/components";
import { TodoistApi } from "@doist/todoist-api-typescript";
import TasksListItem from "./components/TasksListItem";
import TodoistRequestAccess from "./components/TodoistRequestAccess";

const Edit = ({ attributes, setAttributes }) => {
  const [tasks, setTasks] = useState(attributes.tasks || []);
  const [apiToken, setApiToken] = useState(attributes.apiToken);
  const [api, setApi] = useState(
    attributes.apiToken ? new TodoistApi(attributes.apiToken) : null,
  );

  const handleGetTasksResponse = React.useCallback(
    (t) => {
      setTasks(t);
      setAttributes({ tasks: t });
    },
    [setAttributes, setTasks],
  );

  const handleRefreshTasks = React.useCallback(() => {
    api
      .getTasks()
      .then(handleGetTasksResponse)
      .catch((error) => console.log(error));
  }, [api, handleGetTasksResponse]);

  useEffect(() => {
    const getTasks = async () =>
      await api
        .getTasks()
        .then(setTasks)
        .catch((error) => console.log(error));

    getTasks();
  }, []);

  const handleRequestAccessSave = async (token) => {
    const _api = new TodoistApi(token);
    setApiToken(token);
    setApi(_api);
    setAttributes({ ...attributes, apiToken: token });
    await _api
      .getTasks()
      .then(handleGetTasksResponse)
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h2>Todoist!</h2>
      <ul>
        {tasks.length
          ? tasks.map((task) => (
              <TasksListItem key={`${task.projectId}-${task.id}`} task={task} />
            ))
          : null}
      </ul>
      {!apiToken && <TodoistRequestAccess onSave={handleRequestAccessSave} />}
      {apiToken && (
        <Button variant="secondary" onClick={handleRefreshTasks}>
          Refresh tasks
        </Button>
      )}
    </div>
  );
};

export default Edit;
