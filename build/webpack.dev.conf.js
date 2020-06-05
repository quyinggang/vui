'use strict'
/**
 * 官网项目即examples目录下项目：本地以及生产配置文件
 */
const webpack = require('webpack');
const path = require('path');
const config = require('./env-config');
const chalk = require('chalk');
// 公用webpack配置
const baseWebpackConfig = require('./webpack.base.conf');
// webpack配置文件合并插件
const merge = require('webpack-merge');
// 生成HTML插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 清理webpack编译输出的信息
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

/*
  官网只有两个环境：生产环境和开发环境，在deploy-build中定义了生产环境
  调npm run dev命令时就是非生产环境，即开发环境
*/
const isProd = process.env.NODE_ENV === 'production';

const devWebpackConfig = merge(baseWebpackConfig, {
    // 入口
  entry: {
    app: './examples/src/main.js'
  },
  // 输出
  output: {
    // 指定编译输出目录
    path: path.resolve(__dirname, '../examples/homepage'),
    // 输出文件名称
    filename: isProd ? '[name].[chunkhash].js' : '[name].js',
    // 配置输出目录对应的公开URL
    publicPath: ''
  },
  /**
   *  选择source map，用于开发环境的增强调试
   *  cheap-module-eval-source-map是开发环境速度最快的
   */
  devtool: config.dev.devtool,

  // 本地开发服务，相关配置都在/config/index.js文件中
  devServer: {
    // 控制台log等级，默认是info输出所有信息；warning表示只输出警告和错误信息
    clientLogLevel: 'warning',
    // 查不到指定路由时的方案
    historyApiFallback: {
      rewrites: [
        // 找不到路由时就跳转到首页
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    // 是否启用热替换
    hot: true,
    // 告诉服务器从哪个目录中提供内容，默认情况下使用当前工作目录作为提供内容的目录
    // false表示禁用
    contentBase: false,
    // 是否启用gzip压缩
    compress: true,
    // 域名，默认是localhost，如果希望服务器外部可访问，设置为0.0.0.0
    host: config.dev.host,
    // 端口
    port: config.dev.port,
    // 是否允许server打开浏览器
    open: true,
    // 是否在浏览器中显示编译器错误或警告
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    // webpack错误或警告在控制台是否不显示，true表示不显示
    quiet: true,
    // 定制watch模式的选项
    watchOptions: {
      // 是否检查变动
      poll: config.dev.poll,
    }
  },
  // 插件使用
  plugins: [
    // 动态生成HTML
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './examples/index.html',
      inject: true,
      minify: {
        // 移除注释
        removeComments: true,
        // 删除空格
        collapseWhitespace: true,
        // 属性双引号
        removeAttributeQuotes: true
      }
    })
  ]
})

if (isProd) {
  devWebpackConfig.plugins.push(
    new ProgressBarPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    // 压缩JS
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      },
      sourceMap: false
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js',
      minChunks (module) {
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      filename: 'manifest.js',
      minChunks: Infinity
    }),
  );
} else {
  const devServer = devWebpackConfig.devServer;
  devWebpackConfig.plugins.push(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    // 启用模块热替换
    new webpack.HotModuleReplacementPlugin(),
    // 开启模块热替换时使用该插件会显示模块相对路径
    new webpack.NamedModulesPlugin(),
    // webpack编译出现错误使用该插件跳过输出阶段，保证输出资源不会包含错误
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrorsPlugin({
      // 编译成功后的提示
      compilationSuccessInfo: {
        messages: [`Running: http://${devServer.host}:${devServer.port}`],
      },
      // 错误信息
      onErrors: (severity, errors) => {
        console.log(chalk.red(severity + errors.toString()));
      }
    })
  );
}

module.exports = devWebpackConfig;
