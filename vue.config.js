const webpack = require('webpack')
const {GenerateSW} = require('workbox-webpack-plugin');
let now = new Date()
const fillLeadingZeroes = function (num, length) {
  num = '' + num
  while (num.length < length) {
    num = '0' + num
  }
  return num
}

module.exports = {
  publicPath: './',
  outputDir: './docs',
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __BUILDDATE__: `'${now.getFullYear()+'-'+fillLeadingZeroes(now.getMonth() + 1, 2)+'-'+fillLeadingZeroes(now.getDate(), 2)+' '+fillLeadingZeroes(now.getHours(), 2)+':'+fillLeadingZeroes(now.getMinutes(),2)}'`
      }),
      new GenerateSW({
        skipWaiting: true,
      })
    ]
  }
}