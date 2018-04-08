const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          'url-loader',
        ],
      },
    ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        react: {
          chunks: 'all',
          test: ({ resource }) => resource && /node_modules\/react*/.test(resource),
          name: 'react',
          enforce: true,
          priority: 10,
        },
        lib: {
          chunks: 'all',
          test: ({ resource }) => resource && /node_modules\/(moment|lodash)/.test(resource),
          name: 'lib',
          enforce: true,
          priority: 9,
        },
        d3: {
          chunks: 'all',
          test: ({ resource }) => resource && /node_modules\/d3*/.test(resource),
          name: 'd3',
          enforce: true,
          priority: 8,
        },
        vendor: {
          chunks: 'all',
          test: ({ resource }) => resource && /\/node_modules\//.test(resource),
          name: 'vender',
          enforce: true,
          priority: 7,
        },
      },
    },
    runtimeChunk: true,
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules',
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
    }),
  ],
};
