/*
 * @Descripttion: vue 配置
 * @Author: meijie
 * @Date: 2019-09-19 22:32:23
 * @LastEditors: meijie
 * @LastEditTime: 2019-09-30 16:40:08
 */
const path = require('path');

module.exports = {
  // 开发服务器设置
  devServer: {
    proxy: {
      '/resume': {
        target: ' http://127.0.0.1:7001',
        ws: true,// proxy websockets
        changeOrigin: true,
        pathRewrite: {
          '^/resume': '/resume'
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@img': path.join(__dirname, 'src/static/images'),
        '@scss': path.join(__dirname, 'src/common/scss'),
        '@components': path.join(__dirname, 'src/components')
      }
    }
  },
  // 自动化导入公共scss
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    const addStyleResource = (rule) => {
      rule.use('style-loader', 'css-loader', 'sass-loader')
        .loader('style-resources-loader')
        .options({
          patterns: [
            path.resolve(__dirname, 'src/common/scss/_initialize.scss'),
            path.resolve(__dirname, 'src/common/scss/_border.scss'),
            path.resolve(__dirname, 'src/common/scss/_mixin.scss')
          ]
        })
    }
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
  }
}
