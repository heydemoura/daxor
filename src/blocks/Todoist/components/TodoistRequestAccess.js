import React from "react";
import { Button, TextControl } from "@wordpress/components";

const TodoistRequestAccess = ({ onSave }) => {
  const textControlRef = React.useRef(null);
  const handleOnSave = React.useCallback(() => {
    console.log(textControlRef.current.value);
    onSave(textControlRef.current.value);
  }, [textControlRef, onSave]);

  return (
    <div className="daxor-todoist-block__request-access">
      <h3>Request Access</h3>
      <Button
        href="https://todoist.com/app/settings/integrations/developer"
        target="_blank"
        rel="noreferrer"
        variant="secondary"
      >
        Click here to get your Todoist API Token and paste below
      </Button>
      <br />
      <br />
      <TextControl ref={textControlRef} />
      <Button onClick={handleOnSave} variant="primary">
        Save Todoist Access Token
      </Button>
    </div>
  );
};

export default TodoistRequestAccess;
