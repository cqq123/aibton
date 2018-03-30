const webpack = require('webpack');
const path = require('path');
const config = require('./webpack.base.config');

const APP_ENTRY = './src/index.js';
config.entry = {
  app: [APP_ENTRY, 'webpack-hot-middleware/client'],
  vendor: ['lodash', 'moment'],
  react: ['react', 'react-dom', 'react-redux', 'redux'],
};

const cssLoader = {
  test: /\.css$/,
  use: [
    'style-loader',
    'css-loader',
    {
      loader: 'postcss-loader',
      options: {
        plugins: () => [require('autoprefixer')],
      },
    },
  ],
};

const sassLoader = {
  test: /\.scss$/,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        modules: true,
        localIdentName: '[path][name]_[local]--[hash:base64:5]',
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        plugins: () => [require('autoprefixer')],
      },
    },
    'sass-loader'
  ],
};

config.module.rules.push(cssLoader, sassLoader);
config.devtool = 'inline-source-map';
config.plugins.push(new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('development'),
  },
}));
config.plugins.push(new webpack.HotModuleReplacementPlugin());

module.exports = config;
