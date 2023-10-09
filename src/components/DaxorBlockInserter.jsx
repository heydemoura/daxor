import React from "react";
import Fuse from "fuse.js";
import classnames from "classnames";
import {
  Box,
  Button,
  Dialog,
  Flex,
  Grid,
  IconButton,
  Text,
  TextField,
} from "@radix-ui/themes";
import { Icon } from "@wordpress/components";
import {
  BlockIcon,
  Inserter,
  RichText,
  store as blockEditorStore,
} from "@wordpress/block-editor";
import { store as blocksStore, createBlock } from "@wordpress/blocks";
import { useDispatch, useSelect } from "@wordpress/data";
import { addFilter } from "@wordpress/hooks";
import { MdAdd } from "react-icons/md";
import "./DaxorBlockInserter.scss";

const blockListRenderCallback = (blockType, handleBlockInsert) => {
  return (
    <Dialog.Close>
      <Button variant="ghost">
        <Flex
          align="center"
          justify="center"
          direction="column"
          className="daxor-block-inserter__block-item"
          onClick={() => handleBlockInsert(createBlock(blockType.name))}
        >
          <BlockIcon icon={blockType.icon} />
          <Text>{blockType.title}</Text>
        </Flex>
      </Button>
    </Dialog.Close>
  );
};

const DaxorInserterDialog = ({ onClick, rootClientId }) => {
  const [filterValue, setFilterValue] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const { blockTypes } = useSelect(
    (select) => ({
      blockTypes: select(blocksStore).getBlockTypes(),
    }),
    [],
  );

  const { inserterItems } = useSelect((select) => {
    const store = select(blockEditorStore);

    return {
      inserterItems: store.getInserterItems(),
    };
  });

  const dispatch = useDispatch(blockEditorStore);

  const handleBlockInsert = React.useCallback(
    (block) => {
      dispatch.insertBlock({ ...block, rootClientId });
      setFilterValue("");
    },
    [dispatch, rootClientId],
  );

  const handleBlockFilter = React.useCallback(
    (event) => {
      setFilterValue(event.target.value);
    },
    [setFilterValue],
  );

  React.useEffect(() => {
    const fuse = new Fuse(inserterItems, {
      keys: ["title", "name", "keywords"],
      threshold: 0.3,
    });

    const results = fuse.search(filterValue);
    setSearchResults(results.map((result) => result.item));
  }, [inserterItems, setSearchResults, setFilterValue, filterValue]);

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button onClick={onClick}>
          <MdAdd />
        </Button>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 450 }}>
        <Dialog.Title>Pick a bock to add</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          <TextField.Root>
            <TextField.Input
              placeholder="Search the blocks…"
              onChange={handleBlockFilter}
              value={filterValue}
            />
          </TextField.Root>
        </Dialog.Description>

        <Flex direction="column" gap="3">
          <Grid columns="3" gap="5" width="auto">
            {(searchResults.length ? searchResults : inserterItems).map(
              (blockType) =>
                blockListRenderCallback(blockType, handleBlockInsert),
            )}
          </Grid>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export const DaxorAppenderButton = ({
  onToggle,
  isOpen,
  Disabled,
  blockTitle,
  hasSingleBlockType,
  className,
  rootClientId,
  ...restProps
}) => {
  const { getBlock, getBlockOrder, getBlockType } = useSelect(
    (select) => ({
      getBlock: select(blockEditorStore).getBlock,
      getBlockType: select(blocksStore).getBlockType,
      getBlockOrder: select(blockEditorStore).getBlockOrder,
    }),
    [],
  );
  const dispatch = useDispatch(blockEditorStore);
  const handleAddCompleter = React.useCallback(() => {
    const block = createBlock("daxor/block-autocomplete");
    dispatch.insertBlock({ ...block });
  }, [dispatch]);

  React.useEffect(() => {
    const block = createBlock("daxor/block-autocomplete");
    const blockOrder = getBlockOrder(rootClientId);

    // No Blocks yet
    if (!blockOrder.length) {
      dispatch.insertBlock({ ...block });
      return;
    }

    // Gets last block to check if it's not the appender block
    const lastBlockClientId = blockOrder[blockOrder.length - 1];
    const lastBlock = lastBlockClientId && getBlock(lastBlockClientId);

    if (!lastBlock || "daxor/block-autocomplete" !== lastBlock.name) {
      dispatch.insertBlockAfter({ ...block });
    }
  }, [dispatch, rootClientId, getBlockOrder, getBlock]);

  return (
    <Flex align="start" justify="start" className={className}>
      <Flex>
        <DaxorInserterDialog rootClientId={rootClientId} />
      </Flex>
    </Flex>
  );
};

const DaxorAppender = ({ rootClientId, className, onFocus, tabIndex }) => {
  return (
    <Flex align="center" justify="start">
      <Inserter
        position="bottom center"
        rootClientId={rootClientId}
        showMostUsedBlocks
        isAppender
        __experimentalIsQuick
        hasSearch
        hasExpand
        renderToggle={(toggleProps) => (
          <DaxorAppenderButton
            {...toggleProps}
            onFocus={onFocus}
            tabIndex={tabIndex}
            className={classnames(className, "daxor-block-appender")}
            rootClientId={rootClientId}
          />
        )}
      />
    </Flex>
  );
};

export default DaxorAppender;
