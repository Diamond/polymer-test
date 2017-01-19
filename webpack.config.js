var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/app.js',
  output: {
    path: './build',
    filename: 'app.bundle.js',
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  module: {
    loaders: [
      {
        test: /\.html$/, // handles html files. <link rel="import" href="path.html"> and import 'path.html';
        loader: 'wc',
      },
      {
        test: /\.js$/, // handles js files. <script src="path.js"></script> and import 'path';
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015'],
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // handles assets. eg <img src="path.png">
        loader: 'file',
        query: {
          name: '[name].[ext]?[hash]',
        }
      },
    ],
  },

};
