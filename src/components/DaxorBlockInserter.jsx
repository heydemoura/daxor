import classnames from "classnames";
import { Button, Flex } from "@radix-ui/themes";
import { Inserter } from "@wordpress/block-editor";
import { MdAdd } from "react-icons/md";

const DaxorAppenderButton = ({
  onToggle,
  isOpen,
  Disabled,
  blockTitle,
  hasSingleBlockType,
}) => {
  return (
    <Button variant="solid" size="2" onClick={onToggle}>
      <Flex align="center" justify="center" size="3">
        <MdAdd />
      </Flex>
    </Button>
  );
};

const DaxorAppender = ({ rootClientId, className, onFocus, tabIndex }) => {
  return (
    <Flex align="end" justify="end">
      <Inserter
        position="top right"
        rootClientId={rootClientId}
        isAppender
        renderToggle={(toggleProps) => (
          <DaxorAppenderButton
            {...toggleProps}
            onFocus={onFocus}
            tabIndex={tabIndex}
            className={classnames(className, "daxor-block-appender-button")}
          />
        )}
      />
    </Flex>
  );
};

export default DaxorAppender;
