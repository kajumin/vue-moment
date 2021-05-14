const webpack = require('webpack')
module.exports = {
  // 第一种方法
  // configureWebpack: {
  //   plugins: [new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)]
  // }
  // 第二种方法
  chainWebpack: (config) => {
    // 优化moment 去掉国际化内容
    config
      .plugin('ignore')
      // 忽略/moment/locale下的所有文件
      .use(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/))
  }
}
