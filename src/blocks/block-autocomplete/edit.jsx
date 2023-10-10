import { useSelect, useDispatch } from "@wordpress/data";
import { useCallback, useRef, useEffect, useMemo } from "react";
import {
  BlockIcon,
  RichText,
  useBlockProps,
  store as blockEditorStore,
} from "@wordpress/block-editor";
import { Flex, Text } from "@radix-ui/themes";
import { store as blocksStore, createBlock } from "@wordpress/blocks";
import "./edit-style.scss";

const BlockAutcomplete = ({ attributes, setAttributes }) => {
  const editableElRef = useRef(null);
  const { getInserterItems } = useSelect(blockEditorStore);
  const { insertBlock } = useDispatch(blockEditorStore);

  const getOptionLabel = useCallback((blockType) => {
    return blockType.title;
  }, []);

  const getOptionCompletion = useCallback(
    (blockType) => {
      const newBlock = createBlock(blockType.name);
      insertBlock(newBlock);
      setAttributes({ content: "" });
    },
    [insertBlock, setAttributes],
  );

  const completer = useMemo(
    () => ({
      name: "block-autocomplete",
      triggerPrefix: "/",
      options: getInserterItems(),
      getOptionLabel: getOptionLabel,
      getOptionCompletion: getOptionCompletion,
    }),
    [getInserterItems, getOptionLabel, getOptionCompletion],
  );

  useEffect(() => {
    // Focus on the editable element on mount
    editableElRef.current.focus();
  }, []);

  return (
    <RichText
      {...useBlockProps()}
      ref={editableElRef}
      tagName="p"
      tabIndex="0"
      value={attributes.content}
      onChange={(content) => setAttributes({ content })}
      placeholder="Type / to choose a block"
      autocompleters={[completer]}
    />
  );
};

export default BlockAutcomplete;
