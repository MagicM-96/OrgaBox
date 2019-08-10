const webpack = require('webpack')

module.exports = {
  publicPath: './',
  outputDir: './docs',
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __BUILDDATE__: `'${new Date().toISOString()}'`
      })
    ]
  }
}