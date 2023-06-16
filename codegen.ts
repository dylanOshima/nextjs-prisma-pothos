import { CodegenConfig } from "@graphql-codegen/cli";
import { printSchema } from "graphql";
import schema from "./lib/schema";

const config: CodegenConfig = {
  schema: printSchema(schema),
  documents: ["./**/*.tsx"],
  generates: {
    "./lib/__generated__/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
      config: {
        gqlImport: "./lib/__generated__",
      },
    },
  },
  ignoreNoDocuments: true,
  errorsOnly: true,
};

export default config;
