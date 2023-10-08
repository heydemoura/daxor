import React, { useState, useEffect } from "react";
import { Card, Flex, Heading, Button } from "@radix-ui/themes";
import { TodoistApi } from "@doist/todoist-api-typescript";
import TasksListItem from "./components/TasksListItem";
import TodoistRequestAccess from "./components/TodoistRequestAccess";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";

const Edit = ({ className, attributes, setAttributes }) => {
  const [tasks, setTasks] = useState(attributes.tasks || []);
  const [apiToken, setApiToken] = useState(attributes.apiToken);
  const [api, setApi] = useState(
    attributes.apiToken ? new TodoistApi(attributes.apiToken) : null,
  );

  const handleGetTasksResponse = React.useCallback(
    (t) => {
      setTasks(t);
      setAttributes({ ...attributes, tasks: t });
      console.log(t);
    },
    [setAttributes, setTasks, attributes],
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

    if (apiToken) getTasks();
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
    <div {...useBlockProps({ className })}>
      <Heading as="h2">Todoist!</Heading>
      <ul>
        <Flex gap="2" direction="column">
          {tasks.length
            ? tasks.map((task) => (
                <TasksListItem
                  key={`${task.projectId}-${task.id}`}
                  task={task}
                />
              ))
            : null}
        </Flex>
      </ul>
      {!apiToken && <TodoistRequestAccess onSave={handleRequestAccessSave} />}
      {apiToken && <Button onClick={handleRefreshTasks}>Refresh tasks</Button>}
    </div>
  );
};

export default Edit;
