# RegExp

<!-- TOC -->

- [RegExp](#regexp)
  - [正则表达式中特殊字符的含义](#正则表达式中特殊字符的含义)
  - [原生方法](#原生方法)
    - [RegExp.prototype.exec(str)](#regexpprototypeexecstr)
    - [RegExp.prototype.test(str)](#regexpprototypeteststr)
    - [RegExp.prototype.toString()](#regexpprototypetostring)
    - [String.prototype.match(regex)](#stringprototypematchregex)
    - [String.prototype.replace(regex, replacedWith)](#stringprototypereplaceregex-replacedwith)
    - [String.prototype.search(regex)](#stringprototypesearchregex)
    - [例题](#例题)
    - [我的解答](#我的解答)

<!-- /TOC -->

正则表达式是一种用来匹配字符串的强有力的武器

## 正则表达式中特殊字符的含义

| 字符   | 含义                                                                |
| ------ | ------------------------------------------------------------------- |
| .      | 匹配单个字符，行结束符除外                                          |
| \d     | 等价于[0-9]                                                         |
| \D     | 匹配任意一个不是阿拉伯数字的字符                                    |
| \w     | 等价于[A-Za-z_0-9]                                                  |
| \W     | 匹配不是...                                                         |
| \s     | 匹配一个空白符，包括空格、制表符、换页符、换行符和其他 Unicode 空格 |
| \t     | 匹配一个tab                                                         |
| \r     | 匹配一个回车                                                        |
| \n     | 匹配一个换行                                                        |
| \      | 匹配下一个字符                                                      |
| [^0-9] | 匹配任意不在括号内的字符                                            |
| \b     | 匹配一个单词边界，如一个字母与一个空格之间                          |
| (x)    | 匹配 x 并且捕获匹配项                                               |
| x?     | 匹配 x 0或1次                                                       |
| x?     | 匹配 x 0或1次                                                       |
| x(?=y) | 只有当 x 后面紧跟着 y 时，才匹配 x                                  |
| x(?!y) | 只有当 x 后面不是紧跟着 y 时，才匹配 x                              |

## 原生方法

### RegExp.prototype.exec(str)

在一个指定字符串中执行一个搜索匹配,返回一个结果数组或 null

### RegExp.prototype.test(str)

方法执行一个检索，用来查看正则表达式与指定的字符串是否匹配。返回 true 或 false

### RegExp.prototype.toString()

```js
let regex = new RegExp('a+b+c', 'g')
console.log(regex.toString()) // /a+b+c/g
```

### String.prototype.match(regex)

同regex.exec，返回数组

### String.prototype.replace(regex, replacedWith)

```js
'abc'.replace(/a/, 'A');
```

### String.prototype.search(regex)

-1表示未搜索到，0表示搜索到，同regex.test

---

### 例题

```js
/* 将
    <a href="{href}">{text}</a>
根据
    {href: '//www.taobao.com', text: '淘宝网'}
填充为对应的a标签
*/


// your code here

```

### 我的解答

```js
let regex = /{(\w+)\}/g
let source = {href: '//www.taobao.com', text: '淘宝网'}
let str = '<a href="{href}">{text}</a>'

console.log(str.replace(regex, function (holeWord, word) {
  return source[word]
}))
```
