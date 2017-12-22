# 关于项目

>该项目是一个多页应用webpack工程化模板

### webpack的四个核心概念：
1. entry
- 入口：从哪里开始
2. output
- 出口：以什么方式结束
3. loader
- 加载器：处理其它非原生JS文件
4. plugin
- 插件：我还想做更多事情

### 基本配置（webpack.config.js）
```
module.exports = {
  entry: {
    'index': './src/js/index.js'
  },
  output: {
    path: __dirname + '/dist/js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  plugin: [
    new webpack.optimize.commonChunkPlugin();
  ]
}
```
