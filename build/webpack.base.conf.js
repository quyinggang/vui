'use strict'
/**
 * webpack公共配置
 */
const path = require('path');
const config = require('./env-config');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


function assetsPath(_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory

  return path.posix.join(assetsSubDirectory, _path)
}

const sourceMap = process.env.NODE_ENV === 'production'
    ? config.build.productionSourceMap
    : config.dev.cssSourceMap;

// 返回指定目录的绝对路径
function resolve (dir) {
  return path.join(__dirname, '..', dir);
}

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  // enforce: pre | post, loader使用优先级定义，定义了pre会优先于其他同类型相同模块使用loader解析
  enforce: 'pre',
  // include表示必须匹配的目录
  include: [resolve('src'), resolve('packages'), resolve('examples')],
  options: {
    // eslint-friendly-formatter插件会将eslint详细输出到控制台
    formatter: require('eslint-friendly-formatter'),
    // 是否显示警告信息
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
});

module.exports = {
  // 绝对路径的基础目录即解析entry和loader的目录，默认当前目录
  context: path.resolve(__dirname, '../'),
  // 模块解析规则
  resolve: {
    // 省略模块扩展匹配规则
    extensions: ['.js', '.vue', '.json'],
    // 模块别名
    alias: {
      main: resolve('src'),
      packages: resolve('packages')
    }
  },
  module: {
    // 定义loader
    rules: [
      ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: [resolve('packages'), resolve('examples')],
        options: {
          sourceMap: sourceMap,
          // vue-loader参数：是否开启CSS source maps
          cssSourceMap: sourceMap,
          // vue-loader参数：是否要缓存文件，可以让浏览器不缓存，即动态生成文件中加入hash就会让每一次构建的文件都不同
          cacheBusting: config.dev.cacheBusting,
          // 解决Vue中src需要使用require先导入的问题，这里统一配置
          transformToRequire: {
            video: ['src', 'poster'],
            source: 'src',
            img: 'src',
            // svg的image标签
            image: 'xlink:href'
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader?cacheDirectory=true',
        include: [resolve('src'), resolve('packages')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.scss$/,
        loader: ['style-loader', 'css-loader', 'sass-loader']
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};
