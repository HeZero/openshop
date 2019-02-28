const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')
const theme = require('./src/theme')

const baseUrl = process.env.NODE_ENV === 'production' ? '/' : '/'

module.exports = {
  outputDir: 'YuChi@test1.0',
  baseUrl,
  lintOnSave: true,
  runtimeCompiler: false,
  productionSourceMap: false,
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    // extract: true,
    // 开启 CSS source maps?
    // sourceMap: false,
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ['*']
          })
        ]
      },
      less: {
        modifyVars: theme
      }
    }
  }
}
