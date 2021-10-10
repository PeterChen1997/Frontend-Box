# vue3 变化

- Proxy
- 重写 VDOM
- 模板编译优化
- SSR 速度提升
- 支持 CompositionAPI
- 更好的 TS 支持
- Teleport

## 性能提升

- diff 算法优化
  - 增加静态标记，避免无效 diff
- 静态提升
  - 静态节点避免重复创建
- 事件监听缓存
  - 避免监听函数重复创建
- SSR 优化

## proxy 替代 defineProperty

替换后带来的提升

- 支持数据相关操作的监听
  - 新增
  - 删除
  - 修改
- 提升性能
  - 懒监听，子属性被读取时才进行 proxy 代理

## compositionAPI 和 optionsAPI

- 复用能力更强了
- 类型推断更方便了
- 对 tree-shaking 友好，代码容易压缩

## tree-shaking

- 减小程序体积
- 减小执行时间
