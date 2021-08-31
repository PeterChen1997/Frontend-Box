/**
 * 给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。

整数除法仅保留整数部分。

 

示例 1：

输入：s = "3+2*2"
输出：7
示例 2：

输入：s = " 3/2 "
输出：1
示例 3：

输入：s = " 3+5 / 2 "
输出：5
 

提示：

1 <= s.length <= 3 * 105
s 由整数和算符 ('+', '-', '*', '/') 组成，中间由一些空格隔开
s 表示一个 有效表达式
表达式中的所有整数都是非负整数，且在范围 [0, 231 - 1] 内
题目数据保证答案是一个 32-bit 整数

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/basic-calculator-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

// 这是一道比较经典的计算器题目，这是原版简化后的题目，不考虑括号等复杂计算，所以用一个简单的栈计算即可
function isDigit(s: string) {
    return /[0-9]/.test(s);
}
function calculate(s: string): number {
    const stack = [];
    let num = 0;

    // hack
    let preOperation = "+";
    s += "+0";

    for (let char of s) {
        if (char === " ") {
            continue;
        }

        if (isDigit(char)) {
            num = num * 10 + Number(char);
        } else {
            switch (preOperation) {
                case "+":
                    stack.push(num);
                    break;
                case "-":
                    stack.push(-1 * num);
                    break;
                case "*":
                    stack.push(stack.pop() * num);
                    break;
                case "/":
                    const val = stack.pop();
                    val > 0
                        ? stack.push(Math.floor(val / num))
                        : stack.push(Math.ceil(val / num));
                    break;
            }

            preOperation = char;
            num = 0;
        }
    }

    return stack.reduce((a, b) => a + b, 0);
}

console.log(calculate("14-3/2"));
