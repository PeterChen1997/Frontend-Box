/**
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。


示例：

输入：nums = [-1,2,1,-4], target = 1
输出：2
解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
 

提示：

3 <= nums.length <= 10^3
-10^3 <= nums[i] <= 10^3
-10^4 <= target <= 10^4


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/3sum-closest
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 这道题和 leetcode 15 很像，基本是一样的
 *
 * a + b + c = xxx
 *
 * 先看一个，在看剩下两个
 *
 * @param nums
 * @param target
 */
function threeSumClosest(nums: number[], target: number): number {
    if (!nums?.length) {
        return null;
    }

    let closestSum: number = Number.MAX_SAFE_INTEGER;

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        // 相同值则跳过
        if (i > 0 && nums[i - 1] === nums[i]) {
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum > target) {
                right--;
            } else if (sum < target) {
                left++;
            } else {
                closestSum = sum;
                break;
            }

            if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
                closestSum = sum;
            }
        }
    }

    return closestSum;
}

console.log(threeSumClosest([-1, 2, 1, -4], 1));
