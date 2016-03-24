var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  fileName: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, include: __dirname + '/app', loader: "babel-loader" }
      //babel-loader convert jsx + ES6syntax into "Normal JavaScript"
    ]
  },
  plugins: [ HtmlWebpackPluginConfig ]

}
