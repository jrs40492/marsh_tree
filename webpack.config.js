const path = require('path');

const uglifyjs = require('uglifyjs-webpack-plugin');
const minicss = require('mini-css-extract-plugin');
const optimizecss = require('optimize-css-assets-webpack-plugin');

module.exports = [
  {
    entry: './src/styles/global.scss',
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [minicss.loader, 'css-loader', 'sass-loader', 'postcss-loader']
        }
      ]
    },
    plugins: [
      new minicss({
        filename: '/styles/[name].css'
      })
    ],
    optimization: {
      minimizer: [new uglifyjs(), new optimizecss({})]
    }
  }
];
