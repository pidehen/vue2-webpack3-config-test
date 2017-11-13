import path from 'path';
import webpack from 'webpack';

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
        use: ['vue-style-loader', 'css-loader']
      }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]

};
