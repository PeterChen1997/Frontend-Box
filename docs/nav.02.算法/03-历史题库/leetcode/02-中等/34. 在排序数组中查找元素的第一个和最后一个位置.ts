/**
 * 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 target，返回 [-1, -1]。

你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。

 

示例 1：

输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]
示例 2：

输入：nums = [5,7,7,8,8,10], target = 6
输出：[-1,-1]
示例 3：

输入：nums = [], target = 0
输出：[-1,-1]
 

提示：

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums 是一个非递减数组
-109 <= target <= 109


来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

const NOT_FOUND = -2;

function getLeftBorder(inputArray: number[], targetVal: number): number {
    let leftBorder = NOT_FOUND;
    let leftPointer = 0;
    let rightPointer = inputArray.length - 1;

    while (leftPointer <= rightPointer) {
        const targetIndex = leftPointer + ((rightPointer - leftPointer) >> 1);
        const target = inputArray[targetIndex];

        // 一直找到小于这个 target 的元素
        if (target >= targetVal) {
            rightPointer = targetIndex - 1;
            leftBorder = rightPointer;
        } else {
            leftPointer = targetIndex + 1;
        }
    }

    return leftBorder;
}

function getRightBorder(inputArray: number[], targetVal: number): number {
    let rightBorder = NOT_FOUND;
    let leftPointer = 0;
    let rightPointer = inputArray.length - 1;

    while (leftPointer <= rightPointer) {
        const targetIndex = leftPointer + ((rightPointer - leftPointer) >> 1);
        const target = inputArray[targetIndex];

        // 一直找到大于这个 target 的元素
        if (target <= targetVal) {
            leftPointer = targetIndex + 1;
            rightBorder = leftPointer;
        } else {
            rightPointer = targetIndex - 1;
        }
    }

    return rightBorder;
}

function searchRange(nums: number[], target: number): number[] {
    const leftBorder = getLeftBorder(nums, target);
    const rightBorder = getRightBorder(nums, target);

    // 一共有三种条件
    // 条件一：这个值不在这个区间内，比最大值大或者比最小值小
    if (leftBorder === NOT_FOUND || rightBorder === NOT_FOUND) {
        return [-1, -1];
    }

    // 条件三：这个值在区间内，而且等于其中具体的值
    if (rightBorder - leftBorder > 1) {
        return [leftBorder + 1, rightBorder - 1];
    }

    // 条件二：这个值在区间内，但是不等于其中具体的值
    return [-1, -1];
}

console.log(searchRange([1], 1));
