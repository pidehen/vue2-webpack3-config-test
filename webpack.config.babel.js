import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlPlugin from 'html-webpack-plugin';
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';

function resolve (...paths) {
  return path.resolve.apply(path, [ __dirname ].concat(paths));
}

export default {

  entry: {
    app: resolve('src', 'main.js')
  },

  output: {
    path: resolve('dist'),
    // 开发和生产环境得区别对待
    // 静态资源的根路径，最终在css中的路径为publicPath +
    publicPath: '/',
    filename: '[name].js'
  },

  resolve: {
    extensions: ['.js', '.vue', '.json']
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
        include: resolve('src')
      }, {
        test: /\.js$/,
        use: 'babel-loader',
        include: resolve('src')
      }, {
        test: /\.css$/,
        // 提取css前使用css-loader解析css文件
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
      }, {
        test: /\.jpe?g/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000,
              name: 'images/[name].[hash:7].[ext]'
            }
          }
        ],
      }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false // 删除类似涉及到字符串变量替换的代码
      }
    }),
    new ExtractTextPlugin({
      filename: 'css/style.css'
    }),
    new HtmlPlugin({
      filename: 'index.html',
      template: resolve('index.html'),
      title: '石鸟志',
      inject: true
    }),
    new FriendlyErrorsWebpackPlugin()
  ]

};
