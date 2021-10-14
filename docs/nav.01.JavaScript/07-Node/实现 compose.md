# 实现 compose

```js
// 题目需求
let middleware = []
middleware.push((next) => {
    console.log(1)
    setTimeout(next, 0);
    // next()
    console.log(1.1)
})
middleware.push((next) => {
    console.log(2)
    next()
    console.log(2.1)
})
middleware.push((next) => {
    console.log(3)
    next()
    console.log(3.1)
})

let fn = compose(middleware)
fn()

// 1
// 2
// 3
// 3.1
// 2.1
// 1.1
// 实现compose函数

function compose(middleware) {
    return function () {
        let index = -1

        function dispatch(i) {
            // 到达洋葱内部
            if (i === middleware.length) {
                return Promise.resolve()
            }

            // 获取执行中间件
            let fn = middleware[i]

            // 返回调用句柄
            return Promise.resolve(
                fn(dispatch.bind(null, i + 1)));
        }

        return dispatch(0)
    }
}

```
