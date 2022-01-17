# Webpack: Add first loaders to handle CSS

In this part, we add `loaders` to handle CSS by installing

```npm
npm install --save-dev style-loader css-loader
```

Add `loader` to webpack config under the `output object`:

```js
module: {
  rules: [
    {
      test: /\.css$/i, // Webpack v5
      use: ["style-loader", "css-loader"]
    },
  ],
},
```

notes:

- css-loader translate CSS to JavaScript
- style-loader takes that translated CSS and injected to the DOM
- In order to use it correctly, first we need to translate CSS before injecting it. So, you might
  think `["css-loader", "style-loader"]` is the right order, but no.
- Actually, they load in reverse order. So, we put `css-loader` which is executing first, at the end
  of an array. Like this `["style-loader", "css-loader"]`
