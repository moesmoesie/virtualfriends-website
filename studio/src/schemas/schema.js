import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import home from "./home";
import richText from "./rich-text";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([home, richText]),
});