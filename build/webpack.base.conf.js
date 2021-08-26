const utils = require('./utils')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  // 入口主文件
  entry: utils.resolvePath('../src/main.js'),
  // 出口配置
  output: {
    path: utils.resolvePath('../dist'), // 出口路径
    filename: utils.staticPath('js/') + '[name].[hash:4].js' // 出口主文件路径和文件名
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_module/ // 排除该路径文件，避免花费大量时间在这里
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024 * 10, // 单位：b
              name: utils.staticPath('images/') + '[name]-[hash:4].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1,
              name: utils.staticPath('fonts/') + '[name]-[hash:4].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(mp3|mp4)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1,
              name: utils.staticPath('media/') + '[name]-[hash:4].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: utils.resolvePath('../index.html'), // html模板
      filename: 'index.html' // 生成html文件名
      //inject: 'body' // 生成入口文件引入代码位置：head、body，默认body
    }),
    new VueLoaderPlugin()
  ],
  resolve: {
    extensions: ['.js', '.json', '.vue'], // 文件引入免后缀
    alias: {
      '@': utils.resolvePath('../src') // src快捷路径
    }
  }
}
