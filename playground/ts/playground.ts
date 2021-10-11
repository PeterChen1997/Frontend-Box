function partion(nums: number[], start: number, end: number): number {
    // 获取随机节点 1, 3 => 3 => 0, 2.x => 0, 2 => 1, 3
    let pointerIndex: number =
        Math.floor(Math.random() * (end - start + 1)) + start;
    let targetVal = nums[pointerIndex];

    // 交换到序列尾部 index: 1 => 1,1,3,2 => 1, 2, 3, 1
    [nums[end], nums[pointerIndex]] = [nums[pointerIndex], nums[end]];

    // 进行排序交换 1, 2, 3, 1 => 1, 3, 2, 1 => 1, 1, 2, 3
    let targetIndex = start;
    let temp = start;
    // let endIndex = end - 1; // remove
    while (temp !== end) {
        if (nums[temp] <= targetVal) {
            // 交换元素至前半部分排序后的元素
            [nums[targetIndex], nums[temp]] = [nums[temp], nums[targetIndex]];

            targetIndex++;
        }
        temp++;
    }

    // 将元素返回到原始位置
    [nums[end], nums[targetIndex]] = [nums[targetIndex], nums[end]];

    return targetIndex;
}

function quickRecursive(nums: number[], start: number, end: number) {
    if (start >= end) {
        return;
    }

    const pointer = partion(nums, start, end);

    quickRecursive(nums, start, pointer - 1);
    quickRecursive(nums, pointer + 1, end);
}

function quickSort(nums: number[]) {
    quickRecursive(nums, 0, nums.length - 1);
    return nums;
}

console.log(quickSort([1, 3, 2, 1, 1, 7]));
console.log(quickSort([1, -2, 1, 3, 4, 6]));
