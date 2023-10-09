import { Grid, Flex } from "@radix-ui/themes";
import { useInnerBlocksProps, useBlockProps } from "@wordpress/block-editor";

const Save = (props) => {
  const { columns } = props.attributes;
  const blockProps = useBlockProps.save();
  const innerBlockProps = useInnerBlocksProps.save(blockProps);

  return <Flex gap="3" {...innerBlockProps}></Flex>;
};

export default Save;
