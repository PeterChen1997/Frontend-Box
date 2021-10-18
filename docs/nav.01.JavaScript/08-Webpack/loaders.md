# 03 - loaders

## 简介

webpack 只支持 js 和 json 两种文件类型，但是可以通过 loaders 去支持其他类型的文件，并转换为有效的模块，添加到依赖图中

本身是一个函数，接受文件作为参数，返回转后的结果

## 特性

- loader 可以是同步的，也可以是异步的
- loader 运行在 Node.js 中，并且能够执行任何操作
- 插件(plugin)可以为 loader 带来更多特性
- loader 能够产生额外的任意文件

## 常见loaders

- babel-loader 支持语法转换
- css 相关
  - css-loader 支持 css 文件解析
  - less-loader 支持 less 文件解析
  - sass-loader: 处理sass
  - style-loader: 将css添加到DOM的内联样式标签style里
  - postcss-loader: 用postcss来处理CSS
  -
- ts-loader 支持 js 解析
- file-loader 进行图片、字体等文件的打包
- raw-loader 将文件以字符串形式导入
- thread-loader 多进程打包 js 和 css
  - 相关库
    - happypack
  - 原理
    - 每次 webpack 解析一个模块，thread-loader 会将它及它的依赖分配给 worker 线程中
    - 把这个 loader 放置在其他 loader 之前， 放置在这个 loader 之后的 loader 就会在一个单独的 worker 池(worker pool)中运行
  - 限制
    - 这些 loader 不能产生新的文件
    - 这些 loader 不能使用定制的 loader API（也就是说，通过插件）
    - 这些 loader 无法获取 webpack 的选项设置
- url-loader: 和file-loader类似，但是当文件小于设定的limit时可以返回一个Data Url
- html-minify-loader: 压缩HTML

### 处理 css

sass-loader、css-loader、style-loader

## 用法

```js
module: {
    rules: [
        // test 指定匹配规则
        // use 指定使用的loader名称
        { test: /\.txt$/, use: 'raw-loader' }
    ]
}
```

## 编写

```js
// 导出一个函数，source为webpack传递给loader的文件源内容
module.exports = function(source) {
    const content = doSomeThing2JsString(source);
    
    // 如果 loader 配置了 options 对象，那么this.query将指向 options
    const options = this.query;
    
    // 可以用作解析其他模块路径的上下文
    console.log('this.context');
    
    /*
     * this.callback 参数：
     * error：Error | null，当 loader 出错时向外抛出一个 error
     * content：String | Buffer，经过 loader 编译后需要导出的内容
     * sourceMap：为方便调试生成的编译后内容的 source map
     * ast：本次编译生成的 AST 静态语法树，之后执行的 loader 可以直接使用这个 AST，进而省去重复生成 AST 的过程
     */
    this.callback(null, content); // 异步
    return content; // 同步
}
```