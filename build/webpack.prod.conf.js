import webpack from 'webpack';
import webpackConfig from 'webpack-merge';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import { resolve, generateEntry, styleLoaders } from './util';
import config from './config';
import baseConf from './webpack.base.conf';

export default webpackConfig(baseConf, {

  entry: generateEntry(resolve('..', 'src', 'main.js')),

  output: {
    path: config.prod.outputPath,
    publicPath: config.prod.outputPublicPath
  },

  module: {
    rules: styleLoaders()
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin({ filename: 'css/style.css?[contenthash:8]' })
  ]

});
