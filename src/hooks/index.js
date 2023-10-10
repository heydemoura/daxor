/**
 * Apply Block Editor hooks to customize the behavior of the editor.
 */
import { addFilter } from "@wordpress/hooks";
import { createHigherOrderComponent } from "@wordpress/compose";
import { Card, Inset } from "@radix-ui/themes";

const withDefaultClassName = (className, blockName) => {
  const sanitizedClassName = blockName.replace("/", "-");
  return `${className} daxor-block__${sanitizedClassName} daxor-block`;
};

const withCustomBlockListBlock = createHigherOrderComponent(
  (BlockListBlock) => (props) => {
    const excludeBlocks = [
      "core/column",
      "core/columns",
      "core/paragraph",
      "daxor/radix-columns",
      "daxor/block-autocomplete",
    ];
    if (excludeBlocks.indexOf(props.name) > -1) {
      return <BlockListBlock {...props}></BlockListBlock>;
    }
    return (
      <Card className="daxor-block-list__block-wrapper">
        <Inset clip="padding-box" side="all">
          <BlockListBlock {...props}></BlockListBlock>
        </Inset>
      </Card>
    );
  },
  "withCustomBlockListBlock",
);

export default function registerEditorHooks() {
  addFilter(
    "editor.BlockListBlock",
    "daxor/block-list-block",
    withCustomBlockListBlock,
  );
  addFilter(
    "blocks.getBlockDefaultClassName",
    "daxor/block-default-class-name",
    withDefaultClassName,
  );
}
