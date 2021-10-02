function selectionSort(arr: number[]): number[] {
    let sortedCount = 0;
    for (let i = sortedCount; i < arr.length; i++) {
        // 获取最小元素
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            const val = arr[j];
            if (val < arr[minIndex]) {
                minIndex = j;
            }
        }

        // 原地排序
        const minVal = arr[minIndex];
        while (minIndex > sortedCount) {
            arr[minIndex] = arr[minIndex - 1];
            minIndex--;
        }
        arr[sortedCount] = minVal;
        sortedCount++;
    }

    return arr;
}

console.log(selectionSort([2, 1, 3, 4, 1]));

// 2 1 3 4 1
// 1 1 2 3 4
