/**
 * 给出一个字符串 s（仅含有小写英文字母和括号）。

请你按照从括号内到外的顺序，逐层反转每对匹配括号中的字符串，并返回最终的结果。

注意，您的结果中 不应 包含任何括号。

 

示例 1：

输入：s = "(abcd)"
输出："dcba"
示例 2：

输入：s = "(u(love)i)"
输出："iloveu"
解释：先反转子字符串 "love" ，然后反转整个字符串。
示例 3：

输入：s = "(ed(et(oc))el)"
输出："leetcode"
解释：先反转子字符串 "oc" ，接着反转 "etco" ，然后反转整个字符串。
示例 4：

输入：s = "a(bcdefghijkl(mno)p)q"
输出："apmnolkjihgfedcbq"
 

提示：

0 <= s.length <= 2000
s 中只有小写英文字母和括号
题目测试用例确保所有括号都是成对出现的

 */

/**
 * 我已开始的想法是递归的 reverse 字符串，这样的时间复杂度是 n^2，不太好
 * 有更优秀的解题思路，是使用逆序遍历代替 reverse，时间复杂度能够优化到 n
 *
 * @author chenyangbj01
 * @param {string} s
 * @return {*}  {string}
 */
function reverseParentheses(s: string): string {
    if (!s) {
        return null;
    }

    const res = [];
    const len = s.length;
    const signPairMap = {};

    const stack = [];
    // 获取括号匹配的 index 关系
    for (let i = 0; i < len; i++) {
        const char = s[i];

        if (char === "(") {
            stack.push(i);
        } else if (char === ")") {
            const pairIndex = stack.pop();

            signPairMap[i] = pairIndex;
            signPairMap[pairIndex] = i;
        }
    }

    // 按序遍历
    let step = 1;
    let i = 0;
    while (i < len) {
        const char = s[i];

        if (char === "(" || char === ")") {
            i = signPairMap[i];
            step = -step;
        } else {
            res.push(char);
        }

        i += step;
    }

    return res.join("");
}

console.log(reverseParentheses("(a(bc)d)"));
