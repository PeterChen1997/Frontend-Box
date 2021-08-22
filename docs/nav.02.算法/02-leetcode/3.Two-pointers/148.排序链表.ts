/**
 * 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。

进阶：

你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？
 

示例 1：


输入：head = [4,2,1,3]
输出：[1,2,3,4]
示例 2：


输入：head = [-1,5,3,4,0]
输出：[-1,0,3,4,5]
示例 3：

输入：head = []
输出：[]
 

提示：

链表中节点的数目在范围 [0, 5 * 104] 内
-105 <= Node.val <= 105

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/sort-list
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
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

// 这题主要是想考察，自底向上的归并排序
// 最优解：时间 nlogn，空间 1

function getLen(head: ListNode) {
    let len = 0;
    while (head) {
        len++;
        head = head.next;
    }
    return len;
}

function split(head: ListNode, step: number) {
    if (!head) {
        return null;
    }

    let temp = head;

    // 找到第二部分的前一个节点
    for (let i = 1; i < step && temp.next; i++) {
        temp = temp.next;
    }

    // 找到第二部分的 head
    let restPartHead = temp.next;
    // 断开连接
    temp.next = null;

    return restPartHead;
}

function merge(head1: ListNode, head2: ListNode) {
    let tempHead = new ListNode(-1);
    let pointer = tempHead;

    while (head1 && head2) {
        if (head1.val < head2.val) {
            pointer.next = head1;
            head1 = head1.next;
        } else {
            pointer.next = head2;
            head2 = head2.next;
        }
        pointer = pointer.next;
    }

    if (head1) {
        pointer.next = head1;
    }
    if (head2) {
        pointer.next = head2;
    }

    return tempHead.next;
}

function sortList(head: ListNode | null): ListNode | null {
    if (!head) {
        return null;
    }

    const len = getLen(head);

    const tempHead = new ListNode(-1);
    tempHead.next = head;

    // 依次迭代不同步长下的列表
    for (let step = 1; step < len; step *= 2) {
        let pre = tempHead;
        let cur = tempHead.next;

        while (cur) {
            // 第一部分的 step 个节点 head
            let head1 = cur;
            // 第二部分的 step 个节点 head
            let head2 = split(head1, step);

            // 剩余部分的节点 head
            cur = split(head2, step);

            // 接上排序后的元素
            let temp = merge(head1, head2);
            pre.next = temp;

            // 移动 pre 到最后一个排序好的节点上
            while (pre.next) {
                pre = pre.next;
            }
        }
    }

    return tempHead.next;
}

console.log(
    sortList(new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(3)))))
);
