# arr to tree

```js
// 输入
let arr = [
    {id: 1, name: '部门1', pid: 0},
    {id: 2, name: '部门2', pid: 1},
    {id: 3, name: '部门3', pid: 1},
    {id: 4, name: '部门4', pid: 3},
    {id: 5, name: '部门5', pid: 4},
]

// 输出
[
    {
        "id": 1,
        "name": "部门1",
        "pid": 0,
        "children": [
            {
                "id": 2,
                "name": "部门2",
                "pid": 1,
                "children": []
            },
            {
                "id": 3,
                "name": "部门3",
                "pid": 1,
                "children": [
                    // 结果 ,,,
                ]
            }
        ]
    }
]

```

实现

```js
function buildTreeRecursive(node, pidToNodeMap) {
    const { id } = node;
    const children = pidToNodeMap[id] || [];

    node.children = children;

    for (let child of node.children) {
        buildTreeRecursive(child, pidToNodeMap);
    }
}

function arrToTree(arr) {
    const root = { id: 0, children: [] };

    // build pid to node map
    const pidToNodeMap = {};
    for (let node of arr) {
        if (pidToNodeMap[node.pid]) {
            pidToNodeMap[node.pid].push(node);
        } else {
            pidToNodeMap[node.pid] = [node];
        }
    }

    // recursive build
    buildTreeRecursive(root, pidToNodeMap);

    return root.children;
}

console.log(
    arrToTree([
        { id: 1, name: "部门1", pid: 0 },
        { id: 2, name: "部门2", pid: 1 },
        { id: 3, name: "部门3", pid: 1 },
        { id: 4, name: "部门4", pid: 3 },
        { id: 5, name: "部门5", pid: 4 },
    ])
);

```
