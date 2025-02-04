/**
 * 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素。元素的顺序可能发生改变。然后返回 nums 中与 val 不同的元素的数量。

假设 nums 中不等于 val 的元素数量为 k，要通过此题，您需要执行以下操作：

更改 nums 数组，使 nums 的前 k 个元素包含不等于 val 的元素。nums 的其余元素和 nums 的大小并不重要。
返回 k。
用户评测：

评测机将使用以下代码测试您的解决方案：

int[] nums = [...]; // 输入数组
int val = ...; // 要移除的值
int[] expectedNums = [...]; // 长度正确的预期答案。
                            // 它以不等于 val 的值排序。

int k = removeElement(nums, val); // 调用你的实现

assert k == expectedNums.length;
sort(nums, 0, k); // 排序 nums 的前 k 个元素
for (int i = 0; i < actualLength; i++) {
    assert nums[i] == expectedNums[i];
}
如果所有的断言都通过，你的解决方案将会 通过。

 

示例 1：

输入：nums = [3,2,2,3], val = 3
输出：2, nums = [2,2,_,_]
解释：你的函数函数应该返回 k = 2, 并且 nums 中的前两个元素均为 2。
你在返回的 k 个元素之外留下了什么并不重要（因此它们并不计入评测）。
示例 2：

输入：nums = [0,1,2,2,3,0,4,2], val = 2
输出：5, nums = [0,1,4,0,3,_,_,_]
解释：你的函数应该返回 k = 5，并且 nums 中的前五个元素为 0,0,1,3,4。
注意这五个元素可以任意顺序返回。
你在返回的 k 个元素之外留下了什么并不重要（因此它们并不计入评测）。
 

提示：

0 <= nums.length <= 100
0 <= nums[i] <= 50
0 <= val <= 100
 */

function swap(nums: number[], pointerOne: number, pointerTwo: number) {
  let temp = nums[pointerOne];
  nums[pointerOne] = nums[pointerTwo];
  nums[pointerTwo] = temp;
}

// 可以优化下，双指针不用都从当前元素开始，直接一个前一个后，然后相同的话交换即可
// 但是这么写坑有点多，边界条件太多了，还是单独看一个，然后从左边开始替换，这样的话，不用每次都遍历剩下的
// 这里判断条件写的不好，双指针移动的规则有点问题，思路是好的；每次都只移动一个指针比较好
// 双指针，把确定的元素都放到后面比较好，必要两边同时移动
// 这里有点坑，tail，得从 length 开始，不能从 length - 1 开始

// 为什么？因为在某些情况下，start可能需要超过tail才能确保所有元素都被正确处理
// 双指针，需要注意，指针判断不能用等于，需要让 start < tail

// 并且 tail 必须从 length 开始
// 特殊情况处理不当：
// 空数组
// 只有一个元素的数组
// 所有元素都等于 val 的情况

function removeElement(nums: number[], val: number): number {
  let tail = nums.length;
  let start = 0;
  while (start < tail) {
    if (nums[start] === val) {
      nums[start] = nums[tail - 1];
      tail--;
    } else {
      start++;
    }
  }

  nums = nums.slice(0, start);

  return start;
}

// 我打算通过双指针的方法来完成，首先遍历数组元素，找到第一个和target相同的值，然后开始找后一个和 target 不相同的值，都找到后，通过 temp 进行值的交换，continue；知道找不到下一个和target 不相同的值为止

// function removeElement(nums: number[], val: number): number {
//   if (!nums.length) {
//     return;
//   }

//   let counter = 0;
//   for (let i = 0; i < nums.length; i++) {
//     const element = nums[i];

//     if (element === val) {
//       let pointer = i + 1;

//       while (pointer < nums.length) {
//         const target = nums[pointer];
//         if (target !== val) {
//           swap(nums, i, pointer);
//           counter++;

//           break;
//         }
//         pointer++;
//       }

//       if (pointer === nums.length) {
//         break;
//       }
//     } else {
//       counter++;
//     }
//   }

//   nums = nums.slice(0, counter);
//   return counter;
// }

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
