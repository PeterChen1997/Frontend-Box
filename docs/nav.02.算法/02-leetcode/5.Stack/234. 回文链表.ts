/**
 * 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。

 

示例 1：


输入：head = [1,2,2,1]
输出：true
示例 2：


输入：head = [1,2]
输出：false
 

提示：

链表中节点数目在范围[1, 105] 内
0 <= Node.val <= 9

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/palindrome-linked-list
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

function reverseLinkList(startNode: ListNode): ListNode {
    // 右左右右
    let temp = startNode;
    let next;
    let prev;
    while (temp) {
        next = temp.next;
        temp.next = prev;
        prev = temp;
        temp = next;
    }
    return prev;
}

// 这道题的难点在于，如何用 o1 的空间复杂度完成
// 这样的话只能利用原有链表，可以翻转后半部分，然后一一对比，再还原回去
function isPalindrome(head: ListNode | null): boolean {
    if (!head) {
        return false;
    }

    // 1. 获取链表中点
    let fasterPointer = head;
    let slowPointer = head;
    while (fasterPointer?.next?.next) {
        slowPointer = slowPointer.next;
        fasterPointer = fasterPointer.next?.next;
    }

    // 2. 翻转后半部分链表
    let newHead = reverseLinkList(slowPointer.next);

    // 3. compare
    let temp = head;
    let res = true;
    while (newHead) {
        if (newHead.val !== temp.val) {
            res = false;
            break;
        }
        newHead = newHead.next;
        temp = temp.next;
    }

    // 4. revert list back
    let originHead = reverseLinkList(newHead);
    slowPointer.next = originHead;

    return res;
}

console.log(
    isPalindrome(
        new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))))
    )
);
