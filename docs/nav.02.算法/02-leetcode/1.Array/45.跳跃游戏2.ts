/**
 * 给你一个非负整数数组 nums ，你最初位于数组的第一个位置。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

你的目标是使用最少的跳跃次数到达数组的最后一个位置。

假设你总是可以到达数组的最后一个位置。

 

示例 1:

输入: nums = [2,3,1,1,4]
输出: 2
解释: 跳到最后一个位置的最小跳跃数是 2。
     从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
示例 2:

输入: nums = [2,3,0,1,4]
输出: 2
 

提示:

1 <= nums.length <= 104
0 <= nums[i] <= 1000
 */

/**
 * 思路一：贪心算法，只选可选范围内跳跃最远的元素
 * 思路二：反向贪心，从最后一个元素递推，找到最左的元素，直到开头
 */
function jump(nums: number[]): number {
    if (nums?.length <= 1) {
        return 0;
    }

    let times = 0;
    let maxPos = 0;
    let end = 0;
    // 最后一个目的地不用循环
    for (let i = 0; i < nums.length - 1; i++) {
        // 找到在范围中能跳到最远的地方
        maxPos = Math.max(maxPos, nums[i] + i);
        // 到边界更新
        if (i === end) {
            end = maxPos;
            times++;
        }
    }

    return times;
}

console.log(jump([1, 2, 0, 1]));
