var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './build/main.js',
  output: { path: __dirname + '/dist/js/', filename: 'bundle.js.min' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
      	test: /\.json$/,
      	loader: 'json'
      }
    ]
  }
};