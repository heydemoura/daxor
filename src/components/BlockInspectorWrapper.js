import React from "react";
import classnames from "classnames";
import { BlockInspector } from "@wordpress/block-editor";
import {
  Box,
  Card,
  Container,
  Flex,
  Inset,
  Button,
  Text,
} from "@radix-ui/themes";
import { MdMenu } from "react-icons/md";
import "./BlockInspectorWrapper.scss";

const BlockInspectorWrapper = () => {
  const [inspectorHidden, setInspectorHidden] = React.useState(true);

  const classList = classnames({
    "block-inspector-wrapper": true,
    "block-inspector-wrapper--hidden": inspectorHidden,
  });
  return (
    <div className={classList}>
      <Card panelBackground>
        <Flex gap="3" direction="column">
          {/* <Button
            variant="soft"
            onClick={() => setInspectorHidden(!inspectorHidden)}
          >
            <MdMenu /> &nbsp; Toggle Inspector
          </Button>
*/}
          <Box>
            <Text size="3" as="h2">
              Inspector
            </Text>
          </Box>
          <Box>
            <BlockInspector />
          </Box>
        </Flex>
      </Card>
    </div>
  );
};

export default BlockInspectorWrapper;
