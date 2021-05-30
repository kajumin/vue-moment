const webpack = require('webpack')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'
console.log(isProd)

const config = {
  // 第一种方法
  // configureWebpack: {
  //   plugins: [new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)]
  // }
  // 第二种方法
  chainWebpack: (config) => {
    // 优化moment 去掉国际化内容
    // config
    //   .plugin('ignore')
    //   // 忽略/moment/locale下的所有文件
    //   .use(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/))
  },
  configureWebpack: (config) => {
    // 移除console.log
    // if (isProd) {
    //   config.optimization.minimizer.map((arg) => {
    //     const option = arg.options.terserOptions.compress
    //     option.drop_console = true // 打开开关
    //     option.pure_funcs = ['console.log']
    //     return arg
    //   })
    // }
    if (isProd) {
      // 配置webpack 压缩
      config.plugins.push(
        new CompressionWebpackPlugin({
          test: /\.js$|\.html$|\.css$/,
          // 超过4kb压缩
          threshold: 4096
        })
      )
    }
  }
}
module.exports = config
