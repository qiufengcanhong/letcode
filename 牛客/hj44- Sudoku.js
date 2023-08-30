const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // 用数组存放数独，从左到右从上到下遍历数组
    // 因为涉及到同一个九宫格内有多个0的情况，需要用DFS回溯找到解
    //检测到值为0的元素，用1-9替代该元素，检测元素所行，所在列，所在九宫格中有无相等的数字

    //输入9*9数组
    let arr = Array(9)
        .fill(0)
        .map((e) => Array(9).fill(0).map(Number));
    let line;
    let tempArr = [];
    while ((line = await readline())) {
        tempArr.push(line.split(" ").map(Number));
    }
    //tempArr.forEach(e=>console.log(e.join(" ")))
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            arr[i][j] = tempArr[i][j];
        }
    }

    //arr.forEach(e=>console.log(e.join(" ")))

    // 检验函数
    function check(row, col, val) {
        //所在行有相同数字，返回false
        for (let i = 0; i < 9; i++) {
            if (arr[row][i] == val) return false;
        }
        //所在列有相同数字，返回false
        for (let j = 0; j < 9; j++) {
            if (arr[j][col] == val) return false;
        }
        //所在九宫格有相同数字
        let rowMax = ~~(row / 3) * 3 + 3;
        let colMax = ~~(col / 3) * 3 + 3;
        for (let k = rowMax - 3; k < rowMax; k++) {
            for (let l = colMax - 3; l < colMax; l++) {
                if (arr[k][l] == val) return false;
            }
        }
        return true;
    }
    //console.log(check(0,0,1))
    //console.log(check(0,0,5))

    //遍历数组
    let finishFlag = false;
    let outputArr = [];
    // DFS算法遍历所有可能

    function dfs(y, x) {
        //行末换到下一行
        if (x == 9) {
            y++;
            x = 0;
        }
        //设置边界条件
        if (y == 9) {
            finishFlag = true;
            //深拷贝
            outputArr = JSON.parse(JSON.stringify(arr));
            return;
        }

        if (arr[y][x] == 0) {
            for (let n = 1; n <= 9; n++) {
                if (check(y, x, n)) {
                    arr[y][x] = n;
                    dfs(y, x + 1);
                    //回溯,
                    if (finishFlag) return; //回溯剪枝
                    arr[y][x] = 0;
                }
            }
            return;
        } else {
            dfs(y, x + 1);
        }
    }

    dfs(0, 0);

    outputArr.forEach((e) => console.log(e.join(" ")));
})();
