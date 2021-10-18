# HMR

HMR（Hot Module Replacement）是webpack一个重要的特性

```js
const webpack = require('webpack')
module.exports = {
  // ...
  devServer: {
    // 开启 HMR 特性
    hot: true
    // hotOnly: true
  }
}
```

## 原理

- 当代码文件修改并保存之后，webapck通过watch监听到文件发生变化
- 对代码文件重新打包生成两个模块补丁文件manifest（js）和一个（或多个）updated chunk（js）
- 将结果存储在内存文件系统中
- 通过websocket通信机制将重新打包的模块发送到浏览器端
- 浏览器动态的获取新的模块补丁替换旧的模块，浏览器不需要刷新页面就可以实现应用的更新

优点：

- 代码文件修改到页面内容更新，自动完成
- 兼容目前市面上主流的开发框架 ：react，vue，angular2，如使用angular-cli创建ng项目通过@ngtools/webpack已经内置了webpack
- 相比location.reload() 更新方式，不需要刷新页面，可以保存应用的当前状态

## 相关中间件

- webpack-dev-server
  - 内置 webpack-dev-middleware 和 express 服务器
    - 利用 webpack-dev-middleware 提供文件的监听和编译
    - 利用express提供 http 服务
  - 底层利用 websocket 代替 EventSource 实现了 webpack-hot-middleware 提供的客户端和服务器之间的通信机制
    - Websockets 连接既可以向浏览器发送数据，也可以从浏览器接收数据
    - SSE（sever-sent event） 连接只能向浏览器推送数据。在线股票报价或 Twitter 更新时间线或提要都是可以从 SSE 中受益的应用程序的很好示例

- webpack-dev-middleware
  - express 中间件
    - 第一通过file-loader内部集成了node的 monery-fs/memfs 内部文件系统，直接将资源存储在内存
    - 第二是通过watch监听文件的变化，动态编译
- webpack-hot-middleware
  - 核心是给webpack提高服务端和客户端之间的通信机制，内部使用window.EventSocurce实现
  - webpack 第一次打包的时候，除了代码本身之外，还包含一部分HMRruntime订阅服务代码
    - HMRruntime 订阅服务端的更新变化，触发HMR runtime API拉取最新的资源模块

## 实现原理

![图 3](https://peterchen97.coding.net/p/img2/d/test/git/raw/master/aedbdbc1e4a54244ce70ff0a89ef8679e2b5ee62f676134a27bf8262684cba49.png)  
