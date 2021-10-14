/**
 * k 是一个正整数，它的值小于或等于链表的长度。
如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。

示例：

给你这个链表：1->2->3->4->5
当 k = 2 时，应当返回: 2->1->4->3->5
当 k = 3 时，应当返回: 3->2->1->4->5

命题关键字：链表、链表的翻转、复杂数据处理
 */

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function getLinklistLen(node: ListNode) {
    let counter = 0;
    while (node) {
        counter++;
        node = node.next;
    }
    return counter;
}

function swap(head: ListNode, k: number, offset: number) {
    if (offset === 0) {
        let tail = head;
        let temp = head;
        let prev = null;
        let next = null;
        while (temp && k > 0) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;

            k--;
        }

        tail.next = temp;

        return prev;
    } else {
        let temp = head;
        let prev = null;

        while (offset !== 0) {
            prev = temp;
            temp = temp.next;
            offset--;
        }

        let newHead = swap(temp, k, 0);
        prev.next = newHead;

        return head;
    }
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    if (!head || k <= 1) {
        return head;
    }

    const len = getLinklistLen(head);

    let tempLen = len;
    while (tempLen - k >= 0) {
        head = swap(head, k, len - tempLen);
        tempLen -= k;
    }

    return head;
}

console.log(
    reverseKGroup(
        new ListNode(
            1,
            new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
        ),
        2
    )
);
