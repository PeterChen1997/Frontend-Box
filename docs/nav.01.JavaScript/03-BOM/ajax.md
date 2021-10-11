# Ajax

async javascript and xml

## 原生实现

1. 创建 XMLHttpRequest 对象
2. 设置响应 HTTP 请求状态变化的函数
3. 创建一个新的 HTTP 请求,并指定该 HTTP 请求的方法、URL及验证信息，发送 HTTP 请求
4. 在响应 HTTP 请求状态变化的函数里，获取异步调用返回的数据
5. 最后，使用 JavaScript 实现 DOM 局部刷新

```js
const xmlHTTP = new XMLHttpRequest()

xmlHTTP.onreadystatechange = function() {
    if (xmlHTTP.readyState === 4) {
        if (xmlHTTP.status === 200) {
            console.log(xmlHTTP.responseText)
        } else if (xmlHTTP.status === 400) {
            alert('error')
        } else {
            alert('else')
        }
    }
}

xmlHTTP.open('GET', '/', true)
xmlHTTP.send()
```

## readyState

- 0：未初始化。尚未调用open()方法
- 1：启动。已经调用open()方法，尚未调用send()方法
- 2：发送。已经调用send()方法，尚未接收到响应
- 3：接收。已经接收部分响应数据。
- 4：完成。已经接收到全部响应数据，而且已经可以在客户端使用了。【一般只需检查这个阶段】

## open

```js
xhr.open(method, url, [async][, user][, password])
```

参数说明：

- method：表示当前的请求方式，常见的有GET、POST
- url：服务端地址
- async：布尔值，表示是否异步执行操作，默认为true
- user: 可选的用户名用于认证用途；默认为`null
- password: 可选的密码用于认证用途，默认为`null

## send

```js
xhr.send([body])
```

body: 在 XHR 请求中要发送的数据体，如果不传递数据则为 null

如果使用GET请求发送数据的时候，需要注意如下：

- 将请求数据添加到open()方法中的url地址中
- 发送请求数据中的send()方法中参数设置为null
