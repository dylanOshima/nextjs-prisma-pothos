const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    relay: {
      src: __dirname,
      artifactDirectory: path.join(__dirname, "/__generated__/relay/"),
      language: "typescript",
    },
  },
};

module.exports = nextConfig;
