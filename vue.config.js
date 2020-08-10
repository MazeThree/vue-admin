const path = require('path')
const resolve = function (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath:
  // 线上地址目录与github保持一致
    process.env.NODE_ENV === 'production' ? '/wupeng/' : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false, // 是否开启eslint保存检测
  productionSourceMap: false, // 是否在构建生产包时生成sourcdeMap
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('views', resolve('src/views'))
    config.optimization.runtimeChunk('single')
  },
  // configureWebpack: {
  //   devServer: {
  //     proxy: {
  //       '/api': {
  //         target: 'localhost:8080/mes-mbp/bs/',
  //         changeOrigin: true, //是否跨域
  //         pathRewrite: {
  //           '^/api': '' //规定请求地址以什么作为开头
  //         }
  //       }
  //     }
  //   }
  // }
  devServer: {
    host: 'localhost',
    port: '8080',
    hot: true,
    open: true,
    overlay: {
      warning: false,
      error: true
    },
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_BASE_API,
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  }
}
