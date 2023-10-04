import React from "react";
import {
  Link,
  Heading,
  Flex,
  Box,
  Badge,
  TextField,
  Button,
} from "@radix-ui/themes";

const TodoistRequestAccess = ({ onSave }) => {
  const textControlRef = React.useRef(null);
  const handleOnSave = React.useCallback(() => {
    console.log(textControlRef.current.value);
    onSave(textControlRef.current.value);
  }, [textControlRef, onSave]);

  return (
    <div className="daxor-todoist-block__request-access">
      <Heading as="h3">Request Access</Heading>

      <Flex direction="column" gap="4">
        <Button target="_blank" rel="noreferrer" variant="soft" size="3">
          <Link
            href="https://todoist.com/app/settings/integrations/developer"
            target="_blank"
            rel="noreferrer"
          >
            Click here to get your Todoist API Token and paste below
          </Link>
        </Button>
        <TextField.Root>
          <TextField.Input
            ref={textControlRef}
            placeholder="Paste your api token here."
          />
        </TextField.Root>
        <Button onClick={handleOnSave} variant="solid">
          Save Todoist Access Token
        </Button>
      </Flex>
    </div>
  );
};

export default TodoistRequestAccess;
