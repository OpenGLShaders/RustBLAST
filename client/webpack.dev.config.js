const path = require('path');
var webpack = require('webpack');

module.exports = {
  mode: "development",
  devServer: {
    port: 8080,
    open: true,
    hot: true
  },
  entry: [
    './src/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}
