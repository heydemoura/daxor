import { Button, Grid, Flex } from "@radix-ui/themes";
import { useDispatch, useSelect } from "@wordpress/data";
import {
  store as blockEditorStore,
  useBlockProps,
  useInnerBlocksProps,
} from "@wordpress/block-editor";
import {
  store as blocksStore,
  createBlocksFromInnerBlocksTemplate,
} from "@wordpress/blocks";
import RadixColumn from "./radix-column";

const EditContainer = ({ attributes, setAttributes, clientId }) => {
  const { columns } = attributes;
  const child = Array(columns).fill(<RadixColumn />);

  const { count, canInsertColumnBlock, minCount } = useSelect(
    (select) => {
      const { canInsertBlockType, canRemoveBlock, getBlocks, getBlockCount } =
        select(blockEditorStore);
      const innerBlocks = getBlocks(clientId);

      // Get the indexes of columns for which removal is prevented.
      // The highest index will be used to determine the minimum column count.
      const preventRemovalBlockIndexes = innerBlocks.reduce(
        (acc, block, index) => {
          if (!canRemoveBlock(block.clientId)) {
            acc.push(index);
          }
          return acc;
        },
        [],
      );

      return {
        count: getBlockCount(clientId),
        canInsertColumnBlock: canInsertBlockType("core/column", clientId),
        minCount: Math.max(...preventRemovalBlockIndexes) + 1,
      };
    },
    [clientId],
  );

  const blockProps = useBlockProps();
  const innerBlocksProps = useInnerBlocksProps(blockProps, {
    allowedBlocks: [],
    orientation: "horizontal",
    renderAppender: false,
  });

  console.log(columns);

  return <Flex direction="row" gap="4" width="auto" {...innerBlocksProps} />;
};

const Placeholder = ({ name, clientId, setAttributes }) => {
  const { blockType, defaultVariation, variations } = useSelect(
    (select) => {
      const { getBlockVariations, getBlockType, getDefaultBlockVariation } =
        select(blocksStore);

      return {
        blockType: getBlockType(name),
        defaultVariation: getDefaultBlockVariation(name, "block"),
        variations: getBlockVariations(name, "block"),
      };
    },
    [name],
  );
  const { replaceInnerBlocks } = useDispatch(blockEditorStore);
  const blockProps = useBlockProps();

  const handleSelectColumnsNumber = (variation) => {
    console.log(clientId);
    console.log(
      createBlocksFromInnerBlocksTemplate(variations[variation].innerBlocks),
    );
    replaceInnerBlocks(
      clientId,
      createBlocksFromInnerBlocksTemplate(variations[variation].innerBlocks),
    );
  };

  return (
    <Flex direction="column" gap="2">
      <Button onClick={() => handleSelectColumnsNumber(0)}> 1 Column </Button>
      <Button onClick={() => handleSelectColumnsNumber(1)}> 2 Columns </Button>
      <Button onClick={() => handleSelectColumnsNumber(2)}> 3 Columns </Button>
    </Flex>
  );
};

const ColumnsEdit = (props) => {
  const { clientId, attributes } = props;
  const hasInnerBlocks = useSelect(
    (select) => select(blockEditorStore).getBlocks(clientId).length > 0,
    [clientId],
  );

  const Component = hasInnerBlocks ? EditContainer : Placeholder;

  return <Component {...props} />;
};

export default ColumnsEdit;
