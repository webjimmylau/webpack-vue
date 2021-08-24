const utils = require('./utils')
const path = require('path')
const webpackMerge = require('webpack-merge')
const webpackBase = require('./webpack.base.conf')

module.exports = webpackMerge(webpackBase, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.(c|le)ss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: true,
              plugins: (loader) => [
                require('autoprefixer')({
                  overrideBrowserslist: ['last 2 versions', '> 1%']
                })
              ]
            }
          },
          { loader: 'less-loader' }
        ]
      }
    ]
  }
})
