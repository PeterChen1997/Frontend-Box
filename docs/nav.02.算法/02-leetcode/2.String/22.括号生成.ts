/**
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

有效括号组合需满足：左括号必须以正确的顺序闭合。

 

示例 1：

输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]
示例 2：

输入：n = 1
输出：["()"]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/generate-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

function generateRecursive(
    left: number,
    right: number,
    s: string,
    res: string[]
) {
    if (left === 0 && right === 0) {
        res.push(s);
        return;
    }

    if (right > left) {
        right--;
        generateRecursive(left, right, s + ")", res);
        right++;
    }

    if (left > 0) {
        generateRecursive(left - 1, right, s + "(", res);
    }
}

function generateParenthesis(n: number): string[] {
    if (n <= 0) {
        return [];
    }

    const res: string[] = [];

    generateRecursive(n, n, "", res);

    return res;
}

console.log(generateParenthesis(3));
