const path = require('path');
const ETP = require('extract-text-webpack-plugin');

module.exports = [
  {
    entry: './src/js/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist/js')
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['babel-preset-env']
            }
          }
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        }
      ]
    }
  }
];
