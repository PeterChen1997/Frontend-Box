/**
 * 根据一棵树的中序遍历与后序遍历构造二叉树。

注意:
你可以假设树中没有重复的元素。

例如，给出

中序遍历 inorder = [9,3,15,20,7]
后序遍历 postorder = [9,15,7,20,3]
返回如下的二叉树：

    3
   / \
  9  20
    /  \
   15   7

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal
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

// 这题跟之前的还原题类似，主要需要根据递归重建树

const nodeIndexMap = new Map<number, number>();
function recursiveBuildTree(
    inorder: number[],
    iStart: number,
    iEnd: number,
    postorder: number[],
    pStart: number,
    pEnd: number
) {
    if (iStart > iEnd) {
        return null;
    }

    const node = new TreeNode(postorder[pEnd]);
    const inOrderIndex = nodeIndexMap.get(node.val);

    let leftTreeNodeCount = inOrderIndex - iStart;
    let rightTreeNodeCount = iEnd - inOrderIndex;

    node.left = recursiveBuildTree(
        inorder,
        iStart,
        inOrderIndex - 1,
        postorder,
        pStart,
        pStart + leftTreeNodeCount - 1
    );
    node.right = recursiveBuildTree(
        inorder,
        inOrderIndex + 1,
        iEnd,
        postorder,
        pEnd - rightTreeNodeCount,
        pEnd - 1
    );
    return node;
}

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    if (!inorder || !postorder || inorder.length !== postorder.length) {
        return null;
    }

    const len = inorder.length;
    for (let i = 0; i < len; i++) {
        nodeIndexMap.set(inorder[i], i);
    }

    return recursiveBuildTree(inorder, 0, len - 1, postorder, 0, len - 1);
}

console.log(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]));
