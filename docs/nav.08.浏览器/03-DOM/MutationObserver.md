# MutationObserver

MutationObserver接口提供了监视对DOM树所做更改的能力。它被设计为旧的Mutation Events功能的替代品，该功能是DOM3 Events规范的一部分。

提供方法

- disconnect: 阻止实例接受通知，直到再次调用 observe
- observe: 回调函数接收通知
- takeRecords: 删除通知队列中的所有待处理通知，并将他们返回 MutationRecord 对象的新 Array 中

## 使用

```js
// 选择需要观察变动的节点
const targetNode = document.getElementById('some-id');

// 观察器的配置（需要观察什么变动）
const config = { attributes: true, childList: true, subtree: true };

// 当观察到变动时执行的回调函数
const callback = function(mutationsList, observer) {
    // Use traditional 'for loops' for IE 11
    for(let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            console.log('A child node has been added or removed.');
        }
        else if (mutation.type === 'attributes') {
            console.log('The ' + mutation.attributeName + ' attribute was modified.');
        }
    }
};

// 创建一个观察器实例并传入回调函数
const observer = new MutationObserver(callback);

// 以上述配置开始观察目标节点
observer.observe(targetNode, config);

// 之后，可停止观察
observer.disconnect();
```

### config

config 是一个具有布尔选项的对象，该布尔选项表示“将对哪些更改做出反应”：

- childList —— node 的直接子节点的更改，
- subtree —— node 的所有后代的更改，
- attributes —— node 的特性（attribute），
- attributeFilter —— 特性名称数组，只观察选定的特性。
- characterData —— 是否观察 node.data（文本内容）

### mutation record

MutationRecord 对象具有以下属性：

type —— 变动类型，以下类型之一：

- "attributes"：特性被修改了，
- "characterData"：数据被修改了，用于文本节点，
- "childList"：添加/删除了子元素。
- target —— 更改发生在何处："attributes" 所在的元素，或 "characterData" 所在的文本节点，或 "childList" 变动所在的元素，
- addedNodes/removedNodes —— 添加/删除的节点，
- previousSibling/nextSibling —— 添加/删除的节点的上一个/下一个兄弟节点，
- attributeName/attributeNamespace —— 被更改的特性的名称/命名空间（用于 XML），
- oldValue —— 之前的值，仅适用于特性或文本更改，如果设置了相应选项 attributeOldValue/characterDataOldValue。

## rrweb

- 在 processMutation 中对各个类型的 type 都进行了处理
  - characterData
  - attributes
  - childList
    - addedNodes
    - removedNodes
