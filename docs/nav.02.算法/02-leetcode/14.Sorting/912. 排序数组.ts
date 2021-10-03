function partion(nums: number[], index: number, start: number, end: number) {
    const targetVal = nums[index];

    // target 放在最后
    [nums[index], nums[end]] = [nums[end], nums[index]];

    let pointer = start;
    let temp = start;
    while (temp !== end) {
        if (nums[temp] <= targetVal) {
            // 交换至前半部分
            [nums[pointer], nums[temp]] = [nums[temp], nums[pointer]];
            pointer++;
        }

        temp++;
    }

    // target 放回中间
    [nums[end], nums[pointer]] = [nums[pointer], nums[end]];

    return pointer;
}

function quickSort(nums: number[], start: number, end: number) {
    if (start >= end) {
        return;
    }

    const targetIndex = start + Math.floor(Math.random() * (end - start + 1));

    const index = partion(nums, targetIndex, start, end);

    quickSort(nums, start, index - 1);
    quickSort(nums, index + 1, end);
}

function sortArray(nums: number[]): number[] {
    quickSort(nums, 0, nums.length - 1);
    return nums;
}

console.log(sortArray([5, 1, 1, 2, 0, 0]));
