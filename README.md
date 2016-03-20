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
touch index.html```
