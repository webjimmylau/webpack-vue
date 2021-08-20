const webpackMerge = require('webpack-merge')
const webpackBase = require('./webpack.base.conf')

module.exports = webpackMerge(webpackBase, {
  mode: 'production',
  devtool: 'eval'
})
