/**
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。

 

示例 1：

输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
示例 2：

输入：nums = []
输出：[]
示例 3：

输入：nums = [0]
输出：[]
 

提示：

0 <= nums.length <= 3000
-105 <= nums[i] <= 105

 */

// 难点在于如何进行结果去重，这里需要判断是否和前一个元素相同
// 为了避免重复，需要排序，之后进行双指针的匹配
function threeSum(nums: number[]): number[][] {
    if (nums?.length < 3) {
        return [];
    }

    nums.sort((a, b) => a - b);

    const res = [];

    for (let i = 0; i < nums.length; i++) {
        const item = nums[i];

        // 重复元素跳过
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        // > 0元素不可能存在符合条件的值
        if (item > 0) {
            break;
        }

        const target = -1 * item;

        // 双指针遍历
        let right = nums.length - 1;
        let left = i + 1;
        while (left < right) {
            if (left > i + 1 && nums[left] === nums[left - 1]) {
                left++;
                continue;
            }

            let sum = nums[left] + nums[right];
            if (sum === target) {
                res.push([nums[i], nums[left], nums[right]]);
                left++;
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return res;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
