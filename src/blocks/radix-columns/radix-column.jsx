import { Flex, Text } from "@radix-ui/themes";
import { DaxorAppenderButton } from "../../components/DaxorBlockInserter";

const RadixColumn = (props) => {
  return (
    <Flex direction="column">
      <Text>This is a column</Text>
      <DaxorAppenderButton />
    </Flex>
  );
};

export default RadixColumn;
