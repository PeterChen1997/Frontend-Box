/**
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

此外，你可以假设该网格的四条边均被水包围。

 

示例 1：

输入：grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
输出：1
示例 2：

输入：grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
输出：3
 

提示：

m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] 的值为 '0' 或 '1'

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/number-of-islands
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

// 这题本来需要用并查集进行解法的，但是没太看明白，现用 DFS 接一下
function dfs(arr: string[][], i: number, j: number) {
    if (
        i < 0 ||
        j < 0 ||
        i >= arr.length ||
        j >= arr[0].length ||
        arr[i][j] === "0"
    ) {
        return;
    }

    arr[i][j] = "0";

    dfs(arr, i - 1, j);
    dfs(arr, i + 1, j);
    dfs(arr, i, j - 1);
    dfs(arr, i, j + 1);
}

function numIslands(grid: string[][]): number {
    let count = 0;

    let row = grid.length;
    let column = grid[0].length;

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (grid[i][j] === "1") {
                count++;
                dfs(grid, i, j);
            }
        }
    }

    return count;
}
