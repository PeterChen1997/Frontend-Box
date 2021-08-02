/**
 * 小扣在秋日市集选择了一家早餐摊位，一维整型数组 staple 中记录了每种主食的价格，一维整型数组 drinks 中记录了每种饮料的价格。小扣的计划选择一份主食和一款饮料，且花费不超过 x 元。请返回小扣共有多少种购买方案。

注意：答案需要以 1e9 + 7 (1000000007) 为底取模，如：计算初始结果为：1000000008，请返回 1

示例 1：

输入：staple = [10,20,5], drinks = [5,5,2], x = 15

输出：6

解释：小扣有 6 种购买方案，所选主食与所选饮料在数组中对应的下标分别是：
第 1 种方案：staple[0] + drinks[0] = 10 + 5 = 15；
第 2 种方案：staple[0] + drinks[1] = 10 + 5 = 15；
第 3 种方案：staple[0] + drinks[2] = 10 + 2 = 12；
第 4 种方案：staple[2] + drinks[0] = 5 + 5 = 10；
第 5 种方案：staple[2] + drinks[1] = 5 + 5 = 10；
第 6 种方案：staple[2] + drinks[2] = 5 + 2 = 7。

示例 2：

输入：staple = [2,1,1], drinks = [8,9,5,1], x = 9

输出：8

解释：小扣有 8 种购买方案，所选主食与所选饮料在数组中对应的下标分别是：
第 1 种方案：staple[0] + drinks[2] = 2 + 5 = 7；
第 2 种方案：staple[0] + drinks[3] = 2 + 1 = 3；
第 3 种方案：staple[1] + drinks[0] = 1 + 8 = 9；
第 4 种方案：staple[1] + drinks[2] = 1 + 5 = 6；
第 5 种方案：staple[1] + drinks[3] = 1 + 1 = 2；
第 6 种方案：staple[2] + drinks[0] = 1 + 8 = 9；
第 7 种方案：staple[2] + drinks[2] = 1 + 5 = 6；
第 8 种方案：staple[2] + drinks[3] = 1 + 1 = 2；

提示：

1 <= staple.length <= 10^5
1 <= drinks.length <= 10^5
1 <= staple[i],drinks[i] <= 10^5
1 <= x <= 2*10^5

 */

/**
 * 这是一道很精妙的题目，需要解决的是大量数据的比对问题，可以通过下面的方法解决
 * 1. 排序 + 二分查找
 * 2. 排序 + 双指针
 * 3. 树状数组
 *
 */

const ARRAY_LIMIT = 10000;

function bucketSort(array: number[]) {
    const bucket = new Array(ARRAY_LIMIT + 1).fill(0);
    const resArr = [];

    // 装桶
    for (let item of array) {
        if (!bucket[item]) {
            bucket[item] = 1;
        } else {
            bucket[item] += 1;
        }
    }

    // 提桶
    for (let i = 0; i < bucket.length; i++) {
        const item = bucket[i];

        if (item) {
            let temp = item;
            while (temp) {
                resArr.push(i);
                temp--;
            }
        }
    }

    return resArr;
}

// 找到比 targetVal 小的最后一个数的 index
function binarySearch(arr: number[], targetVal: number) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex <= rightIndex) {
        const targetIndex = leftIndex + ((rightIndex - leftIndex) >> 1);

        if (arr[targetIndex] <= targetVal) {
            leftIndex = targetIndex + 1;
        } else {
            rightIndex = targetIndex - 1;
        }
    }

    return rightIndex;
}

function checkArrPermutaions(
    loopArr: number[],
    matchArr: number[],
    target: number
) {
    let res = 0;

    for (let item of loopArr) {
        if (item > target) {
            continue;
        }

        const targetVal = target - item;
        const matchIndex = binarySearch(matchArr, targetVal);

        res += matchIndex + 1;
    }

    return res % (1e9 + 7);
}

function breakfastNumber(
    staple: number[],
    drinks: number[],
    x: number
): number {
    if (!staple?.length || !drinks?.length) {
        return null;
    }

    const arrA = bucketSort(staple);
    const arrB = bucketSort(drinks);

    if (arrA.length > arrB.length) {
        return checkArrPermutaions(arrB, arrA, x);
    }

    return checkArrPermutaions(arrB, arrA, x);
}

console.log(breakfastNumber([10, 20, 5], [5, 5, 2], 15));
