import React from "react";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { useBlockProps } from "@wordpress/block-editor";
import TasksListItem from "./components/TasksListItem";

const Save = ({ attributes }) => {
  const { tasks } = attributes;
  return (
    <Card>
      <Flex direction="column" gap="2">
        <Heading as="h2">Todoist!</Heading>
        <ul>
          <Flex direction="column">
            {tasks.length
              ? tasks.map((task) => (
                  <Flex gap="2" key={`${task.projectId}-${task.id}`}>
                    <Text> - {task.content}</Text>
                  </Flex>
                ))
              : null}
          </Flex>
        </ul>
      </Flex>
    </Card>
  );
};

export default Save;
