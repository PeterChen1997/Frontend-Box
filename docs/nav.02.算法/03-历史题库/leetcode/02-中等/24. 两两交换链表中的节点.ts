/**
 * 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。

 

示例 1：


输入：head = [1,2,3,4]
输出：[2,1,4,3]
示例 2：

输入：head = []
输出：[]
示例 3：

输入：head = [1]
输出：[1]
 

提示：

链表中节点的数目在范围 [0, 100] 内
0 <= Node.val <= 100

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/swap-nodes-in-pairs
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

function swap(
    prePointer: ListNode | null,
    pointerOne: ListNode | null,
    pointerTwo: ListNode | null,
    pointerThree: ListNode | null
) {
    // 调换顺序
    pointerTwo.next = pointerOne;
    pointerOne.next = pointerThree;

    // 保留上一次结尾的指针
    if (prePointer) {
        prePointer.next = pointerTwo;
    }

    // 移动 pointer
    const newPointerOne = pointerThree;
    const newPointerTwo = pointerThree?.next;
    const newPointerThree = newPointerTwo?.next;

    return [pointerOne, newPointerOne, newPointerTwo, newPointerThree];
}

function swapPairs(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return head;
    }

    const resultHead = head.next;
    let pointerOne = head;
    let pointerTwo = head?.next;
    let pointerThree = head?.next?.next;
    let prePointer = null;

    while (pointerOne && pointerTwo) {
        [prePointer, pointerOne, pointerTwo, pointerThree] = swap(
            prePointer,
            pointerOne,
            pointerTwo,
            pointerThree
        );
    }

    return resultHead;
}
