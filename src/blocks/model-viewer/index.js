import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";
import metadata from "./block.json";

registerBlockType(metadata.name, {
  ...metadata,
  edit: Edit,
  save: () => null, // We'll render the block dynamically on the server
});
