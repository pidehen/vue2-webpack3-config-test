/**
 * webpack基础配置文件
 */

import path from 'path';
import webpack from 'webpack';
import HtmlPlugin from 'html-webpack-plugin';
import { resolve, vueLoaderOptions } from './util';

export default ({

  // 输出信息
  output: {
    filename: 'js/[name].js'
  },

  // 辅助信息
  resolve: {
    extensions: ['.js', '.vue', '.json']
  },

  // 模块解析
  module: {
    rules: [
      {
        test: /\.js$/i,
        use: 'babel-loader',
        include: resolve('..', 'src')
      }, {
        test: /\.vue$/i,
        use: 'vue-loader',
        include: resolve('..', 'src')
      }, {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'images/[name].[hash:7].[ext]'
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlPlugin({
      template: resolve('..', 'index.html'),
      filename: 'index.html',
      inject: true
    })
  ]

});
