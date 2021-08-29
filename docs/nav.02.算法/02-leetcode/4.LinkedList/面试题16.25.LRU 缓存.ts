/**
 * 设计和构建一个“最近最少使用”缓存，该缓存会删除最近最少使用的项目。缓存应该从键映射到值(允许你插入和检索特定键对应的值)，并在初始化时指定最大容量。当缓存被填满时，它应该删除最近最少使用的项目。

它应该支持以下操作： 获取数据 get 和 写入数据 put 。

获取数据 get(key) - 如果密钥 (key) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1。
写入数据 put(key, value) - 如果密钥不存在，则写入其数据值。当缓存容量达到上限时，它应该在写入新数据之前删除最近最少使用的数据值，从而为新的数据值留出空间。

示例:

LRUCache cache = new LRUCache( 2  );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // 返回  1
cache.put(3, 3);    // 该操作会使得密钥 2 作废
cache.get(2);       // 返回 -1 (未找到)
cache.put(4, 4);    // 该操作会使得密钥 1 作废
cache.get(1);       // 返回 -1 (未找到)
cache.get(3);       // 返回  3
cache.get(4);       // 返回  4

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/lru-cache-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

class ListNode1 {
    key: number;
    val: number;
    next: ListNode1 | null;
    pre: ListNode1 | null;

    constructor(
        key?: number,
        val?: number,
        pre?: ListNode1 | null,
        next?: ListNode1 | null
    ) {
        this.key = key ?? key;
        this.val = val ?? val;
        this.next = next ?? next;
        this.pre = pre ?? pre;
    }
}

function moveToHead(dummyHead: ListNode1, target: ListNode1) {
    // move to head
    target.pre.next = target.next;
    target.next.pre = target.pre;

    target.next = dummyHead.next;
    target.next.pre = target;

    dummyHead.next = target;
    target.pre = dummyHead;
}

function addToHead(dummyHead: ListNode1, newNode: ListNode1) {
    newNode.next = dummyHead.next;
    dummyHead.next.pre = newNode;
    dummyHead.next = newNode;
    newNode.pre = dummyHead;
}

function removeFromList(removeNode: ListNode1) {
    removeNode.pre.next = removeNode.next;
    removeNode.next.pre = removeNode.pre;
}

class LRUCache {
    // 双向链表，携带 dummyHead + dummyTail
    listHead = new ListNode1(-1, -1);
    listTail = new ListNode1(-1, -1);
    nodeMap = new Map<number, ListNode1>();
    capacity;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.listHead.next = this.listTail;
        this.listTail.pre = this.listHead;
    }

    get(key: number): number {
        const targetNode = this.nodeMap.get(key);
        if (targetNode === undefined) {
            console.log("get", -1);
            return -1;
        } else {
            // moveToHead
            moveToHead(this.listHead, targetNode);
        }
        console.log("get", targetNode.val);
        return targetNode.val;
    }

    put(key: number, value: number): void {
        const previousNode = this.nodeMap.get(key);
        if (previousNode) {
            // refresh new val
            previousNode.val = value;
            this.nodeMap.set(key, previousNode);
            // move to head
            moveToHead(this.listHead, previousNode);
        } else {
            const newNode = new ListNode1(key, value);
            this.nodeMap.set(key, newNode);
            addToHead(this.listHead, newNode);

            // 判断是否超出容量
            if (this.nodeMap.size > this.capacity) {
                const removeNode = this.listTail.pre;
                removeFromList(removeNode);
                this.nodeMap.delete(removeNode.key);
            }
        }
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
const cache = new LRUCache(2 /* 缓存容量 */);

cache.put(1, 1);
cache.put(2, 2);
cache.get(1); // 返回  1
cache.put(3, 3); // 该操作会使得密钥 2 作废
cache.get(2); // 返回 -1 (未找到)
cache.put(4, 4); // 该操作会使得密钥 1 作废
cache.get(1); // 返回 -1 (未找到)
cache.get(3); // 返回  3
cache.get(4); // 返回  4
