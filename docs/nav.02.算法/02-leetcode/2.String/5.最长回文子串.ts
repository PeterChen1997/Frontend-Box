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

 */

// 经典动态规划
// p(i, j) = p(i - 1, j + 1) ^ Si === Sj
function longestPalindrome(s: string): string {
    if (!s) {
        return null;
    }

    const len = s.length;
    if (len < 2) {
        return s;
    }

    let resLen = 1;
    let resStartIndex = 0;

    const dp = new Array(s.length)
        .fill(null)
        .map((_) => new Array(s.length).fill(false));

    // 默认自身为回文
    for (let i = 0; i < len; i++) {
        dp[i][i] = true;
    }

    // 最大长度遍历
    for (let maxLen = 2; maxLen <= len; maxLen++) {
        // 枚举左边界
        for (let i = 0; i < len; i++) {
            // len = j - i + 1
            let j = maxLen + i - 1;

            if (j >= len) {
                break;
            }

            if (s[i] !== s[j]) {
                dp[i][j] = false;
            } else {
                // len 为 2 或者 3
                if (maxLen <= 3) {
                    dp[i][j] = true;
                } else {
                    dp[i][j] = dp[i + 1][j - 1];
                }
            }

            if (dp[i][j] && maxLen > resLen) {
                resLen = maxLen;
                resStartIndex = i;
            }
        }
    }

    return s.substr(resStartIndex, resLen);
}

console.log(longestPalindrome("ab"));
