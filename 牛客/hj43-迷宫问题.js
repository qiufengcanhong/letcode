// 定义一个二维数组 N*M ，如 5 × 5 数组下所示：


// int maze[5][5] = {
// 0, 1, 0, 0, 0,
// 0, 1, 1, 1, 0,
// 0, 0, 0, 0, 0,
// 0, 1, 1, 1, 0,
// 0, 0, 0, 1, 0,
// };


// 它表示一个迷宫，其中的1表示墙壁，0表示可以走的路，只能横着走或竖着走，不能斜着走，要求编程序找出从左上角到右下角的路线。入口点为[0,0],既第一格是可以走的路。

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    //此为 DFS 深度搜索，搞了一下午，上网看了视频，还有广度搜素
    while ((line = await readline())) {
        let [n, m] = line.split(" ").map((x) => parseInt(x));
        let test = Array(n)
            .fill(0)
            .map((x) => Array(m).fill(0)); // 0表示没走过， 1表示已走
        let arr = []; // 0 表示空地，1表示阻挡
        let arrX = [1, 0, -1, 0]; //下一步x对应的右、下、左、上
        let arrY = [0, 1, 0, -1]; //下一步y对应的右、下、左、上
        let target = [];
        for (let i = 0; i < n; i++) {
            arr.push(
                (await readline())
                    .split(" ")
                    .map((x) => parseInt(x))
            );
        }
        dfs(0, 0, [{ x: 0, y: 0 }]);
        for (let item of target) {
            console.log(`(${item.y},${item.x})`);
        }
        function dfs(x, y, points) {
            points = JSON.parse(JSON.stringify(points)); //必须得深拷贝否则会将所有走过的点都记录
            if (x == m - 1 && y == n - 1) {
                return (target = points); //如果有多条路径，此处可以作判断将points最短的赋值给target
            }
            for (let key = 0; key <= 3; key++) {
                let pointX = x + arrX[key];
                let pointY = y + arrY[key];
                if (pointX >= 0 && pointX < m && pointY >= 0 && pointY < n) {
                    if (arr[pointY][pointX] == 0 && test[pointY][pointX] == 0) {
                        test[pointY][pointX] = 1;
                        points.push({ x: pointX, y: pointY });
                        dfs(pointX, pointY, points);
                        points.pop(); // 回退
                        test[pointY][pointX] = 0; //还原状态
                    }
                }
            }
            return;
        }
    }
})();
