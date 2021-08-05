/**
 * 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。

请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

 

示例 1:

输入: [3,2,1,5,6,4] 和 k = 2
输出: 5
示例 2:

输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
输出: 4
 

提示：

1 <= k <= nums.length <= 104
-104 <= nums[i] <= 104

 */

// 第一次做这个题，对题理解有误，以为是 双指针，结果是「快排 、 堆排序」的考点

function partion(arr: number[], left: number, right: number) {
    const x = arr[right];
    let i = left - 1;

    for (let j = left; j < right; j++) {
        if (arr[j] <= x) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
    return i + 1;
}

function randomPartion(arr: number[], left: number, right: number) {
    // 0, 5 => 1, 5
    // 2, 4 => 3, 4 2, 3
    // (5 - 1) + 1
    // (max - min) + min
    // (right - (left + 1)) + left + 1 = right - left - 1
    // Math.floor(Math.random() * (max - min + 1)) + min
    const random = Math.floor(Math.random() * (right - left + 1) + left);

    // 将目标元素放到最后
    [arr[right], arr[random]] = [arr[random], arr[right]];

    return partion(arr, left, right);
}

function quickSelect(
    arr: number[],
    left: number,
    right: number,
    index: number
) {
    const q = randomPartion(arr, left, right);

    if (q === index) {
        return arr[q];
    } else if (q < index) {
        return quickSelect(arr, q + 1, right, index);
    }
    return quickSelect(arr, left, q - 1, index);
}

function findKthLargest(nums: number[], k: number): number {
    return quickSelect(nums, 0, nums.length - 1, nums.length - k);
}

console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
