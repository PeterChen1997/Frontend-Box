/**
 * 给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。

返回被除数 dividend 除以除数 divisor 得到的商。

整数除法的结果应当截去（truncate）其小数部分，例如：truncate(8.345) = 8 以及 truncate(-2.7335) = -2

 

示例 1:

输入: dividend = 10, divisor = 3
输出: 3
解释: 10/3 = truncate(3.33333..) = truncate(3) = 3
示例 2:

输入: dividend = 7, divisor = -3
输出: -2
解释: 7/-3 = truncate(-2.33333..) = -2
 

提示：

被除数和除数均为 32 位有符号整数。
除数不为 0。
假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−231,  231 − 1]。本题中，如果除法结果溢出，则返回 231 − 1。


来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/divide-two-integers
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

function quickMultiplication(a: bigint, b: bigint): bigint {
    let result = 0n;

    let tempA = a;
    let tempB = b;

    while (tempB > 0) {
        // a 的最低位为 0 的时候，等于和 0 相乘，结果为 0，这里就跳过了
        if (tempB & 1n) {
            result += tempA;
        }

        tempB >>= 1n;
        tempA += tempA;
    }

    return result;
}

function divide(dividend: number, divisor: number): number {
    if (dividend === -2147483648 && divisor === -1) return 2147483647;

    const isResultNegative =
        (dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0);

    let result = 0n;

    let x = BigInt(Math.abs(dividend));
    let y = BigInt(Math.abs(divisor));

    let leftPointer = 0n;
    let rightPointer = x;
    while (leftPointer < rightPointer) {
        let mid = (leftPointer + rightPointer + 1n) >> 1n;
        if (quickMultiplication(mid, y) > x) {
            rightPointer = mid - 1n;
        } else {
            leftPointer = mid;
        }
    }

    result = isResultNegative ? -1n * leftPointer : leftPointer;

    return Number(result);
}

console.log(divide(-1010369383, -2147483648));
