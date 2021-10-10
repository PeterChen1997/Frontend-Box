/**
 * 给定一个未排序的整数数组，找到最长递增子序列的个数。

示例 1:

输入: [1,3,5,4,7]
输出: 2
解释: 有两个最长递增子序列，分别是 [1, 3, 4, 7] 和[1, 3, 5, 7]。
示例 2:

输入: [2,2,2,2,2]
输出: 5
解释: 最长递增子序列的长度是1，并且存在5个子序列的长度为1，因此输出5。
注意: 给定的数组长度不超过 2000 并且结果一定是32位有符号整数。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/number-of-longest-increasing-subsequence
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

function findNumberOfLIS(nums: number[]): number {
    const dp = new Array(nums.length).fill(1);
    const cnt = [...dp];

    let maxCnt = 1;
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                // 当值差 1 时，代表有前面有 j 已经更新了 dp[i] 的值，需要将 count 相加
                if (dp[i] === dp[j] + 1) {
                    cnt[i] += cnt[j];
                } else if (dp[i] < dp[j] + 1) {
                    cnt[i] = cnt[j];
                }
                dp[i] = Math.max(dp[j] + 1, dp[i]);
            }
        }

        maxCnt = Math.max(maxCnt, dp[i]);
    }

    let ans = 0;
    for (let i = 0; i < nums.length; i++) {
        if (dp[i] === maxCnt) ans += cnt[i];
    }
    return ans;
}

console.log(findNumberOfLIS([1, 2]));
