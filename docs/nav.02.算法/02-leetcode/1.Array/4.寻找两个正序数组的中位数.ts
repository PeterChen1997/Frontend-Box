/**
 * 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。

 

示例 1：

输入：nums1 = [1,3], nums2 = [2]
输出：2.00000
解释：合并数组 = [1,2,3] ，中位数 2
示例 2：

输入：nums1 = [1,2], nums2 = [3,4]
输出：2.50000
解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
示例 3：

输入：nums1 = [0,0], nums2 = [0,0]
输出：0.00000
示例 4：

输入：nums1 = [], nums2 = [1]
输出：1.00000
示例 5：

输入：nums1 = [2], nums2 = []
输出：2.00000
 */

// 难点：使用二分查找优化算法时间复杂度至 logN，这个写不出来 点了

function findMid(
    nums1: number[],
    nums2: number[],
    needFindTwoNums: boolean,
    midPos: number
) {
    let pointer1 = 0;
    let pointer2 = 0;

    let moveStep = midPos;
    let previousVal, lastVal;

    // 一个是 index 一个是 pos
    while (moveStep >= 0) {
        previousVal = lastVal;

        if (
            pointer1 < nums1.length &&
            (nums1[pointer1] < nums2[pointer2] || pointer2 === nums2.length)
        ) {
            lastVal = nums1[pointer1++];
        } else {
            lastVal = nums2[pointer2++];
        }

        moveStep--;
    }

    if (needFindTwoNums) {
        return (previousVal + lastVal) / 2;
    }

    return lastVal;
}

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    if (!nums1?.length && !nums2.length) {
        return null;
    }

    let totalLength = nums1.length + nums2.length;

    // 长度为偶数
    if (totalLength / 2 === totalLength >> 1) {
        return findMid(nums1, nums2, true, totalLength >> 1);
    }
    return findMid(nums1, nums2, false, totalLength >> 1);
}

console.log(findMedianSortedArrays([2], []));
