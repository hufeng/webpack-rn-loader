var path = require('path');
var webpack = require('webpack');

module.exports = [
  {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, './build'),
      filename: 'bundle-ios.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: '../index?platform=ios'
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        __platform__: JSON.stringify('ios')
      })
    ]
  },
  {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, './build'),
      filename: 'bundle-android.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: '../index?platform=android'
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        __platform__: JSON.stringify('android')
      })
    ]
  }
];
