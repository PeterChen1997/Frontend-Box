/* 


88. 合并两个有序数组

给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。

请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。

注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。

 

示例 1：

输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
输出：[1,2,2,3,5,6]
解释：需要合并 [1,2,3] 和 [2,5,6] 。
合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。
示例 2：

输入：nums1 = [1], m = 1, nums2 = [], n = 0
输出：[1]
解释：需要合并 [1] 和 [] 。
合并结果是 [1] 。
示例 3：

输入：nums1 = [0], m = 0, nums2 = [1], n = 1
输出：[1]
解释：需要合并的数组是 [] 和 [1] 。
合并结果是 [1] 。
注意，因为 m = 0 ，所以 nums1 中没有元素。nums1 中仅存的 0 仅仅是为了确保合并结果可以顺利存放到 nums1 中。
 

提示：

nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= nums1[i], nums2[j] <= 109
 

进阶：你可以设计实现一个时间复杂度为 O(m + n) 的算法解决此问题吗？

*/

/**
 Do not return anything, modify nums1 in-place instead.
 */

// 方法nice：使用尾指针，从尾巴开始合并
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let p1 = m - 1;
  let p2 = n - 1;
  let tail = m + n - 1;

  let cur;

  while (p1 >= 0 || p2 >= 0) {
    if (p1 === -1) {
      cur = nums2[p2];
      p2--;
    } else if (p2 === -1) {
      cur = nums1[p1];
      p1--;
    } else if (nums1[p1] > nums2[p2]) {
      cur = nums1[p1];
      p1--;
    } else {
      cur = nums2[p2];
      p2--;
    }

    nums1[tail] = cur;
    tail--;
  }
}

// 一开始的思路，空间复杂度 1 但是时间复杂度 MN，后续考虑用最佳方案优化

// let movedCount = 0;

// function moveToEnd(nums: number[], index: number) {
//   for (let i = nums.length - 2; i >= index; i--) {
//     nums[i + 1] = nums[i];
//   }
// }

// function merge(nums1: number[], m: number, nums2: number[], n: number): void {
//   let nums2Pointer = 0;
//   for (let i = 0; i < m + n; i++) {
//     let nums1Temp = nums1[i];
//     let nums2Temp = nums2[nums2Pointer];

//     if (nums2Pointer >= n) {
//       break;
//     }

//     if (nums1[i] === 0 && i + 1 >= m + movedCount) {
//       nums1[i] = nums2[nums2Pointer];
//       nums2Pointer++;
//       continue;
//     }

//     if (nums1[i] < nums2[nums2Pointer]) {
//       continue;
//     }

//     moveToEnd(nums1, i);
//     movedCount++;

//     nums1[i] = nums2[nums2Pointer];
//     nums2Pointer++;
//   }
// }

// console.log(merge([1, 2, 3, 0, 0, 0], 3, [4, 5, 6], 3));
