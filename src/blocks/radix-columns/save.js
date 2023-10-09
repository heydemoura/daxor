import { Grid, Flex } from "@radix-ui/themes";

const Save = (props) => {
  const { columns } = props.attributes;
  return <Grid columns={columns || 1}></Grid>;
};

export default Save;
