# sentry

## 前端错误分类

- 运行错误 onerror
- 资源加载错误 dom.onerror
- 图片加载出错 performance.getEntries()

## sentry 做了什么

- 重写 onerror
  - 统一浏览器差异
- 监听 onerror
- 包装计时器，处理内部错误
  - 通过 try-catch
- 包装其他 api
  - requestAnimationFrame
  - wrap...
- 处理 promise 问题
  - unhandledrejection
- 发布订阅接口改造
  - 相关 API
    - XMLHttpRequest
    - WebSocket
    - ...
  - 进行回调函数 wrap
- 对报错进行处理
  - 转换为字符串
  - 进行堆栈跟踪
    - TraceKit

  -
