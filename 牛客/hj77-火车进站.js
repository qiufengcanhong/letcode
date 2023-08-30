// 给定一个正整数N代表火车数量，0<N<10，接下来输入火车入站的序列，一共N辆火车，每辆火车以数字1-9编号，火车站只有一个方向进出，同时停靠在火车站的列车中，只有后进站的出站了，先进站的才能出站。
// 要求输出所有火车出站的方案，以字典序排序输出。
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    while ((line = await readline())) {
        var n = parseInt(line);
        var stand = (await readline()).split(" "); // 未进站台
        var inOrder = []; // 站中
        var outOrder = []; // 离开站台
        var res = [];
        backtack(stand, n, inOrder, outOrder);

        res.sort((a, b) => {
            return a - b;
        });
        res.forEach((item) => {
            console.log(item.toString().split("").join(" "));
        });
    }

    function backtack(stand, n, inOrder, outOrder) {
        if (outOrder.length == n) {
            res.push(Number(outOrder.join("")));
        }
        if (stand.length == n) {
            inOrder.push(stand.shift());
            backtack(stand, n, inOrder, outOrder);
            return;
        }
        if (stand.length > 0) {
            var cur = stand.shift();
            inOrder.push(cur);
            backtack(stand, n, inOrder, outOrder);
            inOrder.pop();
            stand.unshift(cur);
        }
        if (inOrder.length > 0) {
            var cur = inOrder.pop();
            outOrder.push(cur);
            backtack(stand, n, inOrder, outOrder);
            outOrder.pop();
            inOrder.push(cur);
        }
    }
})();
