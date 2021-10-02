# xss

## 类型

- 存储型。提交入 mysql，导致 html 中的逻辑异常
- 反射型。构建特殊 url，导致服务端拼接特殊值后返回
- DOM。html 中的异常 js 执行导致的工具

## 如何防范

- 提交时
- 执行时
  - 设置 csp (建立白名单)
  - cookie 使用 http-only

## csrf

第三方站点冒充用户发送请求

### 类型

- get。 img 点击后发送请求
- post。构件表单并隐藏，点击时自动提交
- 链接型。a 标签点击后发送请求

### 防护

- 同源检测。查看 refer
- 使用 csrf token
- 双重 cookie。url 中携带另外的 cookie
- cookie 设置 samesite
