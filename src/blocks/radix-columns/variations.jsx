const variations = [
  {
    name: "single-column",
    title: "Single Columns",
    description: "One single column",
    scope: ["block"],
    innerBlocks: [["core/column"]],
  },
  {
    name: "two-columns",
    title: "Two Columns",
    description: "Two columns",
    scope: ["block"],
    isDefault: true,
    innerBlocks: [["core/column"], ["core/column"]],
  },
  {
    name: "three-column",
    title: "Three Columns",
    description: "Three columns",
    scope: ["block"],
    innerBlocks: [["core/column"], ["core/column"], ["core/column"]],
  },
];

export default variations;
