# Proxy

## polyfill

- 仅支持
  - get
  - set
  - apply
  - construct

### 实现

```js
function createProxy(internal) {
    var target = internal[PROXY_TARGET];
    var proxy;
    if (typeof target === 'function') {
        proxy = proxyFunction(internal);
    } else if (target instanceof Array) {
        proxy = proxyArray(internal);
    } else {
        proxy = proxyObject(internal);
    }
    return proxy;
}
```

- function
  - defineProperties
- array
  - length.set
- else
  - 递归 defineProperties
