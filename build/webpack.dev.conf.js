/**
 * webpack开发环境下的配置文件
 */

import webpack from 'webpack';
import HtmlPlugin from 'html-webpack-plugin';
import webpackMerge from 'webpack-merge';
import config from './config';
import baseConf from './webpack.base.conf';
import { styleLoaders, generateEntry, resolve } from './util';

export default webpackMerge(baseConf, {

  entry: {
    app: generateEntry(resolve('..', 'src', 'main.js'), config.dev.port)
  },

  output: {
    path: config.dev.outputPath,
    publicPath: config.dev.outputPublicPath
  },

  module: {
    rules: styleLoaders()
  },

  plugins: [
    // 开启热重载
    new webpack.HotModuleReplacementPlugin()
  ]

});
