# Why - 为什么我们需要 Vite

在基于 webpack 或者 rollup 为打包工具的大型项目中，如 amaze，热更新的时间成本较高，可能长达 10s+，在关闭 aot 之前，甚至达到 100 多 s

不仅是开发体验极差，打包时长较长也大大降低了开发的效率

但是基于 ESM 开发的打包工具，为解决这一问题提供了新思路

# What - 啥是 Vite

Vite 是尤大在去年跟 Vue3 一起发布的一款开发工具，特点就跟 Vite 的法语含义一样——“快”

它的本质是是一个开发服务器，类似 webpack-dev-server，它只是一个用于本地开发环境使用的打包工具，部署上线的版本依然使用 rollup 进行打包

Vite 之所以快，主要有以下原因：

- 基于 ESM
  - 不需要编译过程
  - 具有懒加载特性
- 浏览器代替 webpack 解析依赖
- 使用 esbuild 代替 webpack

## esbuild

Vite 使用 esbuild 替代了 webpack 进行模块的编译工作

esbuild 之所以比 webpack 快，主要也有下面几个原因：

- 使用 go 编写，编译为原生代码
- 编译、输出和 sourcemap 生成都是并行
- 没有昂贵的数据转换
- 代码写的好..

## 请求拦截原理

既然使用了 ESM，那么浏览器在遇到相关的模块引入是就会进行 http 请求，那么 vite 是如何对请求做出相应的呢

vite 本身基于 koa 开发，在请求来了之后，会接收到 ctx.path 这个参数，基于不同的类型，vite 会做出不同的处理

![图 2](https://peterchen97.coding.net/p/img2/d/test/git/raw/master/d7dd9001e503857266b6faf855f6c49de5098fe40b6a74ff878a20db6e521a82.png)  

## 存在的问题

- ESM 没法直接用在生产环境上
- 开发环境使用 ESM，但是生产环境实际上是用的是 commonJS，一些情况下会导致一些不一致的问题
- 一些代码没有提供 ESM 格式的包，需要做兼容
