# Webpack: HTML-Loader, Asset Modules, Clean `/dist` folder

- Added `html-loader` to automatically require the files we reference in img tags

  ```npm
  npm i --save-dev html-loader
  ```

  In `webpack.common.js`, add this line into `rules` :

  ```javascript
  ...
  {
    test: /\.html$/,
    use: ["html-loader"],
  },
  ```

- Webpack v5 use what so called `Asset Modules`.

  Webpack docs https://webpack.js.org/guides/asset-modules/

  > Asset Modules is a type of module that allows one to use asset files (fonts, icons, etc) without
  > configuring additional loaders.
  >
  > Prior to webpack 5 it was common to use:
  >
  > - `raw-loader` to import a file as a string
  >
  > - `url-loader` to inline a file into the bundle as a data URI
  >
  > - `file-loader` to emit a file into the output directory
  >
  > Asset Modules type replaces all of these loaders by adding 4 new module types:
  >
  > - `asset/resource` emits a separate file and exports the URL. Previously achievable by using
  >   `file-loader`.
  >
  > - asset/inline exports a data URI of the asset. Previously achievable by using `url-loader`.
  >
  > - `asset/source` exports the source code of the asset. Previously achievable by using
  >   raw-loader.
  >
  > - `asset` automatically chooses between exporting a data URI and emitting a separate file.
  >   Previously achievable by using `url-loader` with asset size limit.

- Still inside `webpack.common.js`, add this line into `rules` :

  ```javascript
  ...
  {
    test: /\.(svg|png|jpg|jpeg|gif)$/,
    type: "asset/resource",
  }
  ```

- On `webpack.prod.js` when we actually build our code, we are going to separate asset (our image in
  this case) into different folder inside `dist` folder, in our output object add this :

  ```javascript
  assetModuleFilename: "images/[name]-[hash][ext]";
  ```

  > images - will create a folder inside `dist` folder with the name of `images`, it's up to you
  > want to create what name of the folder
  >
  > [name]-[hash][ext] - is going to create our image file with combining name of the file, hashed
  > name generate by webpack, and add the extension based on the type of the image (svg, jpg, png,
  > etc) in our `template.html` also by what we define in `webpack.common.js` earlier
  >
  > For more information, check this docs by webpack https://webpack.js.org/guides/asset-modules/

- Cleaning up the `/dist` folder

  As you notice when we change something in our code, webpack will generate a new `hashed` file in
  our `/dist` folder and has become quite cluttered. It's a good practice to clean the `/dist`
  folder before each build, so that only used files will be generated. In webpack v5 it's quite easy
  though, by adding `clean: true` inside our output object in `webpack.prod.js` because we only
  needed when we actually build our code. ` webpack.prod.js` :

  ```javascript
  {
    ...
    clean: true,
  }
  ```
