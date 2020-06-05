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

  if (stats.hasErrors()) {
    console.log(chalk.red('  Build failed with errors.\n'));
    process.exit(1);
  }
});
