# 04 - plugins

## 简介

用于 bundle 文件的优化、资源管理和环境变量注入

作用于整个构建过程

## 常见插件

- speed-measure-webpack-plugin
  - 输出各个loader的打包耗时，可根据耗时进一步优化打包速度
- webpack-bundle-analyzer
  - 打包内容分析
- html-webpack-plugin
  - 创建 html 文件
- clean-webpack-plugin
  - 删除（清理）构建目录
- mini-css-extract-plugin
  - 提取 CSS 到一个单独的文件中
- DefinePlugin
  - 允许在编译时创建配置的全局对象，是一个webpack内置的插件，不需要安装
- copy-webpack-plugin
  - 复制文件或目录到执行区域，如vue的打包过程中，如果我们将一些文件放到public的目录下，那么这个目录会被复制到dist文件夹中
  - 复制的规则在patterns属性中设置：
    - from：设置从哪一个源中开始复制
    - to：复制到的位置，可以省略，会默认复制到打包的目录下
    - globOptions：设置一些额外的选项，其中可以编写需要忽略的文件

## 原理

apply 方法会被 webpack compiler调用，并且在整个编译生命周期都可以访问 compiler对象

```js
class ConsoleLogOnBuildWebpackPlugin {
  apply(compiler) {
    compiler.hooks.run.tap(pluginName, (compilation) => {
      console.log('webpack 构建过程开始！');
    });
  }
}
```

## 生命周期

关于整个编译生命周期钩子，有如下：

- entry-option ：初始化 option
- run
- compile： 真正开始的编译，在创建 compilation 对象之前
- compilation ：生成好了 compilation 对象
- make 从 entry 开始递归分析依赖，准备对每个模块进行 build
- after-compile： 编译 build 过程结束
- emit ：在将内存中 assets 内容写到磁盘文件夹之前
- after-emit ：在将内存中 assets 内容写到磁盘文件夹之后
- done： 完成所有的编译过程
- failed： 编译失败的时候
