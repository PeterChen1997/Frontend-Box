# WebSocket

- 是什么：
  - WebSocket是一种通讯手段，基于TCP协议
  - 默认端口也是80和443，协议标识符是ws（加密为wss）
  - 它实现了浏览器与服务器的全双工通信，扩展了浏览器与服务端的通信功能，使服务端也能主动向客户端发送数据，不受跨域的限制
- 有什么用：
  - WebSocket用来解决http不能持久连接的问题，因为可以双向通信所以可以用来实现聊天室，以及其他由服务端主动推送的功能
    - 例如 实时天气、股票报价、余票显示、消息通知等。

## 特点

- 全双工
- 二进制帧
- 协议名

-

## websocket 和 sever-sent event/EventSource 的区别

- WebSocket基于TCP协议，EventSource基于http协议
- EventSource是单向通信，而websocket是双向通信
- EventSource只能发送文本，而websocket支持发送二进制数据
- 在实现上EventSource比websocket更简单
- EventSource有自动重连接（不借助第三方）以及发送随机事件的能力
- websocket的资源占用过大EventSource更轻量
- websocket可以跨域，EventSource基于http跨域需要服务端设置请求头

### SSE

event 包含字段

- event： 事件类型，如果指定了该字段，则在客户端接收到该条消息时，会在当前的EventSource对象上触发一个事件，事件类型就是该字段的字段值，你可以使用addEventListener()方法在当前EventSource对象上监听任意类型的命名事件，如果该条消息没有event字段，则会触发onmessage属性上的事件处理函数
- data： 消息的数据字段，如果该条消息包含多个data字段,则客户端会用换行符把它们连接成一个字符串来作为字段值。
- id： 事件ID，会成为当前EventSource对象的内部属性"最后一个事件ID"的属性值。
- retry： 一个整数值，指定了重新连接的时间(单位为毫秒)，如果该字段值不是整数，则会被忽略

客户端

```js
// 实例化 EventSource 参数是服务端监听的路由
var source = new EventSource('/EventSource-test')

source.onopen = function (event) { // 与服务器连接成功回调
  console.log('成功与服务器连接')
}

// 监听从服务器发送来的所有没有指定事件类型的消息(没有event字段的消息)
source.onmessage = function (event) { // 监听未命名事件
  console.log('未命名事件', event.data)
}

source.onerror = function (error) { // 监听错误
  console.log('错误')
}

// 监听指定类型的事件（可以监听多个）
source.addEventListener("myEve", function (event) {
  console.log("myEve", event.data)
})

```

服务端

```js
const fs = require('fs')
const express = require('express') // npm install express
const app = express()

// 启动一个简易的本地server返回index.html
app.get('/', (req, res) => {
  fs.stat('./index.html', (err, stats) => {
    if (!err && stats.isFile()) {
      res.writeHead(200)
      fs.createReadStream('./index.html').pipe(res)
    } else {
      res.writeHead(404)
      res.end('404 Not Found')
    }
  })
})

// 监听EventSource-test路由服务端返回事件流
app.get('/EventSource-test', (ewq, res) => {
  // 根据 EventSource 规范设置报头
  res.writeHead(200, {
    "Content-Type": "text/event-stream", // 规定把报头设置为 text/event-stream
    "Cache-Control": "no-cache" // 设置不对页面进行缓存
  })
  // 用write返回事件流，事件流仅仅是一个简单的文本数据流，每条消息以一个空行(\n)作为分割。
  res.write(':注释' + '\n\n')  // 注释行
  res.write('data:' + '消息内容1' + '\n\n') // 未命名事件

  res.write(  // 命名事件
    'event: myEve' + '\n' +
    'data:' + '消息内容2' + '\n' +
    'retry:' + '2000' + '\n' +
    'id:' + '12345' + '\n\n'
  )

  setInterval(() => { // 定时事件
    res.write('data:' + '定时消息' + '\n\n')
  }, 2000)
})

// 监听 6788
app.listen(6788, () => {
  console.log(`server runing on port 6788 ...`)
})

```

### websocket

原生 api

- var ws = new WebSocket('ws://localhost:8080')
  - WebSocket 对象作为一个构造函数，用于新建 WebSocket 实例。
- ws.onopen = function(){}
  - 用于指定连接成功后的回调函数。
- ws.onclose = function(){}
  - 用于指定连接关闭后的回调函数
- ws.onmessage = function(){}
  - 用于指定收到服务器数据后的回调函数
- ws.send('data')
  - 实例对象的send()方法用于向服务器发送数据
- socket.onerror = function(){}
  - 用于指定报错时的回调函数

服务端实现

- socket.io
  - Socket.io是一个WebSocket库，包括了客户端的js和服务器端的nodejs
  - 它会自动根据浏览器从**WebSocket、AJAX长轮询、Iframe流**等各种方式中选择最佳的方式来实现网络实时应用（不支持WebSocket的情况会降级到AJAX轮询），非常方便和人性化，兼容性非常好，支持的浏览器最低达IE5.5
  - 屏蔽了细节差异和兼容性问题，实现了跨浏览器/跨设备进行双向数据通信
- WebSocket-Node
- ws
  - ws 是一个单纯的 websocket 模块，不提供向上兼容，不需要在客户端挂额外的js文件
  - 在客户端不需要使用二次封装的api使用浏览器的原生Websocket API即可通信
