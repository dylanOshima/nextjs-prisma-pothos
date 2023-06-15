const path = require("path");

module.exports = {
  src: __dirname,
  artifactDirectory: path.join(__dirname, "/__generated__/relay/"),
  language: "typescript",
  schema: path.join(__dirname, "/__generated__/schema.graphql"),
  exclude: ["**/node_modules/**", "**/__generated__/**", "lib/**"],
};
