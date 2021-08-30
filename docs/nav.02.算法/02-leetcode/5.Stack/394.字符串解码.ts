/**
 * 给定一个经过编码的字符串，返回它解码后的字符串。

编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。

你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。

 

示例 1：

输入：s = "3[a]2[bc]"
输出："aaabcbc"
示例 2：

输入：s = "3[a2[c]]"
输出："accaccacc"
示例 3：

输入：s = "2[abc]3[cd]ef"
输出："abcabccdcdcdef"
示例 4：

输入：s = "abc3[cd]xyz"
输出："abccdcdcdxyz"

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/decode-string
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

// 使用栈记录入栈内容，不断入栈出栈直到退出

function isLetter(char: string) {
    return /[a-z]/i.test(char);
}

function isNumber(char: string) {
    return /[0-9]/.test(char);
}

function decodeString(s: string): string {
    const stack = [];

    for (let char of s) {
        if (char !== "]") {
            stack.push(char);
        } else {
            // 获取字母串
            let letterStr = "";
            while (stack.length && isLetter(stack[stack.length - 1])) {
                const letterChar = stack.pop();
                letterStr = letterChar + letterStr;
            }

            // 去除 [ 括号
            stack.pop();

            // 获取倍数
            let countStr = "";
            while (stack.length && isNumber(stack[stack.length - 1])) {
                const numberItem = stack.pop();
                countStr = numberItem + countStr;
            }

            // 塞回栈内
            let count = parseInt(countStr, 10);
            while (count > 0) {
                stack.push(letterStr);
                count--;
            }
        }
    }

    // 清空栈内字符
    let res = "";
    while (stack.length) {
        res = stack.pop() + res;
    }

    return res;
}

console.log(decodeString("3[a]2[bc]"));
