/**
 * 输入一个字符串，打印出该字符串中字符的所有排列。

 

你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。

 

示例:

输入：s = "abc"
输出：["abc","acb","bac","bca","cab","cba"]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

function permuteRecursive(s: string, arr: string[], resSet: Set<string>) {
    if (!s) {
        resSet.add(arr.join(""));
        return;
    }

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        arr.push(char);

        let temp = s.split("");
        temp.splice(i, 1);
        permuteRecursive(temp.join(""), arr, resSet);
        arr.pop();
    }

    return;
}

function permutation(s: string): string[] {
    if (!s) {
        return [];
    }

    const resSet = new Set<string>();

    permuteRecursive(s, [], resSet);

    return [...resSet];
}

console.log(permutation("abb"));
