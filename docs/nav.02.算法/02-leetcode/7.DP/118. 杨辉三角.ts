/**
 * 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。

在「杨辉三角」中，每个数是它左上方和右上方的数的和。



 

示例 1:

输入: numRows = 5
输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
示例 2:

输入: numRows = 1
输出: [[1]]
 

提示:

1 <= numRows <= 30

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/pascals-triangle
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

function generate(numRows: number): number[][] {
    const res = [];
    for (let i = 0; i < numRows; i++) {
        const tempRes = new Array(i + 1).fill(1);
        for (let j = 1; j < i; j++) {
            tempRes[j] = res[i - 1][j - 1] + res[i - 1][j];
        }
        res.push(tempRes);
    }

    return res;
}
