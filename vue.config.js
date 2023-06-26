const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');
//配置解决本地开发跨域问题
module.exports = {
  publicPath: "/xmanager/",
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  },

  devServer: {
    proxy: {
      '/release': {
        target: 'http://10.92.81.163:8088/uums',
        changeOrigin: true,
        pathRewrite: {
          '^/release': ''
        }
      },
      '/debug': {
        target: 'http://10.92.82.161:8088/uums',
        changeOrigin: true,
        pathRewrite: {
          '^/debug': ''
        }
      }
    }
  }
}
