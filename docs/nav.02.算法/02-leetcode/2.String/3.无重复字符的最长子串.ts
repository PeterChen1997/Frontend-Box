/**
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:

输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

 */

// 经典滑动窗口
function lengthOfLongestSubstring(s: string): number {
    if (!s) {
        return 0;
    }

    // 声明窗口和变量
    let wStart = 0;
    let wEnd = wStart;
    let maxSubStringLen = 0;
    let counter = {};

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        // 滑动窗口
        wEnd++;

        // 新增变量 + 移出重复变量
        if (counter[char] === undefined) {
            counter[char] = 1;
        } else {
            // 重要：先 +1 再统计
            counter[char]++;
            while (counter[char] > 1) {
                counter[s[wStart]]--;
                wStart++;
            }
        }

        maxSubStringLen = Math.max(maxSubStringLen, wEnd - wStart);
    }

    return maxSubStringLen;
}

console.log(lengthOfLongestSubstring("abcadc"));
console.log(lengthOfLongestSubstring("bbbbb"));
