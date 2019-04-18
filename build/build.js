'use strict'
/**
 * vui库项目打包编译
 */
process.env.NODE_ENV = 'production';

const chalk = require('chalk');
const webpack = require('webpack');
const webpackConfig = require('./webpack.prod.conf');

// 调用webpack打包编译
webpack(webpackConfig, (err, stats) => {
  if (err) throw err
  // 指定终端输出信息
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
    chunks: false,
    chunkModules: false
  }) + '\n\n');

  if (stats.hasErrors()) {
    console.log(chalk.red('  Build failed with errors.\n'));
    process.exit(1);
  }

  console.log(chalk.cyan('  Build complete.\n'));
});
