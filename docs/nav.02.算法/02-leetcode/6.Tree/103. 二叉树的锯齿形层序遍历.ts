/**
 * 给定一个二叉树，返回其节点值的锯齿形层序遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。

例如：
给定二叉树 [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回锯齿形层序遍历如下：

[
  [3],
  [20,9],
  [15,7]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

function zigzagLevelOrder(root: TreeNode | null): number[][] {
    if (!root) {
        return [];
    }

    const res = [];
    let temp = [root];
    let direction = 1;
    while (temp.length) {
        const curTemp = [...temp];
        const curRes = [];
        temp = [];

        for (let i = 0; i < curTemp.length; i++) {
            curRes.push(curTemp[i].val);

            curTemp[i].left && temp.push(curTemp[i].left);
            curTemp[i].right && temp.push(curTemp[i].right);
        }

        res.push(direction === 1 ? curRes : curRes.reverse());
        direction *= -1;
    }

    return res;
}

console.log(
    zigzagLevelOrder(new TreeNode(1, new TreeNode(2), new TreeNode(3)))
);
