const debug = process.env.NODE_ENV !== "production";

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

module.exports = withMDX({
  // Append the default value with md extensions
  reactStrictMode: true,
  assetPrefix: !debug ? "/next-play-app-01/" : "", // match gh-page asset url
  basePath: !debug ? "/next-play-app-01" : "", // match gh-page link url

  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
});
