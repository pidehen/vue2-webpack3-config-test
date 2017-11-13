## webpack3  
* entry的值如果是字符串必须得有文件后缀名
* output.path必须是绝对路径
* module.rules里的模块匹配的use字段必须写全loader名
```js
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }, {
        test: /\.vue$/,
        use: 'vue-loader'
      }, {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      }, {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          loader: 'url-loader',
          options: {
            limit: 10000,
            // 将图片放入到images目录下，并且名称是防缓存的
            name: 'images/[name].[hash:7].[ext]'
          }
        ]
      }, {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: '/fonts/[name].[hash:7].[ext]'
            }
          }
        ]
      }
    ]
  }
```

* 插件处理
  1. 打包 (UglifyJsPlugin)
  ```js
    // 注意，如果传入的参数对象包含了compress属性的话({})，那么需要显示的写上warnings: false
    new webpack.optimize.UglifyJsPlugin();  
  ```  
  疑问：warnings代表什么

  2. 提取css (extract-text-webpack-plugin)

  ```js
    {
      test: /\.css/,
      use: ExtractTextWebpackPlugin.extract({
        use: 'css-loader'
      })
    };

    new ExtractTextWebpackPlugin({
      filename: 'css/style.css'
    });

    filename的相对目录是output.path

  ```  

  3. 生成首页  

  ```js
    new HtmlPlugin({
      // 生成的首页路径
      filename: 'xx',
      // 原首页路径
      template: '',
      // 是否将引用资源放到</body>前面
      inject: true
    });

    生成的首页相对的目录是output.path

  ```

  4. 友好的错误提示  
  ```js
    new FriendlyErrorsWebpackPlugin()
  ```



## babel
```json
{
  "presets": [
    [ "latest", { "modules": false } ]
  ],
  "plugins": [
    "transform-object-rest-spread",
    "transform-class-properties"
  ],
  "comments": false // 是否保留源码中的注释
}
```

## PostCSS(目前并没什么卵用)

## webpack-dev-server  
* 启动模式分两种
  1. iframe
  2. inline

```text
iframe: 保存修改内容，自动编译打包
inline: 保存修改内容，自动编译打包，并且强制刷新浏览器
```

* contentBase
  默认为output.path
