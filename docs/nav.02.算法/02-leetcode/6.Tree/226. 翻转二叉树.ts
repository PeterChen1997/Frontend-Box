/**
 * 翻转一棵二叉树。

示例：

输入：

     4
   /   \
  2     7
 / \   / \
1   3 6   9
输出：

     4
   /   \
  7     2
 / \   / \
9   6 3   1

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/invert-binary-tree
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

function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) {
        return null;
    }

    const nodeList = [root];

    while (nodeList.length) {
        let rootNode = nodeList.shift();

        let temp = rootNode.left;
        rootNode.left = rootNode.right;
        rootNode.right = temp;

        if (rootNode.left) {
            nodeList.push(rootNode.left);
        }
        if (rootNode.right) {
            nodeList.push(rootNode.right);
        }
    }

    return root;
}
