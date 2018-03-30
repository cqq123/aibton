const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const config = require('./webpack.base.config');

config.entry = {
  app: './src/index.js',
  vendor: ['lodash', 'moment'],
  react: ['react', 'react-dom', 'react-redux', 'redux'],
};

const cssLoader = {
  test: /\.css$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      { loader: 'css-loader', options: { minimize: true } },
      {
        loader: 'postcss-loader',
        options: {
          plugins: () => [require('autoprefixer')],
        },
      },
    ],
  }),
};
const sassLoader = {
  test: /\.scss$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
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
      'sass-loader',
    ],
  }),
};

config.module.rules.push(cssLoader, sassLoader);
config.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production'),
    },
  }),
  new ExtractTextPlugin({ filename: '[name].css', allChunks: true }),
  new webpack.optimize.UglifyJsPlugin(),
);

module.exports = config;

