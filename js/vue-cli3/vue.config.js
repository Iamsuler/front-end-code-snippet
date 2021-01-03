const path = require('path')
//去console插件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
//gzip压缩插件
const CompressionWebpackPlugin = require('compression-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  outputDir: process.env.outputDir,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.0.001:8080',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/gateApi': {
        target: 'http://192.168.0.002:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/xsApi': {
        target: 'http://192.168.0.003:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/xsApi': ''
        }
      }
    }
  },
  configureWebpack: config => {
    config.externals = {
      vue: "Vue",
      vuex: "Vuex",
      "vue-router": "VueRouter",
      "element-ui": "ELEMENT",
      'v-charts': 'VCharts',
      'echarts': 'echarts',
    }
    let plugins = [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            warnings: false,
            drop_debugger: true,
            drop_console: true,
          },
        },
        sourceMap: false,
        parallel: true,
      }),
      new CompressionWebpackPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp(
          '\\.(' + ['js', 'css'].join('|') +
          ')$',
        ),
        threshold: 10240,
        minRatio: 0.8,
      }),
    ]
    if (process.env.NODE_ENV !== 'development') {
      //在开发环境不压缩，有console日志
      config.plugins = [...config.plugins, ...plugins]
    }
  },
  lintOnSave: true,
  chainWebpack: (config) => {
    //配置别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@constant', resolve('src/constants'))
      .set('@components', resolve('src/components'))
      .set('@base', resolve('src/base'))
      .set('@api', resolve('src/api'))
      .set('@common', resolve('src/common'))
      .set('@utils', resolve('src/utils'))
      .set('@router', resolve('src/router'))
      .set('@store', resolve('src/store'))
      .set('@mixin', resolve('src/mixin'))
      .set('@img', resolve('public/img'))
  }
}

