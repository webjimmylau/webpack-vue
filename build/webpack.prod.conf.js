const utils = require('./utils')
const webpackMerge = require('webpack-merge')
const webpackBase = require('./webpack.base.conf')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = webpackMerge(webpackBase, {
  mode: 'production',
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.(c|le)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: '../../' } // 公用路径调试到外层，直到样式路径正确为止
          },
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
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: utils.staticPath('css/') + '[name].[hash:4].css'
    })
  ]
})
