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
  1. 打包  
  ```js
    // 注意，如果传入的参数对象包含了compress属性的话({})，那么需要显示的写上warnings: false
    new webpack.optimize.UglifyJsPlugin();  
  ```  
  疑问：warnings代表什么
  2. 提取css
  

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


## webpack-dev-server  
`启动模式分两种`:  
* iframe
* inline

```text
iframe: 保存修改内容，自动编译打包
inline: 保存修改内容，自动编译打包，并且强制刷新浏览器
```
