/**
 * 给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：

0 <= a, b, c, d < n
a、b、c 和 d 互不相同
nums[a] + nums[b] + nums[c] + nums[d] == target
你可以按 任意顺序 返回答案 。

 

示例 1：

输入：nums = [1,0,-1,0,-2,2], target = 0
输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
示例 2：

输入：nums = [2,2,2,2,2], target = 8
输出：[[2,2,2,2]]
 

提示：

1 <= nums.length <= 200
-109 <= nums[i] <= 109
-109 <= target <= 109


来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/4sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

// 思路参考三数之和，多加一个指针，用于控制变量，遍历逻辑基本相同
function fourSum(nums: number[], target: number): number[][] {
    if (nums?.length <= 3) {
        return [];
    }

    const sortedArray = nums.sort((a, b) => a - b);
    const resultSet = new Set<string>();

    // let pointerOne = 0;
    // let pointerTwo = 1;
    // let pointerThree = 2;
    // let pointerFour = nums.length - 1;

    for (let i = 0; i < nums.length - 3; i++) {
        for (let j = 1; j < nums.length; j++) {
            const target = nums[j];

            if (target > 0) {
                break;
            }

            if (j > 2 && target === nums[j - 1]) {
                continue;
            }

            let leftPointer = j + 1;
            let rightPointer = nums.length - 1;
            while (leftPointer < rightPointer) {
                const sum = nums[leftPointer] + nums[rightPointer];

                if (sum === target) {
                }
            }
        }
    }

    return [...resultSet].map((result) => {
        return result.split(",").map(parseInt);
    });
}
