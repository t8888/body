module.exports = {
  // 基本路径
  baseUrl: '/',
  // 输出文件目录
  outputDir: 'dist',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: () => { },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: true,
  configureWebpack: {
    devtool: 'source-map'
  },
  filenameHashing: false,
  devServer: {
    port: 8070,
    https: false
  }

}