# 常见 DOM 操作

- 创建节点
  - createElement
  - createTextNode
  - createDocumentFragment
  - createAttribute
- 获取节点
  - querySelector
  - querySelectorAll
  - getElementBy...

除此之外，每个DOM元素还有parentNode、childNodes、firstChild、lastChild、nextSibling、previousSibling属性，关系图如下图所示

![图 12](https://peterchen97.coding.net/p/img2/d/test/git/raw/master/31b88e3ab32c4967d1faffb1e9149a9f9464ad53b7866bf4d6c29d65ff955fc0.png)  

- 更新节点
  - innerHTML
  - innerText
  - textContent
- 添加节点
  - innerHTML
  - appendChild
  - insertBefore
  - setAttribute
- 删除节点
  - parentNode.removeChild
