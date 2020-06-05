'use strict'
/**
 * vui库打包编译配置文件
 */
const webpack = require('webpack')
const config = require('./env-config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
// 压缩JS插件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
    // 入口
  entry: {
    app: './src/index.js'
  },
  devtool: config.build.productionSourceMap ? config.build.devtool : false,
  output: {
    path: config.build.assetsRoot,
    filename: 'vui.js',
    library: 'vui',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true
      })
    ]
  },
  plugins: [
    // 编译进度插件
    new ProgressBarPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new FriendlyErrorsWebpackPlugin()
  ]
})

module.exports = webpackConfig
