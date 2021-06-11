const path = require('path');

module.exports = [{
  entry: './example/index.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'example'),
    port: 9000
  },
  output: {
    filename: 'index.compiled.js',
    path: path.resolve(__dirname, 'example')
  }
}]