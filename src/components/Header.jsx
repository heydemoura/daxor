import React from "react";
import { Button, Flex, Text, Link } from "@radix-ui/themes";
import "./Header.scss";

const Header = ({
  editMode,
  onEditModeClick,
  onEditorSaveClick,
  onEditorClearClick,
}) => {
  return (
    <Flex as="header" className="header" justify="space-between">
      <Flex>
        <Text as="h1" size="3">
          <Link href="/">Dashboard</Link>
        </Text>
      </Flex>
      <Flex align="center">
        {editMode && (
          <Flex gap="2">
            <Button
              size="1"
              variant="solid"
              onClick={() => onEditorSaveClick()}
            >
              Save
            </Button>
            <Button
              size="1"
              variant="outline"
              onClick={() => onEditorClearClick()}
            >
              Clear
            </Button>
          </Flex>
        )}
        {!editMode && (
          <Button size="1" variant="soft" onClick={() => onEditModeClick()}>
            Edit Mode
          </Button>
        )}
      </Flex>
      <Flex align="flex-end"></Flex>
    </Flex>
  );
};

export default Header;
