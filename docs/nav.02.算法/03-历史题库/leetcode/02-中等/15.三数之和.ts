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


来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/3sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

// a + b = -c
function threeSum(nums: number[]): number[][] {
    const sortedNums = [...nums].sort((a, b) => a - b);
    const resultSet = new Set<string>();

    for (let i = 0; i < sortedNums.length; i++) {
        const target = sortedNums[i];

        // target 是求和的结果的负值，如果为正数则不用继续了
        if (target > 0) {
            break;
        }

        // 跳过重复元素
        if (i > 0 && target === sortedNums[i - 1]) {
            continue;
        }

        // 通过双指针找到目标元素
        let leftPointer = i + 1;
        let rightPointer = sortedNums.length - 1;
        while (leftPointer < rightPointer) {
            const sum = sortedNums[leftPointer] + sortedNums[rightPointer];

            if (sum === -target) {
                resultSet.add(
                    `${target},${sortedNums[leftPointer]},${sortedNums[rightPointer]}`
                );
                leftPointer++;
                rightPointer--;
            } else if (sum < -target) {
                leftPointer++;
            } else {
                rightPointer--;
            }
        }
    }
    return [...resultSet].map((item) =>
        item.split(",").map((num) => parseInt(num, 10))
    );
}
