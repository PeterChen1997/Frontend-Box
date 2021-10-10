# React 版本区别

## 17

- 主要为技术升级
- 支持新的 JSX 转换
- 支持多版本混用
- Breaking Change
  - 事件委托不在挂载到 document 上，改到容器上
  - 事件系统优化
    - onScroll 不再冒泡
    - onFocus、onBlur 直接采用原生系统
  - DOM 事件复用池被废弃
  - Effect Hook 异步执行清理操作，并保证顺序
  - 报错信息调用栈优化

## 16

- render 支持返回数组和字符串
- 支持 Error boundaries
- createPortal
- 支持自定义 DOM 属性
- 支持 Fiber（将同步更新碎片化，避免主线程的长时间阻塞）
- 支持 Fragment
- 支持 memo、lazy、suspense 等
- 支持 hooks（16.7）
