## Setup command line

```npm init```
-> It attempts to make reasonable guesses about what you want things to be set to, and then writes a package.json file with the options you've selected.

```npm install <pkg> --save``` pkg = react / react-dom
-> to install a package and save it as a dependency in the package.json file

__Folder Structure__:
node_modules	package.json

```npm install --save-dev html-webpack-plugin webpack webpack-dev-server babel-{core,loader} babel-preset-react```
-> -dev -> for dev-dependency

```mkdir app && cd app
touch index.html index.js```

create doctype with ```<div id="app"></div>``` in the body

```touch webpack.config.js``` in the root directory
->
```module.exports = {```
  ```entry: [```
    ```'./app/index.js'```
  ```],```
  output: {
    path: __dirname + '/dist',
    filename: index_bundle.js
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_module/, loader: "babel-loader" }
      //babel-loader convert jsx + ES6syntax into "Normal JavaScript"
    ]
  }
}```
