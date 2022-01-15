const { loadEnvConfig } = require("@next/env");
loadEnvConfig(process.cwd());

module.exports = {
  overwrite: true,
  schema: process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT,
  documents: "schemas/*.graphql",
  generates: {
    "generated/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
    "./graphql.schema.json": { plugins: ["introspection"] },
  },
};
