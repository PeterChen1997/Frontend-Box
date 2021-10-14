# Person

```js
class Person {
    list = [];

    constructor(str) {
        this.list.push(this.wrapPromise(str));
    }

    wrapPromise(str, timeout = 0) {
        return () =>
            new Promise((resolve) => setTimeout(() => resolve(str), timeout));
    }

    async execute() {
        for (let promiseItem of this.list) {
            const res = await promiseItem();
            if (res) console.log(res);
        }
    }

    do(str) {
        this.list.push(this.wrapPromise(str));
        return this;
    }

    wait(timeout) {
        this.list.push(this.wrapPromise("", timeout));
        return this;
    }

    waitFirst(timeout) {
        this.list.unshift(this.wrapPromise("", timeout));
        return this;
    }
}

function person(str) {
    return new Person(str);
}

person("abc").execute();
// 打印'abc'
person("abc")
    .do("df")
    .execute();
// 打印'abc'
// 打印'df'
person("abc")
    .wait(2000)
    .do("df")
    .execute();
// 打印'abc'
// 等2秒
// 打印'df'
person("abc")
    .wait(2000)
    .do("df")
    .wait(1000)
    .do("gh")
    .waitFirst(3000)
    .execute();
// 等3秒
// 打印'abc'
// 等2秒
// 打印'df'
// 等1秒
// 打印'gh'

```
