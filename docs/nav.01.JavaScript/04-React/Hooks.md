# Hooks

## What

hooks 要解决的是状态逻辑复用问题，是继 render-props 和 higher-order components 之后的第三种状态共享方案，不会产生 JSX 嵌套地狱问题

RenderProps 代码

```js
function App() {
  return (
    <Toggle initial={false}>
      {({ on, toggle }) => (
        <Button type="primary" onClick={toggle}> Open Modal </Button>
        <Modal visible={on} onOk={toggle} onCancel={toggle} />
      )}
    </Toggle>
  )
}
```

Hooks

```js
function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      <Modal
        visible={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      />
    </>
  );
}
```

## Why

其特性如下：

- 多个状态不会产生嵌套，依然是平铺写法；
- Hooks 可以引用其他 Hooks；
- 更容易将组件的 UI 与状态分离；

### 为什么不支持嵌套

Hooks 并不是通过 Proxy 或者 getters 实现，而是通过数组实现，每次 useState 都会改变下标，如果 useState 被包裹在 condition 中，那每次执行的下标就可能对不上，导致 useState 导出的 setter 更新错数据

## 特点

- Hooks 方便的地方是在组件销毁时移除副作用，所以我们可以安心的利用 Hooks 做一些副作用

## 模拟生命周期

### componentDidMount

```js
useMount(() => {})

// =
useEffect(() => {}, [])
```

### componentWillUnmount

```js
useUnmount(() => {})

useEffect(() => fn, [])
```

### componentDidUpdate

```js
useUpdate(() => {})

// 实现
const mounting = useRef(true)
useEffect(() => {
    if (mounting.current) {
        mounting.current = false
    } else {
        fn()
    }
})

```

### Force Update

```js
const useState = () => useState(0)[1]
```

### isMounted

```js
useIsMounted()

// 实现
const [isMount, setIsMount] = useState(false)
useEffect(() => {
    if (!isMount) {
        setIsMount(true)
    }
    return () => setIsMount(false)
}, [])
return isMount
```

## 实现原理

- 通过封装私有变量和 render 调用实现 useState
- 通过确认依赖变化和 render 调用实现 useEffect

为了解决私有的 _state 和_deps 的复用，React 使用单链表（可简化理解为数组）并将其存储在 Fiber Node 中，来解决了 Hooks 的复用问题

这个服用的链表可称为 memorizedState

- memoizedState 数组是按 hook定义的顺序来放置数据的，如果 hook 顺序变化，memoizedState 并不会感知到
- 通过共享同一个 memoizedState，共享同一个顺序，来实现函数组件的影响
