# Webpack: Splitting Dev and Production

In this part, we're going to split our config to 3 different config files :

1. `webpack.common.js` // shared between dev and prod
2. `webpack.dev.js` // for development
3. `webpack.prod.js` // for production

So, when we are in `dev` mode we can add development server for live updating that we can just run
instead of building the whole `dist` directory and having to manually open it, we can use
`webpack-dev-server`. On the other end of things with `prod` we might want to minify our assets, or
we might want to export our `CSS` into a separate file, we're gonna basically setup webpack to do
that for us.

Create a new config file for `dev` and `prod` in the root project :

```
|- webpack.dev.js
|- webpack.prod.js
```

It's all up to your preference whether to leave `webpack.config.js` as it is, or change the name to
`webpack.common.js`

```
|- webpack.common.js
```

Now, our `webpack.common.js` should be something like this :

```javascript
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
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
```

`webpack.dev.js` :

```javascript
const path = require("path");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
```

`webpack.prod.js` :

```javascript
const path = require("path");

module.exports = {
  mode: "production",
  output: {
    filename: "main.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
};
```

Now, we are going to use package called `webpack-merge`, it's allows us to easily merge webpack
config together, so, when on `dev` or `prod` we can include functionality from `webpack.common.js`

```npm
npm i --save-dev webpack-merge
```

In our `webpack.dev.js` :

```javascript
const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
});
```

On `webpack.prod.js` :

```javascript
const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "main.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
});
```

And change our `package.json` to be something like this :

```json
"scripts": {
    "start": "webpack --config webpack.dev.js",
    "build": "webpack --config webpack.prod.js"
  },
```

Now we're going to setup our dev server using package called `webpack-dev-server` so when we are in
development we don't have to building our dist, we don't run `npm start` everytime when we want to
see something changes.

To use `webpack-dev-server` :

```npm
npm i --save-dev webpack-dev-server
```

Now in our package.json :

```json
"start": "webpack-dev-server --config webpack.dev.js --open",
```

> --open [optional] basically will open up a window in the browser for us

And then when we run `npm start` it'll use `webpack-dev-server` and open a window in our browser, so
everytime we make a changes in our code it'll automatically change in the browser.
