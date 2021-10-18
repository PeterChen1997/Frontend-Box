# tree-shaking

tree shaking 就是通常用于描述移除 JavaScript 上下文中的未引用代码(dead-code)。它依赖于 ES2015 模块语法的 静态结构 特性，例如 import 和 export

- esm: 静态引入
- cjs：动态引入

## 实现方案

在webpack实现Trss shaking有两种不同的方案：

- usedExports：通过标记某些函数是否被使用，之后通过Terser来进行优化的
- sideEffects：跳过整个模块/文件，直接查看该文件是否有副作用

## ESM

特性

- import 只能作为模块顶层的语句出现
- import 的模块名只能是字符串常量
- import binding 是 immutable 的

由于上述特性，ESM 支持静态分析

但是并不是所有的 esm 都支持 tree_shaking，比如

```js
import 'utils/refresh'
```

这类带副作用的模块，对于这种模块可以这样处理：

在 sideEffects 中通过数组声明，使其在 Tree Shaking 的范围之外
模块改造，暴露成员支持显式调用

### sideEffects

上面提到的所有代码都不包含副作用，因此我们可以标记该属性 false 以通知 webpack 它可以安全地修剪未使用的导出

## CJS

CMJ 中的 require，只有执行以后才知道引用的是什么模块

## 其他

- css tree-shaking
  - PurgeCss plugin
