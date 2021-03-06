/**
给定一棵树的前序遍历 preorder 与中序遍历  inorder。请构造二叉树并返回其根节点。

 

示例 1:


Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]
示例 2:

Input: preorder = [-1], inorder = [-1]
Output: [-1]
 

提示:

1 <= preorder.length <= 3000
inorder.length == preorder.length
-3000 <= preorder[i], inorder[i] <= 3000
preorder 和 inorder 均无重复元素
inorder 均出现在 preorder
preorder 保证为二叉树的前序遍历序列
inorder 保证为二叉树的中序遍历序列

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal
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

// 建立一个中序遍历数组中的 val - node map
const nodeMap = new Map<number, number>();

function recursiveBuildTree(
    preOrderArr: number[],
    preOrderStart: number,
    preOrderEnd: number,
    inOrderArr: number[],
    inOrderStart: number,
    inOrderEnd: number
) {
    if (preOrderStart > preOrderEnd || inOrderStart > inOrderEnd) {
        return null;
    }

    let rootVal = preOrderArr[preOrderStart];
    let nodeInOrderPos = nodeMap.get(rootVal);

    let leftTreeNodeCount = nodeInOrderPos - inOrderStart;
    let rightTreeNodeCount = inOrderEnd - nodeInOrderPos;

    let root = new TreeNode(rootVal);
    root.left = recursiveBuildTree(
        preOrderArr,
        preOrderStart + 1,
        preOrderStart + leftTreeNodeCount,
        inOrderArr,
        inOrderStart,
        nodeInOrderPos - 1
    );
    root.right = recursiveBuildTree(
        preOrderArr,
        preOrderStart + 1 + leftTreeNodeCount,
        preOrderEnd,
        inOrderArr,
        nodeInOrderPos + 1,
        nodeInOrderPos + rightTreeNodeCount
    );
    return root;
}

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    let len = inorder.length;

    // build map
    for (let i = 0; i < len; i++) {
        nodeMap.set(inorder[i], i);
    }

    // 通过递归构建 tree
    return recursiveBuildTree(preorder, 0, len - 1, inorder, 0, len - 1);
}

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
