import { Grid, Flex } from "@radix-ui/themes";
import { useBlockProps } from "@wordpress/blocks";

const Save = (props) => {
  const blockProps = useBlockProps.save();
  const { columns } = props.attributes;
  return <Grid columns={columns || 1}></Grid>;
};

export default Save;
