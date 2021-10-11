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

### memorize

```js
const memoize = function (func, content) {
  let cache = Object.create(null)
  content = content || this
  return (...key) => {
    if (!cache[key]) {
      cache[key] = func.apply(content, key)
    }
    return cache[key]
  }
}
```

## flatten

```js
function flatten(arr) {
    const res = []

    for (let i of arr) {
        if (Array.isArray(i)) {
            res.push(...flatten(i))
        } else {
            res.push(i)
        }
    }

    return res
}

console.log(flatten([1, [2, [3]]]))
```

## new

```js
function fakeNew() {
    // 创建空对象
    const obj = new Object()

    // 改 原型 指向
    const Constructor = Array.prototype.shift.call(arguments)
    obj.__proto__ = Constructor.prototype

    // 执行构造函数
    let res = Constructor.apply(obj, arguments)

    return typeof res === 'object' ? res : obj
}

class Person {}
console.log(fakeNew(Person, 123))
```

## instanceof

```js
function fakeInstanceOf(leftInstance, rightInstance) {
    let leftProto = leftInstance.__proto__
    let rightProto = rightInstance.prototype

    while (true) {
        // 找得到
        if (leftProto === rightProto) {
            return true
        }
        // 找不到
        if (leftProto === null) {
            return false
        }

        leftProto = leftProto.__proto__
    }
}


console.log(fakeInstanceOf(new String('123'), String))
```

## reduce

```js

function reduce(input, func, ...init) {
    const useInitVal = init.length
    // 获取起始元素
    let next = useInitVal ? init[0] : input[0]

    for (let i = useInitVal ? 0 : 1; i < input.length; i++) {
        next = func(next, input[i])
    }

    return next
}


// => 55
const a = reduce([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (x, y) => x + y);

// => 155
const b = reduce([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (x, y) => x + y, 100);

// => NaN
const c = reduce([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (x, y) => x + y, undefined);

console.log(a, b, c);
```

## sleep

```js
const sleep = 
    seconds => new Promise((resolve) => setTimeout(resolve(), seconds))
```

## trim

```js
function trim(str) {
    return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
}
```
