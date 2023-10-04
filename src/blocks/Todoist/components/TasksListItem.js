import React from "react";
import { Flex, Text, Checkbox } from "@radix-ui/themes";
import "./TasksListItem.scss";

const TasksListItem = ({ task }) => {
  return (
    <li className="daxor__todoist-block__tasks-list-item">
      <Text as="label" size="2">
        <Flex gap="2">
          <Checkbox indeterminate="true" /> {task.content}
        </Flex>
      </Text>
    </li>
  );
};

export default TasksListItem;
