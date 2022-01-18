const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", // 3. Creates `style` nodes from JS strings
          "css-loader", // 2. Translates CSS into CommonJS
          "sass-loader", // 1. Compiles Sass to CSS
        ],
      },
    ],
  },
};
