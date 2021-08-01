function getDistanceFromA(char: string) {
    return char.codePointAt(0) - "A".codePointAt(0);
}

function getTargetCharFormA(distance: number) {
    return String.fromCodePoint("A".codePointAt(0) + distance);
}

class Formula {
    val: number;

    // table location, weight
    cells: Map<string, number>;

    constructor(cells: Map<string, number>, val: number) {
        this.val = val;
        this.cells = cells;
    }
}

class Excel {
    stack: number[][] = [];
    formulas: Formula[][];

    constructor(height: number, width: string) {
        const row = height;
        const col = getDistanceFromA(width);

        this.formulas = new Array(row)
            .fill(null)
            .map((_) => new Array(col + 1).fill(null));
    }

    set(row: number, col: string, val: number) {
        const colVal = getDistanceFromA(col);
        // set val
        this.formulas[row - 1][colVal] = new Formula(new Map(), val);

        // 拓扑排序
        this.topologicalSort(row - 1, colVal);

        // 计算变更
        this.executeStack();
    }

    get(row: number, col: string) {
        const colVal = getDistanceFromA(col);

        return this.formulas[row - 1][colVal]?.val || 0;
    }

    sum(row: number, col: string, inputStr: string[]) {
        const cells = this.convert(inputStr);
        const colVal = getDistanceFromA(col);
        const sum = this.calSum(row - 1, colVal, cells);

        // 触发依赖值变更
        this.set(row, col, sum);

        // 保存值
        this.formulas[row - 1][colVal] = new Formula(cells, sum);

        return sum;
    }

    convert(inputStr: string[]) {
        const map = new Map<string, number>();

        for (let str of inputStr) {
            if (str.includes(":")) {
                const [startLoc, endLoc] = str.split(":");

                const startRowIndex = Number(startLoc.slice(1));
                const endRowIndex = Number(endLoc.slice(1));
                const startColIndex = Number(
                    getDistanceFromA(startLoc.slice(0, 1))
                );
                const endColIndex = Number(
                    getDistanceFromA(endLoc.slice(0, 1))
                );

                for (let i = startRowIndex; i <= endRowIndex; i++) {
                    for (let j = startColIndex; j <= endColIndex; j++) {
                        const targetChar = getTargetCharFormA(j);
                        map.set(
                            `${targetChar}${i}`,
                            (map.get(`${targetChar}${i}`) || 0) + 1
                        );
                    }
                }
            } else {
                map.set(str, (map.get(str) || 0) + 1);
            }
        }

        return map;
    }

    topologicalSort(row: number, col: number) {
        // 遍历表格，获取所有和此输入有依赖的下游节点
        for (let i = 0; i < this.formulas.length; i++) {
            for (let j = 0; j < this.formulas.length; j++) {
                const item = this.formulas[i][j];
                // 判断是否有 A1 这类依赖
                if (
                    item &&
                    item.cells.has(`${getTargetCharFormA(col)}${row + 1}`)
                ) {
                    // 如果确认它为输入的依赖，则需要寻找他的下游，继续入栈，等待更新
                    this.topologicalSort(i, j);
                }
            }
        }

        // push 到 stack 中等待计算
        this.stack.push([row, col]);
    }

    executeStack() {
        // 遍历拓扑排序后的所有节点
        while (this.stack.length) {
            const [row, col] = this.stack.pop();

            // 如果存在依赖则需要进行重新计算值
            if (this.formulas[row][col].cells.size > 0) {
                this.calSum(row, col, this.formulas[row][col].cells);
            }
        }
    }

    calSum(row: number, col: number, cells: Map<string, number>) {
        let sum: number = 0;

        // 遍历依赖项，按权重累加
        for (let loc of cells.keys()) {
            const x = Number(loc.slice(1)) - 1;
            const y = getDistanceFromA(loc.slice(0, 1));

            // 当前值
            const val = this.formulas[x][y] ? this.formulas[x][y].val : 0;
            // 获取权重
            const weight = cells.get(loc);

            sum += val * weight;
        }

        // 重设 form
        this.formulas[row][col] = new Formula(cells, sum);

        return sum;
    }
}

// ["Excel","get","set","get"]
// [[3,"C"],[1,"A"],[1,"A",1],[1,"A"]]
const excel: Excel = new Excel(3, "C");
excel.set(1, "A", 2);
excel.sum(3, "C", ["A1", "A1:B2"]); // return 4
excel.set(2, "B", 2);
console.log(excel.get(3, "C")); // 返回 6

console.log(excel);
