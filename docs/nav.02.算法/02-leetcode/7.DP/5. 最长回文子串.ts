/**
 * 给你一个字符串 s，找到 s 中最长的回文子串。

 

示例 1：

输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。
示例 2：

输入：s = "cbbd"
输出："bb"
示例 3：

输入：s = "a"
输出："a"
示例 4：

输入：s = "ac"
输出："a"
 

提示：

1 <= s.length <= 1000
s 仅由数字和英文字母（大写和/或小写）组成

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-palindromic-substring
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

function longestPalindrome(s: string): string {
    const len = s.length;
    if (len < 2) {
        return s;
    }

    let maxLen = 1;
    let begin = 0;

    // init dp arr
    const dpArr = new Array(len)
        .fill(null)
        .map((item) => new Array(len).fill(false));

    // init val
    for (let i = 0; i < len; i++) {
        dpArr[i][i] = true;
    }

    // start cal
    for (let j = 1; j < len; j++) {
        for (let i = 0; i < j; i++) {
            const curStrLen = j - i + 1;

            if (s[i] !== s[j]) {
                dpArr[i][j] = false;
            } else {
                // 特殊情况判断
                if (curStrLen <= 3) {
                    dpArr[i][j] = true;
                } else {
                    // 往后递推
                    dpArr[i][j] = dpArr[i + 1][j - 1];
                }
            }

            if (dpArr[i][j] && curStrLen > maxLen) {
                maxLen = curStrLen;
                begin = i;
            }
        }
    }

    return s.slice(begin, begin + maxLen);
}

console.log(longestPalindrome("abcba"));
