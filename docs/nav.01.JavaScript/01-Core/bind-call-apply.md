# bind-call-apply的区别

## this

- this 永远指向的是最后调用它的对象
- new 过程遇到 return 一个对象，此时 this 指向为返回的对象
- 如果返回一个简单类型的时候，则this指向实例对象

## bind

bind()最常用的方法是创建一个函数，使函数调用时拥有相同的this值

> fun.bind(thisArg[, arg1[, arg2[, ...]]])

```js
this.x = 1
const module1 = {
  x: 2,
  getX: function() {
    return this.x
  }
}

console.log(module1.getX()) // 2

let getValue = module1.getX
console.log(getValue()) // 1

let getTrueValue = module1.getX.bind(module1)
console.log(getTrueValue()) // 2
```

### bind函数的兼容性写法

```js
Function.prototype.bind = Function.prototype.bind || function(context){
    var self = this;

    return function(){
        return self.apply(context, arguments);
    };
}
```

## call

call()方法调用函数，其具有指定的this和 **分别提供的** 参数

> fun.call(thisArg, arg1, arg2...)

实现方法

```js
function call() {
  arguments[0].fn = this
  arguments[0].fn(...Array.from(arguments).slice(1))
}
```

## apply

apply()方法接收的是 **一个包含多个参数的** 数组

> fun.apply(thisArg[, argsArray])

polyfill

```js
function apply() {
  arguments[0].fn = this
  arguments[0].fn(...arguments[1])
}
```

demo

```js
/* min/max number in an array */
var numbers = [5, 6, 2, 3, 7];

/* using Math.min/Math.max apply */
var max = Math.max.apply(null, numbers); /* This about equal to Math.max(numbers[0], ...) or Math.max(5, 6, ..) */
var min = Math.min.apply(null, numbers);

/* vs. simple loop based algorithm */
max = -Infinity, min = +Infinity;

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > max)
    max = numbers[i];
  if (numbers[i] < min)
    min = numbers[i];
}
```

---

### 如果call和apply的第一个参数写的是null，那么this指向的是window对象

### call和apply的不同在于，call除this外接收多个参数，apply除this外接收一个参数数组

### bind与apply,call不同，实际上bind()方法返回的是一个修改后的函数，而apply()与call()返回的是修改指向后的函数执行结果
