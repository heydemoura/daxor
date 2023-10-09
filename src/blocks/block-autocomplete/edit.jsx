import { RichText, useBlockProps } from "@wordpress/block-editor";

const BlockAutcomplete = ({ attributes, setAttributes }) => {
  return (
    <div {...useBlockProps()}>
      <RichText
        tagName="p"
        value={attributes.content}
        onChange={(content) => setAttributes({ content })}
        placeholder="Type / to choose a block"
      />
    </div>
  );
};

export default BlockAutcomplete;
