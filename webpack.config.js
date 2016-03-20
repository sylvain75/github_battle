module.exports = {
  entry: [
    './app/index.js'
  ],
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
}
