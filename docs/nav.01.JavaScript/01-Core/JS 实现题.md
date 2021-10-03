# JS 实现题

## 函数式编程

### curry

demo

```js
const greet = curry((msg, name) => {
  console.log(`${msg}`, name)
});

const welcomeGreet = greet("Welcome")
const byeGreet = greet("Bye bye")

welcomeGreet("Pablo (sairov)")
welcomeGreet("Ale zapata")

byeGreet("Fernando")
byeGreet("Juan Sonido")
```

实现

```js
// curry 需要保留 arg 入口
const curry = (f, arg = []) => 
    // return func
    (...args) => (
        a => 
            a.length === f.length
                ? f(...a)
                : curry(f, a) // 参数不够时递归
    )([...arg, ...args]) // 将之前的参数保留
```

### compose

demo

```js
var greeting = (firstName, lastName) => 'hello, ' + firstName + ' ' + lastName
var toUpper = str => str.toUpperCase()
var fn = compose(toUpper, greeting)
console.log(fn('jack', 'smith'))
// ‘HELLO，JACK SMITH’
```

实现：

```js
const compose = (...args) => 
    params => 
        args.reverse().reduce((pre, next) => next(pre), params)
```
