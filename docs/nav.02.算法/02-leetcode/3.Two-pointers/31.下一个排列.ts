/**
 * 实现获取 下一个排列 的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列（即，组合出下一个更大的整数）。

如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。

必须 原地 修改，只允许使用额外常数空间。

 

示例 1：

输入：nums = [1,2,3]
输出：[1,3,2]
示例 2：

输入：nums = [3,2,1]
输出：[1,2,3]
示例 3：

输入：nums = [1,1,5]
输出：[1,5,1]
示例 4：

输入：nums = [1]
输出：[1]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/next-permutation
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 Do not return anything, modify nums in-place instead.
 */

/**
 * 一开始的想法是从后往前找到两个可交换的值，让结果比现在大，找不到就排序
 *
 * 这个没法找到最优解，并且交换的时间复杂度过高
 *
 * 最优解：找到较大值和较小值互换后，重新排序较小值的右半段；找不到的话直接重排序右半段
 * 窍门：重排序的时候直接反转即可
 *
 * @param nums
 * @returns
 */

function reverseArr(startIndex: number, endIndex: number, arr: any[]) {
    let pointerOne = startIndex;
    let pointerTwo = endIndex;
    while (pointerOne < pointerTwo) {
        [arr[pointerOne], arr[pointerTwo]] = [arr[pointerTwo], arr[pointerOne]];
        pointerTwo--;
        pointerOne++;
    }
}

function nextPermutation(nums: number[]): void {
    if (!nums?.length) {
        return;
    }

    let len = nums.length;

    // find smaller val
    let temp = len - 1;
    while (temp > 0) {
        if (nums[temp - 1] < nums[temp]) {
            break;
        }
        temp--;
    }

    let smallerValIndex = temp === 0 ? -1 : temp - 1;

    // 如果找不到，则说明数组已经最大了，反转即可
    if (smallerValIndex === -1) {
        reverseArr(0, len - 1, nums);
        return;
    }

    // find bigger val
    let temp2 = len - 1;
    while (temp2 > smallerValIndex) {
        if (nums[temp2] > nums[smallerValIndex]) {
            break;
        }
        temp2--;
    }
    let biggerValIndex = temp2;

    // swap
    [nums[smallerValIndex], nums[biggerValIndex]] = [
        nums[biggerValIndex],
        nums[smallerValIndex],
    ];

    // reverse the right part
    reverseArr(smallerValIndex + 1, len - 1, nums);
}

let a = [1, 2, 3];
nextPermutation(a);
console.log(a);
