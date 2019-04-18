'use strict'
/**
 * 用于官网打包编译
 */
process.env.NODE_ENV = 'production';
const chalk = require('chalk');
const webpack = require('webpack');
const webpackConfig = require('./webpack.dev.conf');

// 调用webpack函数打包编译
webpack(webpackConfig, (err, stats) => {
  if (err) throw err
  // 指定终端输出信息
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n');

  if (stats.hasErrors()) {
    console.log(chalk.red('  Build failed with errors.\n'));
    process.exit(1);
  }

  console.log(chalk.cyan('  Build complete.\n'));
});
