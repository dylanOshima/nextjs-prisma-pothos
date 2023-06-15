import type { CodegenConfig } from "@graphql-codegen/cli";
import { printSchema } from "graphql";
import { schema } from "./lib/schema/schema";

const config: CodegenConfig = {
  schema: printSchema(schema),
  generates: {
    "./__generated__/gql/": {
      preset: "client",
      plugins: [],
    },
    "./__generated__/schema.graphql": {
      plugins: ["schema-ast"],
    },
  },
  errorsOnly: true,
};

export default config;
