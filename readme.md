# Webpack: Add SASS loader, override Bootstrap colors

In this part, we install `bootstrap` locally through npm package:

```npm
npm i --save-dev bootstrap
```

Change `main.css` to `main.scss` in order to override `bootstrap` colors.

Inside `./main.scss` import bootstrap

```scss
$primary: teal; // change primary color
$danger: violet; //change danger color
@import "~bootstrap/scss/bootstrap";
```

Change the rules for the CSS to use SCSS

```js
module: {
  rules: [
    {
      test: /\.scss$/,
      use: [
        "style-loader", // 3. Creates `style` nodes from JS strings
        "css-loader", // 2. Translates CSS into CommonJS
        "sass-loader" // 1. Compiles Sass to CSS
      ]
    },
  ],
},
```

notes:

- from the webpack documentation: https://webpack.js.org/loaders/sass-loader/

  > sass-loader requires you to install either Dart Sass or Node Sass on your own.

  > This allows you to control the versions of all your dependencies, and to choose which Sass
  > implementation to use.

  > ℹ️ We highly recommend using Dart Sass.

  > ⚠ Node Sass does not work with Yarn PnP feature and doesn't support @use rule
