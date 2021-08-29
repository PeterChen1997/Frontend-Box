/**
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

 

示例 1：


输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.
示例 2：

输入：l1 = [0], l2 = [0]
输出：[0]
示例 3：

输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
输出：[8,9,9,9,0,0,0,1]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/add-two-numbers
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

function addTwoNumbers(
    l1: ListNode | null,
    l2: ListNode | null
): ListNode | null {
    if (!l1 || !l2) {
        return null;
    }

    let dummyHead = new ListNode(-1);
    let curry = 0;
    let headOne = l1;
    let headTwo = l2;
    let headTemp = dummyHead;
    while (headOne || headTwo) {
        let val1 = headOne?.val ?? 0;
        let val2 = headTwo?.val ?? 0;

        let res = val1 + val2 + curry;
        curry = Math.floor(res / 10);
        res = res % 10;

        headTemp.next = new ListNode(res);
        headTemp = headTemp.next;

        headOne = headOne?.next;
        headTwo = headTwo?.next;
    }

    if (curry) {
        headTemp.next = new ListNode(curry);
    }

    return dummyHead.next;
}
