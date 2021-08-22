/**
 * 给定一个单链表 L 的头节点 head ，单链表 L 表示为：

 L0 → L1 → … → Ln-1 → Ln 
请将其重新排列后变为：

L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → …

不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

 

示例 1:



输入: head = [1,2,3,4]
输出: [1,4,2,3]
示例 2:



输入: head = [1,2,3,4,5]
输出: [1,5,2,4,3]
 

提示：

链表的长度范围为 [1, 5 * 104]
1 <= node.val <= 1000

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reorder-list
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

/**
 Do not return anything, modify head in-place instead.
 */

function reverseLinkList(start: ListNode): ListNode {
    let next: ListNode;
    let head: ListNode;

    // 右左右右
    while (start) {
        next = start.next;
        start.next = head;
        head = start;
        start = next;
    }

    return head;
}

function mergeLinkList(pointerOne: ListNode, pointerTwo: ListNode) {
    let p1 = pointerOne;
    let p2 = p1?.next;
    let p3 = pointerTwo;
    let p4 = p3?.next;

    while (p1 && p3) {
        p1.next = p3;
        p3.next = p2;

        p1 = p2;
        p2 = p2?.next;
        p3 = p4;
        p4 = p4?.next;
    }
}

function reorderList(head: ListNode | null): void {
    if (!head) {
        return;
    }

    // 找到链表中点
    let fastPointer = head;
    let slowPointer = head;
    while (fastPointer.next && fastPointer.next?.next) {
        fastPointer = fastPointer.next.next;
        slowPointer = slowPointer.next;
    }

    let slowNextPointer = slowPointer.next;
    slowPointer.next = null;

    // 反转后半部分链表
    const head2 = reverseLinkList(slowNextPointer);

    // 合并两个链表
    mergeLinkList(head, head2);

    return;
}
