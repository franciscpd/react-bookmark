const { resolve } = require('path');
const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const commonConfig = require('./common');

module.exports = merge(
  commonConfig,
  {
    mode: 'production',
    entry: './index.js',
    output: {
      filename: 'js/[name].[hash].min.js',
      chunkFilename: '[name].[hash].chunk.js',
      path: resolve(__dirname, '../../dist'),
      publicPath: '/',
    },
    devtool: 'source-map',
    plugins: [],
    optimization: {
      minimizer: [new TerserPlugin({
        sourceMap: process.env.NODE_ENV === "production",
        terserOptions: {
          mangle: true,
          toplevel: true,
          module: true,
        },
      })],
    },
    performance: {
      hints: "warning",
    },
  },
);
