/**
 * 给你一个整数数组 nums ，数组中共有 n 个整数。132 模式的子序列 由三个整数 nums[i]、nums[j] 和 nums[k] 组成，并同时满足：i < j < k 和 nums[i] < nums[k] < nums[j] 。

如果 nums 中存在 132 模式的子序列 ，返回 true ；否则，返回 false 。

 

示例 1：

输入：nums = [1,2,3,4]
输出：false
解释：序列中不存在 132 模式的子序列。
示例 2：

输入：nums = [3,1,4,2]
输出：true
解释：序列中有 1 个 132 模式的子序列： [1, 4, 2] 。
示例 3：

输入：nums = [-1,3,2,0]
输出：true
解释：序列中有 3 个 132 模式的的子序列：[-1, 3, 2]、[-1, 3, 0] 和 [-1, 2, 0] 。
 

提示：

n == nums.length
1 <= n <= 2 * 105
-109 <= nums[i] <= 109

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/132-pattern
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

// 这道题比较难，需要找到满足 132 的元素，下标命名为 i j k
// 可以从后往前遍历 i，使用栈维护 j，pop 出来的元素使 k
function find132pattern(nums: number[]): boolean {
    let len = nums.length;
    if (len < 3) {
        return false;
    }

    let queue = [];
    let k = Number.MIN_SAFE_INTEGER;

    // 遍历 i
    for (let i = len - 1; i >= 0; i--) {
        if (nums[i] < k) {
            return true;
        }

        while (queue.length && queue[queue.length - 1] < nums[i]) {
            // 维护次大值 k
            k = Math.max(queue.pop(), k);
        }

        // 栈里放最大值 j
        queue.push(nums[i]);
    }

    return false;
}

console.log(find132pattern([-1, 3, 2, 0]));
