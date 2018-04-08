const merge = require('webpack-merge');
const webpack = require('webpack');
const ExtractTextplugin = require('extract-text-webpack-plugin');
const common = require('./webpack.common');
const path = require('path');

module.exports = merge(common, {
  mode: 'production',
  entry: path.resolve(__dirname, 'src/index.js'),
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextplugin.extract({
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
      },
      {
        test: /\.scss$/,
        use: ExtractTextplugin.extract({
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
      },
    ],
  },
  plugins: [
    new ExtractTextplugin({ filename: 'style.css', allChunks: true }),
    new webpack.LoaderOptionsPlugin({
      test: /\.css$/,
      minimize: true,
      debug: false,
    }),
  ],
});
